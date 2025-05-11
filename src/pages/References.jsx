import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/css/references.css';
import { FaHandshake } from 'react-icons/fa';

const referenceData = [
  {
    id: 1,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    name: 'Microsoft',
    description: 'We provided IT equipment and fiber-optic solutions for multiple data centers.',
  },
  {
    id: 2,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    name: 'Apple',
    description: 'Delivered secure cable systems and telecom accessories for retail stores.',
  },
  {
    id: 3,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Samsung_Logo.svg',
    name: 'Samsung',
    description: 'Handled procurement of control instruments and industrial piping materials.',
  },
];

const References = () => {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="reference-container">
      {referenceData.map((ref) => (
        <motion.div
          key={ref.id}
          className="reference-card"
          onClick={() => toggle(ref.id)}
          initial={false}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="reference-logo">
            <img src={ref.logo} alt={ref.name} />
          </div>
          <div className="reference-info">
            <h3>
              <FaHandshake /> {ref.name}
            </h3>

            <AnimatePresence mode="wait">
              {activeId === ref.id && (
                <motion.div
                  key={`desc-${ref.id}`} // <-- BU MÜTLƏQ LAZIMDIR!
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="reference-desc">{ref.description}</p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default References;
