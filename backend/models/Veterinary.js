import mongoose from 'mongoose';
import generateID from '../helpers/generateID.js';

const veterinarySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String, 
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        default: null,
        trim: true
    },
    web: {
        type: String, 
        default: null
    },
    token: {
        type: String,
        default: generateID()
    },
    confirmed: {
        type: Boolean,
        default: false
    }
});

const Veterinary = mongoose.model('Veterinary', veterinarySchema);
export default Veterinary;