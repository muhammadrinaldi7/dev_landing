import express  from 'express';
import mysqli from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import fs from 'fs';


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const database = mysqli.createConnection({
    host: process.env.DB_HOST, // Menggunakan variabel lingkungan untuk host
    user: process.env.DB_USERNAME, // Menggunakan variabel lingkungan untuk nama pengguna
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

// app.get("/api/v1/cars/:id", (req, res) => {
//     const carId = req.params.id;
//     database.query("SELECT * FROM cars WHERE id = ?", [carId], (err, result) => {
//       if (err) throw err;
//       if (result.length === 0) {
//         return res.status(404).json({ success: false, message: "Car not found" });
//       }
//       res.json({
//         status: 200,
//         success: true,
//         data: result[0],
//       });
//     });
//   });

// CRUD
// MENAMBAHKAN MOBIL ATAU FITUR CREATE ATAU API UNTUK CREATE MOBIL
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/'); // Direktori penyimpanan file
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname); // Nama file yang disimpan
//     }
//   });
//   const upload = multer({ storage: storage });

// // ======================CREATE START ==============================

// app.post("/api/v1/cars", upload.single('image'), (req, res) => {
//     const { make, model, year, color, registration_number, daily_rate, status } = req.body;
//     const image_url = `/uploads/${req.file.filename}`;
  
//     database.query(
//       "INSERT INTO cars (make, model, year, color, registration_number, daily_rate, image_url, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
//       [make, model, year, color, registration_number, daily_rate, image_url, status],
//       (err, result) => {
//         if (err) {
//           // Hapus file yang sudah diunggah jika terjadi kesalahan saat menyimpan ke database
//           fs.unlinkSync(req.file.path);
//           console.log('error', err);
//           return res.status(500).json({ success: false, message: "Gagal menambahkan mobil", error: err });
//         }
//         res.status(201).json({
//           success: true,
//           message: "Mobil berhasil ditambahkan",
//           data: { car_id: result.insertId, make, model, year, color, registration_number, daily_rate, image_url, status },
//         });
//       }
//     );
//   });
// // ======================CREATE END ==============================


//   app.put("/api/v1/cars/:id", (req, res) => {
//     const carId = req.params.id;
//     const { make, model, year, registration_number, daily_rate, status, image_url } = req.body;
  
//     database.query(
//       "UPDATE cars SET make = ?, model = ?, year = ?, registration_number = ?, daily_rate = ?, status = ?, image_url = ? WHERE id = ?",
//       [make, model, year, registration_number, daily_rate, status, image_url, carId],
//       (err, result) => {
//         if (err) throw err;
//         if (result.affectedRows === 0) {
//           return res.status(404).json({ success: false, message: "Car not found" });
//         }
//         res.json({
//           success: true,
//           message: "Car updated successfully",
//         });
//       }
//     );

//   });

//   app.delete("/api/v1/cars/:id", (req, res) => {
//     const carId = req.params.id;
  
//     database.query("DELETE FROM cars WHERE id = ?", [carId], (err, result) => {
//       if (err) throw err;
//       if (result.affectedRows === 0) {
//         return res.status(404).json({ success: false, message: "Car not found" });
//       }
//       res.json({
//         success: true,
//         message: "Car deleted successfully",
//       });
//     });
//   });
  

// app.get("/api/v1/users", (req, res)=>{
//     database.query("SELECT * FROM user", (err, result)=>{
//         if(err) throw err;
//         res.json({
//             success: true,
//             message:"success",
//             status: 200,
//             data: result,
//         });
//     });
// });

// app.post("/api/v1/login", (req, res) => {
//     const { username, password } = req.body;
//     if (!username || !password) {
//         return res.status(400).json({ message: "Username and password are required" });
//     }

//     database.query("SELECT * FROM user WHERE username = ?", [username], (err, result) => {
//         if (err) throw err;
//         if (result.length === 0) {
//             return res.status(401).json({ message: "Akun Tidak Ditemukan" });
//         }

//         const user = result[0];
//         // Compare plain text password
//         if (password !== user.password) {
//             return res.status(401).json({ message: "Password Salah" });
//         }

//         const token = jwt.sign({ username }, 'your_secret_key', { expiresIn: '1h' });

//         res.json({
//             success: true,
//             message: "Login successful",
//             status: 200,
//             data: { token },
//         });
//     });
// });

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("server is running");
})