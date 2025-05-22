const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/student.route');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true,
};

app.use(bodyParser.json());
app.use(cors());

const mongoURI = 'mongodb+srv://akshat:akshat123@cluster0.com1s.mongodb.net/viva?retryWrites=true&w=majority&appName=Cluster0';

mongoose
    .connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});