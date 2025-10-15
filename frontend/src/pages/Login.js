// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './styles/AuthForm.css'; // Add this for styling

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         alert(data.message);
//         navigate(data.redirectUrl);
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to log in.');
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="form-card">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Email</label>
//             <input type="email" name="email" placeholder="Enter Your Email" onChange={handleChange} required />
//           </div>
//           <div className="input-group">
//             <label>Password</label>
//             <input type="password" name="password" placeholder="Enter Your Password" onChange={handleChange} required />
//           </div>
//           <button type="submit" className="form-btn">Login</button>
//         </form>
//         <p>Don't have an account? <Link to="/signup">Signup</Link></p>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/AuthForm.css'; // Add this for styling

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: ''  // New state for storing user type
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate(data.redirectUrl);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to log in.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Login</h2>

        {/* User Type Selection */}
        

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter Your Email" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter Your Password" onChange={handleChange} required />
          </div>
          <button type="submit" className="form-btn">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
      </div>
    </div>
    
  );
};

export default Login;
