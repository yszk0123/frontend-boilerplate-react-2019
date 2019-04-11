## Getting Started

```sh
$ node -p "c=require('./package.json');delete c['devDependencies']; delete c['dependencies'];JSON.stringify(c, null, 2)" > package.json
$ yarn add --dev @types/{react,react-dom} cross-env npm-run-all prettier parcel-bundler tslint tslint-{config-prettier,plugin-prettier} tslint-react typescript && yarn add react react-dom
```
