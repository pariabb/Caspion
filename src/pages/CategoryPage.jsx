
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import productsData from '../data/products.json';
import './CategoryPage.css';
import { useTranslation } from 'react-i18next';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const { t } = useTranslation();

  const currentCategory = productsData.find(
    (cat) => cat.id === categoryId && cat.type === 'category'
  );

  if (!currentCategory || !currentCategory.subcategories || currentCategory.subcategories.length === 0) {
    return (
      <div>
        <PageHeader title={t('categoryNotFound')} />
        <p className="not-found-message">{t('categoryNotFoundMessage')}</p>
      </div>
    );
  }

  const breadcrumbContent = (
    <>
      <Link to="/" className='homeLink'>{t("header.menu1")}</Link>{" "} /{" "}
      <Link to="/products" className='homeLink'>{t("header.menu3")}</Link>{" "} /{" "} 
      {t(`products.${currentCategory.id}.title`)}
    </>
  );

  return (
    <div>
      <PageHeader
        title={t(`products.${currentCategory.id}.title`)}
        breadcrumb={breadcrumbContent} 
      />
      <div className="product-grid">
        {currentCategory.subcategories.map((item) => (
          <Link
            to={`/products/${categoryId}/${item.id}`}
            key={item.id}
            className="product-card"
          >
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

export default CategoryPage;