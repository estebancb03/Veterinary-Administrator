import Patient from "../models/Patient.js";

const addPatient = async (req, res) => {
    const patient = new Patient(req.body);
    patient.veterinary = req.veterinary._id;
    try {
        const savedPatient = await patient.save();
        res.json(savedPatient);
    } catch(exception) {
        console.error(exception);
    }
}

const getPatient = async (req, res) => {
    const { id } = req.params;
    const patient = await Patient.findById(id);
    if(patient.veterinary._id.toString() !== req.veterinary._id.toString()) {
        const error = new Error('Invalid action');
        return res.json({ message: error.message });
    }
    res.json(patient);
}

const getPatients = async (req, res) => {
    const patients = await Patient.find().where('veterinary').equals(req.veterinary);
    res.json(patients);
}

export { 
    addPatient, 
    getPatient,
    getPatients
}