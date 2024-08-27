const Sequelize = require("sequelize")
const sequelize = require("../config/database")

const User = require("./user.model")(sequelize, Sequelize)
const Customer = require("./customer.model")(sequelize, Sequelize)

module.exports = { User, Customer, sequelize }