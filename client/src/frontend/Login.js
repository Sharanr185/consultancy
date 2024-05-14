import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import img1 from '../Image/User.jpeg';
//import bcrypt from 'bcryptjs';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => { 
    e.preventDefault();
    // const hashedPassword = bcrypt.hashSync(password, 10);
      axios
      .post("http://localhost:3001/", { email, password })
      .then((result) => {
        if (result.data === 'Success') navigate('/about');
        else alert('Invalid data');
      })  
      .catch((err) => console.error(err));
  };

  return (
    
    <div className="container border shadow" style={{marginTop:"40px"}}>
      <h2 className="text-center mb-4">Login</h2>

      <div className="row">

        <div className="col-md-6 order-md-1 mb-5">
          <img src={img1} alt="Logo" style={{height:500, width:500, marginLeft: 100}}className="img-fluid" />
        </div>
        <div className="col-md-6 order-md-2">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-4 mt-sm-0">
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
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p>Dont have a account?<a href='/register'>signup</a></p>
             
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;