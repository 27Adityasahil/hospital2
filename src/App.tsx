import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CentersOfExcellence from './components/CentersOfExcellence';
import AboutSection from './components/AboutSection';
import CounterStats from './components/CounterStats';
import QualityServices from './components/QualityServices';
import DoctorsSection from './components/DoctorsSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <CentersOfExcellence />
      <AboutSection />
      <CounterStats />
      <QualityServices />
      <DoctorsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;