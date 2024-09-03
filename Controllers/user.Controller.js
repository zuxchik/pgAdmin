const { User, Customer } = require("../models")
const { validateUser } = require("../validations/user.validetion")

const sequelize = require("../config/database")
User.associate(sequelize.models)
Customer.associate(sequelize.models)

exports.createUser = async (req, res) => {
    const { error } = validateUser(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const Users = await User.create(req.body)
        res.status(201).send(Users)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getUser = async (req, res) => {
    try {
        const Users = await User.findAll()
        res.status(201).send(Users)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getUserBiId = async (req, res) => {
    try {
        const users = await User.findByPk(req.params.id, {
            include: {
                model: Customer,
                as: "customer"
            },
        })
        if (!users) return res.status(404).send("Users not faund")
        res.status(200).send(users)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataUser = async (req, res) => {
    const { error } = validateUser(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const Users = await User.findByPk(req.params.id)
        if (!Users) return res.status(404).send("User not fa unt")


        await Users.updata(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletUser = async (req, res) => {
    try {
        const Users = await User.findByPk(req.params.id)
        if (!Users) return res.status(404).send("User not fa unt")


        await Users.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

