# Documentality-Client

Documentality is an React application that allows users to get information about movies, genres, and directors. Users are able to create an account and browse their favorite documentaries. They can modify account information, add or remove documentaries from their favorite list, or delete their account. This application uses my existing server-side REST API and MongoDB database.

## Technologies

- Requires [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com)
- Written with [React](https://reactjs.org)
- Dataflow with [Redux](https://redux.js.org)
- Designed with [Bootstrap](https://getbootstrap.com)
- Build tool [Parcel](https://parceljs.org)

## Features

- App display a welcome view where users will be able to either log in or register an account.
- Once authenticated, the user now view all documentaries.
- Upon clicking on a particular documentary, users will be taken to a single documentary view, where additional documentary's details will be displayed. The single documentary view will contain the following additional features:
  - A button that when clicked takes the user to the ​director view,​ where details about the director of that particular documentary will be displayed.
  - A button that when clicked takes the user to the ​genre view,​ where details about that particular genre of the documentary will be displayed.

## Development server

### Install dependencies

```bash
npm install
```

### Build for development

```bash
parcel [path to index.html]
```

_By default path to index.html is 'src/index.html'_

```bash
parcel src/index.html
```

**Note:** If you do not have parcel installed globally, your terminal will tell you that the command 'parcel' is not found. If this is the case, simply follow the instructions on [how to install parcel.js](https://parceljs.org/getting_started.html)

### Run application in browser

Parcel will run a local server on port: 1234

Open the application in your browser

```
http://localhost:1234/
```

---
