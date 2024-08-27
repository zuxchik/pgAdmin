const Joi = require("joi")

const validetionCustomer = (customer) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(20).required(),
        name: Joi.string().email().required(),
        name: Joi.string().min(5).max(20).required()
    })
    return schema.validate(customer)
}

module.exports = { validetionCustomer }