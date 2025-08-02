import React, { useState, useEffect } from "react";

const PortfolioItem = ({ title, category, image, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative overflow-hidden rounded-lg shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden">
                <div
                    className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-0'}`}
                ></div>
                <div className="h-full w-full flex items-center justify-center">
                    {image ? (
                        <img src={image} alt={title} className="object-cover w-full h-full" />
                    ) : (
                        <div className="flex items-center justify-center h-full w-full">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 transform rotate-12"></div>
                        </div>
                    )}
                </div>
                <div
                    className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                >
                    <p className="text-white text-3xl font-bold uppercase tracking-wider mb-2">{category}</p>
                    <h3 className=" font-bold mb-2 text-2xl text-white">{title}</h3>
                    <p className="text-gray-300 text-md font-bold">{description}</p>
                </div>
            </div>
        </div>
    );
};

const PortfolioFilter = ({ categories, activeCategory, onCategoryChange }) => {
    return (
        <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`px-6 py-2 rounded-full text-1xl transition capitalize ${
                        activeCategory === category
                            ? "bg-blue-600 text-white"
                            : "bg-gray-900 text-gray-400 hover:bg-gray-800"
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const categories = ["All", "UI/UX Design", "Web Development", "Branding", "Marketing"];

    useEffect(() => {
        const fetchPortfolio = async () => {
            setLoading(true);
            setError(null);

            let url =
                activeCategory === "All"
                    ? "https://backend.framedigital.solutions/portfolio/getPort"
                    : `https://backend.framedigital.solutions/portfolio/category/${encodeURIComponent(activeCategory)}`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch portfolio data");
                }
                const data = await response.json();
                setPortfolioItems(Array.isArray(data) ? data : []);
            } catch (error) {
                setError(error.message);
                setPortfolioItems([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolio();
    }, [activeCategory]);

    return (
        <section id="portfolio">
            <div className="bg-black min-h-screen text-white py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
                            <p className="text-gray-400 max-w-xl">
                                Explore our latest projects where we've transformed ideas into impactful digital solutions.
                                Each project represents our commitment to quality, innovation, and client satisfaction.
                            </p>
                        </div>

                        {/* 3D element for visual interest */}
                        <div className="hidden md:block">
                            <div className="w-20 h-20 relative">
                                <img src="/cube.svg" alt="3D Cube" className="absolute top-0 left-0 w-full h-full" />
                            </div>
                        </div>
                    </div>

                    {/* Filter Controls */}
                    <PortfolioFilter
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />

                    {/* Loading State */}
                    {loading ? (
                        <div className="text-center text-gray-400">Loading portfolio...</div>
                    ) : error ? (
                        <div className="text-center text-red-400">Error: {error}</div>
                    ) : portfolioItems.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {portfolioItems.map((item) => (
                                <PortfolioItem key={item.id} {...item} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-400 col-span-full">No projects found in this category.</p>
                    )}
                </div>

                {/* Background effects */}
                <div className="fixed -bottom-40 -right-40 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 z-0"></div>
                <div className="fixed top-1/4 -left-20 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-5 z-0"></div>
            </div>
        </section>
    );
};

export default Portfolio;
