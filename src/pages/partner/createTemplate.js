import { useState } from 'react';
import axios from 'axios';
import "../../app/globals.css"
const TemplateForm = () => {
    const [formData, setFormData] = useState({
        name: 'mytemplate',
        category: 'MARKETING',
        language: 'en',
        components: [
            {
                type: '',
                format: '',
                example: {
                    header_handle: [
                        'https://aisensy-project-media-library-stg.s3.ap-south-1.amazonaws.com/VIDEO/6245d025fcb7966c46294618/9346765_6467606fileexampleMP448015MG.mp4'
                    ]
                }
            },
            {
                type: '',
                text: '',
                example: {
                    body_text: [
                        ['Romit']
                    ]
                }
            },
            {
                type: '',
                buttons: [
                    {
                        type: '',
                        text: '',
                        phone_number: ''
                    },
                    {
                        type: '',
                        text: '',
                        url: '',
                        example: [
                            ''
                        ]
                    }
                ]
            },
            {
                type: 'Footer',
                text: ''
            }
        ]
    });
    const generateToken = (username, password, projectId) => {
        const tokenString = `${username}:${password}:${projectId}`;
        const encodedToken = Buffer.from(tokenString).toString('base64');
        return encodedToken;
    };
    console.log(generateToken("jay.pawar@pixelmize.com","Pranav@56","660e99388585cf0bfd6c7e6a"))
    const createTemplate = async () => {
        try {
           
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhc3Npc3RhbnRJZCI6IjY2MGU5OTM4ODU4NWNmMGJmZDZjN2U2YSIsImNsaWVudElkIjoiNjYwZTk5Mzg4NTg1Y2YwYmZkNmM3ZTYwIiwiaWF0IjoxNzEyNjMyNTk3fQ.RzXQMR0c_Od2CSQ80-Wr4lRZXEujLDcSF4wqC7pqg4M";
            console.log(token)
            const response = await axios.post(
                'https://backend.aisensy.com/direct-apis/t1/wa_template',
                formData,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            console.log(response.data);
            // Handle success response
        } catch (error) {
            console.error(error); // Handle error
        }
    };

    const handleChange = (e, componentIndex, field) => {
        const { value } = e.target;
        setFormData(prevFormData => {
            const updatedComponents = [...prevFormData.components];
            updatedComponents[componentIndex][field] = value;
            return { ...prevFormData, components: updatedComponents };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTemplate();
    };

    return (
        <div className="w-[80vw] h-[85vh] overflow-y-scroll bg-white shadow-lg rounded-lg p-6">
            <p className='text-3xl font-bold'>Add New</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                {formData.components.map((component, index) => (
                    <div key={index}>
                        <h2 className="text-lg font-semibold">{component.type}</h2>
                        {component.type === 'BUTTONS' ? (
                            <div>
                                {component.buttons.map((button, buttonIndex) => (
                                    <div key={buttonIndex}>
                                        {Object.entries(button).map(([key, value], i) => (
                                            <div key={i} className="mb-4">
                                                <label htmlFor={`${component.type}-${key}-${buttonIndex}`} className="block text-gray-700">{key}:</label>
                                                <input
                                                    type="text"
                                                    id={`${component.type}-${key}-${buttonIndex}`}
                                                    name={key}
                                                    value={value}
                                                    onChange={(e) => handleChange(e, index, `buttons.${buttonIndex}.${key}`)}
                                                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            Object.entries(component).map(([key, value], i) => (
                                key !== 'type' &&
                                <div key={i} className="mb-4">
                                    <label htmlFor={`${component.type}-${key}`} className="block text-gray-700">{key}:</label>
                                    <input
                                        type="text"
                                        id={`${component.type}-${key}`}
                                        name={key}
                                        value={value}
                                        onChange={(e) => handleChange(e, index, key)}
                                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            ))
                        )}
                    </div>
                ))}
    
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Create Template</button>
            </form>
        </div>
    );
    
};

export default TemplateForm;
