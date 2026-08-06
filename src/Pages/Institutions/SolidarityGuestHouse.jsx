// src/pages/institutions/SolidarityGuestHouse.jsx

import React from 'react';
import InstitutionTemplate from '../../components/common/InstitutionTemplate';
import { solidarityGuestHouseData } from '../../data/institutions/solidarityGuestHouseData';

const SolidarityGuestHouse = () => {
  return <InstitutionTemplate {...solidarityGuestHouseData} />;
};

export default SolidarityGuestHouse;