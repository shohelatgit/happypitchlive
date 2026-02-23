import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Presentation, FileText, Briefcase, TrendingUp, ChevronRight, ArrowRight, Menu, X } from 'lucide-react';
import { useResponsive } from '@/hooks/use-media-query';

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
        padding: isMobile ? '40px 24px' : '60px 120px',
        backgroundColor: COLORS.white,
        borderTop: `1px solid ${COLORS.borderGray}`,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: '24px',
        }}>
          <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <span style={{
                fontSize: '18px',
                fontWeight: 600,
                color: COLORS.black,
                fontFamily: FONTS.inter,
              }}>
                Happy Pitch
              </span>
            </Link>
          </div>
          <div style={{
            display: 'flex',
            gap: '24px',
          }}>
            <NavItem>Home</NavItem>
            <NavItem>Services</NavItem>
            <NavItem>Industries</NavItem>
            <NavItem>Contact</NavItem>
          </div>
        </div>
      </footer>
    </div>
  );
};
