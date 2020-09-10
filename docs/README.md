# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Requirements
- [Node.js](https://nodejs.org/en/download/) version 10.15.1 or above (which can be checked by running `node -v`)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable) version 1.5 or above (which can be checked by running `yarn version`)
  - Yarn is a performant package manager for JavaScript and replaces the `npm` client. It is not strictly necessary, but highly encouraged.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Testing Build Locally

It is important to test build before deploying to production. You can use the following command to test the build locally:

```
$ yarn run serve
```

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

For more information on deploying to various services, please check the Docusaurus [documentation](https://v2.docusaurus.io/docs/deployment). 