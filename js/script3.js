"use strict";

let url = createURL(
  `/api/countries/{country}/regions/{region}/`,
  {country: `Ukraine`, region: `Kiev`}
);

console.assert(url === '/api/countries/Ukraine/regions/Kiev/');

function createURL(template, obj) {
  let regex = /({(\w)+})+/g;
  let parameters = template.match(regex);

  parameters.forEach(elem => {
    template = template.replace(elem, obj[/\w+/.exec(elem)]);
  });

  return template;
}