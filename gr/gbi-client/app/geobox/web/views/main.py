# This file is part of the GBI project.
# Copyright (C) 2012 Omniscale GmbH & Co. KG <http://omniscale.com>
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import os
from flask import Blueprint, render_template, current_app, abort, send_from_directory

from ..utils import request_is_local

main = Blueprint("main", __name__)


@main.route("/")
def index():
    return render_template("index.html", is_local=request_is_local())


@main.route("/__terminate")
def terminate():
    if request_is_local():
        current_app.config.geobox_state.shutdown_app()
        return "OK"
    else:
        abort(403)


@main.route("/favicon.ico")
def favicon():
    return send_from_directory(
        os.path.join(current_app.root_path, "static"),
        "favicon.ico",
        mimetype="image/vnd.microsoft.icon",
    )
