# TAOAPI

Taoapi GraphQL is a GraphQL API for the Tao Te Ching which is a classical chinese text on philosophy written around 400 BC by Laozi, very useful for people of all times. In a general tend it deals with the ideas of action without intention, naturalness, simplicity, spontaneity, compassion, frugality and humility.

I hope it will be useful for developers as well and that they will feel free to improve it.

```
I am currently adding the chapters to the json file.
It has not yet been completed.
```

### Running locally

This repoistory can be cloned.

The dependencies can be installed and a development server started, through these commands.

```bash
$ yan
$ yarn dev
```

Everything should work as expected. You may be seeing a message in your terminal with the following URL.

```
http://localhost:4000/graphql
```

The API is now available and you can access a GraphQL playground to read over the API schema and test out some queries.

```
query {
  book {
    number
    content {
      EN
    }
  }
}
```

Some queries.

```
query {
  chapter(number: "1") {
    content {
      EN
    }
  }
}
```

### Generate Resolvers Types

GraphQL Code Generator generates TypeScript types for your GraphQL API's resolvers.

After modifying the schema, simply type the following command.

```bash
$ yarn generate
```
