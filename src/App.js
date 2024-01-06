import React from 'react'
import Navbar from '../src/Components/Navbar/Navbar'
import Intro from '../src/Components/Intro/Intro'
import Services from '../src/Components/Services/Services'
import Experience from '../src/Components/Experiences/Experience'
import Works from '../src/Components/Works/Works'
import Portfolio from '../src/Components/Portfolio/Portfolio'
import MyAudioPlayer from './Components/MyAudioPlayer/MyAudioPlayer'
import MyVideoPlayer from './Components/MyVideoPlayer/MyVideoPlayer'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <MyAudioPlayer/>
      <MyVideoPlayer/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
