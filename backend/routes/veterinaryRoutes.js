import express from 'express';
import { 
    toRegister,
    profile 
} from '../controllers/veterinaryController.js';

const router = express.Router();
router.post('/', toRegister);
router.get('/profile', profile);

export default router;