# IMPORTQL 🎡

easy way to import and parse graphql files in [deno](https://deno.land/)

![importql](https://i.ibb.co/k5P665d/importql.png)

## install

install using [Trex](https://deno.land/x/trex) package manager

```sh
$ trex install --map importql
```

or use url

```javascript
import { importQL } from "https://deno.land/x/importql/mod.ts";
```

## use

```graphql
# query.graphql file

type User {
  firstName: String
  lastName: String
}

input UserInput {
  firstName: String
  lastName: String
}

type ResolveType {
  done: Boolean
}

type Query {
  getUser(id: String): User
}

type Mutation {
  setUser(input: UserInput!): ResolveType!
}
```

```javascript
import { importQL } from "https://deno.land/x/importql/mod.ts";

const query = importQL("query.graphql"); // import the .graphql file

// query is now a GraphQL syntax tree object.

// {
//   "kind": "Document",
//   "definitions": [
//     {
//       "kind": "OperationDefinition",
//       "operation": "query",
//       "name": null,
//       "variableDefinitions": null,
//       "directives": [],
//       "selectionSet": {
//         "kind": "SelectionSet",
//         "selections": [
//           {
//             "kind": "Field",
//             "alias": null,
//             "name": {
//               "kind": "Name",
//               "value": "user",
//               ...
```

## permissions

- --allow-read
