# Qantas Hotels Test 



Further details on the requirements can be found [here](./instructions.md).

## Pre-requisites

1. Require Node and NPM  (App was tested with Node v20.12.1 and NPM v10.5.0)

## Running the app

1. run `npm i`
2. run `npm run dev`

## Testing

1. run `npm test`

## Comments/Improvements

1. No types were provided for the search result data. I have created a set of interfaces based off what was provided in the sample response, but this is obviously limited and not something I would use in production. <br>Normally, depending on the project, I would generate types from an openapi schema or similar, or build my own types from scratch using a tool like zod. I did consider generating a zod schema from JSON but I thought that might be too much for this simple test project.
2. As there was no endpoint provided for this test project, only a sample JSON file. I have just returned the JSON data from the [useSearchResults.hook.ts](./src/pages/search-results/useSearchResults.hook.ts). <br> If I had an endpoint, I would normally use a library such as react-query here to fetch the data and store server state/manage cache etc. 