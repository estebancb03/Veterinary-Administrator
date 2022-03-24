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
    if(!patient) {
        const error = new Error('Patient not found');
        res.status(404).json({ message: error.message });
    }
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

const updatePatient = async (req, res) => {
    const { id } = req.params;
    const patient = await Patient.findById(id);
    if(!patient) {
        const error = new Error('Patient not found');
        res.status(404).json({ message: error.message });
    }
    if(patient.veterinary._id.toString() !== req.veterinary._id.toString()) {
        const error = new Error('Invalid action');
        return res.json({ message: error.message });
    }
    patient.name = req.body.name || patient.name;
    patient.owner = req.body.owner || patient.owner;
    patient.email = req.body.email || patient.email;
    patient.date = req.body.date || patient.date;
    patient.symptom = req.body.symptom || patient.symptom;
    try {
        const updatedPatient = await patient.save();
        res.json(updatedPatient);
    } catch(exception) {
        console.error(exception);
    }
}

const deletePatient = async (req, res) => {
    const { id } = req.params;
    const patient = await Patient.findById(id);
    if(!patient) {
        const error = new Error('Patient not found');
        res.status(404).json({ message: error.message });
    }
    if(patient.veterinary._id.toString() !== req.veterinary._id.toString()) {
        const error = new Error('Invalid action');
        return res.json({ message: error.message });
    }
    try {
        await patient.deleteOne();
        res.json({ message: 'Patient deleted' });
    } catch (exception) {
        console.error(exception);
    }
}

export { 
    addPatient, 
    getPatient,
    getPatients,
    updatePatient,
    deletePatient
}