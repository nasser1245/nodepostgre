const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({extended:"true"}));
app.use(express.json());
const corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.get("/",(req,res)=>{
    res.json({message:"Welcome to nasser1245 codeSample."});
});
require("./routes/tutorial.routes")(app);

const PORT  = process.env.port || 3000;

app.listen(PORT , ()=>{
    console.log(`Listening on port ${PORT}`);
});