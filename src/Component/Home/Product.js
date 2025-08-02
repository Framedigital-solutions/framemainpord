import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCard = ({ title, imageSrc, isActive }) => {
    return (
        <div className={`flex flex-col transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
            <div className="rounded-lg overflow-hidden">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-64 object-cover"
                />
            </div>
            <h3 className="text-white text-xl mt-4">{title}</h3>
        </div>
    );
};

const ProductNavItem = ({ title, isActive, onClick }) => {
    return (
        <div
            className={`cursor-pointer py-2 transition-all duration-300 ${isActive ? 'text-blue-400' : 'text-white'}`}
            onClick={onClick}
        >
            <h4 className="text-lg">{title}</h4>
            {isActive && <div className="w-24 h-0.5 bg-blue-400 mt-1"></div>}
        </div>
    );
};

const OurProducts = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideWidth, setSlideWidth] = useState(33.33); // Default width for desktop
    const [products, setProducts] = useState([]);

    const categories = [
        { id: 'all', title: 'All Products' },
        { id: 'Our Software', title: 'Our Software' },
        { id: 'Security And Computing Solutions', title: 'Security And Computing Solutions' },
        { id: 'ATL', title: 'ATL' },
        { id: 'Business', title: 'Business' },
    ];

    // Fetch product data from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://backend.framedigital.solutions/product/Product');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    // Filter products based on active category
    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.category === activeCategory);

    const duplicatedProducts = [...filteredProducts, ...filteredProducts, ...filteredProducts];

    // Update slide width based on screen size
    useEffect(() => {
        const handleResize = () => {
            setSlideWidth(window.innerWidth < 768 ? 100 : 33.33);
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Reset position when filtered products change
    useEffect(() => {
        setCurrentSlide(0);
    }, [activeCategory]);

    // Infinite scroll functions
    const nextSlide = () => {
        const totalItems = filteredProducts.length;
        if (totalItems === 0) return;

        const newSlide = (currentSlide + 1) % totalItems;
        setCurrentSlide(newSlide);
    };

    const prevSlide = () => {
        const totalItems = filteredProducts.length;
        if (totalItems === 0) return;

        const newSlide = (currentSlide - 1 + totalItems) % totalItems;
        setCurrentSlide(newSlide);
    };

    return (
        <section id="products">
        <div className="bg-black py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-white text-4xl font-light">Our Products</h2>

                    {/* Navigation Arrows */}
                    <div className="flex space-x-4">
                        <button
                            onClick={prevSlide}
                            className="text-white hover:text-gray-300 transition"
                            aria-label="Previous slide"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="text-white hover:text-gray-300 transition"
                            aria-label="Next slide"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Product Categories */}
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-8 md:mb-0">
                        {categories.map((category) => (
                            <ProductNavItem
                                key={category.id}
                                title={category.title}
                                isActive={activeCategory === category.id}
                                onClick={() => {
                                    setActiveCategory(category.id);
                                }}
                            />
                        ))}
                    </div>

                    {/* Product Slider */}
                    <div className="md:w-3/4 overflow-hidden relative">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentSlide * slideWidth}%)`,
                            }}
                        >
                            {duplicatedProducts.map((product, index) => (
                                <div
                                    key={`${product._id}-${index}`}
                                    className="px-2"
                                    style={{ minWidth: `${slideWidth}%` }}
                                >
                                    <ProductCard
                                        title={product.name}
                                        imageSrc={product.image}
                                        isActive={index % filteredProducts.length === currentSlide}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default OurProducts;
