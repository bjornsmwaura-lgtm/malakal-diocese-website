// src/pages/deaneries/CentralDeanery/ChristtheKingMalakia.jsx

import React from 'react';
import ParishTemplate from '../../../components/common/ParishTemplate';
import { christTheKingMalakiaData } from '../../../data/parishes/central/christTheKingMalakiaData';

const ChristTheKingMalakia = () => {
  return <ParishTemplate {...christTheKingMalakiaData} />;
};

export default ChristTheKingMalakia;