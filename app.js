const express = require("express")
const dotenv = require("dotenv")
const { sequelize } = require("./models")
const userRoutes = require("./routes/user.route")
const customerRouts = require("./routes/costumer.Route")
const SetupSwagger = require("./swagger/swagger")

dotenv.config()

const app = express()
app.use(express.json())
    
app.use("/api", userRoutes)
app.use("/api", customerRouts)

SetupSwagger(app)

const PORT = process.env.PORT || 3000

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server run in PORT ${PORT}`);
    })
})