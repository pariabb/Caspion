import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import PageHeader from '../components/PageHeader';
import './ProductDetail.css';
import { useTranslation } from 'react-i18next';

const ProductDetail = () => {
  const { categoryId, productId, id } = useParams();
  const [showScroll, setShowScroll] = useState(false);
  const { t } = useTranslation();

  let product = null;


  if (categoryId && productId) {
    const category = productsData.find((cat) => cat.id === categoryId && cat.type === 'category');
    if (category && category.subcategories) {
      product = category.subcategories.find((item) => item.id === productId);
    }
  } else if (id) {
    product = productsData.find((p) => p.id === id && p.type === 'product');
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!product) {
    return (
      <div className="not-found-container">
        <PageHeader title={t('productNotFound')} />
        <p className="not-found-message">{t('productNotFoundMessage')}</p>
        <Link to="/products" className="back-button">← {t("products.buttonText7")}</Link>
      </div>
    );
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  let breadcrumbTitle = t(`products.${product.id}.title`);
  let breadcrumbContent;

  if (categoryId && productId) {
    const parentCategory = productsData.find((cat) => cat.id === categoryId);
    breadcrumbContent = (
      <>
        <Link to="/" className='homeLink'>{t("header.menu1")}</Link>{" "} /{" "}
        <Link to="/products" className='homeLink'>{t("header.menu3")}</Link>{" "} /{" "} 
        <Link to={`/products/${categoryId}`} className='homeLink'>
          {t(`products.${parentCategory.id}.title`)}
        </Link>{" "} /{" "}
        {breadcrumbTitle}
      </>
    );
  } else {
    breadcrumbContent = (
      <>
        <Link to="/" className='homeLink'>{t("header.menu1")}</Link>{" "} /{" "}
        <Link to="/products" className='homeLink'>{t("header.menu3")}</Link>{" "} /{" "} 
        {breadcrumbTitle}
      </>
    );
  }

  return (
    <div>
      <PageHeader
        title={breadcrumbTitle}
        breadcrumb={breadcrumbContent}
      />

      <div className="product-detail-content fade-in">
        <div className="product-image">
          <img src={product.image} alt={t(`products.${product.id}.title`)} />
        </div>
        <div className="product-info justify-center">
          <p>{t(`products.${product.id}.details.description`)}</p>
          {product.details.specifications && (
            <div className="product-specifications">
              <h4>{t('products.specifications')}</h4>
              <ul>
                {Object.entries(product.details.specifications).map(([key, value]) => (
                  <li key={key}><strong>{t(`products.specs.${key}`)}:</strong> {value}</li>
                ))}
              </ul>
            </div>
          )}
          <Link to="/products" className="back-button">← {t("products.buttonText7")}</Link>
        </div>
      </div>

      {showScroll && (
        <button className="scroll-top" onClick={scrollToTop}>↑</button>
      )}
    </div>
  );
};

export default ProductDetail;