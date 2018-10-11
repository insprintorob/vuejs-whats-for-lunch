Whats for Lunch
---
This is a simple Vue app that will read in recipes.json and ingredients.json and will show you whats good to eat. Recipes with ingredients past their use by date are automatically filtered out and recipes that have ingredients past their best before date will go to the bottom of the list.

The code is in TypeScript. Compilation to JavaScript is automatic, at runtime for development with hot-reload support and at build time for production.

## Getting it running
Clone the repo, then run
```
npm install
```
Once NPM finishes sucessfully, go to http://localhost:8000 in chrome

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