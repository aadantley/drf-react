# Readme

A simple django-rest-framework API with a simple React front-end.

## TakeAways

- use `npm init -y` and the folder setup for a react app inside of a django application instead of building the react app outside of the django project modules.
- add the script below to the package.json file built by the `npm init` command:

```json
"dev": "webpack --mode development ./src/index.js --output ./static/frontend/main.js"
```

- use `npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev` to install babel from the django app for the frontend.
- use `npm i react react-dom --save-dev` to install react.
- create a `.babelrc` file with the needed presets.
- create a `webpack.config.js` file to configure webpack to work with the babel-loader.
- create an `index.html` template file to capture and reference the static react files.
- need to create an entry point for webpack by creating the `index.js` file.

## Corrections

- Update the package.json file to include the correct path for the output of webpack, which is the `main.js` file:

```json
"dev": "webpack --mode development ./src/index.js --output ./static/frontend/"
```

- make sure this path corresponds to the path referenced in the `index.html` template file.

## Remaining Tasks

- webpack creates a `main.js` file, however, this file does not load the events stored in the database. The API endpoint does still send the JSON repsonse.

---

## Experience TakeAway

- implementing react as static files within a Django project has a number of tricky configuration steps, that may be avoided by setting up the api and frontend code separately and connecting them with the network calls.
