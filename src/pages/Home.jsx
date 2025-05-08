import React from 'react'
import SwipeSlider from '../components/SwipeSlider'
import { motion } from "framer-motion";
import '../assets/css/home.css'
import PartnersSlider from '../components/PartnersSlider';
import HeroSection from '../components/HeroSection';
const Home = () => {
    const projects = [
        {
            id: 1,
            title: "Efficient Procurement Strategies",
            description: "We develop cost-effective procurement solutions tailored to your industry needs, ensuring timely and reliable supply delivery.",
            imageUrl: "https://assteel.com.tr/wp-content/uploads/2023/03/pexels-nicole-rathmayr-220885-scaled.jpg",
        },
        {
            id: 2,
            title: "Vendor Network Expansion",
            description: "Our team helps build robust supplier networks across global markets, improving sourcing flexibility and risk management.",
            imageUrl: "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            title: "Sustainable Procurement Solutions",
            description: "We implement eco-conscious procurement practices that align with ESG goals while maintaining efficiency and quality.",
            imageUrl: "https://ybholding.com.tr/wp-content/uploads/2023/08/insaat.jpg",
        },
        {
            id: 4,
            title: "Digital Supply Chain Management",
            description: "We digitize your procurement workflows to improve visibility, automation, and decision-making across your supply chain.",
            imageUrl: "https://www.worldconstructiontoday.com/wp-content/uploads/2022/03/Ventilation-and-Aesthetics2.jpg",
        },
    ];



    return (
        <div>
            <SwipeSlider />


            <div className="construction-advanced-section">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className={`construction-advanced-card ${index % 2 === 0 ? "left" : "right"}`}
                        initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
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
    )
}

export default Home