const express = require('express');
const mysqli = require('mysql');
const app = express();
const cors = require('cors');

app.use(cors());

const database = mysqli.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_sekolah',
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


app.listen(3001,()=>{
    console.log("server is running");
})