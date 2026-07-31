// src/pages/deaneries/CentralDeanery/MariakweroMalakal.jsx

import React from 'react';
import ParishTemplate from '../../../components/common/ParishTemplate';
import { mariakweroMalakalData } from '../../../data/parishes/central/mariakweroMalakalData';

const MariakweroMalakal = () => {
  return <ParishTemplate {...mariakweroMalakalData} />;
};

export default MariakweroMalakal;