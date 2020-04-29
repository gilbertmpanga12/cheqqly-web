// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDq-TYjcwhDoR1yqNbORHZYvcPlcyjbITY",
    authDomain: "cheqqly-app.firebaseapp.com",
    databaseURL: "https://cheqqly-app.firebaseio.com",
    projectId: "cheqqly-app",
    storageBucket: "cheqqly-app.appspot.com",
    messagingSenderId: "1084472738356"
  },
  baseUrl: 'https://cheqqly-app.herokuapp.com'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
