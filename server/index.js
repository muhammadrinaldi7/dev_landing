const express = require('express');
const mysqli = require('mysql');
const app = express();
const cors = require('cors');

app.use(cors());

const database = mysqli.createConnection({
    host: 'localhost',
    user: 'id21722987_devrn',
    password: '#Mrinaldi1234',
    database: 'id21722987_db_devrn',
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