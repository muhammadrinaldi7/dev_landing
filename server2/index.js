import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import CarsRoute from "./routes/CarsRoute.js";
import UsersRoute from "./routes/UserRoute.js";

const app = express();

app.use(cors());
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
    console.log(error);
  }
});
