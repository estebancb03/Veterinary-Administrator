import mongoose from "mongoose";
import Veterinary from "../models/Veterinary.js";
import generateID from '../helpers/generateID.js';
import generateJWT from "../helpers/generateJWT.js";

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
    const { veterinary } = req;
    res.json({ profile: veterinary });
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

const authenticate = async (req, res) => {
    const { email, password } = req.body;
    const userExist = await Veterinary.findOne({ email });
    if(!userExist) {
        const error = new Error('User not found');
        return res.status(403).json({ message: error.message });
    }
    if(!userExist.confirmed) {
        const error = new Error('Account not confirmed');
        return res.status(403).json({ message: error.message });
    }
    if(await userExist.checkPassword(password)) {
        res.json({ token: generateJWT(userExist.id) });
    } else {
        const error = new Error('Password is not correct');
        return res.status(403).json({ message: error.message });
    }
}

const recoverPassword = async (req, res) => {
    const { email } = req.body;
    const userExist = await Veterinary.findOne({ email });
    if(!userExist) {
        const error = new Error('User doesnt exist');
        return res.status(400).json({ message: error.message });
    }
    try {
        userExist.token = generateID();
        await userExist.save();
        res.json({ message: 'We have sent an email with the instructions'});
    } catch(exception) {
        console.error(exception);
    }
}

const verifyToken = async (req, res) => {
    const { token } = req.params;
    const validToken = await Veterinary.findOne({ token });
    if(validToken) {
        res.json({ message: 'Valid token then the user exist' });
    } else {
        const error = new Error('Invalid token');
        return res.status(400).json({ message: error.message });
    }
}

export {
    toRegister,
    profile,
    toConfirm,
    authenticate,
    recoverPassword,
    verifyToken,
    newPassword
}