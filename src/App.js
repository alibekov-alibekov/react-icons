import React from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from './data/Slider';

function App() {
  return (
   <>
   <GlobalStyle />
   <Navbar />
   <Hero slides={SliderData} />
   </>
  );
}

export default App;
