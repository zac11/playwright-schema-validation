# playwright-schema-validation
Demonstrate how to use JSON Schema validation with Playwright

## JSON Schema Validation

JSON Schema validation has to be one of the most important checks when you're working with JSON data - it may be in development or while doing API tests.
It's a very good way of ensuring that the data obtained from JSON, over a network, maintains the data sanctity.

## Schema Validation in Playwright

By default, out of the box, Playwright doesn't gives you the in-built ability ( at least that I know) of validating the schema of JSON, when running the 
API tests. As such, you've to rely on external libraries like `zod`, `ajv`, `joi`, `yup`, `typebox` to validate the json schema.

In Rest Assured, there is an inbuild method to match JSON Schema.

```
response.then().assertThat().body(JsonSchemaValidator.matchesJsonSchema(new File("filepath_to_schema_file")));
```

## API Tests

The API tests here use the Restful Booker service and contains test code that is available here - 

https://www.lambdatest.com/learning-hub/playwright-api-testing

## Schema Validation using ZOD

`zod` is a great library that you can use to match JSON Schema against your response data from the API's. 
It provides very rich API and extended functionalities on top of the `joi` library that exists for schema validation.

You need to create your own schema and then match it against your data. You can use this link to convert your existing JSON Schema to a `zod` compatible schema

https://stefanterdell.github.io/json-schema-to-zod-react/

For this test, the `zod` schema is at `./schemaFiles/zodSchema.ts`
To run the tests for validating the response run `npx playwright test jsonvalidation_w_zod.spec.ts`



## Schema Validation using JOI
`joi` is one of the older but still fantastic library for parsing and validating the JSON Schema against the response data.
For our tests, we have created a `joi` schema at `./schemaFiles/joiSchema.ts`
To run the tests for validating the response run `npx playwright test jsonvalidation_w_joi.spec.ts`


## Useful Links for reading
- https://zod.dev/?id=api-libraries
- https://www.bitovi.com/blog/comparing-schema-validation-libraries-ajv-joi-yup-and-zod
- https://github.com/StefanTerdell/json-schema-to-zod
- https://softchris.github.io/pages/joi.html#building-a-middleware
- https://www.bacancytechnology.com/blog/joi-validation-in-nodejs-and-express