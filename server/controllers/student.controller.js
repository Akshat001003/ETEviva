const Student = require("../models/student.model");

const enrollStudent = async (req, res) => {
    let { name, email, courseName } = req.body;

    name = name?.trim();
    email = email?.trim();
    courseName = courseName?.trim();

    if (!name || !email || !courseName) {
        return res.status(400).json({ message: "All fields are required" });
    }

    if (name.length > 20) {
        return res.status(400).json({ message: "Name is too long (max 20 characters)" });
    }

    if (/\s{2,}/.test(name)) {
        return res.status(400).json({ message: "Name must not contain consecutive spaces" });
    }

    if (!email.endsWith("@gmail.com")) {
        return res.status(400).json({ message: "Email must be a Gmail address" });
    }

    try {
        const newStudent = new Student({
            name,
            email,
            courseName,
            enrollDate: new Date(),
        });

        await newStudent.save();
        return res.status(201).json({ message: "Student enrolled successfully", student: newStudent });
    } catch (error) {
        console.error("Error enrolling student:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    enrollStudent,
};