require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const errorController = require("./controller/errorController");
const blogRouter = require("./router/blogRouter");
const MONGO_DB_URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@airbnb.dlqmf.mongodb.net/${process.env.MONGO_DB_DATABASE}`;


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use('/api',blogRouter);
app.use(errorController.get404);








const PORT = process.env.PORT || 3000;
mongoose.connect(MONGO_DB_URL).then(() => {
    app.listen(PORT,() => {
        console.log(`Server running at: http://localhost:${PORT}`);
    });
});
