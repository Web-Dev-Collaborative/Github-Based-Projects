---
title: Getting Started
pageTitle: "Building a GraphQL Server with Graphcool Tutorial"
description: "Learn how to build a GraphQL server with Graphcool and best practices for defining and evolving the schema. The Graphcool API is compatible with Relay & Apollo."
---

In this chapter, you'll define the schema for the application and then build the GraphQL server using the [Graphcool CLI](https://www.graph.cool/docs/reference/cli/overview-kie1quohli/). 

### Defining the schema

The final schema for the backend will look as follows:

```graphql(nocopy)
type User {
  name: String!
  links: [Link!]! @relation(name: "UsersLinks")
  votes: [Vote!]! @relation(name: "UsersVotes")
}

type Link { 
  url: String!
  description: String!
  postedBy: User! @relation(name: "UsersLinks")
  votes: [Vote!]! @relation(name: "VotesOnLink")
}

type Vote {
  user: User! @relation(name: "UsersVotes")
  link: Link! @relation(name: "VotesOnLink")
}
```

There are three types in the schema: `User`, `Link` and `Vote`. Notice that the exclamation point that follows the type of each field means that this field is _required_.

The `User` type has a special role in a Graphcool project since it will be used for _authentication_. You'll see in a bit why that matters.

In the schema, there are a few relations defined:

- `UsersLinks`: A _one-to-many_-relationship between `User` and `Link` that expresses that one `User` can create zero or more `Link`s, and one `Link` can only ever have one `User`
- `UsersVotes`: A _one-to-many_-relationship between `User` and `Vote` that expresses that one `User` can submit zero or more `Vote`s, and one `Vote` can only ever have one `User`
- `VotesOnLink`: A _one-to-many_-relationship between `Vote` and `Link` that expresses that one `Link` can have many `Vote`s, but one `Vote` can only ever be associated with one `Link`

Note that the [`@relation` directive](https://www.graph.cool/docs/reference/schema/relations-goh5uthoc1/) is specific to Graphcool. 

### Creating the backend

Before you can create your backend, you first need to install the Graphcool CLI using [npm](https://www.npmjs.com/package/graphcool).

<Instruction>

Open a terminal and type the following command:

```bash
npm install -g graphcool
```

</Instruction>

Once `graphcool` is installed, you can go ahead and create the Graphcool project.

<Instruction>

Still in the terminal, use the `graphcool init` command like so:

```bash
graphcool init --schema https://graphqlbin.com/hn-starter.graphql --name Hackernews
``` 

</Instruction>


This will execute the `graphcool init` command with two arguments:

- `--schema`: This option accepts a `.graphql`-schema that's either stored _locally_ or at a _remote URL_. In your case, you're using the starter schema stored at [https://graphqlbin.com/hn-starter.graphql](https://graphqlbin.com/hn-starter.graphql), we'll take a look at it in a bit.
- `--name`: This is the name of the Graphcool project you're creating, here you're simply calling it `Hackernews`.

Note that this command will open up a browser window first and ask you to authenticate on the Graphcool platform.

The schema that's stored at [https://graphqlbin.com/hn-starter.graphql](https://graphqlbin.com/hn-starter.graphql) only defines the `Link` type for now:

```graphql(nocopy)
type Link implements Node {
  description: String!
  url: String!
}
```

Once the project was created, you'll find the [Graphcool Project File](https://www.graph.cool/docs/reference/cli/project-files-ow2yei7mew/) (`project.graphcool`) in the directory where you executed the command. It should look similar to this:

```graphql(nocopy)
# project: cj4k7j28p7ujs014860czx89p
# version: 1

type File implements Node {
  contentType: String!
  createdAt: DateTime!
  id: ID! @isUnique
  name: String!
  secret: String! @isUnique
  size: Int!
  updatedAt: DateTime!
  url: String! @isUnique
}

type Link implements Node {
  createdAt: DateTime!
  description: String!
  id: ID! @isUnique
  updatedAt: DateTime!
  url: String!
}

type User implements Node {
  createdAt: DateTime!
  id: ID! @isUnique
  updatedAt: DateTime!
}
```

The top of the file contains some metadata about the project, namely the _project ID_ and the _version number of the schema_.

The [`User`](https://www.graph.cool/docs/reference/schema/system-artifacts-uhieg2shio/#user-type) and [`File`](https://www.graph.cool/docs/reference/schema/system-artifacts-uhieg2shio/#file-type) types are generated by Graphcool and have some special characteristics. As mentioned above, `User` can be used for _authentication_ - `File` will be used for _file management_.

Also notice that each type has three fields called `id`, `createdAt` and `updatedAt`. These are managed by the system and read-only for you.


### Exploring the project in a Playground 

Let's go and explore the Graphcool project that you just created! The easiest way to do so is by using a  [Playground](https://www.graph.cool/docs/reference/console/playground-oe1ier4iej/)  that's integrated directly in the Graphcool console. A GraphQL Playground is an interactive environment that allows you to send queries and mutations. It's a great way to explore the capabilities of an API.

<Instruction>

Open up a terminal and navigate to the directory where `project.graphcool` is located (this will simply be the same directory if you still have the terminal open from before). Then execute the following command:

```bash
graphcool playground
```

</Instruction>


This command will read the project ID from the project file and open up a Playground in a browser.

> Note: Another way to get open up a Playground is by pasting the endpoint of the `Simple API` or the `Relay API` into the address bar of a browser. However, using the Playground in the Console provides a few benefits such as an easy way to authenticate requests.

The left pane of the Playground is the _editor_ that you can use to write your queries and mutations (and even subscriptions). Once you click the play button in the middle, the response to the request will be displayed in the _results_ pane on the right.

Go ahead and create some initial data in the project! We prepared two mutations for you.

<Instruction>

Copy the following two mutations into the _editor_ pane:

```graphql
mutation CreateGraphcoolLink {
  createLink(
    description: "The coolest GraphQL backend ????",
    url: "https://graph.cool") {
    id
  }
}

mutation CreateRelayLink {
  createLink(
    description: "Facebook's homegrown GraphQL client",
    url: "https://facebook.github.io/relay/") {
    id
  }
}
```

</Instruction> 

Since you're adding two mutations to the editor at once, the mutations need to have _operation names_. In your case, these are `CreateGraphcoolLink` and `CreateRelayLink `.

<Instruction>

Click the _Play_-button in the middle of the two panes and select each mutation from the dropdown exactly once.

</Instruction>

![](http://imgur.com/ZBgeq22.png)

This creates two new `Link` records in the database. You can verify that the mutations actually worked by either viewing the currently stored data in the [data browser](https://www.graph.cool/docs/reference/console/data-browser-och3ookaeb/) (simply click _DATA_ in the left side-menu) or by sending the following query in the already open Playground:

```graphql
{
  allLinks {
    id
    description
    url
  }
}
``` 

If everything went well, the query will return the following data:

```graphql(nocopy)
{
  "data": {
    "allLinks": [
      {
        "id": "cj4jo6xxat8o901420m0yy60i",
        "description": "The coolest GraphQL backend ????",
        "url": "https://graph.cool"
      },
      {
        "id": "cj4jo6z4it8on0142p7q015hc",
        "description": "Facebook's homegrown GraphQL client",
        "url": "https://facebook.github.io/relay/"
      }
    ]
  }
```

### The Graphcool `Simple API`

As mentioned above, the Graphcool offers a CRUD-style API for all your model types. By default, the following queries will be generated per type:

##### Query all items

For each model type, you have the ability to retrieve _all_ the instances of that type that are currently stored in the database.

The corresponding query is named `all<Type>s`. In the example of the `Link` type, this becomes the `allLinks` query. 

The `all`-query also accepts a [`filter` object](https://www.graph.cool/docs/tutorials/advanced-features-eath7duf7d/#filtering) as input argument so you can specify conditions about which objects you want to have returned. In case you want to implement [pagination](https://www.graph.cool/docs/tutorials/advanced-features-eath7duf7d/#pagination), you can do so using the `first`, `last`, `skip`, `limit`, `before` and `after` arguments.

##### Query a specific item by its ID

For each type, you have the ability to query a single item of that type by providing an ID.

The query you can use for that is name `<Type>` and takes as input an `id` argument. In the case of the `Link`, the query looks as follows: `Link(id: ID!)`. An example would be:

```graphql(nocopy)
Link(id: "cj4jo6xxat8o901420m0yy60i") {
  description
  url
}
```

##### Creating items

For creating new items on the server, there will be a `create<Type>` mutation generated for you. For the example of the `Link` type, you already used this mutation in the Playground. 

Note that each `create<Type>` mutation accepts all the _fields_ of the corresponding type as arguments so you can directly initialize all its properties when it's created. For types that have relations, you can further use [nested mutations](https://www.graph.cool/docs/tutorials/advanced-features-eath7duf7d/#nested-mutations) and create multiple related nodes at once.

##### Updating items

Often times, you'll want the ability to update existing items in the database. For the `Link` type, a user might want to update the `description` after it was initially created. In the example, the mutation is called `updateLink`.

This can be done using the `update<Type>` mutation. Like the `create<Type>` mutation, this mutation accepts values for all the fields of the type as arguments so you can update as many properties as you like in a single request. Note however that you also must pass the `id` of the object you want to update to the mutation - which is logical since you need to tell server _which_ item you want to change.

##### Deleting items

Finally, you're of course also able to delete existing items from the database. This can be done using the `delete<Type>` mutation which only requires the `id` of the item that is to be deleted as an argument.

For the Hackernews example schema, this mutation is called `deleteLink`.




