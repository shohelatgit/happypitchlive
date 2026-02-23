import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, FlaskConical, TrendingUp, CreditCard, Landmark, Users, ShoppingCart, Megaphone, ChevronRight, ArrowRight } from 'lucide-react';
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

const industries = [
  {
    slug: 'pharma',
    title: 'Pharmaceuticals',
    subtitle: 'Communicating innovation to investors and stakeholders',
    description: 'From clinical trial results to regulatory milestones, we help pharmaceutical companies articulate their value proposition to investors, partners, and the medical community.',
    icon: FlaskConical,
  },
  {
    slug: 'biotech',
    title: 'Biotechnology',
    subtitle: 'Translating complex science into compelling narratives',
    description: 'We bridge the gap between cutting-edge science and investor understanding, creating pitch decks and presentations that showcase your technology\'s potential.',
    icon: FlaskConical,
  },
  {
    slug: 'private-equity',
    title: 'Private Equity',
    subtitle: 'LP presentations that raise capital with confidence',
    description: 'Compelling fund marketing materials, investment committee presentations, and portfolio company narratives that resonate with institutional investors.',
    icon: Landmark,
  },
  {
    slug: 'private-credit',
    title: 'Private Credit',
    subtitle: 'Fixed income strategies presented with clarity',
    description: 'Investor communications and marketing materials that demonstrate the value proposition of private credit strategies to institutional investors.',
    icon: CreditCard,
  },
  {
    slug: 'venture-capital',
    title: 'Venture Capital',
    subtitle: 'Fundraising materials for the next generation of startups',
    description: 'GP presentations and fund marketing materials that showcase your investment thesis and track record to Limited Partners.',
    icon: TrendingUp,
  },
  {
    slug: 'family-office',
    title: 'Family Office',
    subtitle: 'Sophisticated communications for high-net-worth investors',
    description: 'Customized investment presentations and family office communications that reflect the unique needs and preferences of wealth management.',
    icon: Users,
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    subtitle: 'Technology adoption stories that drive business',
    description: 'Help enterprises communicate their digital transformation initiatives with clear, compelling narratives that justify investment and drive adoption.',
    icon: Building2,
  },
  {
    slug: 'food-beverages',
    title: 'Food & Beverages',
    subtitle: 'Consumer brands that tell their story effectively',
    description: 'From emerging brands to established CPG companies, we create presentations that resonate with consumers, investors, and retail partners.',
    icon: ShoppingCart,
  },
  {
    slug: 'saas',
    title: 'SaaS',
    subtitle: 'Cloud companies with metrics that matter',
    description: 'Investor presentations that highlight recurring revenue, customer retention, and growth metrics critical to SaaS valuation.',
    icon: Megaphone,
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

export const IndustriesPage = () => {
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
            fontpx',
            fontWeight: 500,
            color:Size: '14 COLORS.grayText,
            fontFamily: FONTS.inter,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '12px'
          }}>
            Industries We Serve
          </p>
          <h1 style={{
            fontSize: isMobile ? '36px' : '56px',
            fontWeight: 700,
            lineHeight: isMobile ? '42px' : '67.2px',
            color: COLORS.black,
            fontFamily: FONTS.inter,
            marginBottom: '24px'
          }}>
            Expertise Across Industries
          </h1>
          <p style={{
            fontSize: isMobile ? '16px' : '20px',
            lineHeight: isMobile ? '24px' : '30px',
            color: COLORS.grayText,
            fontFamily: FONTS.inter,
            maxWidth: '700px'
          }}>
            We work with leading companies across the financial services, technology, and consumer sectors to create presentations that win.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section style={{
        width: '100%',
        padding: isMobile ? '60px 24px' : '80px 120px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '24px',
        }}>
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.slug}
                to={`/industries/${industry.slug}`}
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
                    {industry.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: COLORS.grayText,
                    marginBottom: '16px',
                    fontFamily: FONTS.inter,
                  }}>
                    {industry.subtitle}
                  </p>
                  <p style={{
                    fontSize: '16px',
                    color: COLORS.grayText,
                    marginBottom: '24px',
                    fontFamily: FONTS.inter,
                    lineHeight: '24px',
                  }}>
                    {industry.description}
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
          Don't see your industry?
        </h2>
        <p style={{
          fontSize: '16px',
          color: COLORS.grayText,
          maxWidth: '500px',
          margin: '0 auto 32px',
          fontFamily: FONTS.inter,
        }}>
          We work across a wide range of industries. Get in touch to discuss your specific needs.
        </p>
        <ActionButton variant="secondary">
          Get in Touch
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
