import express  from "express";
import checkAuthentication from "../middlewares/authenticationMiddleware.js";
import { 
    addPatient, 
    getPatient,
    getPatients, 
    updatePatient,
    deletePatient
} from "../controllers/patientController.js";

const router = express.Router();

router.get('/', checkAuthentication, getPatients);
router.post('/', checkAuthentication, addPatient);
router.get('/:id', checkAuthentication, getPatient);
router.put('/:id', checkAuthentication, updatePatient);
router.delete('/:id', checkAuthentication, deletePatient);

export default router;