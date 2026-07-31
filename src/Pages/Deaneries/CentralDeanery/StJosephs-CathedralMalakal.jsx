// src/pages/deaneries/CentralDeanery/StJosephs-CathedralMalakal.jsx

import React from 'react';
import ParishTemplate from '../../../components/common/ParishTemplate';
import { stJosephsCathedralData } from '../../../data/parishes/central/stJosephsCathedralData';

const StJosephsCathedralMalakal = () => {
  return <ParishTemplate {...stJosephsCathedralData} />;
};

export default StJosephsCathedralMalakal;