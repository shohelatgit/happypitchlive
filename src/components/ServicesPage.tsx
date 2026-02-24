import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Presentation, FileText, Briefcase, TrendingUp, ChevronRight, ArrowRight, Menu, X } from 'lucide-react';
import { useResponsive } from '@/hooks/use-media-query';
import { Navbar } from './Navbar';

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

const services = [
  {
    slug: 'corporate-presentation',
    title: 'Corporate Presentations',
    subtitle: 'Board-ready decks that command attention',
    description: 'Annual shareholder presentations, strategic board decks, and executive communications with institutional-grade polish.',
    icon: Building2,
  },
  {
    slug: 'pitch-decks',
    title: 'Pitch Decks',
    subtitle: 'Fundraising materials that close rounds',
    description: 'Investor-ready pitch decks for Series A through Series E that articulate your equity story with clarity and impact.',
    icon: Presentation,
  },
  {
    slug: 'investor-memos',
    title: 'Investor Memos',
    subtitle: 'Compelling narratives for sophisticated capital',
    description: 'Investment memos that articulate your thesis, demonstrate track record, and build confidence with LPs.',
    icon: FileText,
  },
  {
    slug: 'cims',
    title: 'CIMs',
    subtitle: 'Confidential Information Memorandums that drive deals',
    description: 'Comprehensive sell-side materials that present your business opportunity with depth, polish, and strategic insight.',
    icon: Briefcase,
  },
  {
    slug: 'sales-decks',
    title: 'Sales Decks',
    subtitle: 'Enterprise materials that win deals',
    description: 'B2B sales presentations that articulate value proposition, demonstrate ROI, and accelerate complex buying cycles.',
    icon: TrendingUp,
  },
];

const ActionButton = ({ variant = 'primary', children, onClick, style, isMobile = false }: {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
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
    },
    secondary: {
      backgroundColor: COLORS.white,
      color: COLORS.black,
      border: `1px solid ${COLORS.borderGray}`,
    }
  };
  return <button onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{
    ...baseStyle,
    ...variants[variant]
  }}>
    {children}
  </button>;
};

const NavItem = ({ children, isMobile = false }: { children: React.ReactNode; isMobile?: boolean }) => {
  return <span style={{
    fontSize: isMobile ? '16px' : '18px',
    fontFamily: FONTS.inter,
    fontWeight: 400,
    lineHeight: '27px',
    color: COLORS.grayText,
    cursor: 'pointer',
  }}>
    {children}
  </span>;
};

export const ServicesPage = () => {
  const { isMobile } = useResponsive();

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: COLORS.white,
      boxSizing: 'border-box',
    }}>
      <Navbar />
      
      {/* Hero */}
      <section style={{
        width: '100%',
        padding: isMobile ? '120px 24px 80px' : '180px 120px 100px',
        background: `linear-gradient(to bottom, ${COLORS.lightGrayBg}, ${COLORS.white})`,
      }}>
        <div style={{
          maxWidth: '900px',
        }}>
          <p style={{
            fontSize: '14px',
            fontWeight: 500,
            color: COLORS.grayText,
            fontFamily: FONTS.inter,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '12px'
          }}>
            Our Services
          </p>
          <h1 style={{
            fontSize: isMobile ? '36px' : '56px',
            fontWeight: 700,
            lineHeight: isMobile ? '42px' : '67.2px',
            color: COLORS.black,
            fontFamily: FONTS.inter,
            marginBottom: '24px'
          }}>
            Presentation Services That Drive Results
          </h1>
          <p style={{
            fontSize: isMobile ? '16px' : '20px',
            lineHeight: isMobile ? '24px' : '30px',
            color: COLORS.grayText,
            fontFamily: FONTS.inter,
            maxWidth: '700px'
          }}>
            From corporate boardrooms to investor meetings, we craft presentations that communicate 
            your vision with clarity, credibility, and impact. Every deck is built to win.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{
        width: '100%',
        padding: isMobile ? '60px 24px' : '80px 120px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '24px',
        }}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                style={{
                  textDecoration: 'none',
                  display: 'block'
                }}
              >
                <div style={{
                  backgroundColor: COLORS.white,
                  border: `1px solid ${COLORS.borderGray}`,
                  borderRadius: '16px',
                  padding: '32px',
                  height: '100%',
                  boxSizing: 'border-box',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: COLORS.lightGrayBg,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                  }}>
                    <Icon size={24} color={COLORS.darkGray} />
                  </div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: COLORS.black,
                    marginBottom: '8px',
                    fontFamily: FONTS.inter,
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: COLORS.grayText,
                    marginBottom: '16px',
                    fontFamily: FONTS.inter,
                  }}>
                    {service.subtitle}
                  </p>
                  <p style={{
                    fontSize: '16px',
                    color: COLORS.grayText,
                    marginBottom: '24px',
                    fontFamily: FONTS.inter,
                    lineHeight: '24px',
                    flex: 1,
                  }}>
                    {service.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: COLORS.black,
                    fontWeight: 500,
                    fontFamily: FONTS.inter,
                    marginTop: 'auto',
                  }}>
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section style={{
        width: '100%',
        padding: isMobile ? '60px 24px' : '80px 120px',
        backgroundColor: COLORS.lightGrayBg,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '48px',
          }}>
            <h2 style={{
              fontSize: isMobile ? '28px' : '36px',
              fontWeight: 700,
              color: COLORS.black,
              marginBottom: '16px',
              fontFamily: FONTS.inter,
            }}>
              How We Work
            </h2>
            <p style={{
              fontSize: '16px',
              color: COLORS.grayText,
              maxWidth: '600px',
              margin: '0 auto',
              fontFamily: FONTS.inter,
            }}>
              A proven process designed to deliver exceptional results, on time and on brand.
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: '24px',
          }}>
            {[
              { step: '01', title: 'Discovery', desc: 'Deep dive into your business, goals, and audience' },
              { step: '02', title: 'Strategy', desc: 'Develop narrative framework and key messaging' },
              { step: '03', title: 'Design', desc: 'Create visuals that bring your story to life' },
              { step: '04', title: 'Refine', desc: 'Iterate based on feedback until perfect' },
            ].map((item) => (
              <div key={item.step} style={{
                textAlign: 'center',
                padding: '24px',
                borderRadius: '12px',
                transition: 'all 0.2s ease',
              }}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#e5e5e5',
                  marginBottom: '16px',
                  fontFamily: FONTS.inter,
                }}>{item.step}</div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: COLORS.black,
                  marginBottom: '8px',
                  fontFamily: FONTS.inter,
                }}>{item.title}</h3>
                <p style={{
                  fontSize: '14px',
                  color: COLORS.grayText,
                  fontFamily: FONTS.inter,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        width: '100%',
        padding: isMobile ? '60px 24px' : '80px 120px',
        backgroundColor: COLORS.darkGray,
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: isMobile ? '28px' : '36px',
          fontWeight: 700,
          color: COLORS.white,
          marginBottom: '16px',
          fontFamily: FONTS.inter,
        }}>
          Not sure which service you need?
        </h2>
        <p style={{
          fontSize: '16px',
          color: COLORS.grayText,
          maxWidth: '500px',
          margin: '0 auto 32px',
          fontFamily: FONTS.inter,
        }}>
          Schedule a consultation and we will help you identify the right solution for your goals.
        </p>
        <ActionButton variant="secondary">
          Schedule a Consultation
          <ChevronRight size={16} />
        </ActionButton>
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

        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '32px' : '80px' }}>
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

        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'column', gap: '16px', width: isMobile ? '100%' : 'auto' }}>
          <ActionButton variant="secondary">Request Samples</ActionButton>
          <Link to="/case-studies" style={{ textDecoration: 'none' }}>
            <ActionButton variant="secondary">Case Studies</ActionButton>
          </Link>
        </div>
      </footer>
    </div>
  );
};
