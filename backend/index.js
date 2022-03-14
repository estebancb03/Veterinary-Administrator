import dotenv from 'dotenv';
import express from 'express';
import connection from './config/db.js';
import patientRoutes from './routes/patientRoutes.js';
import veterinaryRoutes from './routes/veterinaryRoutes.js';

const app = express();
const port = process.env.PORT || 4000;

dotenv.config();
connection();

app.use(express.json());
app.use('/api/patients', patientRoutes);
app.use('/api/veterinarians', veterinaryRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${ port }`);
});