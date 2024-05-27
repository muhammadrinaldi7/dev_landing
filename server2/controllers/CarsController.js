import Cars from "../models/CarsModel.js";
import path from 'path';
import fs from 'fs';
import multer from 'multer';
export const getAllCars = async (req, res) => {
  try {
    const cars = await Cars.findAll();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCarById = async (req, res) => {
  try {
    const car = await Cars.findOne({ 
        where: 
        { id: req.params.id }
     });
    res.json(car);
  } catch (error) {
    res.status(502).json({ message: error.message });
  }
};

const upload = multer({ dest: 'public/images/' });
export const saveCar = async (req, res) => {
  const { make, model, year, color, registration_number, daily_rate, status } = req.body;
  const { file } = req;
  const allowedTypes = ['.jpg', '.png', '.jpeg', '.gif'];
  if(!file || !allowedTypes.includes(path.extname(file.originalname).toLowerCase())) {
    return res.status(422).json({message: 'Image type not allowed'});
  }
  if(file.size > 5000000) {
    return res.status(422).json({message: 'Image too large'});
  }
  upload.single('file')(req, res, async (err) => {
    if(err) {
      return res.status(502).json({message: err.message});
    }
    try {
      const url = `${req.protocol}://${req.get('host')}/images/${file.filename}`;
      await Cars.create({
        make, model, year, color, registration_number, daily_rate, image: file.filename, url, status
      });
      res.status(201).json({message: 'Car created successfully', url});
    } catch (error) {
      res.status(501).json({message: error.message});
    }
  });
};

export const updateCar = async (req, res) => {
    const car = await Cars.findOne({ where: { id: req.params.id } });
    if(!car) return res.status(404).json({message: 'Car not found'});
    let filename = "";
    if(req.files===null){
        filename = Cars.image;
    }else{
        const file = req.files.file;
        const filesize = file.data.length;
        const ext = path.extname(file.name);
        filename = file.md5 + ext;
        const allowedTypes = ['.jpg','.png','.jpeg','.gif'];

        if(!allowedTypes.includes(ext.toLowerCase())) return res.status(422).json({message: 'Image type not allowed'});
        if(filesize > 5000000) return res.status(422).json({message: 'Image too large'});
        
        const filepath = `./public/images/${car.image}`;
        fs.unlinkSync(filepath);
        file.mv(`./public/images/${filename}`,(err)=>{
            if(err) return res.status(500).json({message: err.message});
        });
    }
    const make = req.body.make;
    const model = req.body.model;
    const year = req.body.year;
    const color = req.body.color;
    const registration_number = req.body.registration_number;
    const daily_rate = req.body.daily_rate;
    const status = req.body.status;
    const url = `${req.protocol}://${req.get('host')}/images/${filename}`;
    try {
        await Cars.update({
            make:make,
            model:model,
            year:year,
            color:color,
            registration_number:registration_number,
            daily_rate:daily_rate,
            image:filename,
            url:url,
            status:status,
        },{ where: { id: req.params.id } });
        res.status(203).json({message: 'Car updated successfully'});
    } catch (error) {
        res.status(503).json({message: error.message});
    }
};

export const deleteCar = async (req, res) => {
  const car = await Cars.findOne({ where: { id: req.params.id } });
  if(!car) return res.status(404).json({message: 'Car not found'});
  try {
    const filepath = `./public/images/${car.image}`;
    fs.unlinkSync(filepath);
    await Cars.destroy({ where: { id: req.params.id } });
    res.status(202).json({ message: "Car deleted successfully" });
  } catch (error) {
    res.status(502).json({ message: error.message });
  }
};


