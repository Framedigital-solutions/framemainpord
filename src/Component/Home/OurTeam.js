import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OurTeam = () => {
    const [teamData, setTeamData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://backend.framedigital.solutions/teams/Team');
                setTeamData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load team data.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="text-center text-white">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <div className="bg-black text-white p-6 min-h-screen">
            <div className="max-w-6xl mx-auto mb-16">
                <h1 className="text-3xl font-serif mb-4">Our Team</h1>
                <p className="text-sm mb-8 max-w-xs">
                    Our Dedicated Team Strives To Deliver Excellence In Every Service We Provide.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamData.map((member, index) => (
                        <div key={member.id} className="relative">
                            <img
                                src={member.photo}
                                alt={member.name}
                                className={`w-full ${index === 0 ? 'h-96' : index === 1 ? 'h-64' : 'h-48'} object-cover`}
                            />
                            <div className="mt-4 flex items-center">
                                <span className="text-gray-400 mr-2">{String(index + 1).padStart(2, '0')}</span>
                                <div className="h-px bg-gray-400 w-12 mr-2"></div>
                                <div>
                                    <h3 className="font-medium">{member.name}</h3>
                                    <p className="text-xs text-gray-400">{member.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
