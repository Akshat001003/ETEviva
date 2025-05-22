const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');
const { enrollStudent } = studentController;

router.post('/enroll' , enrollStudent);

module.exports = router;