import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/AuthForm.css'; // Add this for styling

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'Customer'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          userType: formData.userType
        }),
      });
      const data = await response.json();
      alert(data.message);
      if (response.ok) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to sign up.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="email" name="email" placeholder="Enter Your Email" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <input type="password" name="password" placeholder="Enter Your Password" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <input type="password" name="confirmPassword" placeholder="Confirm Your Password" onChange={handleChange} required />
          </div>
          <div className="user-type-group">
            <label>
              <input type="radio" name="userType" value="ServiceProvider" checked={formData.userType === 'ServiceProvider'} onChange={handleChange} />
              Service Provider
            </label>
            <label>
              <input type="radio" name="userType" value="Customer" checked={formData.userType === 'Customer'} onChange={handleChange} />
              Customer
            </label>
          </div>
          <button type="submit" className="form-btn green">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;