// src/pages/deaneries/NorthernDeanery/StMarkMaban.jsx

import React from 'react';
import ParishTemplate from '../../../components/common/ParishTemplate';
import { stMarkMabanData } from '../../../data/parishes/northern/stMarkMabanData';

const StMarkMaban = () => {
  return <ParishTemplate {...stMarkMabanData} />;
};

export default StMarkMaban;