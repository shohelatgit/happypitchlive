import React, { useState } from 'react';
import { Building2, Timer, Award, BarChart3, Shield, Users, Menu, X, Search, Lightbulb, Palette, Linkedin, Instagram } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState('Transaction Readiness');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMobile, isTablet } = useResponsive();
  const tabs = ['Transaction Readiness', 'Investor Relations', 'Business Development', 'Strategic Positioning'];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleButtonClick = (action: string) => {
    alert(`${action} - Coming soon!`);
  };

  const featureIcons = [
    { icon: Building2, color: '#3b82f6', bgColor: 'rgba(59, 130, 246, 0.1)' },
    { icon: Timer, color: '#f97316', bgColor: 'rgba(249, 115, 22, 0.1)' },
    { icon: Award, color: '#a855f7', bgColor: 'rgba(168, 85, 247, 0.1)' },
    { icon: BarChart3, color: '#22c55e', bgColor: 'rgba(34, 197, 94, 0.1)' },
    { icon: Shield, color: '#ef4444', bgColor: 'rgba(239, 68, 68, 0.1)' },
    { icon: Users, color: '#14b8a6', bgColor: 'rgba(20, 184, 166, 0.1)' }
  ];

  const pillarIcons = [
    { icon: Search, color: '#3b82f6', bgColor: 'rgba(59, 130, 246, 0.1)' },
    { icon: Lightbulb, color: '#f97316', bgColor: 'rgba(249, 115, 22, 0.1)' },
    { icon: Palette, color: '#a855f7', bgColor: 'rgba(168, 85, 247, 0.1)' }
  ];

  const solutionImages = [
    '/solution-1.jpg',
    '/solution-2.jpg',
    '/solution-3.jpg',
    '/solution-4.jpg'
  ];

  const contentByTab: Record<string, { title: string; desc: string }[]> = {
    'Transaction Readiness': [
      {
        title: 'Investment Memorandums',
        desc: 'Deal books that secure funding and close acquisitions by presenting clear investment cases backed by data and strategic rationale.'
      },
      {
        title: 'Management Presentations',
        desc: 'Executive pitch decks that drive M&A processes by articulating company value, market position, and growth potential.'
      },
      {
        title: 'Company Profiles',
        desc: 'Strategic overviews that position firms for sale, partnership, or investment by highlighting competitive advantages and value drivers.'
      }
    ],
    'Investor Relations': [
      {
        title: 'Quarterly Reports',
        desc: 'Comprehensive performance updates that keep investors informed, engaged, and confident in your execution capabilities.'
      },
      {
        title: 'Annual General Meeting Decks',
        desc: 'Impactful presentations for AGMs that highlight year-over-year growth, strategic wins, and future roadmap.'
      },
      {
        title: 'LP Communications',
        desc: 'Regular, transparent updates for Limited Partners that build long-term trust and facilitate future fundraising.'
      }
    ],
    'Business Development': [
      {
        title: 'Sales Enablement Decks',
        desc: 'High-converting presentation materials that arm your sales team with consistent, persuasive messaging for prospects.'
      },
      {
        title: 'Partnership Proposals',
        desc: 'Tailored decks designed to secure strategic alliances, joint ventures, and distribution agreements.'
      },
      {
        title: 'Capability Statements',
        desc: 'Concise overviews of your firm’s expertise and track record, used to win competitive tenders and RFPs.'
      }
    ],
    'Strategic Positioning': [
      {
        title: 'Brand Messaging Frameworks',
        desc: 'Core narrative documents that define your value proposition, mission, and voice across all communication channels.'
      },
      {
        title: 'Website Copy & Content',
        desc: 'Compelling digital content that aligns your public face with your internal strategy and investor story.'
      },
      {
        title: 'Thought Leadership',
        desc: 'White papers and articles that establish your firm’s principals as industry experts and visionaries.'
      }
    ]
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
              <NavItem active onClick={scrollToTop}>Home</NavItem>
              <NavItem>Who we serve</NavItem>
              <NavItem>Solutions</NavItem>
              <NavItem>Resources</NavItem>
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
            <ActionButton variant="secondary" style={{
              padding: '8px 16px'
          }} onClick={() => handleButtonClick('Case Studies')} icon="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/31cc74db-d2a1-4282-bda5-3c44d7cbaa41.svg">
              Case Studies
            </ActionButton>
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
            <NavItem active isMobile onClick={scrollToTop}>Home</NavItem>
            <NavItem isMobile>Who we serve</NavItem>
            <NavItem isMobile>Solutions</NavItem>
            <NavItem isMobile>Resources</NavItem>
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
            <ActionButton variant="secondary" isMobile onClick={() => handleButtonClick('Case Studies')} icon="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/31cc74db-d2a1-4282-bda5-3c44d7cbaa41.svg">
              Case Studies
            </ActionButton>
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
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
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
            Close More Deals.<br />Faster.
          </h1>
          <p style={{
          margin: 0,
          fontSize: isMobile ? '16px' : '18px',
          lineHeight: isMobile ? '24px' : '27px',
          color: COLORS.grayText,
          fontFamily: FONTS.inter,
          maxWidth: isMobile ? '100%' : '580px'
        }}>
            Professional pitch decks and deal materials that win capital, close acquisitions, and impress investors.
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
            <ActionButton variant="secondary" isMobile={isMobile} onClick={() => handleButtonClick('Case Studies')} icon="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/9989729a-a07e-4c26-bce1-a1023885e8d1.svg">
              Case Studies
            </ActionButton>
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
            {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} style={{
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
                  {contentByTab[activeTab].map((item, i) => <div key={i} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                      <span style={{
                    color: COLORS.white,
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: 400
                  }}>{item.title}</span>
                      <p style={{
                    color: COLORS.grayText,
                    fontSize: isMobile ? '14px' : '16px',
                    margin: 0,
                    lineHeight: '19.4px'
                  }}>{item.desc}</p>
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
                  src={solutionImages[tabs.indexOf(activeTab)]} 
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
          Why Choose Happy Pitch?
        </h2>
        
        <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
        gap: '24px',
        width: '100%'
      }}>
          {[
            { title: 'Built for Finance', desc: 'Purpose-built templates and frameworks designed specifically for investment banks, PE firms, and fund managers.' },
            { title: 'Fast Turnaround', desc: 'From brief to finished deliverable in days, not weeks. We match the pace of your deal timeline.' },
            { title: 'Institutional Quality', desc: 'Every document meets the rigorous standards expected by LPs, board members, and institutional investors.' },
            { title: 'Data-Driven Narratives', desc: 'We back every claim with verifiable market data, benchmarks, and competitive intelligence.' },
            { title: 'Confidential & Secure', desc: 'Bank-grade security protocols protect your sensitive deal information throughout the process.' },
            { title: 'Dedicated Team', desc: 'A senior strategist, researcher, and designer assigned to your account for consistent quality.' }
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
          Chosen By Sophisticated Businesses
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
            { value: '$500M', label: 'Capital Represented in Client Projects' },
            { value: '200+', label: 'Pitch Decks and Deal Books Delivered' },
            { value: '98%', label: 'Client Retention Rate Year Over Year' }
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
        }}>Turn Complex Strategies Into Presentations That Close Deals</h2>
          <p style={{
          fontSize: isMobile ? '16px' : '18px',
          color: COLORS.grayText,
          margin: 0
        }}>
            Real estate funds that closed billion-dollar acquisitions. Private equity firms that raised oversubscribed funds... When the stakes are high, sophisticated firms choose materials that actually work.
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
            Your Next Deal Starts With Better Collateral
          </h2>
          <p style={{
          color: COLORS.grayText,
          fontSize: isMobile ? '16px' : '22px',
          lineHeight: isMobile ? '22px' : '26.6px',
          margin: 0
        }}>
            Great strategies get overlooked when they're not presented the right way. Don't let weak communication cost you the allocation.
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
      padding: isMobile ? '40px 24px' : isTablet ? '60px 60px' : '80px 120px',
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
          margin: 0
        }}>
            Happy Pitch provides financial communications advisory services for finance firms.
          </p>
          <div style={{
          display: 'flex',
          gap: '16px'
        }}>
            <a href="https://www.linkedin.com/company/happy-pitch/" target="_blank" rel="noopener noreferrer" style={{
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
              <Linkedin size={20} color={COLORS.lightGrayBg} />
            </a>
            <a href="https://www.instagram.com/tryhappypitch" target="_blank" rel="noopener noreferrer" style={{
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
              <Instagram size={20} color={COLORS.lightGrayBg} />
            </a>
          </div>
        </div>

        <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '32px' : '80px'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <NavItem active isMobile={isMobile} onClick={scrollToTop}>Home</NavItem>
            <NavItem isMobile={isMobile}>Who we serve</NavItem>
            <NavItem isMobile={isMobile}>Solutions</NavItem>
            <NavItem isMobile={isMobile}>Resources</NavItem>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <NavItem isMobile={isMobile}>Legal</NavItem>
            <NavItem isMobile={isMobile}>Privacy</NavItem>
            <NavItem isMobile={isMobile}>Contact</NavItem>
          </div>
        </div>

        <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'column',
        gap: '16px',
        width: isMobile ? '100%' : 'auto'
      }}>
          <ActionButton variant="secondary" isMobile={isMobile} style={{
          padding: '8px 16px'
        }} onClick={() => handleButtonClick('Request Samples')} icon="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/a0aab8e3-4c77-4139-a66e-0f9368e7ebb2.svg">
            Request Samples
          </ActionButton>
          <ActionButton variant="secondary" isMobile={isMobile} style={{
          padding: '8px 16px'
        }} onClick={() => handleButtonClick('Case Studies')} icon="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/0fbcf04c-5d3a-42fb-a8c0-8e23d04cf7e4.svg">
            Case Studies
          </ActionButton>
        </div>
      </footer>
    </div>;
};