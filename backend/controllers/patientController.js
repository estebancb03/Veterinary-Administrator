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

const getPatients = async (req, res) => {
    const patients = await Patient.find().where('veterinary').equals(req.veterinary);
    res.json(patients);
}

export { addPatient, getPatients }