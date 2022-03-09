import mongoose from 'mongoose';

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
        type: String
    },
    confirmed: {
        type: Boolean,
        default: false
    }
});

const Veterinary = mongoose.model('Veterinary', veterinarySchema);
export default Veterinary;