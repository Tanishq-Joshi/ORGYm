import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userType, setUserType] = useState('user'); // Default to user type
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    height: '',
    weight: '',
    age: '',
    licenseNo: '' // only for trainer
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you would send the data to your backend to handle signup
    navigate('/login'); // Redirect to login page after successful signup
  };

  return (
    <div>
      <h2>Signup</h2>
      <div>
        <label>
          <input
            type="radio"
            name="userType"
            value="user"
            checked={userType === 'user'}
            onChange={() => setUserType('user')}
          />
          User
        </label>
        <label>
          <input
            type="radio"
            name="userType"
            value="trainer"
            checked={userType === 'trainer'}
            onChange={() => setUserType('trainer')}
          />
          Trainer
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Height</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Weight</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        {userType === 'trainer' && (
          <div>
            <label>License Number</label>
            <input
              type="text"
              name="licenseNo"
              value={formData.licenseNo}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
