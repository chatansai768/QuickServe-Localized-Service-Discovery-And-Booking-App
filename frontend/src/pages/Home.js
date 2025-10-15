import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
const Home = () => {
  return (
    <div className="container">
      <h1>Local Service Finder and Booking Platform</h1>
      <div className="button-group">
        <Link to="/signup">
          <button className="btn">Go to Signup Page</button>
        </Link>
        <Link to="/login">
          <button className="btn">Go to Login Page</button>
        </Link>
        {/* <Link to="/history">
          <button className="btn">Booking History</button>
        </Link> */}
        <Link to="/AdminDashboard">
          <button className="btn">Admin Panel</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;