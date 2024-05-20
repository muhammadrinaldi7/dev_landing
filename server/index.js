require('dotenv').config();
const express = require('express');
const mysqli = require('mysql');
const app = express();
const cors = require('cors');

app.use(cors());

const database = mysqli.createConnection({
    host: process.env.DB_HOST, // Menggunakan variabel lingkungan untuk host
    user: process.env.DB_USER, // Menggunakan variabel lingkungan untuk nama pengguna
    password: process.env.DB_PASSWORD, // Menggunakan variabel lingkungan untuk kata sandi
    database: process.env.DB_NAME,
});

database.connect(err => {
    if(err) throw err;
    console.log('success konek');
})

app.get("/api/v1/menus",(req, res)=>{
    console.log("GET API SISWA");
    database.query("SELECT * FROM menu", (err, result)=>{
        if(err) throw err;
        res.json({
            success: true,
            message:"success",
            data: result,
        });
    });
});

app.get("/api/v1/cars", (req, res)=>{
    database.query("SELECT * FROM cars", (err, result)=>{
        if(err) throw err;
        res.json({
            data: result,
        });
    });
});

const port = process.env.PORT || 3001;

app.listen(port,()=>{
    console.log("server is running");
})