import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Story from './components/Story';
import Collections from './components/Collections';
import Slider from './components/Slider';
import CityCollection from './components/CityCollection';
import WeddingCollection from './components/WeddingCollection';
import PeopleCollection from './components/PeopleCollection'; 
import './App.css';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/story" element={<Story />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/cityCollection" element={<CityCollection />} />
        <Route path="/weddingCollection" element={<WeddingCollection />} />
        <Route path="/peopleCollection" element={<PeopleCollection />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
