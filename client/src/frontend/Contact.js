import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../../../server/api/url';
const Contact = () => {
    const [name, setName]= useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit =  (e) => {
        e.preventDefault();
        const request = {
          name: name,
          email: email,
          feedback: feedback
        }
        console.log('data',request);  
        api.post("http://localhost:3001/contact", request)
      .then(res =>  {
        console.log(res);
        navigate('/');
    })
      .catch(err => console.error(err));
  };
return (
    
    <div className="container border shadow" style={{marginTop:"40px"}}>
      <h2 className="text-center mb-4">Contact</h2>

      <div className="row">
        <div className="col-md-6 order-md-2">
          <form onSubmit={handleSubmit}>
           <div className="mb-3 mt-4 mt-sm-0">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={email}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
              <label className="form-label">Feedback</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </div>
             
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;