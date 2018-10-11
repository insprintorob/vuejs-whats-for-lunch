Whats for Lunch
---
This is a simple Vue app that will read in recipes.json and ingredients.json and will show you whats good to eat. Recipes with ingredients past their use by date are automatically filtered out and recipes that have ingredients past their best before date will go to the bottom of the list.

The code is in TypeScript. Compilation to JavaScript is automatic, at runtime for development with hot-reload support and at build time for production.

There are no non-node or npm dependencies. You can run this in a docker container, a cloud instance, inside a Node production process manager like PM2 or anything else you like.

Prerequisites
----
The latest versions of node and npm. To build and run this project you will need vue-cli, vue-template-compiler, typescript, @vue/cli-service, @vue/cli-plugin-unit-jest, @vue/cli-plugin-typescript installed globally

Install them all in one go:
```
npm install -g vue-cli vue-template-compiler typescript, @vue/cli-service @vue/cli-plugin-unit-jest @vue/cli-plugin-typescript
```

## Getting it running
Clone the repo, then run
```
npm install
```
Once NPM finishes sucessfully, start the built in web server by running
```
npm run serve
```
Then go to http://localhost:8080/ in chrome

### Compile and hot-reload for development:
```
npm run serve
```

### Compile and minify for production:
```
npm run build
```

### Run the tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```