import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../app/globals.css'
const TemplateList = () => {
    const [templates, setTemplates] = useState([]);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhc3Npc3RhbnRJZCI6IjY2MGU5OTM4ODU4NWNmMGJmZDZjN2U2YSIsImNsaWVudElkIjoiNjYwZTk5Mzg4NTg1Y2YwYmZkNmM3ZTYwIiwiaWF0IjoxNzEyMzE2MTk4fQ.HwkXATwc-9C6ggtL-X2krrEIX1z0R8fs5MNBroD1wyw';

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const response = await axios.get(
                    'https://stoplight.io/mocks/aisensy/direct-api/120362288/get-templates',
                    {
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );
                setTemplates(response.data.data);
            } catch (error) {
                console.error('Error fetching templates:', error);
            }
        };

        fetchTemplates();
    }, []);

    return (
        <div className="max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Templates</h1>
            <table className="w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-200 px-4 py-2">Name</th>
                        <th className="border border-gray-200 px-4 py-2">Language</th>
                        <th className="border border-gray-200 px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {templates.map((template, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-200 px-4 py-2">{template.name}</td>
                            <td className="border border-gray-200 px-4 py-2">{template.language}</td>
                            <td className="border border-gray-200 px-4 py-2">{template.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TemplateList;
