"use client"
import { useState } from 'react';
import { Router, useRouter } from 'next/router';
import axios from 'axios'; // Import Axios
import '../../app/globals.css'
const TemplateForm = () => {
    const router = useRouter();
    const { id } = router.query;
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        language: '',
        headerFormat: '',
        bodyText: '',
        footerText: '',
        buttonType: '',
        buttonText: '',
        buttonUrl: '',
        buttonNumber: ''
    });

   
    
    const createTemplate = async () => {
        try {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhc3Npc3RhbnRJZCI6IjY2MGU5OTM4ODU4NWNmMGJmZDZjN2U2YSIsImNsaWVudElkIjoiNjYwZTk5Mzg4NTg1Y2YwYmZkNmM3ZTYwIiwiaWF0IjoxNzEyMzc5OTk0fQ.S6ciDngBw9auqfScCPThZot2sV1eek2Iqu81p5A0zts';
            const response = await axios.post(
                'https://stoplight.io/mocks/aisensy/direct-api/120362288/wa_template',
                formData,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Include Authorization header with Bearer token
                    }
                }
            );
            console.log(response.data); // Handle success response
        } catch (error) {
            console.error(error); // Handle error
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTemplate(formData); // Call createTemplate function to make the Axios request
    };

    const languages = [
        'English',
        'Spanish',
        'French',
        'German',
        'Chinese',
        'Arabic',
        'Hindi'
        // Add more languages as needed
    ];
    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block">Template Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded-md px-4 py-2" />
                </div>

                <div>
                    <label htmlFor="category" className="block">Category:</label>
                    <select id="category" name="category" value={formData.category} onChange={handleChange} className="w-full border rounded-md px-4 py-2">
                        <option value="marketing">Marketing</option>
                        <option value="authentication">Authentication</option>
                        <option value="utility">Utility</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="language" className="block">Language:</label>
                    <select id="language" name="language" value={formData.language} onChange={handleChange} className="w-full border rounded-md px-4 py-2">
                        <option value="">Select language</option>
                        {languages.map((language, index) => (
                            <option key={index} value={language}>{language}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="headerFormat" className="block">headerFormat:</label>
                    <select id="headerFormat" name="headerFormat" value={formData.headerFormat} onChange={handleChange} className="w-full border rounded-md px-4 py-2">
                        <option value="VIDEO">VIDEO</option>
                        <option value="TEXT">TEXT</option>
                        <option value="IMAGE">IMAGE</option>
                        <option value="FILE">FILE</option>
                        <option value="LOCATION">LOCATION</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="bodyText" className="block">bodyText:</label>
                    <input type="text" id="bodyText" name="bodyText" value={formData.bodyText} onChange={handleChange} className="w-full border rounded-md px-4 py-2" />
                </div>
                <div>
                    <label htmlFor="footerText" className="block">footerText:</label>
                    <input type="footerText" id="footerText" name="footerText" value={formData.footerText} onChange={handleChange} className="w-full border rounded-md px-4 py-2" />
                </div>
                <div>
                    <label className="block">Radio Options:</label>
                    <div>
                        <input type="radio" id="none" name="radioOption" value="none" checked={formData.radioOption === 'none'} onChange={handleChange} />
                        <label htmlFor="none" className="ml-2">None</label>
                    </div>
                    <div>
                        <input type="radio" id="QUICK_REPLY" name="radioOption" value="QUICK_REPLY" checked={formData.radioOption === 'QUICK_REPLY'} onChange={handleChange} />
                        <label htmlFor="QUICK_REPLY" className="ml-2">QUICK_REPLY</label>
                    </div>
                    <div>
                        <input type="radio" id="URL" name="radioOption" value="URL" checked={formData.radioOption === 'URL'} onChange={handleChange} />
                        <label htmlFor="URL" className="ml-2">URL</label>
                    </div>
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={() => createTemplate(formData)}>Create Template</button>
            </form>
        </div>
    );
};

export default TemplateForm;
