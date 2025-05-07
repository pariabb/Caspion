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
            title: "Yüksək Keyfiyyətli Tikinti",
            description: "Müasir texnologiyalarla dayanıqlı və estetik binalar inşa edirik.",
            imageUrl: "https://assteel.com.tr/wp-content/uploads/2023/03/pexels-nicole-rathmayr-220885-scaled.jpg",
        },
        {
            id: 2,
            title: "İnnovativ Həllər",
            description: "Layihələriniz üçün yaradıcı və effektiv tikinti həlləri təklif edirik.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKhLIywx997s-PMFzrkJ6_Gz0vhgE0NFLcQ&s",
        },
        {
            id: 3,
            title: "Enerji Effektiv Binalar",
            description: "Ekoloji təmiz və enerji effektiv tikinti layihələri həyata keçiririk.",
            imageUrl: "https://ybholding.com.tr/wp-content/uploads/2023/08/insaat.jpg",
        },
        {
            id: 4,
            title: "Layihə İdarəetməsi",
            description: "Hər addımda peşəkar idarəetmə və keyfiyyət təminatı.",
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