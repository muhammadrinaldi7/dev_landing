import Users from "../models/UserModel.js";
import path from 'path';
import fs from 'fs';

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await Users.findOne({ 
        where: 
        { id: req.params.id }
     });
    res.json(user);
  } catch (error) {
    res.status(502).json({ message: error.message });
  }
};

export const saveUser = async (req, res) => {
   const username = req.body.username;
   const email = req.body.email;
   const password = req.body.password;
   if(!username || !email || !password) return res.status(400).json({message: 'Username, email, and password are required'});
   try {
    await Users.create({username:username,email:email,password:password});
    res.status(201).json({message: 'User created successfully'});
   } catch (error) {
    res.status(501).json({message: error.message});
   }
};

export const loginUser = async (req, res) => {
   const username = req.body.username;
   const password = req.body.password;
   if(!username || !password) return res.status(400).json({message: 'username and password are required'});
   try {
    const user = await Users.findOne({ where: { username: username } });
    if(!user) return res.status(404).json({message: 'User not found'});
    if(user.password !== password) return res.status(401).json({message: 'Invalid password'});
    res.status(200).json({
            success: true,
            message: "Login successful",
            data: { token: "1234567890" }
        });
   } catch (error) {
    res.status(500).json({message: error.message});
   }
};

export const updateUser = async (req, res) => {
   
};

export const deleteUser = async (req, res) => {
  
};

