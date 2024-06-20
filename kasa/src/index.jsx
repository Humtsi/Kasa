import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Hebergements from './pages/Hebergements'

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  gap: 50px;
  padding-top: 45px;
  height:100%;
`
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <PageContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
        <Route path="/hebergement/:id" element={<Hebergements />} />
      </Routes>
      <Footer />
    </PageContainer>
  </Router>
);