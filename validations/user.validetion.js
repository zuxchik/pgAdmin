const Joi = require("joi")

const validateUser = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(20).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(5).max(20).required()
    })
    return schema.validate(user)
}

module.exports = { validateUser }