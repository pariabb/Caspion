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
import ReferencesSwiper from '../components/ClientsSwiper';
import { useTranslation } from 'react-i18next';


const Home = () => {
    
    const { t } = useTranslation();
    
    const projects = [
        {
            id: 1,
            title: t("home.htitle1"),
            description: t("home.desc1"),
            imageUrl: FiberOpticCabel1,
        },
        {
            id: 2,
            title: t("home.htitle2"),
            description: t("home.desc2"),
            imageUrl: FiberOpticCabel2,
        },
        {
            id: 3,
            title: t("home.htitle3"),
            description: t("home.desc3"),
            imageUrl: FiberOpticCabel3,
        },
        {
            id: 4,
            title: t("home.htitle4"),
            description: t("home.desc4"),
            imageUrl: FiberOpticCabel4,
        },
    ];


    return (
        <div>
            <SwipeSlider />

            <ReferencesSwiper />

            <div className="construction-advanced-section">
                <h1 className='text-center'>{t("home.section-title2")}</h1>
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
