
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import TheBrainGarden from '@/pages/TheBrainGarden';
import CaseStudyDetail from '@/pages/CaseStudyDetail';
import BrainGardenDetail from '@/pages/BrainGardenDetail';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/the-brain-garden" element={<TheBrainGarden />} />
            
            {/* Dynamic Routes */}
            <Route path="/systems/:slug" element={<CaseStudyDetail />} />
            <Route path="/brain-garden/:slug" element={<BrainGardenDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
