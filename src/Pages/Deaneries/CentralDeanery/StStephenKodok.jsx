// src/pages/deaneries/CentralDeanery/StStephenKodok.jsx

import React from 'react';
import ParishTemplate from '../../../components/common/ParishTemplate';
import { stStephenKodokData } from '../../../data/parishes/central/stStephenKodokData';

const StStephenKodok = () => {
  return <ParishTemplate {...stStephenKodokData} />;
};

export default StStephenKodok;