const { User } = require("../models/user.model")
const { validetionUser } = require("../validations/user.validetion")

exports.createUser = async (req, res) => {
    const { error } = validetionUser(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const user = await User.create(rea.body)
        res.status(201).send(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getUser = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(201).send(users)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getUserBiId = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) return res.status(404).send("User not faund")
        res.status(200).send(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataUser = async (req, res) => {
    const { error } = validetionUser(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const user = await User.findByPk(req.params.id)
        if (!user) return res.status(404).send("User not fa unt")


        await user.updata(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) return res.status(404).send("User not fa unt")


        await user.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

