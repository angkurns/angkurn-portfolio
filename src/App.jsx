
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ArchivePage from '@/pages/ArchivePage';
import TheBrainGarden from '@/pages/TheBrainGarden';
import CaseStudyDetail from '@/pages/CaseStudyDetail';
import BrainGardenDetail from '@/pages/BrainGardenDetail';
import WorkPage from '@/pages/WorkPage';
import { Toaster } from '@/components/ui/toaster';

import { ContactModalProvider, useContactModal } from '@/context/ContactModalContext';
import ContactModal from '@/components/ContactModal';

function AppContent() {
  const { isOpen, closeModal } = useContactModal();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/notes" element={<TheBrainGarden />} />

          {/* Dynamic Routes */}
          <Route path="/systems/:slug" element={<CaseStudyDetail />} />
          <Route path="/notes/:slug" element={<BrainGardenDetail />} />
        </Routes>
      </main>
      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}

function App() {
  return (
    <ContactModalProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
        <Toaster />
        <Analytics />
      </Router>
    </ContactModalProvider>
  );
}

export default App;
