import { z } from "zod";

const defaultSchema= z.object({
  bookingid: z.number().int(),
  booking: z.object({
    firstname: z.string(),
    lastname: z.string(),
    totalprice: z.number().int(),
    depositpaid: z.boolean(),
    bookingdates: z.object({ checkin: z.string(), checkout: z.string() }),
    additionalneeds: z.string(),
  }),
});

export default defaultSchema;
