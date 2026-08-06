// src/pages/institutions/RadioDirector.jsx

import React from 'react';
import InstitutionTemplate from '../../components/common/InstitutionTemplate';
import { radioDirectorData } from '../../data/institutions/radioDirectorData';

const RadioDirector = () => {
  return <InstitutionTemplate {...radioDirectorData} />;
};

export default RadioDirector;