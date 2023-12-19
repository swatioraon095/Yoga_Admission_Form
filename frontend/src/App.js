import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [batchTiming, setBatchTiming] = useState('6-7AM');
  const [registrationMessage, setRegistrationMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:4000/api/admission-forms', {
      name: name,
      age: age,
      batchTiming: batchTiming,
    })
    .then((response) => {
      console.log('Form submitted successfully:', response.data);
      setRegistrationMessage('Registered Successfully!');
      setName('');
      setAge('');
      setBatchTiming('6-7AM');
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
      setRegistrationMessage('Registration failed. Please try again.');
    });
  };

  const handleBatchTimingChange = (e) => {
    setBatchTiming(e.target.value);
  };


  return (
    <>
      <section>
        <div className="image">
          <img src={process.env.PUBLIC_URL + '/y.jpg'} alt="Background" />

        </div>
        <div className="content">
          <div className="admission-form">
            <h2>Yoga Admission Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputx">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="inputx">
                <span>Age</span>
                <input
                  type="number"
                  name="age"
                  placeholder="Enter age..."
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="inputx">
                <span>Batch Timing</span>
                <select value={batchTiming} onChange={handleBatchTimingChange}>
                  <option value="6-7AM">6-7AM</option>
                  <option value="7-8AM">7-8AM</option>
                  <option value="8-9AM">8-9AM</option>
                  <option value="5-6PM">5-6PM</option>
                  {/* Add other available batch timings */}
                </select>
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
