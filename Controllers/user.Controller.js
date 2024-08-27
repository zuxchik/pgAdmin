const { User } = require("../models")
const { validateUser } = require("../validations/user.validetion")

exports.createUser = async (req, res) => {
    const { error } = validateUser(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const users = await User.create(req.body)
        res.status(201).send(users)
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
        const users = await User.findByPk(req.params.id)
        if (!users) return res.status(404).send("User not faund")
        res.status(200).send(users)
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

