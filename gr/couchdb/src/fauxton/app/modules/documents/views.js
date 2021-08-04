define([
  "app",

  "api",

  // Libs
  "codemirror",
  "jshint",

  // Plugins
  "plugins/codemirror-javascript",
  "plugins/prettify"
],

function(app, FauxtonAPI, Codemirror, JSHint) {
  var Views = {};

  Views.Tabs = FauxtonAPI.View.extend({
    template: "templates/documents/tabs",
    initialize: function(options){
      this.collection = options.collection;
      this.database = options.database;
    },
    beforeRender: function(manage) {
      this.insertView("#search", new Views.SearchBox({
        collection: this.collection,
        database: this.database
      }));
    }
  });

  Views.SearchBox = FauxtonAPI.View.extend({
    template: "templates/documents/search",
    tagName: "form",
    initialize: function(options){
      this.collection = options.collection;
      this.database = options.database;
    },
    afterRender: function(){
      var collection = this.collection;
      var form = this.$el;
      var searchbox = form.find("input#searchbox");
      var database = this.database;

      form.submit(function(evt){
        evt.preventDefault();
        var viewname = form.find("input#view").val().split('/');
        var url = "#database/" + database + "/_design/";
        url += viewname[0] + "/_view/" + viewname[1];
        if (searchbox.val() !== ""){
          // TODO: this'll need to work when val() is a number etc.
          url += '?start_key="' + searchbox.val() + '"';
        }
        FauxtonAPI.navigate(url);
      });

      searchbox.typeahead({
        source: function(query, process) {
          // TODO: include _all_docs and view keys somehow
          var views = _.map(collection.pluck('doc'), function(d){
            return _.map(_.keys(d.views), function(view){
              return d._id.split('/')[1] + "/" + view;
            });
          });
          return _.flatten(views);
        },
        minLength: 3,
        updater: function(item){
          // TODO: some way to return the original search box
          this.$element.removeClass('span12');
          this.$element.addClass('span6');
          this.$element.attr('placeholder', 'Search by view key');
          $('<span class="add-on span6">' + item +'</span>').insertBefore(this.$element);
          $('<input type="hidden" id="view" value="' + item +'"/>').insertBefore(this.$element);
          // Remove the type ahead for now
          $('.typehead').unbind();
        }
      });
    }
  });

  Views.FieldEditorTabs = FauxtonAPI.View.extend({
    template: "templates/documents/doc_field_editor_tabs",

    initialize: function(options) {
      this.selected = options.selected;
    },

    events: {
      "click button.delete": "destroy",
      "click button.duplicate": "duplicate"
    },

    destroy: function(event) {
      if (!window.confirm("Are you sure you want to delete this doc?")) {
        return false;
      }

      var database = this.model.database;

      this.model.destroy().then(function(resp) {
        FauxtonAPI.addNotification({
          msg: "Succesfully destroyed your doc"
        });
        FauxtonAPI.navigate(database.url("index"));
      }, function(resp) {
        FauxtonAPI.addNotification({
          msg: "Failed to destroy your doc!",
          type: "error"
        });
      });
    },

    duplicate: function(event) {
      FauxtonAPI.addNotification({
        type: "warning",
        msg: "Duplicate functionality coming soon."
      });
    },

    serialize: function() {
      var selected = this.selected;
      return {
        doc: this.model,
        isSelectedClass: function(item) {
          return item && item === selected ? "active" : "";
        }
      };
    },

    establish: function() {
      return [this.model.fetch()];
    }
  });

  Views.Document = FauxtonAPI.View.extend({
    template: "templates/documents/all_docs_item",
    tagName: "tr",
    className: "all-docs-item",

    events: {
      "click button.delete": "destroy"
    },

    attributes: function() {
      return {
        "data-id": this.model.id
      };
    },

    serialize: function() {
      return {
        doc: this.model
      };
    },

    establish: function() {
      return [this.model.fetch()];
    },

    destroy: function(event) {
      event.preventDefault();
      var that = this;

      if (!window.confirm("Are you sure you want to delete this doc?")) {
        return false;
      }

      this.model.destroy().then(function(resp) {
        FauxtonAPI.addNotification({
          msg: "Succesfully destroyed your doc"
        });
        that.$el.fadeOut();
        that.model.collection.remove(that.id);
      }, function(resp) {
        FauxtonAPI.addNotification({
          msg: "Failed to destroy your doc!",
          type: "error"
        });
      });
    }
  });

  Views.Row = FauxtonAPI.View.extend({
    template: "templates/documents/index_row_docular",
    tagName: "tr",

    serialize: function() {
      return {
        doc: this.model
      };
    }
  });

  Views.IndexItem = FauxtonAPI.View.extend({
    template: "templates/documents/index_menu_item",
    tagName: "li",
    initialize: function(options){
      this.index = options.index;
      this.ddoc = options.ddoc;
      this.database = options.database;
    },

    serialize: function() {
      return {
        index: this.index,
        ddoc: this.ddoc,
        database: this.database
      };
    }
  });

  // TODO: Rename to reflect that this is a list of rows or documents
  Views.AllDocsList = FauxtonAPI.View.extend({
    template: "templates/documents/all_docs_list",
    events: {
      "click button.all": "selectAll",
      "click button.bulk-delete": "bulkDelete",
      "submit form.view-query-update": "updateView"
    },

    initialize: function(options){
      this.nestedView = options.nestedView || Views.Document;
      this.rows = {};
      this.viewList = !! options.viewList;
      this.params = options.params;
      if (options.ddocInfo) {
        this.designDocs = options.ddocInfo.designDocs;
        this.ddocID = options.ddocInfo.id;
      }
    },

    establish: function() {
      var deferreds = [this.collection.fetch()];
      if (this.designDocs) {
        deferreds.push(this.designDocs.fetch());
      }
      return deferreds;
    },

    selectAll: function(evt){
      $("input:checkbox").attr('checked', !$(evt.target).hasClass('active'));
    },

    // TODO:: HACK::
    // Hack to grab info about the ddoc and current view to determine whether
    // or not the view has a reduce function so we can display the advanced
    // options appropriately.
    //
    // NOTE: we have this here temporarily because we have to wait for the
    // design docs to be present.
    //
    // NOTE: We should probably refactor this View out into a separate View
    // dedicated to displaying view query results.
    // If nothing else, we should at least switch to something along the lines
    // of fetchOnce to ensure we're not reloading the ddocs here in addition to
    // the sidebar.
    setDdocInfo: function() {
      if (!this.ddoc && this.designDocs) {
        this.ddoc = this.designDocs.get(this.ddocID);
      }
    },

    serialize: function() {
      this.setDdocInfo();
      var data = {
        database: this.collection,
        viewList: this.viewList,
        hasReduce: false,
        params: this.params
      };
      if (this.ddoc) {
        data.ddoc = this.ddoc;
        data.hasReduce = this.ddoc.viewHasReduce(this.collection.view);
      }
      return data;
    },

    updateView: function(event) {
      event.preventDefault();
      var $form = $(event.currentTarget);
      // Ignore params without a value
      var params = _.filter($form.serializeArray(), function(param) {
        return param.value;
      });
      var fragment = window.location.hash.replace(/\?.*$/, '');
      fragment = fragment + '?' + $.param(params);
      FauxtonAPI.navigate(fragment);
    },

    /*
     * TODO: this should be reconsidered
     * This currently performs delete operations on the model level,
     * when we could be using bulk docs with _deleted = true. Using
     * individual models is cleaner from a backbone standpoint, but
     * not from the couchdb api.
     * Also, the delete method is naive and leaves the body intact,
     * when we should switch the doc to only having id/rev/deleted.
     */
    bulkDelete: function() {
      var that = this;
      // yuck, data binding ftw?
      var eles = this.$el.find("input.row-select:checked").parents("tr.all-docs-item").map(function(e) { return $(this).attr("data-id"); }).get();

      if (!window.confirm("Are you sure you want to delete these " + eles.length + " docs?")) {
        return false;
      }

      _.each(eles, function(ele) {
        var model = this.collection.get(ele);

        model.destroy().then(function(resp) {
          that.rows[ele].$el.fadeOut();

          model.collection.remove(model.id);
        }, function(resp) {
          FauxtonAPI.addNotification({
            msg: "Failed to destroy your doc!",
            type: "error"
          });
        });
      }, this);
    },

    beforeRender: function() {
      this.collection.each(function(doc) {
        this.rows[doc.id] = this.insertView("table.all-docs tbody", new this.nestedView({
          model: doc
        }));
      }, this);
    },

    afterRender: function(){
      prettyPrint();
      if (this.params) {
        var $form = this.$el.find("form.view-query-update");
        _.each(this.params, function(val, key) {
          switch (key) {
            case "limit":
            case "group_level":
              $form.find("select[name='"+key+"']").val(val);
              break;
            case "include_docs":
            case "reduce":
              if (val == "true") {
                $form.find("input[name='"+key+"']").prop('checked', true);
              }
              break;
            default:
              $form.find("input[name='"+key+"']").val(val);
              break;
          }
        });
      }
    }
  });

  Views.Doc = FauxtonAPI.View.extend({
    template: "templates/documents/doc",

    events: {
      "click button.save-doc": "saveDoc"
    },

    updateValues: function() {
      var notification;
      if (this.model.changedAttributes()) {
        notification = FauxtonAPI.addNotification({
          msg: "Document saved successfully.",
          type: "success",
          clear: true
        });
        this.editor.setValue(this.model.prettyJSON());
      }
    },

    establish: function() {
      return [this.model.fetch()];
    },

    saveDoc: function(event) {
      var json, notification;
      if (this.hasValidCode()) {
        json = JSON.parse(this.editor.getValue());
        this.model.set(json);
        notification = FauxtonAPI.addNotification({msg: "Saving document."});
        this.model.save().error(
          function(xhr) {
            var responseText = JSON.parse(xhr.responseText).reason;
            notification = FauxtonAPI.addNotification({
              msg: "Save failed: " + responseText,
              type: "error",
              clear: true
            });
          }
        );
      } else {
        notification = FauxtonAPI.addNotification({
          msg: "Please fix the JSON errors and try again.",
          type: "error",
          selector: "#doc .errors-container"
        });
      }
    },

    hasValidCode: function() {
      return JSHINT(this.editor.getValue()) !== false;
    },

    runJSHint: function() {
      var json = this.editor.getValue();
      var output = JSHint(json);

      // Clear existing markers
      for (var i = 0, l = this.editor.lineCount(); i < l; i++) {
        this.editor.clearMarker(i);
      }

      if (output === false) {
        _.map(JSHint.errors, function(error) {
          var line = error.line - 1;
          var className = "view-code-error-line-" + line;
          this.editor.setMarker(line, "●", "view-code-error "+className);

          setTimeout(function() {
            $(".CodeMirror ."+className).tooltip({
              title: "ERROR: " + error.reason
            });
          }, 0);
        }, this);
      }
    },

    serialize: function() {
      return {
        doc: this.model
      };
    },

    afterRender: function() {
      this.model.on("sync", this.updateValues, this);
      var that = this;
      this.editor = Codemirror.fromTextArea(this.$el.find("textarea.doc-code").get()[0], {
        mode: "application/json",
        json: false,
        lineNumbers: true,
        matchBrackets: true,
        lineWrapping: true,
        onChange: function() {
          that.runJSHint();
        },
        extraKeys: {
          "Ctrl-S": function(instance) { that.saveDoc(); },
          "Ctrl-/": "undo"
        }
      });
    }
  });

  Views.DocFieldEditor = FauxtonAPI.View.extend({
    template: "templates/documents/doc_field_editor",

    events: {
      "click button.save": "saveDoc"
    },

    saveDoc: function(event) {
      FauxtonAPI.addNotification({
        type: "warning",
        msg: "Save functionality coming soon."
      });
    },

    serialize: function() {
      return {
        doc: this.getModel()
      };
    },

    getModel: function() {
      return this.model;
    },

    establish: function() {
      return [this.model.fetch()];
    }
  });

  Views.Sidebar = FauxtonAPI.View.extend({
    template: "templates/documents/sidebar",
    events: {
      "click a.new#index": "newIndex",
      "click .nav-list.views a.new": "showNew",
      // "click .nav-list.views a.toggle-view": "toggleView",
      "click .nav-list a.toggle-view#all-docs": "toggleView",
      "click .nav-list a.toggle-view#design-docs": "toggleView"
    },

    establish: function() {
      if (this.collection) {
        return [this.collection.fetch()];
      } else {
        return null;
      }
    },

    serialize: function() {
      return {
        index: [1,2,3],
        view: [1,2],
        database: this.collection.database
      };
    },

    newIndex:  function(event){
      event.preventDefault();
      alert('coming soon');
    },

    showNew: function(event){
      event.preventDefault();
      alert('show new view dialog');
    },

    toggleView: function(event){
      alert('filter data by search/view/type');
      event.preventDefault();
      url = event.currentTarget.href.split('#')[1];
      app.router.navigate(url);
    },

    buildIndexList: function(collection, selector, design){

      _.each(_.keys(collection), function(key){
        this.insertView("ul.nav." + selector, new Views.IndexItem({
          ddoc: design,
          index: key,
          database: this.collection.database.id
        }));
      }, this);
    },

    beforeRender: function(manage) {
      this.collection.each(function(design) {
        if (design.has('doc')){
          var ddoc = design.id.split('/')[1];
          if (design.get('doc').views){
            this.buildIndexList(design.get('doc').views, "views", ddoc);
          }
        }
      }, this);
    }

  });

  Views.Indexed = FauxtonAPI.View.extend({});

  return Views;
});
