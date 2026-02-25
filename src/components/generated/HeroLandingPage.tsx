import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Timer, Award, BarChart3, Shield, Users, Menu, X, Search, Lightbulb, Palette, Linkedin, Instagram, FileText, Zap, Target } from 'lucide-react';
import { useResponsive } from '@/hooks/use-media-query';

interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
const COLORS = {
  black: 'rgba(0, 0, 0, 1)',
  white: 'rgba(255, 255, 255, 1)',
  grayText: 'rgba(124, 124, 124, 1)',
  lightGrayBg: 'rgba(240, 240, 240, 1)',
  borderGray: 'rgba(232, 232, 232, 1)',
  darkGray: 'rgba(28, 28, 28, 1)',
  offWhite: 'rgba(247, 247, 247, 1)'
};
const FONTS = {
  inter: '"Inter", sans-serif'
};

// Reusable Button Component
const ActionButton = ({
  variant = 'primary',
  children,
  icon,
  onClick,
  style,
  isMobile = false
}: {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  icon?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  isMobile?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isMobile ? '12px 20px' : '16px 24px',
    gap: '12px',
    borderRadius: '990px',
    cursor: 'pointer',
    fontFamily: FONTS.inter,
    fontSize: isMobile ? '16px' : '18px',
    fontWeight: 600,
    lineHeight: '21.8px',
    transition: 'all 0.2s ease',
    border: 'none',
    width: isMobile ? '100%' : 'auto',
    ...style
  };
  const variants = {
    primary: {
      backgroundColor: COLORS.black,
      color: COLORS.white,
      transform: isHovered ? 'translateY(-2px)' : 'none',
      boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
    },
    secondary: {
      backgroundColor: COLORS.white,
      color: COLORS.black,
      border: `1px solid ${COLORS.borderGray}`,
      transform: isHovered ? 'translateY(-2px)' : 'none',
      boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: COLORS.white,
      padding: '0px'
    }
  };
  return <button onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{
    ...baseStyle,
    ...variants[variant]
  }}>
      {children}
      {icon && <img src={icon} alt="arrow" style={{
      width: '24px',
      height: '24px'
    }} />}
    </button>;
};
const NavItem = ({
  children,
  active = false,
  isMobile = false,
  onClick
}: {
  children: React.ReactNode;
  active?: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return <button onClick={onClick} style={{
    background: 'none',
    border: 'none',
    color: active ? COLORS.darkGray : isHovered ? COLORS.black : COLORS.grayText,
    fontSize: isMobile ? '16px' : '18px',
    fontFamily: FONTS.inter,
    fontWeight: active ? 500 : 400,
    lineHeight: '27px',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
    padding: isMobile ? '12px 0' : '4px 8px',
    width: isMobile ? '100%' : 'auto',
    textAlign: isMobile ? 'left' : 'center'
  }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {children}
    </button>;
};
export const HeroLandingPage = () => {
  const [activeTab, setActiveTab] = useState('Fundraising');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const { isMobile, isTablet } = useResponsive();
  const tabs = ['Fundraising', 'M&A Advisory', 'Investor Communications', 'Growth & Sales'];

  const industriesList = [
    { label: 'Pharmaceuticals', slug: 'pharma' },
    { label: 'Biotechnology', slug: 'biotech' },
    { label: 'Private Equity', slug: 'private-equity' },
    { label: 'Private Credit', slug: 'private-credit' },
    { label: 'Venture Capital', slug: 'venture-capital' },
    { label: 'Family Office', slug: 'family-office' },
    { label: 'Digital Transformation', slug: 'digital-transformation' },
    { label: 'Food & Beverages', slug: 'food-beverages' },
    { label: 'SaaS', slug: 'saas' },
    { label: 'CPG', slug: 'cpg' },
  ];

  const servicesList = [
    { label: 'Corporate Presentations', slug: 'corporate-presentation' },
    { label: 'Pitch Decks', slug: 'pitch-decks' },
    { label: 'Investor Memos', slug: 'investor-memos' },
    { label: 'CIMs', slug: 'cims' },
    { label: 'Sales Decks', slug: 'sales-decks' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleButtonClick = (action: string) => {
    alert(`${action} - Coming soon!`);
  };

  const featureIcons = [
    { icon: FileText, color: '#3b82f6', bgColor: 'rgba(59, 130, 246, 0.1)' },
    { icon: BarChart3, color: '#22c55e', bgColor: 'rgba(34, 197, 94, 0.1)' },
    { icon: Users, color: '#a855f7', bgColor: 'rgba(168, 85, 247, 0.1)' },
    { icon: Shield, color: '#ef4444', bgColor: 'rgba(239, 68, 68, 0.1)' },
    { icon: Zap, color: '#f97316', bgColor: 'rgba(249, 115, 22, 0.1)' },
    { icon: Target, color: '#14b8a6', bgColor: 'rgba(20, 184, 166, 0.1)' }
  ];

  const pillarIcons = [
    { icon: Search, color: '#3b82f6', bgColor: 'rgba(59, 130, 246, 0.1)' },
    { icon: Lightbulb, color: '#f97316', bgColor: 'rgba(249, 115, 22, 0.1)' },
    { icon: Palette, color: '#a855f7', bgColor: 'rgba(168, 85, 247, 0.1)' }
  ];

  const tabContent: Record<string, { title: string; image: string; link: string; sections: { subtitle: string; description: string; link: string }[] }> = {
    'Fundraising': {
      title: 'Fundraising',
      image: '/solution-1.jpg',
      link: '/services/pitch-decks',
      sections: [
        {
          subtitle: 'Pitch Decks',
          description: 'Investor-ready decks that tell your equity story with data, design, and conviction. Built to win meetings and close rounds.',
          link: '/services/pitch-decks',
        },
        {
          subtitle: 'Investor Memos',
          description: 'LP-facing materials that communicate strategy, track record, and differentiation with institutional polish.',
          link: '/services/investor-memos',
        },
        {
          subtitle: 'Data Room Presentations',
          description: 'Structured materials that accelerate due diligence and build investor confidence from the first click.',
          link: '/services',
        },
      ],
    },
    'M&A Advisory': {
      title: 'M&A Advisory',
      image: '/solution-2.jpg',
      link: '/services/cims',
      sections: [
        {
          subtitle: 'Confidential Information Memorandums',
          description: 'Sell-side CIMs that present the full business opportunity with clarity, credibility, and institutional-grade formatting.',
          link: '/services/cims',
        },
        {
          subtitle: 'Management Presentations',
          description: 'Executive decks that articulate value, growth levers, and strategic fit for potential buyers and partners.',
          link: '/services/corporate-presentation',
        },
        {
          subtitle: 'Buyer & Target Profiles',
          description: 'Concise overviews that position acquisition targets or potential partners effectively for deal teams.',
          link: '/services',
        },
      ],
    },
    'Investor Communications': {
      title: 'Investor Communications',
      image: '/solution-3.jpg',
      link: '/services/corporate-presentation',
      sections: [
        {
          subtitle: 'Quarterly Reports',
          description: 'Polished LP updates that communicate portfolio performance, market outlook, and strategic direction.',
          link: '/services/investor-memos',
        },
        {
          subtitle: 'Annual Meeting Decks',
          description: 'Board-ready materials that inform, align, and inspire stakeholder confidence at every level.',
          link: '/services/corporate-presentation',
        },
        {
          subtitle: 'Earnings & IR Presentations',
          description: 'Public-facing materials that translate complex financial data into compelling investor narratives.',
          link: '/services/corporate-presentation',
        },
      ],
    },
    'Growth & Sales': {
      title: 'Growth & Sales',
      image: '/solution-4.jpg',
      link: '/services/sales-decks',
      sections: [
        {
          subtitle: 'Enterprise Sales Decks',
          description: 'Persuasive presentations that communicate your value proposition clearly and close deals faster.',
          link: '/services/sales-decks',
        },
        {
          subtitle: 'Product & Platform Overviews',
          description: 'Clear, compelling materials that make complex solutions easy to understand for any audience.',
          link: '/services/sales-decks',
        },
        {
          subtitle: 'Case Studies & Proof Points',
          description: 'Evidence-backed narratives that build credibility, demonstrate impact, and drive conversion.',
          link: '/services/sales-decks',
        },
      ],
    },
  };

  return <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: COLORS.lightGrayBg,
    boxSizing: 'border-box',
    overflowX: 'hidden',
    position: 'relative'
  }}>
      {/* Navigation Header */}
      <header style={{
      width: '100%',
      maxWidth: '1440px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '20px 24px' : isTablet ? '24px 60px' : '32px 120px',
      boxSizing: 'border-box'
    }}>
        <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/fdbe1f81-3290-4746-8213-2ffa66130842.png" alt="Logo" style={{
        width: isMobile ? '140px' : '216px',
        height: isMobile ? '24px' : '32px',
        objectFit: 'contain'
      }} />
        
        {isMobile ? (
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {mobileMenuOpen ? <X size={24} color={COLORS.black} /> : <Menu size={24} color={COLORS.black} />}
          </button>
        ) : (
          <>
            <nav style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center'
          }}>
              <Link to="/" onClick={scrollToTop} style={{ textDecoration: 'none', color: COLORS.black }}><NavItem active>Home</NavItem></Link>
              
              {/* Industries Dropdown */}
              <div style={{ position: 'relative' }} onMouseEnter={() => setIndustriesDropdownOpen(true)} onMouseLeave={() => setIndustriesDropdownOpen(false)}>
                <NavItem>Industries ▾</NavItem>
                {industriesDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    paddingTop: '12px',
                    zIndex: 100
                  }}>
                    <div style={{
                      backgroundColor: COLORS.white,
                      borderRadius: '12px',
                      padding: '16px',
                      width: '200px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                      border: `1px solid ${COLORS.borderGray}`
                    }}>
                      {industriesList.map((item) => (
                        <Link key={item.slug} to={`/industries/${item.slug}`} style={{ textDecoration: 'none' }}>
                          <div style={{
                            padding: '10px 12px',
                            color: COLORS.grayText,
                            fontSize: '14px',
                            fontFamily: FONTS.inter,
                            cursor: 'pointer',
                            borderRadius: '8px',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.lightGrayBg; e.currentTarget.style.color = COLORS.black; }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLORS.grayText; }}
                          >
                            {item.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div style={{ position: 'relative' }} onMouseEnter={() => setServicesDropdownOpen(true)} onMouseLeave={() => setServicesDropdownOpen(false)}>
                <NavItem>Services ▾</NavItem>
                {servicesDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    paddingTop: '12px',
                    zIndex: 100
                  }}>
                    <div style={{
                      backgroundColor: COLORS.white,
                      borderRadius: '12px',
                      padding: '16px',
                      width: '200px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                      border: `1px solid ${COLORS.borderGray}`
                    }}>
                      {servicesList.map((item) => (
                        <Link key={item.slug} to={`/services/${item.slug}`} style={{ textDecoration: 'none' }}>
                          <div style={{
                            padding: '10px 12px',
                            color: COLORS.grayText,
                            fontSize: '14px',
                            fontFamily: FONTS.inter,
                            cursor: 'pointer',
                            borderRadius: '8px',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.lightGrayBg; e.currentTarget.style.color = COLORS.black; }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLORS.grayText; }}
                          >
                            {item.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            <div style={{
            display: 'flex',
            gap: '16px'
          }}>
              <ActionButton variant="primary" style={{
              padding: '8px 16px'
            }} onClick={() => handleButtonClick('Request Samples')} icon="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/c309654f-ff68-4b5b-ad53-30bd67dcaad3.svg">
              Request Samples
            </ActionButton>
<Link to="/case-studies" style={{ textDecoration: 'none' }}>
              <ActionButton variant="secondary" style={{ padding: '8px 16px' }}>
                Case Studies
              </ActionButton>
            </Link>
          </div>
          </>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMobile && mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: COLORS.white,
          zIndex: 100,
          padding: '80px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none' }}><NavItem active isMobile>Home</NavItem></Link>
            <Link to="/industries" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none' }}><NavItem isMobile>Industries</NavItem></Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none' }}><NavItem isMobile>Services</NavItem></Link>
          </nav>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginTop: '24px'
          }}>
            <ActionButton variant="primary" isMobile onClick={() => handleButtonClick('Request Samples')} icon="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/c309654f-ff68-4b5b-ad53-30bd67dcaad3.svg">
              Request Samples
            </ActionButton>
<Link to="/case-studies" style={{ textDecoration: 'none' }}>
              <ActionButton variant="secondary" isMobile>
                Case Studies
              </ActionButton>
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section style={{
      width: '100%',
      height: isMobile ? 'auto' : isTablet ? '600px' : '800px',
      minHeight: isMobile ? '500px' : 'auto',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: isMobile ? '60px 24px' : isTablet ? '0 60px' : '0 120px',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
        <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/adc7c371-3261-4275-8f9e-1b353b4e85de.png" alt="Background" style={{
        position: 'absolute',
        top: '-5%',
        left: 0,
        width: '110%',
        height: '110%',
        objectFit: 'cover',
        objectPosition: 'center bottom',
        zIndex: 0
      }} />
        <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '120px',
        background: 'linear-gradient(to bottom, rgba(240,240,240,1) 0%, rgba(240,240,240,0.8) 50%, rgba(240,240,240,0) 100%)',
        zIndex: 0
      }} />
        <div style={{
        maxWidth: isMobile ? '100%' : '690px',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '24px' : '40px',
        padding: isMobile ? '0' : '0'
      }}>
          <h1 style={{
          margin: 0,
          fontSize: isMobile ? '40px' : isTablet ? '56px' : '80px',
          fontWeight: 700,
          lineHeight: isMobile ? '44px' : isTablet ? '60px' : '83.2px',
          letterSpacing: isMobile ? '-1.2px' : '-2.4px',
          color: COLORS.black,
          fontFamily: FONTS.inter,
          textTransform: 'capitalize'
        }}>
            Clear Stories That<br />Close Deals
          </h1>
          <p style={{
          margin: 0,
          fontSize: isMobile ? '16px' : '18px',
          lineHeight: isMobile ? '24px' : '27px',
          color: COLORS.grayText,
          fontFamily: FONTS.inter,
          maxWidth: isMobile ? '100%' : '580px'
        }}>
            Enable your firm to compete and win across every front with deal-winning narratives that turn complex strategies into capital raises and institutional credibility.
          </p>
          <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '16px',
          width: isMobile ? '100%' : 'auto'
        }}>
            <ActionButton variant="primary" isMobile={isMobile} onClick={() => handleButtonClick('Request Samples')} icon="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/3076bda9-6bf7-46f7-812b-dcd56fbe4b15.svg">
              Request Samples
            </ActionButton>
<Link to="/case-studies" style={{ textDecoration: 'none' }}>
              <ActionButton variant="secondary" isMobile={isMobile}>
                Case Studies
              </ActionButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners/Logos Section */}
      <section style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: isMobile ? '40px 24px' : isTablet ? '60px 60px' : '80px 120px'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        width: '100%',
        maxWidth: '1200px'
      }}>
          <span style={{
          fontSize: '14px',
          fontWeight: 500,
          color: COLORS.grayText,
          fontFamily: FONTS.inter,
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>Trusted by industry leaders</span>
          <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '48px',
          flexWrap: 'wrap',
          width: '100%'
        }}>
            {[
              { src: '/logos/gaux.png', alt: 'Gaux' },
              { src: '/logos/instantly.png', alt: 'Instantly' },
              { src: '/logos/collaborating-docs.png', alt: 'Collaborating Docs' },
              { src: '/logos/miller.png', alt: 'Miller' },
              { src: '/logos/correcol.png', alt: 'Correcol' }
            ].map((logo, i) => <img key={i} src={logo.src} alt={logo.alt} style={{
              width: '120px',
              height: 'auto',
              objectFit: 'contain',
              filter: 'grayscale(100%)',
              opacity: 0.7
            }} />)}
          </div>
        </div>
      </section>

      {/* Solutions Tabs Section */}
      <section style={{
      width: '100%',
      maxWidth: '1440px',
      padding: isMobile ? '60px 24px' : isTablet ? '80px 60px' : '120px 120px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: isMobile ? '32px' : '64px',
      boxSizing: 'border-box'
    }}>
        <div style={{
        textAlign: 'center',
        maxWidth: isMobile ? '100%' : '792px',
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '16px' : '24px',
        padding: isMobile ? '0' : '0'
      }}>
          <h2 style={{
          fontSize: isMobile ? '32px' : isTablet ? '40px' : '56px',
          fontWeight: 700,
          lineHeight: isMobile ? '36px' : isTablet ? '48px' : '67.2px',
          letterSpacing: isMobile ? '-0.96px' : '-1.68px',
          margin: 0
        }}>
            Top providers trusted by growing teams
          </h2>
          <p style={{
          fontSize: isMobile ? '16px' : '18px',
          color: COLORS.grayText,
          lineHeight: isMobile ? '24px' : '27px',
          margin: 0,
          padding: isMobile ? '0 8px' : '0'
        }}>
            Combining strategic storytelling, deep industry research, and world-class design to turn complex ideas into clear, confident communication.
          </p>
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        width: '100%'
      }}>
          {/* Tabs Container */}
          <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: isMobile ? '6px' : '8px',
          gap: isMobile ? '8px' : '16px',
          backgroundColor: COLORS.black,
          borderRadius: '990px',
          justifyContent: 'center'
        }}>
            {tabs.map((tab) => <button key={tab} onClick={() => setActiveTab(tab)} style={{
            padding: isMobile ? '10px 16px' : '16px 24px',
            borderRadius: '990px',
            border: 'none',
            fontFamily: FONTS.inter,
            fontSize: isMobile ? '12px' : '16px',
            cursor: 'pointer',
            backgroundColor: activeTab === tab ? COLORS.white : COLORS.darkGray,
            color: activeTab === tab ? COLORS.black : COLORS.white,
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap'
          }}>
                {tab}
              </button>)}
          </div>

          {/* Active Tab Content Card */}
          <div style={{
          width: '100%',
          maxWidth: '996px',
          backgroundColor: COLORS.white,
          borderRadius: '24px',
          padding: '8px',
          boxShadow: '0px 4px 8px rgba(154, 154, 154, 0.24)',
          boxSizing: 'border-box'
        }}>
            <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            backgroundColor: COLORS.black,
            borderRadius: '16px',
            overflow: 'hidden',
            minHeight: isMobile ? 'auto' : '520px'
          }}>
              <div style={{
              flex: 1,
              padding: isMobile ? '32px 24px' : '56px 48px',
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '24px' : '32px'
            }}>
                <h3 style={{
                color: COLORS.white,
                fontSize: isMobile ? '24px' : '36px',
                fontWeight: 700,
                margin: 0,
                letterSpacing: '-0.36px'
              }}>
                  {activeTab}
                </h3>
                
                <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '16px' : '24px'
              }}>
                  {tabContent[activeTab]?.sections.map((item, i) => <div key={i} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                      <span style={{
                    color: COLORS.white,
                    fontSize: isMobile ? '14px' : '16px',
                        fontWeight: 600
                      }}>{item.subtitle}</span>
                      <p style={{
                    color: COLORS.grayText,
                    fontSize: isMobile ? '14px' : '16px',
                    margin: 0,
                    lineHeight: '19.4px'
                  }}>{item.description}</p>
                    </div>)}
                </div>

                <ActionButton variant="ghost" isMobile={isMobile} onClick={() => handleButtonClick('Explore Solutions')} icon="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/2a1c711b-ed26-4dce-9bc8-e3302c30d472.svg">
                  Explore Solutions
                </ActionButton>
              </div>

              <div style={{
              flex: 1,
              backgroundColor: COLORS.darkGray,
              position: 'relative',
              overflow: 'hidden',
              minHeight: isMobile ? '250px' : 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                <img 
                  src={tabContent[activeTab]?.image} 
                  alt={`${activeTab} preview`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section style={{
      width: '100%',
      maxWidth: '1440px',
      padding: isMobile ? '60px 24px' : isTablet ? '80px 60px' : '120px 120px',
      boxSizing: 'border-box'
    }}>
          <h2 style={{
          fontSize: isMobile ? '32px' : isTablet ? '40px' : '56px',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: isMobile ? '40px' : '64px',
          letterSpacing: isMobile ? '-0.96px' : '-1.68px'
        }}>
          Why Choose<br />Happy Pitch?
        </h2>
        
        <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
        gap: '24px',
        width: '100%'
      }}>
          {[
            { title: 'Built for Finance', desc: "We don't just design; we understand finance. Our team is fluent in capitalization tables, complex waterfalls, and investment theses, ensuring every slide is not only visually stunning but technically precise and market-ready." },
            { title: 'Institutional Grade Data', desc: "Turn dense spreadsheets into compelling visual narratives. We transform complex datasets into intuitive, institutional-grade charts and graphs that allow investors to grasp your value proposition at a glance." },
            { title: 'Founder-Led Execution', desc: "Nothing is outsourced. You work directly with the founder to get your deck ready, ensuring your materials benefit from expert experience and personal dedication without agency layers." },
            { title: 'Bank-Level Security', desc: "Uncompromising security for your most sensitive data. We adhere to strict NDAs and utilize enterprise-grade encryption and security protocols, giving you the peace of mind that your proprietary information remains confidential." },
            { title: 'Deal Speed', desc: "We operate at the speed of M&A. With 24/7 availability and rapid turnaround times, we ensure you never miss a critical deadline, keeping your deal momentum moving forward no matter the hour." },
            { title: 'Outcome Focused', desc: "Design that drives results. We don't just make decks look good; we engineer them for conversion. Whether your goal is securing a meeting, raising capital, or closing a fund, our materials are optimized to help you win." }
          ].map((feature, i) => {
            const IconComponent = featureIcons[i].icon;
            return <div key={i} style={{
            backgroundColor: COLORS.offWhite,
            padding: '8px',
            borderRadius: '24px',
            boxShadow: '0px 4px 8px rgba(154, 154, 154, 0.24)'
          }}>
              <div style={{
            backgroundColor: COLORS.white,
            padding: isMobile ? '20px' : '24px',
            borderRadius: '16px',
            height: '100%',
            boxSizing: 'border-box'
          }}>
                <div style={{
              width: isMobile ? '56px' : '64px',
              height: isMobile ? '56px' : '64px',
              marginBottom: isMobile ? '12px' : '16px',
              borderRadius: '16px',
              backgroundColor: featureIcons[i].bgColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                  <IconComponent size={isMobile ? 28 : 32} color={featureIcons[i].color} strokeWidth={2} />
                </div>
                <h4 style={{
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 700,
              margin: '0 0 12px 0',
              letterSpacing: '-0.96px'
            }}>{feature.title}</h4>
                <p style={{
              fontSize: isMobile ? '14px' : '16px',
              color: COLORS.grayText,
              margin: 0,
              lineHeight: '19.4px'
            }}>
                  {feature.desc}
                </p>
              </div>
            </div>;
          })}
        </div>
      </section>

      {/* Metrics Section */}
      <section style={{
      width: '100%',
      backgroundColor: COLORS.black,
      padding: isMobile ? '60px 24px' : isTablet ? '80px 60px' : '120px 120px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: isMobile ? '40px' : '64px',
      boxSizing: 'border-box'
    }}>
        <h2 style={{
        color: COLORS.white,
        fontSize: isMobile ? '32px' : isTablet ? '40px' : '56px',
        fontWeight: 700,
        letterSpacing: isMobile ? '-0.96px' : '-1.68px',
        margin: 0,
        textAlign: 'center'
      }}>
          Chosen By Sophisticated<br />Businesses
        </h2>
        <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1200px',
        gap: isMobile ? '40px' : '0'
      }}>
          {[
            { value: '$100B+', label: 'Capital Raised by Clients' },
            { value: '500+', label: 'Deals Supported' },
            { value: '100%', label: 'Founder-Led Execution' }
          ].map((metric, i) => <div key={i} style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
              <span style={{
            color: COLORS.white,
            fontSize: isMobile ? '48px' : isTablet ? '60px' : '80px',
            fontWeight: 700,
            letterSpacing: isMobile ? '-1.44px' : '-2.4px'
          }}>{metric.value}</span>
              <span style={{
            color: COLORS.grayText,
            fontSize: isMobile ? '14px' : '18px'
          }}>{metric.label}</span>
            </div>)}
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section style={{
      width: '100%',
      maxWidth: '1440px',
      padding: isMobile ? '60px 24px' : isTablet ? '80px 60px' : '120px 120px',
      boxSizing: 'border-box'
    }}>
        <div style={{
        textAlign: 'center',
        maxWidth: '792px',
        margin: isMobile ? '0 0 40px 0' : '0 auto 64px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '16px' : '24px'
      }}>
          <h2 style={{
          fontSize: isMobile ? '24px' : '36px',
          fontWeight: 700,
          margin: 0
        }}>Turn Complex Strategies Into Presentations<br />That Close Deals</h2>
          <p style={{
          fontSize: isMobile ? '16px' : '18px',
          color: COLORS.grayText,
          margin: 0
        }}>
            Real estate funds that closed billion-dollar acquisitions. Private equity firms that raised oversubscribed funds. Hedge funds that won institutional mandates. When the stakes are high, sophisticated firms choose materials that actually work.
          </p>
        </div>

        <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
        gap: '24px'
      }}>
          {[{
          title: 'Research',
          desc: 'Market intelligence that reveals where you win. Deep industry insights and data-backed analysis.',
          items: ['Market Sizing & Analysis', 'Competitive Landscape', 'Industry Benchmarks', 'Regulatory Insights']
        }, {
          title: 'Strategy',
          desc: 'Investment theses built on logic and clarity. Messaging frameworks that articulate value.',
          items: ['Investment Thesis Development', 'Positioning Frameworks', 'Value Proposition Design', 'Stakeholder Mapping']
        }, {
          title: 'Design',
          desc: 'Sophisticated visuals that match your strategy. Complex ideas transformed into clear presentations.',
          items: ['Pitch Deck Creation', 'Data Visualization', 'Brand-Aligned Templates', 'Print-Ready Materials']
        }].map((item, i) => {
          const IconComponent = pillarIcons[i].icon;
          return <div key={i} style={{
          backgroundColor: COLORS.offWhite,
          padding: '8px',
          borderRadius: '24px'
        }}>
              <div style={{
            backgroundColor: COLORS.white,
            padding: isMobile ? '20px' : '24px',
            borderRadius: '16px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '16px' : '24px'
          }}>
                <div style={{
              width: isMobile ? '56px' : '64px',
              height: isMobile ? '56px' : '64px',
              borderRadius: '16px',
              backgroundColor: pillarIcons[i].bgColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                  <IconComponent size={isMobile ? 28 : 32} color={pillarIcons[i].color} strokeWidth={2} />
                </div>
                <h4 style={{
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 700,
              margin: 0
            }}>{item.title}</h4>
                <p style={{
              color: COLORS.grayText,
              fontSize: isMobile ? '14px' : '16px',
              margin: 0
            }}>{item.desc}</p>
                <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginTop: 'auto'
            }}>
                  {item.items.map((label, j) => <div key={j} style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center'
              }}>
                      <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/7d836645-589c-450f-b94e-1793a6133cce.svg" alt="check" style={{
                  width: '24px'
                }} />
                      <span style={{
                  fontSize: '16px',
                  color: COLORS.grayText
                }}>{label}</span>
                    </div>)}
                </div>
              </div>
            </div>;
          })}
        </div>
      </section>

      {/* Testimonial Section */}
      <section style={{
      width: '100%',
      maxWidth: '1440px',
      padding: isMobile ? '60px 24px' : isTablet ? '80px 60px' : '120px 120px',
      boxSizing: 'border-box'
    }}>
        <div style={{
        backgroundColor: COLORS.white,
        borderRadius: '24px',
        padding: '8px',
        boxShadow: '0px 4px 8px rgba(154, 154, 154, 0.24)'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          backgroundColor: COLORS.black,
          borderRadius: '16px',
          overflow: 'hidden'
        }}>
            <div style={{
            flex: isMobile ? 'none' : 1.5,
            padding: isMobile ? '32px 24px' : '64px',
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '24px' : '40px'
          }}>
              <p style={{
              fontSize: isMobile ? '16px' : '18px',
              color: COLORS.offWhite,
              lineHeight: isMobile ? '24px' : '27px',
              margin: 0
            }}>
                "Happy Pitch's research capabilities set them apart—they aggregated bespoke market data and industry intelligence that perfectly supported our investment thesis. Their ability to synthesize complex real estate fundamentals into a compelling fundraising narrative was instrumental in our capital raising success."
              </p>
              <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              gap: isMobile ? '16px' : '30px'
            }}>
                <div>
                  <h5 style={{
                  color: COLORS.white,
                  fontSize: isMobile ? '20px' : '24px',
                  fontWeight: 700,
                  margin: 0
                }}>Sarah Thomson</h5>
                  <span style={{
                  color: COLORS.grayText,
                  fontSize: isMobile ? '12px' : '14px'
                }}>Managing Director, Capital Markets</span>
                </div>
                <div style={{
                width: isMobile ? '100%' : '1px',
                height: isMobile ? '1px' : '44px',
                backgroundColor: COLORS.white,
                opacity: 0.1
              }}></div>
                <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/3c67f4eb-ca91-40c8-8711-8741e0e4a22d.svg" alt="Company Logo" style={{
                height: isMobile ? '32px' : '44px'
              }} />
              </div>
            </div>
            <div style={{
            flex: 1,
            position: 'relative',
            minHeight: isMobile ? '200px' : 'auto',
            display: isMobile ? 'block' : 'block'
          }}>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/d7138355-84bc-411e-8d1d-2c5322614ec3.png" alt="Sarah Thomson" style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }} />
            </div>
          </div>
        </div>
      </section>

{/* CTA Section */}
      <section style={{
      width: '100%',
      backgroundColor: COLORS.black,
      padding: isMobile ? '60px 24px' : isTablet ? '80px 60px' : '120px 120px',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box'
    }}>
        <div style={{
        maxWidth: isMobile ? '100%' : '588px',
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '24px' : '40px',
        position: 'relative',
        zIndex: 2
      }}>
          <h2 style={{
          color: COLORS.white,
          fontSize: isMobile ? '32px' : isTablet ? '40px' : '56px',
          fontWeight: 700,
          lineHeight: isMobile ? '36px' : isTablet ? '48px' : '67.2px',
          margin: 0
        }}>
            Your Next Raise Starts<br />With a Better Deck
          </h2>
          <p style={{
          color: COLORS.grayText,
          fontSize: isMobile ? '16px' : '22px',
          lineHeight: isMobile ? '22px' : '26.6px',
          margin: 0
        }}>
            Great strategies deserve great storytelling. Don't let a weak deck cost you your next allocation.
          </p>
          <ActionButton variant="secondary" isMobile={isMobile} onClick={() => handleButtonClick('Book Consultation')} icon="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/08f484d3-ab85-46a5-a080-318ab29fa9f3.svg">
            Book Consultation
          </ActionButton>
        </div>
        <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/6b694e34-9dca-452d-bdb7-e5c0bb118c5b.png" alt="Abstract decorative" style={{
        position: 'absolute',
        right: '-200px',
        top: '-200px',
        width: '1000px',
        opacity: 0.8,
        display: isMobile ? 'none' : 'block'
      }} />
      </section>

      {/* Footer */}
      <footer style={{
        width: '100%',
        backgroundColor: COLORS.black,
        padding: isMobile ? '40px 24px' : '80px 120px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        gap: isMobile ? '40px' : '0'
      }}>
        <div style={{
          maxWidth: isMobile ? '100%' : '320px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/a35e7cae-f8d8-4d21-93e9-b4919d6e1ddd.png" alt="Footer Logo" style={{
            height: '32px',
            width: 'fit-content'
          }} />
          <p style={{
            color: COLORS.lightGrayBg,
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '19.4px',
            margin: 0,
            fontFamily: FONTS.inter,
          }}>
            Happy Pitch provides<br />financial communication<br />for leading firms.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="https://www.linkedin.com/company/happy-pitch/" target="_blank" rel="noopener noreferrer" style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#f3f4f6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.instagram.com/tryhappypitch" target="_blank" rel="noopener noreferrer" style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#f3f4f6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '32px' : '60px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link to="/" style={{ textDecoration: 'none' }}><span style={{ color: COLORS.white, fontSize: '16px', fontFamily: FONTS.inter }}>Home</span></Link>
            <Link to="/industries" style={{ textDecoration: 'none' }}><span style={{ color: COLORS.grayText, fontSize: '16px', fontFamily: FONTS.inter }}>Industries</span></Link>
            <Link to="/services" style={{ textDecoration: 'none' }}><span style={{ color: COLORS.grayText, fontSize: '16px', fontFamily: FONTS.inter }}>Services</span></Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ color: COLORS.white, fontSize: '16px', fontFamily: FONTS.inter, fontWeight: 500, marginBottom: '4px' }}>Locations</span>
            <Link to="/locations/boston" style={{ textDecoration: 'none' }}><span style={{ color: COLORS.grayText, fontSize: '16px', fontFamily: FONTS.inter }}>Boston</span></Link>
            <span style={{ color: COLORS.grayText, fontSize: '16px', fontFamily: FONTS.inter }}>NYC</span>
            <span style={{ color: COLORS.grayText, fontSize: '16px', fontFamily: FONTS.inter }}>Miami</span>
            <span style={{ color: COLORS.grayText, fontSize: '16px', fontFamily: FONTS.inter }}>Houston</span>
            <span style={{ color: COLORS.grayText, fontSize: '16px', fontFamily: FONTS.inter }}>Los Angeles</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ color: COLORS.grayText, fontSize: '16px', fontFamily: FONTS.inter }}>Legal</span>
            <span style={{ color: COLORS.grayText, fontSize: '16px', fontFamily: FONTS.inter }}>Privacy</span>
            <span style={{ color: COLORS.grayText, fontSize: '16px', fontFamily: FONTS.inter }}>Contact</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: isMobile ? '100%' : 'auto' }}>
          <button style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: isMobile ? '12px 20px' : '12px 24px',
            gap: '8px',
            borderRadius: '990px',
            cursor: 'pointer',
            fontFamily: FONTS.inter,
            fontSize: '16px',
            fontWeight: 600,
            backgroundColor: COLORS.white,
            color: COLORS.black,
            border: `1px solid ${COLORS.borderGray}`,
            transition: 'all 0.2s ease',
          }}>
            Request Samples
          </button>
          <Link to="/case-studies" style={{ textDecoration: 'none' }}>
            <button style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: isMobile ? '12px 20px' : '12px 24px',
              gap: '8px',
              borderRadius: '990px',
              cursor: 'pointer',
              fontFamily: FONTS.inter,
              fontSize: '16px',
              fontWeight: 600,
              backgroundColor: COLORS.white,
              color: COLORS.black,
              border: `1px solid ${COLORS.borderGray}`,
              transition: 'all 0.2s ease',
              width: '100%',
            }}>
              Case Studies
            </button>
          </Link>
        </div>
      </footer>
    </div>;
};