// src/pages/deaneries/CentralDeanery/StsAmbroseCharlesBorromeo.jsx

import React from 'react';
import ParishTemplate from '../../../components/common/ParishTemplate';
import { stsAmbroseCharlesBorromeoData } from '../../../data/parishes/central/stsAmbroseCharlesBorromeoData';

const StsAmbroseCharlesBorromeo = () => {
  return <ParishTemplate {...stsAmbroseCharlesBorromeoData} />;
};

export default StsAmbroseCharlesBorromeo;