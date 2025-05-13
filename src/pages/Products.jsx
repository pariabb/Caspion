import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import products from '../data/products.json';
import './Products.css';
import { useTranslation } from 'react-i18next';

const Products = () => {

  const { t } = useTranslation();
  return (
    <div>
      <PageHeader
        title={t('header.menu3')}
      />
      <div className="product-grid">
        {products.map((item) => (
          <Link to={`/products/${item.id}`} key={item.id} className="product-card">
            <img src={item.image} alt={t(`products.${item.id}.title`)} />
            <div className="overlay">
              <h3>{t(`products.${item.id}.title`)}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
