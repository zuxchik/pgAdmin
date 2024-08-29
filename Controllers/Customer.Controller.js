const {Customer} = require("../models")
const { validetionCustomer } = require("../validations/costumer.validetion")

exports.createCustomer = async (req, res) => {
    const { error } = validetionCustomer(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const customers = await Customer.create(req.body)
        res.status(201).send(customers)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getCustomer = async (req, res) => {
    try {
        const Customers = await Customer.findAll()
        res.status(201).send(Customers)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.getCustomerBiId = async (req, res) => {
    try {
        const Customers = await Customer.findByPk(req.params.id)
        if (!Customers) return res.status(404).send("Customers not faund")
        res.status(200).send(Customers)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.updataCustomer = async (req, res) => {
    const { error } = validetionCustomer(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const Customers = await Customer.findByPk(req.params.id)
        if (!Customers) return res.status(404).send("Customer not fa unt")


        await Customers.updata(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.deletCustomer = async (req, res) => {
    try {
        const Customers = await Customer.findByPk(req.params.id)
        if (!Customers) return res.status(404).send("Customer not fa unt")


        await Customers.destroy()
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err.message)
    }
}

