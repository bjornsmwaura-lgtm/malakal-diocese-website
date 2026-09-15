// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminContacts from './admin/AdminContacts.jsx';
import AdminContactDetail from './admin/AdminContactDetail.jsx';
import AdminDonations from './admin/AdminDonations.jsx';
import AdminPartnerships from './admin/AdminPartnerships.jsx';
import AdminVolunteers from './admin/AdminVolunteers.jsx';

// Layouts
import PublicLayout from './layouts/PublicLayout.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';

// Admin
import AdminLogin from './admin/AdminLogin.jsx';
import AdminDashboard from './admin/AdminDashboard.jsx';
import ProtectedRoute from './admin/ProtectedRoute.jsx';

// ============================================
// MAIN PAGES
// ============================================
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Donate from './pages/Donate.jsx';
import Projects from './pages/Projects.jsx';
import Emergency from './pages/Emergency.jsx';
import GetInvolved from './pages/GetInvolved.jsx';
import NewsEvents from './Pages/NewsEvents.jsx';
import ThankYou from './pages/ThankYou.jsx';

// CURIA PAGES
import Curia from './pages/curia/index.jsx';
import BishopsOffice from './pages/curia/Bishops-Office.jsx';
import Caritas from './pages/curia/Caritas.jsx';
import JPC from './pages/curia/JPC.jsx';
import ConsecratedLife from './pages/curia/ConsecratedLife.jsx';
import EducationDepartment from './pages/curia/EducationDepartment.jsx';
import Finance from './pages/curia/Finance.jsx';
import JudicialVicar from './pages/curia/JudicialVicar.jsx';
import LegalDepartment from './pages/curia/LegalDepartment.jsx';
import Liturgy from './pages/curia/Liturgy.jsx';
import MedicalHealth from './pages/curia/MedicalHealth.jsx';
import PastoralDepartment from './pages/curia/PastoralDepartment.jsx';
import PMC from './pages/curia/PMC.jsx';
import VicarGeneral from './pages/curia/VicarGeneral.jsx';
import VocationsOffice from './pages/curia/VocationsOffice.jsx';
import YouthOffice from './pages/curia/YouthOffice.jsx';

// DEANERIES
import Deaneries from './pages/deaneries/index.jsx';
import CentralDeanery from './pages/deaneries/CentralDeanery/index.jsx';
import NorthernDeanery from './pages/deaneries/NorthernDeanery/index.jsx';
import SouthernDeanery from './pages/deaneries/SouthernDeanery/index.jsx';

import StJosephsCathedralMalakal from './pages/deaneries/CentralDeanery/StJosephs-CathedralMalakal.jsx';
import ChristTheKingMalakia from './pages/deaneries/CentralDeanery/ChristtheKingMalakia.jsx';
import MariakweroMalakal from './pages/deaneries/CentralDeanery/MariakweroMalakal.jsx';
import GuardianAngel from './pages/deaneries/CentralDeanery/GuardianAngel.jsx';
import OurLadyofSorrowsTonga from './pages/deaneries/CentralDeanery/OurLadyofSorrowsTonga.jsx';
import StsAmbroseCharlesBorromeo from './pages/deaneries/CentralDeanery/StsAmbroseCharlesBorromeo.jsx';
import StStephenKodok from './pages/deaneries/CentralDeanery/StStephenKodok.jsx';

import ChristtheKingRenk from './pages/deaneries/NorthernDeanery/ChristtheKingRenk.jsx';
import OurLadyofHopeWadakona from './pages/deaneries/NorthernDeanery/OurLadyofHopeWadakona.jsx';
import StMarkMaban from './pages/deaneries/NorthernDeanery/StMarkMaban.jsx';
import StPaultheApostleKaka from './pages/deaneries/NorthernDeanery/StPaultheApostleKaka.jsx';

import AllSaintsWaat from './pages/deaneries/SouthernDeanery/AllSaintsWaat.jsx';
import AscensionOfTheLordAyod from './pages/deaneries/SouthernDeanery/AscensionOfTheLordAyod.jsx';
import HolyTrinityFangak from './pages/deaneries/SouthernDeanery/HolyTrinityFangak.jsx';
import StPaulBor from './pages/deaneries/SouthernDeanery/StPaulBor.jsx';

// INSTITUTIONS
import Institutions from './pages/institutions/index.jsx';
import BishopVincentCampus from './pages/institutions/BishopVincentCampus.jsx';
import RadioDirector from './pages/institutions/RadioDirector.jsx';
import MalakiaGuestHouse from './pages/institutions/MalakiaGuestHouse.jsx';
import BishopVincentCampusStaffQuarter from './Pages/Institutions/BishopVincentCampusStaffQuarter.jsx';
import BishopVincentVocationalTraining from './pages/institutions/BishopVincentVocationalTrainingInstitute.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* ============================================
            PUBLIC SITE (Header + Footer)
           ============================================ */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/thank-you" element={<ThankYou />} />

          {/* CURIA */}
          <Route path="/curia" element={<Curia />} />
          <Route path="/curia/bishops-office" element={<BishopsOffice />} />
          <Route path="/curia/caritas" element={<Caritas />} />
          <Route path="/curia/JPC" element={<JPC />} />
          <Route path="/curia/consecrated-life" element={<ConsecratedLife />} />
          <Route path="/curia/education-department" element={<EducationDepartment />} />
          <Route path="/curia/finance" element={<Finance />} />
          <Route path="/curia/judicial-vicar" element={<JudicialVicar />} />
          <Route path="/curia/legal-department" element={<LegalDepartment />} />
          <Route path="/curia/liturgy" element={<Liturgy />} />
          <Route path="/curia/medical-health" element={<MedicalHealth />} />
          <Route path="/curia/pastoral-department" element={<PastoralDepartment />} />
          <Route path="/curia/pmc" element={<PMC />} />
          <Route path="/curia/vicar-general" element={<VicarGeneral />} />
          <Route path="/curia/vocations-office" element={<VocationsOffice />} />
          <Route path="/curia/youth-office" element={<YouthOffice />} />

          {/* DEANERIES */}
          <Route path="/deaneries" element={<Deaneries />} />
          <Route path="/deaneries/central-deanery" element={<CentralDeanery />} />
          <Route path="/deaneries/northern-deanery" element={<NorthernDeanery />} />
          <Route path="/deaneries/southern-deanery" element={<SouthernDeanery />} />

          <Route path="/deaneries/central-deanery/st-josephs-cathedral" element={<StJosephsCathedralMalakal />} />
          <Route path="/deaneries/central-deanery/christ-the-king" element={<ChristTheKingMalakia />} />
          <Route path="/deaneries/central-deanery/mariakwero-malakal" element={<MariakweroMalakal />} />
          <Route path="/deaneries/central-deanery/guardian-angel" element={<GuardianAngel />} />
          <Route path="/deaneries/central-deanery/our-lady-of-sorrows-tonga" element={<OurLadyofSorrowsTonga />} />
          <Route path="/deaneries/central-deanery/sts-ambrose-charles-borromeo" element={<StsAmbroseCharlesBorromeo />} />
          <Route path="/deaneries/central-deanery/st-stephen-kodok" element={<StStephenKodok />} />

          <Route path="/deaneries/northern-deanery/christ-the-king-renk" element={<ChristtheKingRenk />} />
          <Route path="/deaneries/northern-deanery/our-lady-of-hope-wadakona" element={<OurLadyofHopeWadakona />} />
          <Route path="/deaneries/northern-deanery/st-mark-maban" element={<StMarkMaban />} />
          <Route path="/deaneries/northern-deanery/st-paul-the-apostle-kaka" element={<StPaultheApostleKaka />} />

          <Route path="/deaneries/southern-deanery/all-saints-waat" element={<AllSaintsWaat />} />
          <Route path="/deaneries/southern-deanery/ascension-of-the-lord-ayod" element={<AscensionOfTheLordAyod />} />
          <Route path="/deaneries/southern-deanery/holy-trinity-fangak" element={<HolyTrinityFangak />} />
          <Route path="/deaneries/southern-deanery/st-paul-bor" element={<StPaulBor />} />

          {/* INSTITUTIONS */}
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/institutions/bishop-vincent-campus" element={<BishopVincentCampus />} />
          <Route path="/institutions/radio-director" element={<RadioDirector />} />
          <Route path="/institutions/bishop-vincent-vocational-training" element={<BishopVincentVocationalTraining />} />
          <Route path="/institutions/malakia-guest-house" element={<MalakiaGuestHouse />} />
          <Route path="/institutions/solidarity-guest-house" element={<BishopVincentCampusStaffQuarter />} />
        </Route>

        {/* ============================================
            ADMIN
           ============================================ */}
        <Route path="/admin" element={
  <ProtectedRoute>
    <AdminLayout />
  </ProtectedRoute>
}>
  <Route index element={<AdminDashboard />} />
  <Route path="contacts" element={<AdminContacts />} />
  <Route path="contacts/:id" element={<AdminContactDetail />} />
  <Route path="donations" element={<AdminDonations />} />
  <Route path="partnerships" element={<AdminPartnerships />} />
  <Route path="volunteers" element={<AdminVolunteers />} />
</Route>
      </Routes>
    </Router>
  );
}

export default App;