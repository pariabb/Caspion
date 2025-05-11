import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import products from '../data/products.json';
import './Products.css';

const Products = () => {
  return (
    <div>
      <PageHeader
        title="Products"
        backgroundImage="https://images.unsplash.com/photo-1645651964715-d200ce0939cc?q=80&w=2070&auto=format&fit=crop"
      />
      <div className="product-grid">
        {products.map((item) => (
          <Link to={`/products/${item.id}`} key={item.id} className="product-card">
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
