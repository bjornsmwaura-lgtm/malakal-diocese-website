// src/pages/institutions/BishopVincentCampus.jsx

import React from 'react';
import InstitutionTemplate from '../../components/common/InstitutionTemplate';
import { bishopVincentCampusData } from '../../data/institutions/bishopVincentCampusData';

const BishopVincentCampus = () => {
  const { 
    header, 
    description, 
    academicFacultiesImage, // ✅ ADD THIS
    galleryImages, 
    externalLink, 
    contact 
  } = bishopVincentCampusData;

  return (
    <InstitutionTemplate
      header={header}
      description={description}
      academicFacultiesImage={academicFacultiesImage} // ✅ ADD THIS
      galleryImages={galleryImages}
      externalLink={externalLink}
      contact={contact}
    />
  );
};

export default BishopVincentCampus;