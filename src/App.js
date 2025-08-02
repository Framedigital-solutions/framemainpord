import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Privacy from './Component/Home/Privacy';
import Home from './Component/Home';
import HeroSection from './Component/Home/Navbar';
import Footer from './Component/Home/Footer';
import TermandCondition from './Component/TermandCondition';

const App = () => {
  return (
    <div>
      <HeroSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<TermandCondition />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
