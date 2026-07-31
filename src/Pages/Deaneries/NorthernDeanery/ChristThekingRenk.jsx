// src/pages/deaneries/NorthernDeanery/ChristtheKingRenk.jsx

import React from 'react';
import ParishTemplate from '../../../components/common/ParishTemplate';
import { christTheKingRenkData } from '../../../data/parishes/northern/christTheKingRenkData';

const ChristtheKingRenk = () => {
  return <ParishTemplate {...christTheKingRenkData} />;
};

export default ChristtheKingRenk;