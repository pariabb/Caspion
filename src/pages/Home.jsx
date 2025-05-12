import React from 'react';
import SwipeSlider from '../components/SwipeSlider';
import { motion } from "framer-motion";
import '../assets/css/home.css';
import PartnersSlider from '../components/PartnersSlider';
import HeroSection from '../components/HeroSection';
import FiberOpticCabel1 from '../assets/pic/homepic/fiber-optic-cables.jpg'
import FiberOpticCabel2 from '../assets/pic/homepic/Optical-fiber.webp'
import FiberOpticCabel3 from '../assets/pic/homepic/fiber-cabel.avif'
import FiberOpticCabel4 from '../assets/pic/homepic/giphy.gif'
import ReferencesSwiper from '../components/ReferencesSwiper';


const Home = () => {
    const projects = [
        {
            id: 1,
            title: "İnfrastruktur üçün Ağıllı Satınalma",
            description: "Kabel və avadanlıq təchizatı üçün effektiv və sürətli həllər təqdim edirik — yüksək performans və dayanıqlı çatdırılma zəmanəti ilə.",
            imageUrl: FiberOpticCabel1,
        },
        {
            id: 2,
            title: "Qlobal Təchizatçı Şəbəkələri",
            description: "Rəqəmsal texnologiyalar vasitəsilə təchizatçı bağlantılarını genişləndirir və etibarlı tərəfdaşlıq platformaları qururuq.",
            imageUrl: FiberOpticCabel2,
        },
        {
            id: 3,
            title: "Ekoloji Davamlı Satınalma",
            description: "ESG standartlarına uyğun şəkildə resurs istifadəsini minimuma endirən, eyni zamanda keyfiyyəti qoruyan satınalma modelləri tətbiq edirik.",
            imageUrl: FiberOpticCabel3,
        },
        {
            id: 4,
            title: "Rəqəmsal Təchizat Zənciri İdarəetməsi",
            description: "Satınalma proseslərinizi avtomatlaşdırır, izlənəbilən və çevik bir təchizat zənciri ilə qərarverməni optimallaşdırırıq.",
            imageUrl: FiberOpticCabel4,
        },
    ];


    return (
        <div>
            <SwipeSlider />

            <ReferencesSwiper />

            <div className="construction-advanced-section">
                <h1 className='text-center'>Fiber-optic Products</h1>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className={`construction-advanced-card ${index % 2 === 0 ? "left" : "right"}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ type: "spring", stiffness: 60, damping: 20 }}
                    >

                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="construction-advanced-image"
                        />
                        <div className="construction-advanced-text">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>


            <HeroSection />
            <PartnersSlider />
        </div>
    );
};

export default Home;
