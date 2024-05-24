import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import CarsRoute from "./routes/CarsRoute.js";
import UsersRoute from "./routes/UserRoute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "Origin", "x-access-token"],
}));
app.use(express.json());
app.use(fileUpload());

app.use(express.static('public'));
app.use(CarsRoute);
app.use(UsersRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  try {
    console.log(`Server running on port ${PORT}..`);
  } catch (error) {
    console.log("Error Bagian Index:", error);
  }
});
