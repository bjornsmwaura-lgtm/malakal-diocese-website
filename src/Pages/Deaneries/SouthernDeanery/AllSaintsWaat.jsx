// src/pages/deaneries/SouthernDeanery/AllSaintsWaat.jsx

import React from 'react';
import ParishTemplate from '../../../components/common/ParishTemplate';
import { allSaintsWaatData } from '../../../data/parishes/southern/allSaintsWaatData';

const AllSaintsWaat = () => {
  return <ParishTemplate {...allSaintsWaatData} />;
};

export default AllSaintsWaat;