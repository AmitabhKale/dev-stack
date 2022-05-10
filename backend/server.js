const express = require('express');
const dotenv = require('dotenv').config()
const userRoutes = require('./routes/userRoutes')
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express()

connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.send("API is Running...")
})

app.use('/api/users', userRoutes)


app.use(errorHandler)

const PORT = 5000;

app.listen(PORT, ()=> {
    console.log(`Server is listening on PORT ${PORT}`);
})