# FN-UI-Framework

## Overview

FN-UI-Framework is an Ionic-based project designed to provide a comprehensive UI framework for web and mobile applications. This framework leverages various modern technologies and tools to ensure robust performance and a seamless development experience.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Testing](#testing)
- [Linting](#linting)
- [Storybook](#storybook)
- [Contributing](#contributing)

## Installation

To get started with FN-UI-Framework, you need to have Node.js and npm installed on your system. Then, clone the repository and install the dependencies:

```sh
git clone https://github.com/yourusername/FN-UI-Framework.git
cd FN-UI-Framework
npm install
```

## Scripts

This project uses various npm scripts for development, building, serving, and testing.

### Development

- **Start development server:**
  ```sh
  npm run dev
  ```
- **Start development server with specific mode:**
  ```sh
  npm run dev:dev
  npm run dev:prod
  npm run dev:sit
  ```

### Build

- **Build the project:**
  ```sh
  npm run build
  ```
- **Build the project with specific mode:**
  ```sh
  npm run build:dev
  npm run build:prod
  npm run build:sit
  ```

### Serve

- **Serve the built project:**
  ```sh
  npm run serve
  ```
- **Serve the built project with specific mode:**
  ```sh
  npm run serve:dev
  npm run serve:prod
  npm run serve:sit
  ```

### Testing

- **Run end-to-end tests:**
  ```sh
  npm run test.e2e
  ```
- **Run unit tests:**
  ```sh
  npm run test.unit
  ```

### Linting

- **Lint the codebase:**
  ```sh
  npm run lint
  ```

### Storybook

- **Start Storybook:**
  ```sh
  npm run storybook
  ```
- **Build Storybook:**
  ```sh
  npm run build-storybook
  ```

## Dependencies

These are the main dependencies required for the project:

- `@aws-amplify/auth`
- `@aws-amplify/core`
- `@capacitor-community/sqlite`
- `@capacitor/android`
- `@capacitor/app`
- `@capacitor/core`
- `@capacitor/haptics`
- `@capacitor/keyboard`
- `@capacitor/status-bar`
- `@ionic/react`
- `@ionic/react-router`
- `@reduxjs/toolkit`
- `amazon-cognito-identity-js`
- `aws-amplify`
- `aws-sdk`
- `axios`
- `buffer`
- `dotenv`
- `formik`
- `i18next`
- `i18next-browser-languagedetector`
- `i18next-http-backend`
- `ionicons`
- `jest`
- `prettier`
- `primeflex`
- `primeicons`
- `primereact`
- `process`
- `react`
- `react-dom`
- `react-i18next`
- `react-redux`
- `react-router`
- `react-router-dom`
- `yup`

## Dev Dependencies

These are the main development dependencies required for the project:

- `@capacitor/cli`
- `@chromatic-com/storybook`
- `@cypress/react`
- `@cypress/webpack-dev-server`
- `@storybook/addon-essentials`
- `@storybook/addon-interactions`
- `@storybook/addon-links`
- `@storybook/addon-onboarding`
- `@storybook/blocks`
- `@storybook/react`
- `@storybook/react-vite`
- `@storybook/test`
- `@testing-library/dom`
- `@testing-library/jest-dom`
- `@testing-library/react`
- `@testing-library/user-event`
- `@types/react`
- `@types/react-dom`
- `@vitejs/plugin-legacy`
- `@vitejs/plugin-react`
- `autoprefixer`
- `cypress`
- `eslint`
- `eslint-plugin-react`
- `eslint-plugin-storybook`
- `jsdom`
- `postcss`
- `storybook`
- `terser`
- `typescript`
- `vite`
- `vitest`

## Folder Structure

The project follows a standard structure:

```
FN-UI-Framework/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── store/
│   ├── styles/
│   ├── utils/
│   └── index.tsx
├── .eslintrc.js
├── .gitignore
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   ├── support/
│   └── cypress.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Usage

To start using the FN-UI-Framework, run the following command to start the development server:

```sh
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to see the application in action.

## Cypress Testing

Cypress is used for end-to-end testing in this project. To get started with Cypress, follow these steps:

### Install Cypress

If Cypress is not already installed, you can install it using npm:

```sh
npm install cypress --save-dev
```

### Running Cypress Tests

To open the Cypress Test Runner, run:

```sh
npx cypress open
```

This will open the Cypress Test Runner where you can run your tests interactively.

To run the Cypress tests in headless mode, run:

```sh
npm run test.e2e
```

### Cypress Folder Structure

The Cypress tests are organized in the `cypress/` folder as follows:

```
cypress/
├── e2e/
│   └── example.cy.js
├── fixtures/
│   └── example.json
├── support/
│   ├── commands.js
│   └── e2e.js
└── cypress.config.js
```

- `e2e/` - Contains end-to-end test files.
- `fixtures/` - Contains test data files.
- `support/` - Contains custom commands and other support files.
- `cypress.config.js` - Cypress configuration file.


## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.
