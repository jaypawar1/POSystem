"use client"
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import '../../app/globals.css'
const BusnesSignup = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        display_name: '',
        email:'',
        company:'',
        contact:'',
        timeZone:'',
        currency:'',
        companySize: '',
        password: '', 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
      console.log(formData);
      try{
        const token = localStorage.getItem('token');
        const response = await axios.post(
            '/api/partner/createBusness',
            { formData},
            { headers: { authorization: token } }
          );
          console.log(response);
        //   const  res=await axios.post(
        //     '/api/partner/createProject',
        //     { business_id:response.data.data, name:"first Project"}, 
        //     { headers: { authorization: token } } 
        //   )
        router.push(`/partner/project/${response.data.data}.js`);

      }catch(e){
        console.log(e);
      }

    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
            <label className="block mb-4">
                <span className="text-gray-700">Display Name:</span>
                <input type="text" name="display_name" value={formData.display_name} onChange={handleChange} className="block w-full mt-1 p-2 border rounded-md" />
            </label>
            <label className="block mb-4">
                <span className="text-gray-700">Email:</span>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="block w-full mt-1 p-2 border rounded-md" />
            </label>
            <label className="block mb-4">
                <span className="text-gray-700">Company:</span>
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="block w-full mt-1 p-2 border rounded-md" />
            </label>
            <label className="block mb-4">
                <span className="text-gray-700">Contact:</span>
                <input type="text" name="contact" value={formData.contact} onChange={handleChange} className="block w-full mt-1 p-2 border rounded-md" />
            </label>
            <label className="block mb-4">
                <span className="text-gray-700">Timezone:</span>
                <input type="text" name="timeZone" value={formData.timeZone} onChange={handleChange} className="block w-full mt-1 p-2 border rounded-md" />
            </label>
            <label className="block mb-4">
                <span className="text-gray-700">Currency:</span>
                <input type="text" name="currency" value={formData.currency} onChange={handleChange} className="block w-full mt-1 p-2 border rounded-md" />
            </label>
            <label className="block mb-4">
                <span className="text-gray-700">Company Size:</span>
                <input type="text" name="companySize" value={formData.companySize} onChange={handleChange} className="block w-full mt-1 p-2 border rounded-md" />
            </label>
            <label className="block mb-4">
                <span className="text-gray-700">Password:</span>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="block w-full mt-1 p-2 border rounded-md" />
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
    );
};

export default BusnesSignup;
