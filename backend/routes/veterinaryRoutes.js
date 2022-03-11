import express from 'express';
import { 
    toRegister,
    profile,
    toConfirm
} from '../controllers/veterinaryController.js';

const router = express.Router();
router.post('/', toRegister);
router.get('/profile', profile);
router.get('/confirm/:token', toConfirm);

export default router;