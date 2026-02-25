import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Beaker, Dna, Landmark, CreditCard, TrendingUp, Users, Building2, ShoppingCart, Megaphone } from 'lucide-react';
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

const AnimatedCounter = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const industries = [
  {
    slug: 'pharma',
    title: 'Pharmaceuticals',
    description: 'From clinical trial results to regulatory milestones, we help pharmaceutical companies articulate their value proposition.',
    icon: Beaker,
  },
  {
    slug: 'biotech',
    title: 'Biotechnology',
    description: 'We bridge the gap between cutting-edge science and investor understanding, creating pitch decks that showcase your potential.',
    icon: Dna,
  },
  {
    slug: 'private-equity',
    title: 'Private Equity',
    description: 'Compelling fund marketing materials and investment committee presentations that resonate with institutional investors.',
    icon: Landmark,
  },
  {
    slug: 'private-credit',
    title: 'Private Credit',
    description: 'Strategy narratives and performance reporting built for LP scrutiny in fixed income strategies.',
    icon: CreditCard,
  },
  {
    slug: 'venture-capital',
    title: 'Venture Capital',
    description: 'Fund theses, portfolio narratives, and capital raise collateral for the next generation of startups.',
    icon: TrendingUp,
  },
  {
    slug: 'family-office',
    title: 'Family Office',
    description: 'Discreet, polished communications for sophisticated high-net-worth investors and allocators.',
    icon: Users,
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Technology adoption stories that drive business growth and justify enterprise investment.',
    icon: Building2,
  },
  {
    slug: 'food-beverages',
    title: 'Food & Beverages',
    description: 'Consumer brand storytelling that resonates with investors, partners, and retail channels.',
    icon: ShoppingCart,
  },
  {
    slug: 'saas',
    title: 'SaaS',
    description: 'Investor presentations highlighting recurring revenue, customer retention, and growth metrics.',
    icon: Megaphone,
  },
  {
    slug: 'cpg',
    title: 'CPG',
    description: 'Consumer packaged goods marketing and investor materials for emerging and established brands.',
    icon: ShoppingCart,
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={() => setIsOpen(!isOpen)} style={{
      width: '100%',
      padding: '8px',
      backgroundColor: 'rgba(247, 247, 247, 1)',
      borderRadius: '24px',
      boxShadow: '0px 4px 8px rgba(154, 154, 154, 0.24)',
      cursor: 'pointer',
      marginBottom: '8px'
    }}>
      <div style={{
        padding: '16px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{
            fontSize: '20px',
            fontFamily: FONTS.inter,
            fontWeight: 700,
            color: 'rgba(0, 0, 0, 1)'
          }}>
            {question}
          </span>
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/635eaea0-971c-4c66-99db-cf9670fbec50.svg" alt="Toggle" style={{
            width: '24px',
            height: '24px',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }} />
        </div>
        {isOpen && (
          <p style={{
            margin: 0,
            color: 'rgba(124, 124, 124, 1)',
            fontSize: '16px',
            fontFamily: FONTS.inter,
            lineHeight: '19.4px'
          }}>
            {answer}
          </p>
        )}
      </div>
    </div>
  );
};

const IndustryCard = ({
  title,
  description,
  icon: Icon,
  slug
}: {
  title: string;
  description: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
  slug: string;
}) => (
  <Link to={`/industries/${slug}`} style={{ textDecoration: 'none', width: '100%', maxWidth: '384px' }}>
    <div style={{
      width: '100%',
      maxWidth: '384px',
      minHeight: '320px',
      display: 'flex',
      flexDirection: 'column',
      padding: '8px',
      gap: '8px',
      backgroundColor: 'rgba(247, 247, 247, 1)',
      boxSizing: 'border-box',
      boxShadow: '0px 4px 8px rgba(154, 154, 154, 0.24)',
      borderRadius: '24px',
      overflow: 'hidden',
      transition: 'transform 0.2s ease-in-out',
      cursor: 'pointer'
    }}
    onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'}
    onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        gap: '16px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: '16px',
        flexGrow: 1
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 1)',
          borderRadius: '12px'
        }}>
          {Icon && <Icon size={24} color="white" />}
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h3 style={{
            margin: 0,
            color: 'rgba(0, 0, 0, 1)',
            fontSize: '24px',
            fontFamily: FONTS.inter,
            fontWeight: 700,
            lineHeight: '36px',
            letterSpacing: '-0.96px'
          }}>
            {title}
          </h3>
          <p style={{
            margin: 0,
            color: 'rgba(124, 124, 124, 1)',
            fontSize: '16px',
            fontFamily: FONTS.inter,
            fontWeight: 400,
            lineHeight: '19.4px'
          }}>
            {description}
          </p>
        </div>
        <button style={{
          background: 'none',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: 0,
          cursor: 'pointer',
          marginTop: 'auto'
        }}>
          <span style={{
            color: 'rgba(0, 0, 0, 1)',
            fontSize: '18px',
            fontFamily: FONTS.inter,
            fontWeight: 600,
            lineHeight: '21.8px'
          }}>
            Explore Industry
          </span>
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/728942be-b2da-483d-abbb-9e4e688b7294.svg" alt="" style={{
            width: '24px',
            height: '24px'
          }} />
        </button>
      </div>
    </div>
  </Link>
);

const StrategicPartnerCard = ({
  title,
  description,
  imgSrc,
  accentColor
}: {
  title: string;
  description: string;
  imgSrc: string;
  accentColor: string;
}) => (
  <div style={{
    width: '100%',
    maxWidth: '384px',
    display: 'flex',
    flexDirection: 'column',
    padding: '8px',
    gap: '8px',
    backgroundColor: 'rgba(247, 247, 247, 1)',
    boxShadow: '0px 4px 8px rgba(154, 154, 154, 0.24)',
    borderRadius: '24px'
  }}>
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 1)',
      borderRadius: '16px',
      overflow: 'hidden',
      position: 'relative',
      height: '240px'
    }}>
      <div style={{
        width: '223px',
        height: '337px',
        backgroundColor: accentColor,
        filter: 'blur(140px)',
        position: 'absolute',
        left: '110px',
        top: '-36px',
        borderRadius: '50%'
      }} />
      <img src={imgSrc} alt="" style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }} />
    </div>
    <div style={{
      padding: '16px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      flexGrow: 1
    }}>
      <h3 style={{
        margin: 0,
        fontSize: '24px',
        fontFamily: FONTS.inter,
        fontWeight: 700,
        lineHeight: '36px',
        letterSpacing: '-0.96px',
        textAlign: 'center'
      }}>
        {title}
      </h3>
      <p style={{
        margin: 0,
        color: 'rgba(124, 124, 124, 1)',
        fontSize: '16px',
        fontFamily: FONTS.inter,
        fontWeight: 400,
        lineHeight: '19.4px',
        textAlign: 'left'
      }}>
        {description}
      </p>
    </div>
  </div>
);

export const IndustriesPage = () => {
  const { isMobile } = useResponsive();

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'rgba(240, 240, 240, 1)',
      overflowX: 'hidden',
      fontFamily: FONTS.inter,
      minHeight: '100vh'
    }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        width: '100%',
        backgroundColor: COLORS.black,
        padding: isMobile ? '120px 24px' : '0 120px',
        minHeight: isMobile ? 'auto' : '640px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '690px',
          zIndex: 2,
          padding: isMobile ? '40px 0' : '0'
        }}>
          <h1 style={{
            color: COLORS.white,
            fontSize: isMobile ? '36px' : '56px',
            fontWeight: 700,
            lineHeight: isMobile ? '43px' : '67.2px',
            letterSpacing: isMobile ? '-1.08px' : '-1.68px',
            margin: '0 0 40px 0'
          }}>
            Expert Financial Communications for Capital Markets
          </h1>
          <p style={{
            color: 'rgba(124, 124, 124, 1)',
            fontSize: isMobile ? '16px' : '18px',
            margin: 0
          }}>
            Compelling presentations that help you raise capital, win investors, and scale your business.
          </p>
        </div>
        <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/fa907882-223f-4acb-8803-bd67ec1c7d28.svg" alt="Abstract decorative element" style={{
          position: 'absolute',
          right: '-120px',
          top: '0',
          height: '100%',
          zIndex: 1,
          display: isMobile ? 'none' : 'block'
        }} />
      </section>

      {/* Industries Section */}
      <section style={{
        width: '100%',
        maxWidth: '1440px',
        padding: isMobile ? '60px 24px' : '120px 120px',
        boxSizing: 'border-box'
      }}>
        <h2 style={{
          fontSize: isMobile ? '32px' : '56px',
          fontWeight: 700,
          textAlign: 'center',
          margin: '0 0 40px 0',
          letterSpacing: isMobile ? '-0.96px' : '-1.68px'
        }}>
          Industries we serve
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(384px, 1fr))',
          gap: '24px',
          justifyContent: 'center'
        }}>
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
              slug={industry.slug}
            />
          ))}
        </div>
      </section>

      {/* Strategic Partner Section */}
      <section style={{
        width: '100%',
        maxWidth: '1440px',
        padding: isMobile ? '60px 24px' : '120px 120px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: isMobile ? '40px' : '64px'
        }}>
          <h2 style={{
            fontSize: isMobile ? '32px' : '56px',
            fontWeight: 700,
            margin: '0 0 24px 0',
            letterSpacing: isMobile ? '-0.96px' : '-1.68px'
          }}>
            More than a Vendor, A Strategic Partner
          </h2>
          <p style={{
            color: 'rgba(124, 124, 124, 1)',
            fontSize: isMobile ? '16px' : '18px',
            maxWidth: '788px',
            margin: '0 auto'
          }}>
            Work with a multidisciplinary team, built to execute with precision at every stage.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(384px, 1fr))',
          gap: '24px',
          justifyContent: 'center'
        }}>
          <StrategicPartnerCard
            title="Dedicated strategy lead"
            description="Partner with a former investor or operator who speaks your language and understands your market context."
            imgSrc="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/0fef8eed-ff2b-4535-8c3a-1d13a1eb6ad1.png"
            accentColor="rgba(0, 68, 99, 1)"
          />
          <StrategicPartnerCard
            title="Institutional Design"
            description="Our designers specialize in translating complex financial data into clear, compelling visuals that build trust."
            imgSrc="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/e0b1aa3f-6c43-4ac5-b4b1-9a7dd5f0ff55.png"
            accentColor="rgba(15, 0, 99, 1)"
          />
          <StrategicPartnerCard
            title="Precision Execution"
            description="We move at the speed of finance, delivering polished collateral under tight deadlines without sacrificing quality."
            imgSrc="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/1d5d77d6-9a7e-4e7b-9ad0-2dfd5f8d3ea6.png"
            accentColor="rgba(99, 79, 0, 1)"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        width: '100%',
        backgroundColor: COLORS.black,
        padding: isMobile ? '60px 24px' : '120px 120px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{
          color: COLORS.white,
          fontSize: isMobile ? '32px' : '56px',
          fontWeight: 700,
          margin: '0 0 40px 0',
          letterSpacing: isMobile ? '-0.96px' : '-1.68px',
          textAlign: 'center'
        }}>
          Chosen By Sophisticated Businesses
        </h2>
        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          {[
            { number: 10, suffix: 'B+', prefix: '$', label: 'Capital Raised' },
            { number: 500, suffix: '', label: 'Projects Delivered' },
            { number: 98, suffix: '%', label: 'Client Satisfaction' }
          ].map((stat, idx) => (
            <div key={idx} style={{
              textAlign: 'center',
              flex: '1',
              minWidth: '150px'
            }}>
              <span style={{
                display: 'block',
                fontSize: isMobile ? '48px' : '80px',
                fontWeight: 700,
                color: COLORS.white,
                marginBottom: '16px',
                letterSpacing: isMobile ? '-1.44px' : '-2.4px'
              }}>
                {stat.prefix || ''}<AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </span>
              <span style={{
                color: 'rgba(124, 124, 124, 1)',
                fontSize: isMobile ? '14px' : '18px'
              }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section style={{
        width: '100%',
        maxWidth: '788px',
        padding: isMobile ? '60px 24px' : '120px 0',
        boxSizing: 'border-box'
      }}>
        <h2 style={{
          fontSize: isMobile ? '32px' : '56px',
          fontWeight: 700,
          textAlign: 'center',
          margin: '0 0 40px 0',
          letterSpacing: isMobile ? '-0.96px' : '-1.68px'
        }}>
          FAQs
        </h2>
        <FAQItem
          question="What types of clients do you work with?"
          answer="We serve sophisticated financial organizations including private equity firms, hedge funds, family offices, emerging managers, and institutional asset managers. Our clients typically require institutional-grade materials for capital raising, investor relations, and business development."
        />
        <FAQItem
          question="What services do you offer?"
          answer="We offer a comprehensive suite of financial communication services including pitch decks, investor presentations, fund marketing materials, board presentations, case studies, and brand development for financial firms."
        />
        <FAQItem
          question="How do you ensure quality and confidentiality?"
          answer="We maintain strict confidentiality protocols and have NDAs in place for all client work. Our team has extensive experience working with sensitive financial information and institutional-grade standards."
        />
      </section>

      {/* CTA Section */}
      <section style={{
        width: '100%',
        backgroundColor: COLORS.black,
        padding: isMobile ? '60px 24px' : '120px 120px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '692px',
          zIndex: 2
        }}>
          <h2 style={{
            color: COLORS.white,
            fontSize: isMobile ? '32px' : '56px',
            fontWeight: 700,
            lineHeight: isMobile ? '38px' : '67.2px',
            letterSpacing: isMobile ? '-0.96px' : '-1.68px',
            margin: '0 0 40px 0'
          }}>
            Your Next Raise Starts With a Better Deck
          </h2>
          <p style={{
            color: 'rgba(124, 124, 124, 1)',
            fontSize: isMobile ? '16px' : '22px',
            margin: '0 0 40px 0'
          }}>
            Great strategies deserve great storytelling. Don't let a weak deck cost you your next allocation.
          </p>
          <button style={{
            backgroundColor: COLORS.white,
            padding: '16px 24px',
            borderRadius: '990px',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 600
          }}>
            Request Samples
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/d01c1f21-4f2f-47a6-b750-15b4a88f76f0.svg" alt="" style={{
              width: '24px'
            }} />
          </button>
        </div>
        <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/f2642973-46d1-401a-860b-5e419936e32d.png" alt="" style={{
          position: 'absolute',
          right: '-100px',
          top: '-200px',
          width: '900px',
          zIndex: 1,
          opacity: 0.8,
          display: isMobile ? 'none' : 'block'
        }} />
      </section>

      {/* Footer */}
      <footer style={{
        width: '100%',
        backgroundColor: COLORS.black,
        padding: isMobile ? '40px 24px' : '80px 120px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        flexWrap: 'wrap',
        gap: '40px'
      }}>
        <div style={{
          maxWidth: '216px'
        }}>
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/a35e7cae-f8d8-4d21-93e9-b4919d6e1ddd.png" alt="Logo" style={{
            height: '32px',
            marginBottom: '16px'
          }} />
          <p style={{
            color: 'rgba(240, 240, 240, 1)',
            fontSize: '16px',
            lineHeight: '19.4px',
            margin: '0 0 16px 0'
          }}>
            Happy Pitch provides financial communication for leading firms.
          </p>
          <div style={{
            display: 'flex',
            gap: '16px'
          }}>
            <a href="https://www.linkedin.com/company/happy-pitch/" target="_blank" rel="noopener noreferrer">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/1f08c8ee-d730-4ddc-91d9-1d1aa0cb98cc.svg" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/tryhappypitch" target="_blank" rel="noopener noreferrer">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/c67642d6-c001-4aad-9234-1b357be97995.svg" alt="Twitter" />
            </a>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <Link to="/" style={{ color: COLORS.white, textDecoration: 'none', fontSize: '18px' }}>Home</Link>
          <Link to="/industries" style={{ color: COLORS.white, textDecoration: 'none', fontSize: '18px' }}>Industries</Link>
          <Link to="/services" style={{ color: COLORS.white, textDecoration: 'none', fontSize: '18px' }}>Services</Link>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <span style={{ color: COLORS.white, fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>Locations</span>
          <Link to="/locations/boston" style={{ color: 'rgba(124, 124, 124, 1)', textDecoration: 'none', fontSize: '16px' }}>Boston</Link>
          <span style={{ color: 'rgba(124, 124, 124, 1)', fontSize: '16px' }}>NYC</span>
          <span style={{ color: 'rgba(124, 124, 124, 1)', fontSize: '16px' }}>Miami</span>
          <span style={{ color: 'rgba(124, 124, 124, 1)', fontSize: '16px' }}>Houston</span>
          <span style={{ color: 'rgba(124, 124, 124, 1)', fontSize: '16px' }}>Los Angeles</span>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <button style={{
            backgroundColor: COLORS.white,
            padding: '8px 16px',
            borderRadius: '990px',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 600
          }}>
            Request Samples
          </button>
          <Link to="/case-studies" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: COLORS.white,
              padding: '8px 16px',
              borderRadius: '990px',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: 600
            }}>
              Case Studies
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
};
