import React from 'react';
import PageHeader from '../components/PageHeader';
import '../assets/css/references.css';
import { FaHandshake } from 'react-icons/fa';

// Logo importları
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

const referenceData = [
  { id: 1, name: 'İnnovasiya və Rəqəmsal İnkişaf Agentliyi', logo: idda },
  { id: 2, name: 'İnnovasiyalar Mərkəzi', logo: icenter },
  { id: 3, name: 'Əmanətlərin Sığortalanması Fondu', logo: esf },
  { id: 4, name: 'Aztelekom', logo: aztelekom },
  { id: 5, name: 'Bakı Metropoliteni QSC', logo: metro },
  { id: 6, name: 'Naxçıvan MR Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi', logo: naxcivan },
  { id: 7, name: 'SOCAR', logo: socar },
  { id: 8, name: 'Azərbaycan Respublikası Müdafiə Nazirliyi', logo: mod },
  { id: 9, name: 'North West Construction LLC', logo: nwc },
  { id: 10, name: 'Silk Way West Airlines', logo: silkway },
  { id: 11, name: 'AS İnşaat', logo: asinshaat },
  { id: 12, name: 'SOCAR Downstream', logo: downstream },
  { id: 13, name: 'Sumgait Technologies Park STP', logo: stp },
  { id: 14, name: 'Bakubus LLC', logo: bakubus },
  { id: 15, name: 'Baku Steel Company QSC', logo: bsc },
  { id: 16, name: 'Azertexnolayn', logo: texno },
  { id: 17, name: 'PMD Group', logo: pmd },
  { id: 18, name: 'Ertok', logo: ertok },
  { id: 19, name: 'Maqro Construction', logo: maqro },
  { id: 20, name: 'Tork Çelik', logo: tork },
  { id: 21, name: 'Cengiz İnşaat', logo: cengiz },
  { id: 22, name: 'Kalyon', logo: kalyon },
  { id: 23, name: 'UniKo QSC', logo: uniko },
  { id: 24, name: 'Tekiz İnşaat', logo: tekiz },
  { id: 25, name: 'Agrarco', logo: agrarco },
  { id: 26, name: 'Archico', logo: archico },
  { id: 27, name: 'İri Şəhərlərin Birləşmiş Su Təchizatı Xidməti', logo: isbsu }
];

const References = () => {
  return (
    <div>
      <PageHeader
        title="Referanslarımız"
        backgroundImage="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2070"
      />

      <section className="reference-grid-section">
        <div className="reference-grid">
          {referenceData.map((ref) => (
            <div className="reference-card" key={ref.id}>
              <div className="reference-logo">
                <img src={ref.logo} alt={ref.name} />
              </div>
              <div className="reference-info">
                <h3><FaHandshake /> {ref.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default References;
