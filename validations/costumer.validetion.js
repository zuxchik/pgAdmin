const Joi = require("joi")

const validetionCustomer = (customer) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(20).required(),
        email: Joi.string().email().required(),
        address: Joi.string().min(5).max(20).required()
    })
    return schema.validate(customer)
}

module.exports = { validetionCustomer }