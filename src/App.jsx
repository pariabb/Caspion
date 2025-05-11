import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import References from './pages/References'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetail from './pages/ProductDetail';

const Main = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/references" element={<References />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
        <Footer />
      </div>
    </>
  );
};

const App = () => {

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);



  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

export default App;

