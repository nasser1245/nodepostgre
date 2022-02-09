const express = require("express");
const cors = require("cors");

const app = express();
const corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:"true"}));

app.get("/",(req,res)=>{
    res.json({message:"Welcome to nasser1245 codeSample."});
});

const PORT  = process.env.port || 3000;
 
app.listen(PORT , ()=>{
    console.log(`Listening on port ${PORT }`);
});