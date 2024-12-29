import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './src/components/Navbar';
import Home from './src/components/Home';
import About from './src/components/About';
import Story from './src/components/Story';
import Collections from './src/components/Collections';
import Slider from './src/components/Slider';
import CityCollection from './src/components/CityCollection';
import WeddingCollection from './src/components/WeddingCollection';
import PeopleCollection from './src/components/PeopleCollection'; 
import './App.css';
import Footer from './src/components/Footer';

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
