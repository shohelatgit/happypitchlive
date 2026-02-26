import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Theme } from './settings/types';
import { HeroLandingPage } from './components/generated/HeroLandingPage';
import { ServicesPage } from './components/ServicesPage';
import { IndustriesPage } from './components/IndustriesPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { PharmaIndustryPage } from './components/PharmaIndustryPage';
import { BiotechIndustryPage } from './components/BiotechIndustryPage';
import { PrivateEquityIndustryPage } from './components/PrivateEquityIndustryPage';
import { PrivateCreditIndustryPage } from './components/PrivateCreditIndustryPage';
import { VentureCapitalIndustryPage } from './components/VentureCapitalIndustryPage';
import { FamilyOfficeIndustryPage } from './components/FamilyOfficeIndustryPage';
import { DigitalTransformationIndustryPage } from './components/DigitalTransformationIndustryPage';
import { FoodAndBeverageIndustryPage } from './components/FoodAndBeverageIndustryPage';
import { SaaSIndustryPage } from './components/SaaSIndustryPage';
import { CPGIndustryPage } from './components/CPGIndustryPage';
import { BostonLocationPage } from './components/BostonLocationPage';

const theme: Theme = 'light';
const container: Container = 'none';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroLandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/industries/pharma" element={<PharmaIndustryPage />} />
        <Route path="/industries/biotech" element={<BiotechIndustryPage />} />
        <Route path="/industries/private-equity" element={<PrivateEquityIndustryPage />} />
        <Route path="/industries/private-credit" element={<PrivateCreditIndustryPage />} />
        <Route path="/industries/venture-capital" element={<VentureCapitalIndustryPage />} />
        <Route path="/industries/family-office" element={<FamilyOfficeIndustryPage />} />
        <Route path="/industries/digital-transformation" element={<DigitalTransformationIndustryPage />} />
        <Route path="/industries/food-beverages" element={<FoodAndBeverageIndustryPage />} />
        <Route path="/industries/saas" element={<SaaSIndustryPage />} />
        <Route path="/industries/cpg" element={<CPGIndustryPage />} />
        <Route path="/locations/boston" element={<BostonLocationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
