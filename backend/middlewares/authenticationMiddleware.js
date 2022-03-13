import jwt from 'jsonwebtoken';
import Veterinary from '../models/Veterinary.js';

const checkAuthentication = async (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.veterinary = await Veterinary.findById(decoded.id).select(
                "-password -token -confirmed"
            );
            return next();
        } catch(exception) {
            const error = new Error('Invalid token');
            return res.status(403).json({ message: error.message });
        }
    } 
    if(!token) {
        const error = new Error('Invalid token or bearer');
        res.status(403).json({ message: error.message });
    }
    next();
}

export default checkAuthentication;