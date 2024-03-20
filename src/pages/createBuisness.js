"use client"
import React, { useState } from 'react';
import axios from 'axios';

function CreateBusiness() {
  const [formData, setFormData] = useState({
    display_name: '',
    email: '',
    company: '',
    contact: '',
    timezone: '',
    currency: '',
    companySize: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://apis.aisensy.com/partner-apis/v1/partner/65e9fcb8abfa6918944c960e/business',
        formData,
        {
          headers: {
            'X-AiSensy-Partner-API-Key':
              '6ccf3e5a38a31d7f40be9_65e9fcb8abfa6918944c960e',
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        }
      );
      console.log(response.data); // Log the response
      // Optionally, you can reset the form after successful submission
      setFormData({
        display_name: '',
        email: '',
        company: '',
        contact: '',
        timezone: '',
        currency: '',
        companySize: '',
        password: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Create Business</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Display Name:
          <input
            type="text"
            name="display_name"
            value={formData.display_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Timezone:
          <input
            type="text"
            name="timezone"
            value={formData.timezone}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Currency:
          <input
            type="text"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Company Size:
          <input
            type="text"
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateBusiness;
