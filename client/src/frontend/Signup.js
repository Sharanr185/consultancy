import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import api from '../../../server/api/url';
import img1 from '../Image/home.png';
import axios from 'axios';
//import bcrypt from "bcryptjs";
import { Eye } from 'react-bootstrap-icons';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(''); // State to track password visibility
  const navigate = useNavigate();

  const validatePassword = (pass) => {
    return pass.match(
      /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.\s).{8,15}$/
    );
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility state
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    const request = {
      name: name,
      email: email,
      password: password
    }
    // if (password !== cpass) {
    //   setError("Passwords do not match");
    //   return;
    // }
    /*if (!validatePassword(password)) {
      setError("Password should contain at least one uppercase letter, one lowercase letter, one number, one special character, and be 8-15 characters long");
      return;
    }*/
    console.log('data',request);  
    axios.post("http://localhost:3001/register", request)
      .then(res =>  {
        console.log(res);
        navigate('/');
    })
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-5 border shadow">
      <div className="row justify-content-md-center">
        <h2 className="text-center mb-4">Sign Up</h2>
        <div className='col-md-6 mb-5'>
          <img src={img1} alt="Logo" className="img-fluid"></img>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
              <label className="form-label mt-3">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  //type={showPassword ? "text" : "password"} // Toggle input type based on visibility state
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {/* <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  <Eye size={24} />
                </button> */}
              </div>
            </div>
        

            <div className='move mb-3'>Already have an account?<Link to="/">Login</Link></div>
            </form>
           <button onClick= {handleSubmit} type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
            
         
        </div>
      </div>
    </div>
  );
};

export default Signup;