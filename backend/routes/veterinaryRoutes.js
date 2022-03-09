import express from 'express';
import { 
    toRegister,
    profile 
} from '../controllers/veterinaryController.js';

const router = express.Router();
router.get('/', toRegister);
router.get('/profile', profile);

export default router;