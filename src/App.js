import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/home/Home';
import About from './component/about/AboutPage'
import Header from './component/header/Header';
import Contact from './component/contact/ContactPage'
import Event from './component/event/EventPage'
import Gallery from './component/gallery/GalleryPage'
import Footer from './component/footer/Footer';
import Resources from './component/Resources/Resources';
import Aboutacm from './component/about-acm/Aboutacm';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/About ACM' element={< Aboutacm/>} />
        <Route path='/Resources' element={<Resources/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Events' element={<Event/>}/>
        <Route path='/Gallery' element={<Gallery/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
