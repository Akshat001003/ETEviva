import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    courseName: ''
  });

  const courses = ['JavaScript', 'Python', 'Java', 'C++', 'C#', 'PHP', 'Ruby', 'Swift'];

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/students/enroll', formData);
      toast.success(res.data.message);
      setFormData({ name: '', email: '', courseName: '' });
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Enrollment failed';
      toast.error(errorMessage);
    }
  };

  return (
    <div style={styles.container}>
      <Toaster position="top-center" reverseOrder={false} />
      <h2>Enroll Student</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input 
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <select 
          name="courseName" 
          value={formData.courseName} 
          onChange={handleChange} 
          required 
          style={styles.select}
        >
          <option value="">Select a course</option>
          {courses.map(course => (
            <option key={course} value={course}>{course}</option>
          ))}
        </select>
        <button type="submit" style={styles.button}>Enroll</button>
      </form>
    </div>
  );
};

const styles = {
  container: { width: '300px', margin: 'auto', paddingTop: '2rem', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.5rem', fontSize: '1rem' },
  select: { padding: '0.5rem', fontSize: '1rem' },
  button: { padding: '0.6rem', backgroundColor: '#4CAF50', color: 'white', border: 'none' }
};

export default EnrollForm;