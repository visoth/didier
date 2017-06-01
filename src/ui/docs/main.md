# DF React Redux Starter Kit

This starter kit is designed to get you up and running and to not loose a big amount of time in configuration and discussions in which tools to pick and what kind of guidelines to follow.

You can still take the boilerplate and change it to reflect your way thinking in your project.

## Features
* [react](https://github.com/facebook/react)                            # Library to build the UI
* [redux](https://github.com/rackt/redux)                               # State management of the application
* [redux-saga](https://redux-saga.js.org/)                              # Application's logic and all the side effects (Asynchronous, Delay, Throtteling)
* [react-router-redux](https://github.com/reactjs/react-router-redux)   # Routing library communicating with Redux
* [webpack](https://github.com/webpack/webpack)                         # Build bundle.js from the sources
* [babel](https://github.com/babel/babel)                               # Let us use future JavaScript in the project
* [flow](https://flow.org/)                                             # Type checking in JavaScript
* [express](https://github.com/expressjs/express)                       # Libary for creating a server in node.js
* [jest](https://facebook.github.io/jest/)                              # Test framework
* [eslint](http://eslint.org)                                           # JavaScript guidelines checker
* [storybook](https://github.com/storybooks/storybook)                  # UI Component Dev Environment for React

## Requirements
* node `^4.5.0`
* yarn `^0.17.0` or npm `^3.0.0`

## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements), you can create a new project based on `react-redux-starter-kit` by doing the following:

### Install from source

First, clone the project from TFS:

```bash
$ git clone http://vpalm/tfs/SIVP/Digital%20Factory/_git/df-react-redux-starter-kit <my-project-name>
$ cd <my-project-name>
```

Then install dependencies and check to see it works. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic installs, but `npm install` will work just as well.

```bash
$ yarn install    # Install project dependencies
$ yarn start      # Compile and launch (same as `npm start`)
```

You can create a `.env` and add inside it variables like this way:
```json
MY_FIRST_ENV_VARIABLE=myvalue
SPECIFIC_URL_FOR_API=http://my-product-api.com/
```

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`dev`|Same as `npm start`, but enables nodemon for the server as well.|
|`test`|Runs unit all tests with Jest.|
|`test:dev`|Runs Jest and watches for changes to re-run tests.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|
|`precommit`|Lint all `.js` files and if it fails you cannot commit.|
|`storybook`|Runs storybook at `localhost:6006`. HMR will be enabled in development.|
|`docs`|Runs your documentations in the `docs/` folder at `localhost:8000`.|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

## Application Structure

```
.
├── .storybook                   # Configuration files for Storybook
├── bin                          # Build/Start scripts
├── config                       # Project and build configurations webpack
├── docs                         # documentations
├── flow-typed                   # Generated types of the dependencies
├── public                       # favicon robot.txt etc..
├── server                       # Express application that provides webpack middlewares
├── src                          # Application source code
│   ├── components               # Global Reusable Presentational Components
│   │   ├── commons              # Common components for all the project
│   │   ├── Home                 # Components dedicated to create the home page
│   │   ├── Counter              # Components dedicated to create the counter
│   ├── helpers                  # Helpers of the application
│   ├── pages                    # Pages of the application with containers, sagas and ducks (Reducers, Actions...)
│   │   └── `pageName`           # Name of the page like Home
│   │       ├── containers       # Containers of the page
│   │       ├── modules          # Everything about redux (Model, Creators, Reducers)
│   │       ├── sagas            # All the sagas used in the page
│   │       └── index.js         # Entry point of the page (with the Route, for async Routes)
│   ├── services                 # Services to make HTTP calls, used in Sagas
│   ├── store                    # Redux, Redux-saga, React-Router-Redux and middlewares configuration
│   ├── styles                   # Application-wide styles (generally settings)
│   ├── config.json              # App configuration like the App version and environnement variables
│   ├── index.html               # Main HTML page container for app
│   └── main.js                  # Application bootstrap and rendering
├── tests                        # Unit tests
├── .babelrc                     # Babel config
├── .env                         # Environnement variables
├── .estlintignore               # Eslint ignore some files or folders during check
├── .estlintrc                   # Eslint configs
├── .flowconfig                  # Flow configs
├── .gitignore                   # git ignore some files during add and commit
├── CHANGELOG.md                 # About how to generate the changelog
├── CONTRIBUTING.md              # About how to contribute
├── jestsetup.js                 # Setup of Jest before launching test (Adding Mocks etc..)
├── nodemon.json                   # Config for nodemon
├── README.md                    # Documentation about the application
├── package.json                 # javascript project dependencies config
└── yarn.lock                    # Yarn auto-generated file to track dependencies
```

## Development

#### Developer Tools

To create components you can use [Storybook](https://storybooks.js.org/), launch it with `npm run storybook` and go look at localhost:6006.

For [redux](https://github.com/rackt/redux), we recommend using the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).
Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn’t require installing any packages.

### Documentation

In the `docs/` folder, you can put your technical documentations. The files have to be a markdowns.

### Configuration

Default project configuration can be found in `~/config/project.config.js`. Here you'll be able to redefine your `src` and `dist` directories, adjust compilation settings, tweak your vendor dependencies, and more.

### Styles

 `.css` file extensions are supported out of the box. After being imported, styles will be processed with [PostCSS](https://github.com/postcss/postcss) for minification and autoprefixing, and will be extracted to a `.css` file during production builds.

### Server

This starter kit comes packaged with an Express server. It's important to note that the sole purpose of this server is to provide `webpack-dev-middleware` and `webpack-hot-middleware` for hot module replacement. Using a custom Express app in place of [webpack-dev-server](https://github.com/webpack/webpack-dev-server) makes it easier to extend the starter kit to include functionality such as API's, universal rendering, and more -- all without bloating the base boilerplate.

### Production Optimization

With this boilerplate you have Webpack 2, with minification, dead code elimination, tree shaking, and gzip compression served with express all this to have the best performances as possible and application size as little as possible to make the app load as fast as possible.
