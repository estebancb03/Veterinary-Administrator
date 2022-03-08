import mongoose from 'mongoose';

const connection = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const url = `${ db.connection.host }:${ db.connection.port }`;
        console.log(`MongoDB running on ${ url }`);
    } catch(exception) {
        console.error(exception);
        process.exit(1);
    }
};

export default connection;