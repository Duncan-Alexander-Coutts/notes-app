# Astro-notes

## Instructions

* Ensure you have node installed on your machine
* Clone this repository
* Open terminal and cd into directory
* run "npm install" command
* run "npm start" command

If all above works the app should load automatically in your browser. If not the url is http://localhost:3000

## Information

### React

I have used react to build this application using the 'create-react-app' npm tool that creates a seed app with WebPack for module loading.

### Redux

I am using the state management library 'redux' https://redux.js.org/introduction/motivation to manage the application state in an immutable fashion. This is a popular method used to ensure

* components do not have to manage the application state directly and can focus on presentation.
* application state is only updated by 'reducers' in predictable ways
* application state can be rolled back to aid undo type feature

### Local Storage

In order for this to feel more like a working app, I have leveraged the browser's local storage feature to persist and load application state. This means that your data will be retained when the browser is closed.

NOTE if there any issues, it may be required to flush out your browser's local storage.

### Semantic UI

I have also used the semantic ui component library. This is a widely used component library which allows for consistency.

### Todo

1.  Ordinarily, I would have written unit tests and end-to-end automated tests, however, there was not time to do this.
2.  Application state is updated (and therefore 'persisted') on each edit of the notes. Ideally this would be done with some sort of 'de-bounce' delay or perhaps periodically to ensure performance is maintained. However, this optimisation was outside of the scope of this project.
