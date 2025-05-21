const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const participantRoutes = require('./router/participantRoutes');

const app = express();

app.use(bodyParser.json());

const mongoURI = 'mongodb+srv://akshat:akshat123@cluster0.com1s.mongodb.net/viva?retryWrites=true&w=majority&appName=Cluster0';

mongoose
    .connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});