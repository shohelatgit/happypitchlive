import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Theme } from './settings/types';
import { HeroLandingPage } from './components/generated/HeroLandingPage';
import { ServicesPage } from './components/ServicesPage';
import { IndustriesPage } from './components/IndustriesPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { PharmaIndustryPage } from './components/PharmaIndustryPage';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
