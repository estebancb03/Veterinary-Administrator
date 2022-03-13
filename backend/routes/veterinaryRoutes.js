import express from 'express';
import { 
    toRegister,
    profile,
    toConfirm,
    authenticate
} from '../controllers/veterinaryController.js';
import checkAuthentication from '../middleware/authenticationMiddleware.js'

const router = express.Router();
//Public access routes
router.post('/', toRegister);
router.get('/confirm/:token', toConfirm);
router.post('/login', authenticate);
//Private access routes
router.get('/profile', checkAuthentication, profile);

export default router;