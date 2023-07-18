import Joi from "joi";

const defaultSchemaJOI = Joi.object().keys({
    bookingid: Joi.number().required(),
    booking: Joi.object().keys({
        firstname: Joi.string().min(1).max(30).required(),
        lastname: Joi.string().required(),
        totalprice: Joi.number().required(),
        depositpaid: Joi.boolean().required(),
        bookingdates: Joi.object().keys({
            checkin: Joi.string().required(),
            checkout: Joi.string().required()
        }),
        additionalneeds : Joi.string()

    })
})

export default defaultSchemaJOI;
