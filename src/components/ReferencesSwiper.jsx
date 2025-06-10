import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import '../assets/css/references_swiper.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';



import agrarco from '../assets/pic/references/agrarco_logo.jpg';
import archico from '../assets/pic/references/ArchiCO-Project-services-logo.webp';
import asinshaat from '../assets/pic/references/asinsaat_logo.svg';
import mod from '../assets/pic/references/Azerbaijan_MOD_logo.svg';
import aztelekom from '../assets/pic/references/aztelekom_logo.png';
import metro from '../assets/pic/references/Baku_metro_logo.svg';
import bakubus from '../assets/pic/references/bakubus_logo.png';
import bsc from '../assets/pic/references/bsc_logo.png';
import cengiz from '../assets/pic/references/Cengiz_Holding_logo.png';
import ertok from '../assets/pic/references/ertok_logo.png';
import esf from '../assets/pic/references/ƏSF_Loqo.png';
import icenter from '../assets/pic/references/icenter_logo.png';
import idda from '../assets/pic/references/idda-logo.png';
import isbsu from '../assets/pic/references/isbsu_logo.png';
import kalyon from '../assets/pic/references/kalyon-logo.png';
import uniko from '../assets/pic/references/LOGO-unico.png';
import maqro from '../assets/pic/references/magroconstruction_logo.jpeg';
import naxcivan from '../assets/pic/references/nmrreqemsal_logo.png';
import nwc from '../assets/pic/references/NW_Construction_logo.png';
import pmd from '../assets/pic/references/pmd_logo.png';
import silkway from '../assets/pic/references/silkway_logo.jpg';
import downstream from '../assets/pic/references/Socar_downstream-Logo.png';
import socar from '../assets/pic/references/socar_logo.png';
import stp from '../assets/pic/references/STP_MMC_logo.png';
import tekiz from '../assets/pic/references/tekiz-insaat-logo.png';
import texno from '../assets/pic/references/texno_logo.png';
import tork from '../assets/pic/references/tork_logo.png';

const logos = [
    idda, icenter, esf, aztelekom, metro, naxcivan, mod,
    nwc, silkway, socar, stp, bakubus, bsc, texno, pmd,
    ertok, maqro, downstream, tork, cengiz, kalyon, uniko, tekiz, agrarco,
    archico, asinshaat, isbsu
];


const ReferencesSwiper = () => {

    const { t } = useTranslation();

    return (
        <section className="references-swiper-section">
            <h2 className="section-title">{t("home.section-title1")}</h2>
            <Swiper
                modules={[Autoplay, Pagination, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 150,
                    modifier: 2,
                    slideShadows: false,
                }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="references-swiper"
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index} className="logo-slide">
                        <img src={logo} alt={`client-logo-${index}`} className="client-logo" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Link to='/references'>
                <button
                    className="swiper-button"
                >{t('home.buttonText1')}</button>
            </Link>
        </section>
    );
};

export default ReferencesSwiper;
