import React from 'react';
import PageHeader from '../components/PageHeader';
import '../assets/css/references.css';
import { FaHandshake } from 'react-icons/fa'; 
import { useTranslation } from 'react-i18next';


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
  { id: 1, name: 'idda', logo: idda },
  { id: 2, name: 'icenter', logo: icenter },
  { id: 3, name: 'esf', logo: esf },
  { id: 4, name: 'aztelekom', logo: aztelekom },
  { id: 5, name: 'metro', logo: metro },
  { id: 6, name: 'naxcivan', logo: naxcivan },
  { id: 7, name: 'socar', logo: socar },
  { id: 8, name: 'mod', logo: mod },
  { id: 9, name: 'nwc', logo: nwc },
  { id: 10, name: 'silkway', logo: silkway },
  { id: 11, name: 'asinshaat', logo: asinshaat },
  { id: 12, name: 'downstream', logo: downstream },
  { id: 13, name: 'stp', logo: stp },
  { id: 14, name: 'bakubus', logo: bakubus },
  { id: 15, name: 'bsc', logo: bsc },
  { id: 16, name: 'texno', logo: texno },
  { id: 17, name: 'pmd', logo: pmd },
  { id: 18, name: 'ertok', logo: ertok },
  { id: 19, name: 'maqro', logo: maqro },
  { id: 20, name: 'tork', logo: tork },
  { id: 21, name: 'cengiz', logo: cengiz },
  { id: 22, name: 'kalyon', logo: kalyon },
  { id: 23, name: 'uniko', logo: uniko },
  { id: 24, name: 'tekiz', logo: tekiz },
  { id: 25, name: 'agrarco', logo: agrarco },
  { id: 26, name: 'archico', logo: archico },
  { id: 27, name: 'isbsu', logo: isbsu }
];

const References = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader title={t('header.menu4')} />
      <section className="reference-grid-section">
        <div className="reference-grid">
          {referenceData.map((ref) => (
            <div className="reference-card" key={ref.id}>
              <div className="reference-logo">
                <img src={ref.logo} alt={t(`references.companies.${ref.name}`)} />
              </div>
              <div className="reference-info">
                <h3><FaHandshake /> {t(`references.companies.${ref.name}`)}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default References;
