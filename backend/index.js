import express from 'express';

const app = express();
const port = 4000;

app.use('/', (req, res) => {
    res.send('Hello world');
});
app.listen(port, () => {
    console.log(`Server running on port ${ port }`);
});