const express = require("express");
require("dotenv").config();
const cors = require("cors");

const mongoose = require("mongoose");

const bookingsRoutes = require("./Routes/Bookings");

const app = express();
const uri = process.env.DB_URI;
const port = process.env.PORT; 
 
mongoose.connect(uri) 
.then(()=>console.log("DB connected successfully"))
.catch((err)=> console.log(err))

app.use(cors());
app.use(express.json());

app.use('/api',bookingsRoutes);


app.listen(port, () => console.log(`Listening to port ${port}`));  
 