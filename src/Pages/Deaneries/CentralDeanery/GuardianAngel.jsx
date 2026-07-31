// src/pages/deaneries/CentralDeanery/GuardianAngel.jsx

import React from 'react';
import ParishTemplate from '../../../components/common/ParishTemplate';
import { guardianAngelData } from '../../../data/parishes/central/guardianAngelData';

const GuardianAngel = () => {
  return <ParishTemplate {...guardianAngelData} />;
};

export default GuardianAngel;