import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products.json';
import PageHeader from '../components/PageHeader';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);
    const [showScroll, setShowScroll] = useState(false);

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
                title={product.title}
                breadcrumb={breadcrumb}
                backgroundImage="https://images.unsplash.com/photo-1606814540563-5c02d62fd409?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className="product-detail-content fade-in">
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                    <p>{product.description}</p>
                    <Link to="/products" className="back-button">← Back to Products</Link>
                </div>
            </div>

            {showScroll && (
                <button className="scroll-top" onClick={scrollToTop}>↑</button>
            )}
        </div>
    );
};

export default ProductDetail;
