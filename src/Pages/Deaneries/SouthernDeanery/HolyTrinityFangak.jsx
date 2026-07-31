// src/pages/deaneries/SouthernDeanery/HolyTrinityFangak.jsx

import React from 'react';
import ParishTemplate from '../../../components/common/ParishTemplate';
import { holyTrinityFangakData } from '../../../data/parishes/southern/holyTrinityFangakData';

const HolyTrinityFangak = () => {
  return <ParishTemplate {...holyTrinityFangakData} />;
};

export default HolyTrinityFangak;