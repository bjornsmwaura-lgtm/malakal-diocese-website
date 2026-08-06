// src/pages/institutions/MalakiaGuestHouse.jsx

import React from 'react';
import InstitutionTemplate from '../../components/common/InstitutionTemplate';
import { malakiaGuestHouseData } from '../../data/institutions/malakiaGuestHouseData';

const MalakiaGuestHouse = () => {
  return <InstitutionTemplate {...malakiaGuestHouseData} />;
};

export default MalakiaGuestHouse;