// src/pages/institutions/BishopVincentCampus.jsx

import React from 'react';
import InstitutionTemplate from '../../components/common/InstitutionTemplate';
import { bishopVincentCampusData } from '../../data/institutions/bishopVincentCampusData';

const BishopVincentCampus = () => {
  const { header, description, galleryImages, externalLink, contact } = bishopVincentCampusData;

  return (
    <InstitutionTemplate
      header={header}
      description={description}
      galleryImages={galleryImages}
      externalLink={externalLink}
      contact={contact}
    />
  );
};

export default BishopVincentCampus;