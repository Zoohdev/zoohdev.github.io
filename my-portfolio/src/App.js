import React from 'react';
import Portfolio from './components/portfolio';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe'; // Import AboutMe component
import Footer from './components/Footer'; // Import Footer component
import './App.css'; // global styling

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Portfolio />
      <Footer /> {/* Add Footer section */}
    </div>
  );
};

export default App;


