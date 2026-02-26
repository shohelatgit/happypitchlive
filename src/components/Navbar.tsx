import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useResponsive } from '@/hooks/use-media-query';

const COLORS = {
  black: 'rgba(0, 0, 0, 1)',
  white: 'rgba(255, 255, 255, 1)',
  grayText: 'rgba(124, 124, 124, 1)',
  lightGrayBg: 'rgba(240, 240, 240, 1)',
  borderGray: 'rgba(232, 232, 232, 1)',
  darkGray: 'rgba(28, 28, 28, 1)',
};

const FONTS = {
  inter: '"Inter", sans-serif'
};

const industriesList = [
  { label: 'Pharmaceuticals', slug: 'pharma', isPage: true },
  { label: 'Biotechnology', slug: 'biotech', isPage: true },
  { label: 'Private Equity', slug: 'private-equity', isPage: true },
  { label: 'Private Credit', slug: 'private-credit', isPage: true },
  { label: 'Venture Capital', slug: 'venture-capital', isPage: true },
  { label: 'Family Office', slug: 'family-office', isPage: true },
  { label: 'Digital Transformation', slug: 'digital-transformation', isPage: true },
  { label: 'Food & Beverages', slug: 'food-beverages', isPage: true },
  { label: 'SaaS', slug: 'saas', isPage: true },
  { label: 'CPG', slug: 'cpg', isPage: true },
];

const servicesList = [
  { label: 'Corporate Presentations', slug: 'corporate-presentation' },
  { label: 'Pitch Decks', slug: 'pitch-decks' },
  { label: 'Investor Memos', slug: 'investor-memos' },
  { label: 'CIMs', slug: 'cims' },
  { label: 'Sales Decks', slug: 'sales-decks' },
];

interface NavbarProps {
  isScrolled?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const { isMobile } = useResponsive();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleButtonClick = (action: string) => {
    alert(`${action} - Coming soon!`);
  };

  const NavItem = ({ children, active = false, onClick }: { children: React.ReactNode; active?: boolean; onClick?: () => void }) => (
    <span 
      onClick={onClick}
      style={{
        fontSize: '18px',
        fontFamily: FONTS.inter,
        fontWeight: active ? 500 : 400,
        color: active ? COLORS.black : COLORS.grayText,
        cursor: 'pointer',
        transition: 'color 0.2s ease'
      }}
    >
      {children}
    </span>
  );

  const ActionButton = ({ variant = 'primary', children, style, isMobile = false }: {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    style?: React.CSSProperties;
    isMobile?: boolean;
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const baseStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: isMobile ? '12px 20px' : '8px 16px',
      gap: '8px',
      borderRadius: '990px',
      cursor: 'pointer',
      fontFamily: FONTS.inter,
      fontSize: '16px',
      fontWeight: 600,
      transition: 'all 0.2s ease',
      border: 'none',
      width: isMobile ? '100%' : 'auto',
      ...style
    };
    const variants = {
      primary: { backgroundColor: COLORS.black, color: COLORS.white },
      secondary: { backgroundColor: COLORS.white, color: COLORS.black, border: `1px solid ${COLORS.borderGray}` }
    };
    return (
      <button 
        onClick={() => handleButtonClick('Request Samples')} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
        style={{ ...baseStyle, ...variants[variant] }}
      >
        {children}
      </button>
    );
  };

  return (
    <header style={{
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,1)',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '20px 24px' : '24px 60px',
      }}>
        <Link to="/" onClick={scrollToTop}>
          <img 
            src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/fdbe1f81-3290-4746-8213-2ffa66130842.png" 
            alt="Logo" 
            style={{ width: isMobile ? '140px' : '180px', height: isMobile ? '24px' : '28px', objectFit: 'contain' }} 
          />
        </Link>
        
        {isMobile ? (
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}>
            {mobileMenuOpen ? <X size={24} color={COLORS.black} /> : <Menu size={24} color={COLORS.black} />}
          </button>
        ) : (
          <>
            <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <Link to="/" onClick={scrollToTop} style={{ textDecoration: 'none' }}><NavItem active>Home</NavItem></Link>
              
              <div style={{ position: 'relative' }} onMouseEnter={() => setIndustriesDropdownOpen(true)} onMouseLeave={() => setIndustriesDropdownOpen(false)}>
                <NavItem>Industries ▾</NavItem>
                {industriesDropdownOpen && (
                  <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: '16px', zIndex: 100 }}>
                    <div style={{ backgroundColor: COLORS.white, borderRadius: '12px', padding: '12px', width: '200px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', border: `1px solid ${COLORS.borderGray}` }}>
                      {industriesList.map((item) => (
                        <Link key={item.slug} to={`/industries/${item.slug}`} style={{ textDecoration: 'none' }}>
                          <div style={{ padding: '10px 12px', color: COLORS.grayText, fontSize: '14px', fontFamily: FONTS.inter, cursor: 'pointer', borderRadius: '8px' }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.lightGrayBg; e.currentTarget.style.color = COLORS.black; }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLORS.grayText; }}>
                            {item.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div style={{ position: 'relative' }} onMouseEnter={() => setServicesDropdownOpen(true)} onMouseLeave={() => setServicesDropdownOpen(false)}>
                <NavItem>Services ▾</NavItem>
                {servicesDropdownOpen && (
                  <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: '16px', zIndex: 100 }}>
                    <div style={{ backgroundColor: COLORS.white, borderRadius: '12px', padding: '12px', width: '200px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', border: `1px solid ${COLORS.borderGray}` }}>
                      {servicesList.map((item) => (
                        <Link key={item.slug} to={`/services/${item.slug}`} style={{ textDecoration: 'none' }}>
                          <div style={{ padding: '10px 12px', color: COLORS.grayText, fontSize: '14px', fontFamily: FONTS.inter, cursor: 'pointer', borderRadius: '8px' }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.lightGrayBg; e.currentTarget.style.color = COLORS.black; }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLORS.grayText; }}>
                            {item.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            <div style={{ display: 'flex', gap: '12px' }}>
              <ActionButton variant="primary">Request Samples</ActionButton>
              <Link to="/case-studies" style={{ textDecoration: 'none' }}>
                <ActionButton variant="secondary">Case Studies</ActionButton>
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: COLORS.white,
          zIndex: 99,
          padding: '80px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          overflowY: 'auto'
        }}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none' }}><NavItem active>Home</NavItem></Link>
          
          <div>
            <div onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
              <NavItem>Industries</NavItem>
              <span style={{ color: COLORS.grayText }}>{mobileIndustriesOpen ? '▲' : '▼'}</span>
            </div>
            {mobileIndustriesOpen && (
              <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {industriesList.map((item) => (
                  <Link key={item.slug} to={`/industries/${item.slug}`} onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none' }}>
                    <span style={{ color: COLORS.grayText, fontSize: '14px', fontFamily: FONTS.inter }}>{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <div onClick={() => setMobileServicesOpen(!mobileServicesOpen)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
              <NavItem>Services</NavItem>
              <span style={{ color: COLORS.grayText }}>{mobileServicesOpen ? '▲' : '▼'}</span>
            </div>
            {mobileServicesOpen && (
              <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {servicesList.map((item) => (
                  <Link key={item.slug} to={`/services/${item.slug}`} onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none' }}>
                    <span style={{ color: COLORS.grayText, fontSize: '14px', fontFamily: FONTS.inter }}>{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
            <ActionButton variant="primary" isMobile>Request Samples</ActionButton>
            <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none' }}>
              <ActionButton variant="secondary" isMobile>Case Studies</ActionButton>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
