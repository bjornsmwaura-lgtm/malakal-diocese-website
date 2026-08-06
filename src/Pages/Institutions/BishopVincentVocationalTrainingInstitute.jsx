// src/pages/institutions/BishopVincentVocationalTrainingInstitute.jsx

import React from 'react';
import InstitutionTemplate from '../../components/common/InstitutionTemplate';
import { bishopVincentVocationalData } from '../../data/institutions/bishopVincentVocationalData';

const BishopVincentVocationalTrainingInstitute = () => {
  return <InstitutionTemplate {...bishopVincentVocationalData} />;
};

export default BishopVincentVocationalTrainingInstitute;