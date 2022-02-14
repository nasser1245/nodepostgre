const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize('postgres://postgres:P@ssw0rd@localhost:5432/testdb') // Example for postgres

test_connection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
const app = express();
app.use(express.urlencoded({ extended: "true" }));
app.use(express.json());
const corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to nasser1245 codeSample." });
});
require("./routes/tutorial.routes")(app);

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Test listening on port ${PORT}`);
    test_connection();
});