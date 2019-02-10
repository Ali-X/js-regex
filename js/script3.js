"use strict";

let url = createURL(
  `/api/countries/{country}/regions/{region}/`,
  {country: `Ukraine`, region: `Kiev`}
);

console.assert(url === '/api/countries/Ukraine/regions/Kiev/');