import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Clients from './pages/Clients'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/CategoryPage';
import Procurement from './pages/Procurement';
import Suppliers from './pages/Suppliers';
import Companies from './pages/Compaines';
import Evaluation from './pages/Evaluation';

const Main = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categoryId" element={<CategoryPage />} />
          <Route path="/products/:categoryId/:productId" element={<ProductDetail />} />
          <Route path="/products/details/:id" element={<ProductDetail />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/evaluation" element={<Evaluation />} />
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

