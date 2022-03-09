import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
    res.send('api/veterinarians');
});
router.get('/login', (req, res) => {
    res.send('api/veterinarians/login');
});

export default router;