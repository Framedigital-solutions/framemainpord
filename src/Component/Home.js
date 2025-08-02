import React from 'react'
import HeroSection from './Home/Navbar'
import Portfolio from './Home/Portfolio'
import About from './Home/About'
import ServicesCarousel from './Home/ServiceCrousel'
import OurProducts from './Home/Product'
import BrandLogosBar from './Home/BrandColor'
import WhyChooseUs from './Home/WhyChoose'
import ProcessSection from './Home/Process'
import Career from './Home/Career'
import OurTeam from './Home/OurTeam'
import Contact from './Home/Contact'
import TestimonialSection from './Home/Testimonial'

const Home = () => {
  return (
    <div>
        
        
      <About />
      <Portfolio/>
      <ServicesCarousel/>
      <OurProducts />
      <BrandLogosBar/>
      <WhyChooseUs/>
      <ProcessSection/>
      
      <Career />
      <OurTeam />
      <TestimonialSection/>
      <Contact/>
    </div>
  )
}

export default Home
