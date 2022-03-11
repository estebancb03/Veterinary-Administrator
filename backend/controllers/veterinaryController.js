import mongoose from "mongoose";
import Veterinary from "../models/Veterinary.js";

const toRegister = async (req, res) => {
    const { email } = req.body;
    //To prevent duplicated users
    const userExist = await Veterinary.findOne({ email });
    if(userExist) {
        const error = new Error('This user already exists');
        return res.status(400).json({ message: error.message });
    }
    try {
        const veterinary = new Veterinary(req.body);
        const savedVeterinary = await veterinary.save();
        res.json(savedVeterinary);
    } catch(exception) {
        console.error(exception);
    }
}

const profile = (req, res) => {
    res.json({ message: 'Showing profile...' });
}

const toConfirm = async (req, res) => {
    const { token } = req.params;
    const userToConfirm = await Veterinary.findOne({ token });
    console.log(userToConfirm);
    if(!userToConfirm) {
        const error = new Error('Invalid token');
        return res.status(404).json({ message: error.message });
    }
    try {
        userToConfirm.token = null;
        userToConfirm.confirmed = true;
        await userToConfirm.save();
        res.json({ message: 'User already confirmed' });
    } catch(exception) {
        console.error(exception);
    }
}

export {
    toRegister,
    profile,
    toConfirm
}