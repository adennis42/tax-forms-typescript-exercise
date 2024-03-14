# What Is This?

This is a mock application that serves as a technical screener for Reason
Consulting's developer interview process. In this README you will find a
seqence of tasks that you are expected to complete that are very similar to
what would be expected in a production environment.

There is no backing API, and all data is mock data. Refreshing the application
will reinitialize the application to its starting state, and that's OK. Where
an API would be expected we have mocked out access with Promise-based
functions that will stand in. You are not expected to modify the mock API in
`lib/api.ts`.

This project was bootstrapped with [Create React
App](https://github.com/facebook/create-react-app).

## Architecture

The application's Architecture relies React and popular React libraries to
keep the development experience generic as possible. The critical libraries to
the architecture are:

| Library | Description |
|---------|-------------|
| `react` | You know this one |
| `react-router-dom` | React Router controls rendering specific components based on the current URL, the Browser's history, and navigating between pages. |
| `@reduxjs/toolkit` | The offical, batteries-included library for setting up ReduxJS as a frontend data store |
| `react-redux` | The official React bindings for Redux |
| `formik` | Formik is a simple ReactJS form library. It saves us from writing a lot of boilerplate as opposed to using `form` and `input` HTML Elements |
| `@mui/material` | The Material UI library provides clean, basic styling with via a rich component library |

You are free to add additional libraries if you feel the application would
benefit from it.

There are no intentional tricks or traps in the application. Everything
written is meant to function as intended in so far as it is implemented.

Authentication and Authorization is neglected in this app. You are assumed to
be signed into the application through a secure system, and your current
credentials are in the `users` Slice of the Redux store.

## Tasks

| Task ID | Story |
|---------|-------|
| TID-1   | |
| TID-2   | |
| TID-3   | |

#### TID-0: BUG - The Application Throws An Error On Initial Load

TODO: Bug it

#### TID-1: Submit Extension Request

__Story:__ _As a User, I want to submit my Extension, so that the County receives my filing for an extension on my taxes.

#### TID-2

#### TID-3

#### TID-4

#### TID-5

#### TID-6

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\ Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\ You will also see any lint errors in
the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\ See the section about
[running
tests](https://facebook.github.io/create-react-app/docs/running-tests) for
more information.

### `yarn build`

Builds the app for production to the `build` folder.\ It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\ Your app is ready
to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.
