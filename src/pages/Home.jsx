import React from 'react';
import SwipeSlider from '../components/SwipeSlider';
import { motion } from "framer-motion";
import '../assets/css/home.css';
import PartnersSlider from '../components/PartnersSlider';
import HeroSection from '../components/HeroSection';

const Home = () => {
    const projects = [
        {
            id: 1,
            title: "Efficient Procurement Strategies",
            description: "We develop cost-effective procurement solutions tailored to your industry needs, ensuring timely and reliable supply delivery.",
            imageUrl: "https://i.kickstarter.com/assets/045/175/527/814ba4720f6bde2bdb8abf8fef316a0e_original.gif?fit=scale-down&origin=ugc&q=92&width=680&sig=rD7CpMGoRN7nCU%2BR3LzplMRKJmF6yWd2yZNSoEPF1nI%3D",
        },
        {
            id: 2,
            title: "Vendor Network Expansion",
            description: "Our team helps build robust supplier networks across global markets, improving sourcing flexibility and risk management.",
            imageUrl: "https://cdn.dribbble.com/users/280033/screenshots/1497483/valve.gif",
        },
        {
            id: 3,
            title: "Sustainable Procurement Solutions",
            description: "We implement eco-conscious procurement practices that align with ESG goals while maintaining efficiency and quality.",
            imageUrl: "https://grippergasket.com/wp-content/uploads/2022/10/max-pipe-animation.gif",
        },
        {
            id: 4,
            title: "Digital Supply Chain Management",
            description: "We digitize your procurement workflows to improve visibility, automation, and decision-making across your supply chain.",
            imageUrl: "https://media2.giphy.com/media/l41YvpiA9uMWw5AMU/giphy.gif?cid=6c09b9528xbgdfm1z4s627w5ntgwlbgeyr8wfo6plisd76ch&ep=v1_gifs_search&rid=giphy.gif&ct=g",
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
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
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
