// src/pages/deaneries/SouthernDeanery/StPaulBor.jsx

import React from 'react';
import ParishTemplate from '../../../components/common/ParishTemplate';
import { stPaulBorData } from '../../../data/parishes/southern/stPaulBorData';

const StPaulBor = () => {
  return <ParishTemplate {...stPaulBorData} />;
};

export default StPaulBor;