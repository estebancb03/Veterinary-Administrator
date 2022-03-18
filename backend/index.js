import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connection from './config/db.js';
import patientRoutes from './routes/patientRoutes.js';
import veterinaryRoutes from './routes/veterinaryRoutes.js';

const app = express();
const port = process.env.PORT || 4000;

dotenv.config();
connection();
const allowedDomains = [process.env.FRONTEND_URL];
const corsOptions = {
    origin: function(origin, callback) {
        if(allowedDomains.indexOf(origin) !== -1) 
            callback(null, true);
        else 
            callback(new Error('Not allowed by CORS'));
    }
}

app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/patients', patientRoutes);
app.use('/api/veterinarians', veterinaryRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${ port }`);
});