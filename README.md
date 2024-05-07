# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- ## 🏗️ How to Set up `Bloggios_Learn` for Development?

You may want to set up the `bloggios_learn` repo for the following reasons:  

Here is a quick overview of the `bloggios_learn` repo setup:

### 🍴 Fork and Clone the Repo

First, you need to fork the `bloggios_learn` repo. You can do this by clicking the `Fork` button on the top right corner of the repo. If you are new to forking, please watch this [YouTube Guide](https://www.youtube.com/watch?v=h8suY-Osn8Q) to get started.

Once forked, you can clone the repo by clicking the `Clone or Download` button on the top right corner of the forked repo.

Please change the directory after cloning the repository using the `cd <folder-name>` command.

> **Note:** Please do not remove the `.env.development` file from the root folder. It contains all the environment variables required for development.

### ⬇️ Install Dependencies

Next, install the dependencies by running the following command in the `bloggios_learn` repo. we recommend using `yarn` but you can install using `npm` too

```bash
yarn install
```

Or
```
npm install
```

if you don't have `yarn` installed on your PC, follow the steps below to install it..

**Windows**
1. open your command prompt as administrator.
2. write `corepack enable` and hit enter.
3. then `npm install --global yarn`

**Linux**
1. open terminal and hit `npm install --global yarn`

**MacOS**
1. open terminal and hit `npm install --global yarn`
or
`brew install yarn`

**Or Download Package**
If you are unable to install yarn following the above-mentioned process, then you can simply download the package and install it. Visit the official website of Yarn; there you can just expand the "Alternative" section and it will ask for the version to download for Windows, Linux, or Mac.
`https://classic.yarnpkg.com/en/docs/install#windows-stable`


> **Note**: `bloggios_learn` runs on React 18. However, some of our dependencies are yet to upgrade to version 18. So please use the following command when you face difficulties installing the dependencies. Also, ensure to use Node.js version >= 16.x

```
npm install --legacy-peer-deps
```


### 🦄 Start the Development Mode

Use the following command to start the app in the development mode:

```bash
yarn start
```
or if you installed dependencies using ``npm`` use below command

```
npm start
```

**Note**: The `start` script automatically invokes "linters" process. Should you need to run the app without `lint` the use `start:nolint` instead.
However make sure that you run `start` script at least once before committing your code. Code with linter error may not be reviewed.

It runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### ✨ Format and lint the code

Use the following command to format and lint the code:

#### Format the code

```bash
yarn run format
```
OR
```
npm run format
```

#### Lint the code
*to check the linting issue*
```bash
yarn run lint
```
OR
```
npm run lint
```
*to fix the linting issue*
```bash
yarn run lint:fix
```
OR
```
npm run lint:fix
```

### 🧱 Build the App for Production

Use the following command to build the app for production:

```bash
yarn build
```
OR
```
npm build
```

It builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

-----------------------------------------------------------------------------
