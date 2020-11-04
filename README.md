# Postcode to Latitude and Longitude

Returns latitude and longitude information of a given post code or multiple postcodes
Uses [Postcode.io](https://postcodes.io/) to get the latitude and longitude from postcodes.

## Technical Details

This built using [Node](https://nodejs.org/en/) and [Express](https://expressjs.com/). It also uses
[Axios](https://github.com/axios/axios) to fetch data from [Postcode.io](https://postcodes.io/). The
tests are written in [Jest](https://jestjs.io/)

## Running Locally

To run the app locally make sure you have [NPM](https://www.npmjs.com/get-npm) installed.
You can `npm run dev` to run the application locally. This will spin up on `localhost:3000`

## Endpoints

You can do a `GET` request on `localhost:3000/postcode/:postcode` to return the latitude and longitude
of single postcode. You do a `POST` request on `localhost:3000/postcode` with an array of postcodes in the body to get
the latitudes and longitudes of multiple postcodes.

## Example Requests

`curl --location --request GET 'http://localhost:3000/postcode/NE301DP'`

``curl --location --request POST 'localhost:3000/postcodes' \`
--header 'Content-Type: application/json' \
--data-raw '{
"postcodes" : ["OX49 5NU", "M32 0JG", "NE30 1DP"]
}```

## Testing

[Jest](https://jestjs.io/) is being used for the unit testing.
You can run the tests locally my running the command `npm run test`

## Building and Compiling

Using the command `npm run build` will compile down to ES5 into dist folder. Then using
the command `npm run test` will serve the compiled code.
