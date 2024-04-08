'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import '../../app/globals.css'
const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const router = useRouter();
    const { id } = router.query;
    const getRandomColor = () => {
        const colors = ['bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-purple-200'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://stoplight.io/mocks/aisensy/partner-api/54889159/partner/65e9fcb8abfa6918944c960e/business/${id}/project`, {
                    headers: {
                        'Accept': 'application/json',
                        'X-AiSensy-Partner-API-Key': '6ccf3e5a38a31d7f40be9_65e9fcb8abfa6918944c960e'
                    }
                });
                setProjects(response.data.projects);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <div key={project.id} className={`shadow-md rounded-md p-4 ${getRandomColor()}`}>
                    <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
                    <p className="text-gray-600 mb-2">ID: {project.id}</p>
                    <p className="text-gray-600 mb-2">Type: {project.type}</p>
                    <p className="text-gray-600 mb-2">Status: {project.status}</p>
                    <p className="text-gray-600 mb-2">Sandbox: {project.sandbox ? 'Yes' : 'No'}</p>
                    <p className="text-gray-600 mb-2">Active Plan: {project.active_plan}</p>
                    <p className="text-gray-600 mb-2">Remaining Quota: {project.remainingQuota}</p>
                    <p className="text-gray-600 mb-2">Timezone: {project.timezone}</p>
                    <button onClick={()=>{ router.push(`/partner/createTemplate/?id=${project.id}`);}}>Create Template</button>
                </div>
            ))}
        </div>
    </div>
    );
};

export default ProjectsPage;