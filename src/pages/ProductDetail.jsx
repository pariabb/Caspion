import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products.json';
import PageHeader from '../components/PageHeader';
import './ProductDetail.css';
import { useTranslation } from 'react-i18next';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);
    const [showScroll, setShowScroll] = useState(false);

    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => setShowScroll(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!product) return <div className="not-found">Product not found</div>;

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const breadcrumb = (
        <>
            <Link to="/" className='homeLink'>
                Home
            </Link>{" "}
            /{" "}
            <Link to="/products" className='homeLink'>
                Products
            </Link>{" "}
            / {product.title}
        </>
    );

    return (


        <div>
            <PageHeader
                title={t(`products.${id}.title`)} breadcrumb={breadcrumb}
            />

            <div className="product-detail-content fade-in">
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                    <p>{t(`products.${id}.description`)}</p>
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
