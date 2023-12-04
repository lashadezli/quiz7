
import React, { useState } from 'react';
import './App.css';
import errorIcon from '../images/icon-error.svg';

function App() {
  const [formValues, setFormValues] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    // Clear the specific error when user types
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    const newErrors = {};
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} cannot be empty`;
      }
    });

    // If there are errors, update the state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Proceed with form submission logic
      console.log('Form submitted successfully');
    }
  };

  return (
    <div className="container">
      <div className="intro">
        <h1>
          Learn to code by
          <br />
          watching others
        </h1>
        <p>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
          but understanding how developers think is invaluable.
        </p>
      </div>

      <div className="form-container">
        <div className="caption">
          <p>Try it free 7 days then $20/mo. thereafter</p>
        </div>
        <form action="#" method="post" id="SignupForm" onSubmit={handleFormSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="First Name"
              value={formValues.name}
              onChange={handleInputChange}
              style={errors.name ? { borderColor: 'red', color: 'red' } : {}}
            />
            {errors.name && (
              <div className="error-container">
                <p className="error">{errors.name}</p>
              </div>
            )}
          </div>
          <div className="input-group">
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleInputChange}
              style={errors.lastName ? { borderColor: 'red', color: 'red' } : {}}
            />
            {errors.lastName && (
              <div className="error-container">
                <p className="error">{errors.lastName}</p>
              </div>
            )}
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={formValues.email}
              onChange={handleInputChange}
              style={errors.email ? { borderColor: 'red', color: 'red' } : {}}
            />
            {errors.email && (
              <div className="error-container">
                <p className="error">{errors.email}</p>
              </div>
            )}
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleInputChange}
              style={errors.password ? { borderColor: 'red', color: 'red' } : {}}
            />
            {errors.password && (
              <div className="error-container">
                <p className="error">{errors.password}</p>
              </div>
            )}
          </div>
          <button className="Submit">CLAIM YOUR FREE TRIAL</button>
          <p className="Normal">
            By clicking the button, you are agreeing to our <span className="Red">Terms and Services</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;


