// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  products_api: 'https://run.mocky.io/v3/2e604518-c7ea-4900-b69e-d5b09c9d2f58',
  geocoding: {
    api_key: 'b750f485b47fbc5ffba8510ac800942d',
    url: 'http://api.positionstack.com/v1/reverse'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
