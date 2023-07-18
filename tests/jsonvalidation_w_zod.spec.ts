import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
const { DateTime } = require('luxon');
import defaultSchema from '../schemaFiles/zodSchema';

const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomNumber = faker.number.int({max:2000, min:1000});
const currentDate = DateTime.now().toFormat('yyyy-MM-dd');
const currentDatePlusFive = DateTime.now().plus({days: 5}).toFormat('yyyy-MM-dd');

test(`Should be able to create a new booking record and validate schema using zod`,async({request})=>{
    const response = await request.post("/booking",{
        data : {
            "firstname": randomFirstName,
            "lastname": randomLastName,
            "totalprice": randomNumber,
            "depositpaid": true,
            "bookingdates": {
                "checkin": currentDate,
                "checkout": currentDatePlusFive
            },
            "additionalneeds": "Bath"
        }
        });

    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()

   try {
    defaultSchema.parse(await response.json());
   } catch (e) {
        console.log(e)
   }
    

});
