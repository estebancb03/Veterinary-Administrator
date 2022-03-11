import express from 'express';
import { 
    toRegister,
    profile,
    toConfirm,
    authenticate
} from '../controllers/veterinaryController.js';

const router = express.Router();
router.post('/', toRegister);
router.get('/profile', profile);
router.get('/confirm/:token', toConfirm);
router.post('/login', authenticate);

export default router;