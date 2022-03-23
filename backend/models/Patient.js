import mongoose from 'mongoose';

const patientSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        owner: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true,
            default: Date.now()
        },
        symptom: {
            type: String,
            reqired: true
        },
        veterinary: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Veterinary'
        }
    }, 
    {
        timestamps: true,
    }
);

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;