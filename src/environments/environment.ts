// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase:
  {
    apiKey: "AIzaSyBAMZEZzKVOKXmt9MQz76rkq93TGkkswTQ",
    authDomain: "friends-f35ce.firebaseapp.com",
    databaseURL: "https://friends-f35ce.firebaseio.com",
    projectId: "friends-f35ce",
    storageBucket: "",
    messagingSenderId: "648370815751"
  }
};
