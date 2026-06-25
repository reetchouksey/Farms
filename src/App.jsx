import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from './store/languageSlice';

import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Brands from './pages/Brands';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  const lang = useSelector(selectLanguage);

  useEffect(() => {
    document.body.classList.remove('lang-en', 'lang-hi');
    document.body.classList.add(`lang-${lang}`);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Topbar />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
