# Qantas Hotels Test 



Further details on the requirements can be found [here](./instructions.md).

## Pre-requisites

1. Require Node and NPM  (App was tested with Node v20.12.1 and NPM v10.5.0)

## Running the app

1. run `npm i`
2. run `npm run dev`

## Testing

1. run `npm test`
2. run `npm run test:watch` to run tests when code changes

## Assumptions/Comments/Improvements

1. No types were provided for the search result data. I have created a set of interfaces based off what was provided in the sample response, but this is obviously limited and not something I would use in production. <br>Normally, depending on the project, I would generate types from an openapi schema or similar, or build my own types from scratch using a tool like zod. I did consider generating a zod schema from JSON, but I thought that might be too much for this simple test project.
2. As there was no endpoint provided for this test project, only a sample JSON file. I have just returned the JSON data from the [useSearchResults.hook.ts](./src/pages/search-results/useSearchResults.hook.ts). <br> If I had an endpoint, I would normally use a library such as react-query here to fetch the data and store server state/manage cache etc and return that from the hook.
3. I've assumed that the qantas logo part of the app header and not specific to the search results screen. I've created a PageLayout template which includes the header. Maybe this is ove-the-top for a simple test, but it is structured in a way that would be easy to refactor if required. <br>
4. I've hardcoded the results summary message to be from 'Sydney'. Normally, this would come from a search input/prop but as we are using hardcoded results list here, it seemed okay to hard code the value.
5. Hotel Ratings (star/self)
   1. The sample ratings provided appear to be either whole (4) or half numbers (4.5). I have only types the ratingValue to be a number as I am not aware of the full requirements but this could be locked down further if needed.
   2. As I have a loose `number` restriction on ratingValue, it would be possible to give ratings of 4.12 or 4.78 for example. To handle these scenarios, I have rounded the remainder to determine if a half star is given. e.g. 0.45 would become 0 (no half star), 0.50 would be come 1 - (1 half star). There are tests covering this scenario and can easily be refactored if required.
   3. Assuming that the sample page-mock provided is using the same sample data, there appears to be a discrepancy with how half ratings are dealt with for star and self ratings. For instance, the `Courtyard by Marriott Sydney-North Ryde` has a self rating of 4.5 but in the page mock, it shows a grey circle in the 5th position (half rating position). This appears to be in contrast with the property `Metro Hotel Marlow Sydney Central` which has a star rating of 3.5. It shows a half star in the 4th position (half rating position) and a grey star in the final position. <br> I have made the decision to show a outlined circle for a half self rating and a grey circle for an 'empty' rating. This is to keep it consistent with the star rating system. If this is incorrect, it would be a simple refactor to change this.
6. 