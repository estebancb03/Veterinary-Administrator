import express from 'express';
import { 
    toRegister,
    profile,
    toConfirm,
    authenticate,
    recoverPassword,
    verifyToken,
    newPassword,
    updateProfile
} from '../controllers/veterinaryController.js';
import checkAuthentication from '../middlewares/authenticationMiddleware.js'

const router = express.Router();
//Public access routes
router.post('/', toRegister);
router.get('/confirm-account/:token', toConfirm);
router.post('/login', authenticate);
router.post('/recover-password', recoverPassword);
router.get('/recover-password/:token', verifyToken);
router.post('/recover-password/:token', newPassword);
//Private access routes
router.get('/profile', checkAuthentication, profile);
router.put('/profile/:id', checkAuthentication, updateProfile);

export default router;