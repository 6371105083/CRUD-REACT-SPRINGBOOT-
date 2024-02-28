import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    gender: 'male',
    highestEducation: '',
    passedOutYear: '',
    college: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <div className='card text-center'>
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">Student Registration Form</h2>
        </div>
        <div className="card-body bg-light">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="contact" className="form-label">
                  Contact
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="highestEducation" className="form-label">
                  Highest Education
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="highestEducation"
                  name="highestEducation"
                  value={formData.highestEducation}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="passedOutYear" className="form-label">
                  Passed Out Year
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="passedOutYear"
                  name="passedOutYear"
                  value={formData.passedOutYear}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="college" className="form-label">
                  College
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary  m-2">
              Submit
            </button>
            <button type="reset" className='btn btn-danger'>Reset</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
