
import './App.css';
import React from 'react';
import Navbar from './components/home/Navbar';
import Carosuel from './components/home/Carosuel';
import Items from "./components/menu/Items";
import Footer from './components/foot/Footer';
import Testimonials from './components/testimonials/Testimonials';

import Location from './components/location/Location';
function App() {
  return (
<div>
<Navbar />
<Carosuel />
<Items />
<Testimonials />
<Location />
<Footer />
</div>
  );
}

export default App;
