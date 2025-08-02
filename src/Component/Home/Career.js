import React, { useState, useEffect } from 'react';
import axios from 'axios';


const DEFAULT_JOB_BG = "dummy.svg";
const ApplicationModal = ({ isOpen, onClose, job }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: job?.jobTitle || '',
        resumeLink: ''
    });

    useEffect(() => {
        if (isOpen && job) {
            setFormData((prev) => ({
                ...prev,
                position: job.jobTitle || ''
            }));
        }
    }, [isOpen, job]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://backend.framedigital.solutions/resume/create', formData);
            setFormData({
                name: '',
                email: '',
                phone: '',
                position: job?.jobTitle || '',
                resumeLink: ''
            })
            alert('Application submitted successfully!');
            onClose();
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('Failed to submit application.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg max-w-md w-full p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-medium text-white">Apply for {job?.jobTitle}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">✖</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full p-2 mb-2 bg-gray-700 text-white" />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 mb-2 bg-gray-700 text-white" />
                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-2 mb-2 bg-gray-700 text-white" />
                    <input type="text" name="position" value={formData.position} readOnly className="w-full p-2 mb-2 bg-gray-700 text-white cursor-not-allowed" />
                    <input type="url" name="resumeLink" placeholder="Resume Link" value={formData.resumeLink} onChange={handleChange} required className="w-full p-2 mb-4 bg-gray-700 text-white" />
                    <button type="submit" className="w-full p-2 bg-blue-600 text-white">Submit</button>
                </form>
            </div>
        </div>
    );
};

const Career = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get('https://backend.framedigital.solutions/job/job')
            .then(response => setJobs(response.data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    return (
        <section className="bg-black min-h-screen py-20 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-4xl mb-8">Join Our Team</h2>
                <p className="text-gray-300 max-w-4xl">
                        At Frame Digital Solution Pvt. Ltd., we don't just build software— we build futures. If you're passionate about technology, innovation, and problem-solving, then this is the place for you. We are a team of forward-thinkers, developers, designers, and strategists dedicated to creating cutting-edge IT solutions that shape the future of businesses worldwide.
                    </p>
                    <div className="mb-8">
                    <h3 className="text-white text-xl mb-8">Current Openings</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {jobs.map((job) => (
                     <div 
                     key={job._id} 
                     className="relative group bg-gray-800 rounded-lg min-h-[250px] bg-cover bg-center overflow-hidden flex flex-col justify-end p-4"
                     style={{ backgroundImage: `url(${job.imageUrl || DEFAULT_JOB_BG})` }}>
                 
                     {/* Dark Overlay for Readability */}
                     <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg transition-opacity duration-300 group-hover:bg-opacity-80"></div>
                 
                     {/* Job Details (Shown on Hover) */}
                     <div className="absolute inset-0 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                         <h3 className="text-xl font-medium mt-10 text-white">{job.jobTitle}</h3>
                         <p className="text-gray-300">{job.employmentType}</p>
                         <p className="text-gray-400">Key Skills: {job.keySkills.join(', ')}</p>
                         <ul className="text-gray-300 mt-2">
                             {job.keyResponsibilities.slice(0, 3).map((res, idx) => (
                                 <li key={idx}>- {res}</li>
                             ))}
                         </ul>
                     </div>
                 
                     {/* Bottom Section: Job Title (Left) & Apply Button (Right) */}
                     <div className="relative z-10 flex items-center justify-between w-full p-6 mt-15 rounded-b-lg">
    <button 
        onClick={() => { setSelectedJob(job); setIsModalOpen(true); }} 
        className="bg-[#191919] text-white px-4 py-2 mt-10 rounded-full font-sans transition ml-auto">
        Apply →
    </button>
</div>

                 </div>
                 
                    ))}
                </div>
            </div>
            <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} job={selectedJob} />
        </section>
    );
};

export default Career;
