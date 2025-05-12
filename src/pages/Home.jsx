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
            title: "Efficient Procurement Strategies",
            description: "We develop cost-effective procurement solutions tailored to your industry needs, ensuring timely and reliable supply delivery.",
            imageUrl: FiberOpticCabel1,
        },
        {
            id: 2,
            title: "Vendor Network Expansion",
            description: "Our team helps build robust supplier networks across global markets, improving sourcing flexibility and risk management.",
            imageUrl:FiberOpticCabel2,
        },
        {
            id: 3,
            title: "Sustainable Procurement Solutions",
            description: "We implement eco-conscious procurement practices that align with ESG goals while maintaining efficiency and quality.",
            imageUrl: FiberOpticCabel3,
        },
        {
            id: 4,
            title: "Digital Supply Chain Management",
            description: "We digitize your procurement workflows to improve visibility, automation, and decision-making across your supply chain.",
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
