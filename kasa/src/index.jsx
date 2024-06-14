import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import Home from './pages/Home';
// import Apropos from './pages/Apropos';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/apropos" element={<Apropos />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>,
  document.getElementById('root')
);