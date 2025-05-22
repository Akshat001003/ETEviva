const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    courseName: {
        type: String,
        required: true,
        enum:['JavaScript', 'Python', 'Java', 'C++', 'C#', 'PHP', 'Ruby', 'Swift']
    },
    enrollDate: {
        type: Date,
    }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
