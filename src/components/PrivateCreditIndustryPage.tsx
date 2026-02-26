import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Lightbulb, Palette, Building2, Presentation, FileText, Briefcase, TrendingUp, Users, CreditCard } from 'lucide-react';
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

const FeatureCard = ({
  title,
  description,
  icon: Icon
}: {
  title: string;
  description: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
}) => (
  <div style={{
    width: '384px',
    display: 'flex',
    flexDirection: 'column',
    padding: '8px',
    gap: '8px',
    backgroundColor: 'rgba(247, 247, 247, 1)',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 8px rgba(154, 154, 154, 0.24)',
    borderRadius: '24px',
    overflow: 'hidden'
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      gap: '16px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: '16px',
      flexGrow: 1
    }}>
      {Icon && (
        <div style={{
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 1)',
          borderRadius: '12px'
        }}>
          <Icon size={24} color="white" />
        </div>
      )}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <h3 style={{
          margin: 0,
          color: 'rgba(0, 0, 0, 1)',
          fontSize: '20px',
          fontFamily: FONTS.inter,
          fontWeight: 700,
          lineHeight: '30px',
          letterSpacing: '-0.4px'
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
    </div>
  </div>
);

const ServiceCard = ({
  title,
  description,
  icon: Icon
}: {
  title: string;
  description: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
}) => (
  <div style={{
    width: '384px',
    display: 'flex',
    flexDirection: 'column',
    padding: '8px',
    gap: '8px',
    backgroundColor: 'rgba(247, 247, 247, 1)',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 8px rgba(154, 154, 154, 0.24)',
    borderRadius: '24px',
    overflow: 'hidden'
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      gap: '16px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: '16px',
      flexGrow: 1
    }}>
      {Icon && (
        <div style={{
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 1)',
          borderRadius: '12px'
        }}>
          <Icon size={24} color="white" />
        </div>
      )}
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
    width: '384px',
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

const BenefitCard = ({
  title,
  description,
  bullets
}: {
  title: string;
  description: string;
  bullets: string[];
}) => (
  <div style={{
    width: '384px',
    display: 'flex',
    flexDirection: 'column',
    padding: '8px',
    gap: '8px',
    backgroundColor: 'rgba(247, 247, 247, 1)',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 8px rgba(154, 154, 154, 0.24)',
    borderRadius: '24px',
    overflow: 'hidden'
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      gap: '16px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: '16px',
      flexGrow: 1
    }}>
      <h3 style={{
        margin: 0,
        color: 'rgba(0, 0, 0, 1)',
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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      gap: '8px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: '16px'
    }}>
      {bullets.map((bullet, idx) => (
        <div key={idx} style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '8px'
        }}>
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/34f8d7f6-803f-4944-ac31-53d0e1e15c0f.svg" alt="" style={{
            width: '24px',
            height: '24px'
          }} />
          <span style={{
            color: 'rgba(124, 124, 124, 1)',
            fontSize: '16px',
            fontFamily: FONTS.inter,
            fontWeight: 400,
            lineHeight: '19.4px'
          }}>
            {bullet}
          </span>
        </div>
      ))}
    </div>
  </div>
);

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

const services = [
  {
    title: 'Pitch Decks',
    description: 'Investor-ready pitch decks that articulate your fixed income strategy with clarity and institutional-grade polish.',
    icon: Presentation
  },
  {
    title: 'Fund Marketing',
    description: 'Comprehensive fund marketing materials that communicate your track record and investment approach to potential LPs.',
    icon: TrendingUp
  },
  {
    title: 'LP Presentations',
    description: 'Professional LP presentations that demonstrate your risk-adjusted returns and build lasting investor relationships.',
    icon: Users
  },
  {
    title: 'Investment Memos',
    description: 'Investment memos that articulate your thesis, showcase performance, and build confidence with investors.',
    icon: FileText
  },
  {
    title: 'Board Materials',
    description: 'Professional board presentations and committee materials that impress stakeholders and pass due diligence.',
    icon: Briefcase
  },
  {
    title: 'Risk Reports',
    description: 'Detailed risk reports that present your credit analysis and portfolio risk metrics with precision and clarity.',
    icon: Building2
  }
];

const TestimonialCard = ({
  quote,
  name,
  role,
  imgSrc,
  isMobile,
  objectPosition = 'center'
}: {
  quote: string;
  name: string;
  role: string;
  imgSrc: string;
  isMobile: boolean;
  objectPosition?: string;
}) => (
  <div style={{
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0px 4px 8px rgba(154, 154, 154, 0.24)'
  }}>
    <div style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      backgroundColor: COLORS.black,
      borderRadius: '16px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: isMobile ? '24px' : '32px',
        gap: '24px',
        flex: 1
      }}>
        <p style={{
          color: 'rgba(247, 247, 247, 1)',
          fontSize: '18px',
          fontFamily: FONTS.inter,
          fontWeight: 400,
          lineHeight: '27px',
          margin: 0
        }}>
          {quote}
        </p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}>
          <span style={{
            color: COLORS.white,
            fontSize: '24px',
            fontFamily: FONTS.inter,
            fontWeight: 700,
            lineHeight: '36px',
            letterSpacing: '-0.96px'
          }}>
            {name}
          </span>
          <span style={{
            color: 'rgba(124, 124, 124, 1)',
            fontSize: '14px',
            fontFamily: FONTS.inter,
            fontWeight: 500,
            lineHeight: '21px'
          }}>
            {role}
          </span>
        </div>
      </div>
      <div style={{
        flex: 1,
        minHeight: '300px',
        backgroundColor: 'rgba(240, 240, 240, 1)',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <img src={imgSrc} alt="" style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: objectPosition,
          position: 'absolute',
          top: 0,
          left: 0
        }} />
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    quote: "Happy Pitch's research capabilities set them apart—they aggregated bespoke market data and industry intelligence that perfectly supported our investment thesis. Their ability to synthesize complex pharmaceutical fundamentals into a compelling fundraising narrative was instrumental in our capital raising success.",
    name: "Sarah Thomson",
    role: "Marketing Consultant",
    imgSrc: "https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/3595f067-de99-4c66-b40d-8a5ba3ce9647.png",
    objectPosition: "center"
  },
  {
    quote: "Working with Happy Pitch transformed our investor presentations. They took complex clinical data and turned it into a story that resonated with investors, helping us secure our Series B funding within weeks of our roadshow.",
    name: "Michael Chen",
    role: "CEO, PharmNova Therapeutics",
    imgSrc: "https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg",
    objectPosition: "center 40%"
  },
  {
    quote: "The team's attention to detail and understanding of the pharmaceutical industry is unmatched. Our board materials and investor updates have never looked more professional. They've become an essential part of our communications strategy.",
    name: "Emily Rodriguez",
    role: "CFO, BioGenix Pharmaceuticals",
    imgSrc: "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg",
    objectPosition: "center 45%"
  }
];

export const PrivateCreditIndustryPage = () => {
  const { isMobile } = useResponsive();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: COLORS.white,
      overflowX: 'hidden',
      fontFamily: FONTS.inter
    }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{
        width: '100%',
        backgroundColor: COLORS.black,
        padding: isMobile ? '120px 24px' : '0 120px',
        minHeight: isMobile ? 'auto' : '640px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        gap: '80px',
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
        <div style={{
          width: isMobile ? '100%' : '690px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '40px',
          zIndex: 2
        }}>
          <h1 style={{
            color: COLORS.white,
            fontSize: isMobile ? '36px' : '56px',
            fontWeight: 700,
            lineHeight: isMobile ? '43px' : '67.2px',
            letterSpacing: isMobile ? '-1.08px' : '-1.68px',
            margin: 0
          }}>
            Fixed Income Presentations That Demonstrate Yield
          </h1>
          <span style={{
            color: 'rgba(124, 124, 124, 1)',
            fontSize: '18px',
            fontFamily: FONTS.inter,
            fontWeight: 400,
            lineHeight: '27px'
          }}>
            Professional materials that communicate your fixed income strategy, track record, and risk-adjusted returns to LPs.
          </span>
          <button style={{
            width: 'auto',
            height: 'auto',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px 16px',
            backgroundColor: COLORS.white,
            borderColor: 'rgba(232, 232, 232, 1)',
            borderStyle: 'solid',
            borderWidth: '1px',
            boxSizing: 'border-box',
            borderRadius: '990px',
            cursor: 'pointer'
          }}>
            <span style={{
              color: 'rgba(0, 0, 0, 1)',
              fontSize: '18px',
              fontFamily: FONTS.inter,
              fontWeight: 600
            }}>
              Request Samples
            </span>
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/970e39a4-73f6-4ce6-ba60-cafbf0c96789.svg" alt="" style={{
              width: '24px',
              height: '24px'
            }} />
          </button>
        </div>
        <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/865ed10c-2bb8-4504-a8a8-157f2d1268b3.svg" alt="Mask group" style={{
          width: '603px',
          height: '800px',
          position: 'absolute',
          right: '0',
          top: '0',
          zIndex: 1,
          display: isMobile ? 'none' : 'block'
        }} />
      </section>

      {/* Backed by Data Section */}
      <section style={{
        width: '100%',
        padding: isMobile ? '60px 24px' : '120px 120px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '64px'
      }}>
        <div style={{
          width: isMobile ? '100%' : '588px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: isMobile ? '32px' : '56px',
            fontWeight: 700,
            lineHeight: isMobile ? '38px' : '67.2px',
            letterSpacing: isMobile ? '-0.96px' : '-1.68px',
            margin: 0,
            color: 'rgba(0, 0, 0, 1)'
          }}>
            Built for Sophisticated Investors
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '24px',
          justifyContent: 'center'
        }}>
          <FeatureCard
            title="Yield Strategy Clarity"
            description="Marketing and investor materials that communicate your fixed income approach with precision."
            icon={Search}
          />
          <FeatureCard
            title="Risk Management Transparency"
            description="Get reports and memos that communicate performance, strategy, and risk-adjusted returns with clarity."
            icon={FileText}
          />
          <FeatureCard
            title="Performance Documentation"
            description="From fund launches to LP updates. Get materials built for every stage of your investor relations."
            icon={Palette}
          />
        </div>
      </section>

      {/* Quote Section */}
      <section style={{
        width: '100%',
        padding: isMobile ? '40px 24px' : '120px 120px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          backgroundColor: COLORS.white,
          borderRadius: '24px',
          overflow: 'hidden',
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
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: isMobile ? '24px' : '32px',
              gap: '24px',
              flex: 1
            }}>
              <h3 style={{
                color: COLORS.white,
                fontSize: isMobile ? '28px' : '40px',
                fontWeight: 700,
                lineHeight: isMobile ? '34px' : '44px',
                letterSpacing: '-0.4px',
                margin: 0
              }}>
                In private credit, clarity drives capital
              </h3>
              <p style={{
                color: 'rgba(124, 124, 124, 1)',
                fontSize: '16px',
                fontFamily: FONTS.inter,
                fontWeight: 400,
                lineHeight: '19.4px',
                margin: 0
              }}>
                LP investors in fixed income strategies demand transparency. Present your risk-adjusted returns with the precision they expect. Request samples to see what institutional-grade collateral looks like.
              </p>
              <button style={{
                width: 'auto',
                height: 'auto',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px 16px',
                backgroundColor: COLORS.white,
                borderColor: 'rgba(232, 232, 232, 1)',
                borderStyle: 'solid',
                borderWidth: '1px',
                boxSizing: 'border-box',
                borderRadius: '990px',
                cursor: 'pointer'
              }}>
                <span style={{
                  color: 'rgba(0, 0, 0, 1)',
                  fontSize: '18px',
                  fontFamily: FONTS.inter,
                  fontWeight: 600
                }}>
                  Request Samples
                </span>
                <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/9c6e1307-1f53-4c14-81d4-04a5771f36eb.svg" alt="" style={{
                  width: '24px',
                  height: '24px'
                }} />
              </button>
            </div>
            <div style={{
              flex: 1,
              minHeight: '300px',
              backgroundColor: 'rgba(28, 28, 28, 1)',
              position: 'relative'
            }}>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/475f4f97-ebad-4ebf-85a9-d09dbd78ab59.png" alt="" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        width: '100%',
        padding: isMobile ? '60px 24px' : '120px 120px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '64px'
      }}>
        <div style={{
          width: isMobile ? '100%' : '640px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: isMobile ? '32px' : '56px',
            fontWeight: 700,
            lineHeight: isMobile ? '38px' : '67.2px',
            letterSpacing: isMobile ? '-0.96px' : '-1.68px',
            margin: 0,
            color: 'rgba(0, 0, 0, 1)'
          }}>
            Services for Private Credit
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '24px',
          justifyContent: 'center'
        }}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </section>

      {/* Strategic Partner Section */}
      <section style={{
        width: '100%',
        padding: isMobile ? '60px 24px' : '120px 120px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '64px'
      }}>
        <div style={{
          width: isMobile ? '100%' : '788px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: isMobile ? '32px' : '56px',
            fontWeight: 700,
            lineHeight: isMobile ? '38px' : '67.2px',
            letterSpacing: isMobile ? '-0.96px' : '-1.68px',
            margin: '0 0 24px 0',
            color: 'rgba(0, 0, 0, 1)'
          }}>
            More than a Vendor, A Strategic Partner
          </h2>
          <p style={{
            color: 'rgba(124, 124, 124, 1)',
            fontSize: '18px',
            fontFamily: FONTS.inter,
            fontWeight: 400,
            lineHeight: '27px',
            margin: 0
          }}>
            Work with a multidisciplinary team, built to execute with precision at every stage.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
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
        alignItems: 'center',
        gap: '64px'
      }}>
        <h2 style={{
          color: COLORS.white,
          fontSize: isMobile ? '32px' : '56px',
          fontWeight: 700,
          lineHeight: isMobile ? '38px' : '67.2px',
          letterSpacing: isMobile ? '-0.96px' : '-1.68px',
          margin: 0,
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

      {/* Benefits Section */}
      <section style={{
        width: '100%',
        padding: isMobile ? '60px 24px' : '120px 120px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '64px'
      }}>
        <div style={{
          width: isMobile ? '100%' : '792px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: isMobile ? '28px' : '40px',
            fontWeight: 700,
            lineHeight: isMobile ? '34px' : '44px',
            letterSpacing: '-0.4px',
            margin: 0,
            color: 'rgba(0, 0, 0, 1)'
          }}>
            Turn Your Credit Expertise Into Presentations That Close
          </h2>
          <p style={{
            color: 'rgba(124, 124, 124, 1)',
            fontSize: '18px',
            fontFamily: FONTS.inter,
            fontWeight: 400,
            lineHeight: '27px',
            margin: '24px 0 0 0'
          }}>
            Leading credit managers that raised billions. GPs that built lasting LP relationships. When the stakes are high, sophisticated firms choose materials that actually work.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '24px',
          justifyContent: 'center'
        }}>
          {[
            {
              title: 'Research',
              desc: 'Market intelligence that reveals where you win. Deep industry insights and data-backed analysis.',
              items: ['Market Yield Analysis', 'Credit Risk Assessment', 'Portfolio Performance', 'Sector Allocation Studies'],
              icon: Search,
              color: '#3b82f6',
              bgColor: 'rgba(59, 130, 246, 0.1)'
            },
            {
              title: 'Strategy',
              desc: 'Investment theses built on logic and clarity. Messaging frameworks that articulate value.',
              items: ['Investment Thesis Development', 'Risk-Adjusted Returns', 'Fund Positioning', 'LP Targeting Strategy'],
              icon: Lightbulb,
              color: '#f97316',
              bgColor: 'rgba(249, 115, 22, 0.1)'
            },
            {
              title: 'Design',
              desc: 'Sophisticated visuals that match your strategy. Complex ideas transformed into clear presentations.',
              items: ['Pitch Deck Creation', 'Performance Dashboards', 'Data Visualization', 'Print-Ready Materials'],
              icon: Palette,
              color: '#a855f7',
              bgColor: 'rgba(168, 85, 247, 0.1)'
            }
          ].map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div key={i} style={{
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
                    backgroundColor: item.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComponent size={isMobile ? 28 : 32} color={item.color} strokeWidth={2} />
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
                    {item.items.map((label, j) => (
                      <div key={j} style={{
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        width: '100%',
        padding: isMobile ? '60px 24px' : '120px 120px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px'
      }}>
        <div style={{
          width: isMobile ? '100%' : '586px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: isMobile ? '32px' : '56px',
            fontWeight: 700,
            lineHeight: isMobile ? '38px' : '67.2px',
            letterSpacing: isMobile ? '-0.96px' : '-1.68px',
            margin: 0,
            color: 'rgba(0, 0, 0, 1)'
          }}>
            Testimonials
          </h2>
        </div>
        <div style={{
          width: '100%',
          maxWidth: '996px',
          position: 'relative'
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{
              display: index === currentTestimonial ? 'block' : 'none',
              animation: 'fadeIn 0.5s ease-in-out'
            }}>
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                imgSrc={testimonial.imgSrc}
                isMobile={isMobile}
                objectPosition={testimonial.objectPosition}
              />
            </div>
          ))}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '24px'
          }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                style={{
                  width: index === currentTestimonial ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: index === currentTestimonial ? COLORS.black : 'rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{
        width: '100%',
        maxWidth: '788px',
        padding: isMobile ? '60px 24px' : '120px 120px',
        boxSizing: 'border-box',
        margin: '0 auto'
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
        <FAQItem
          question="What is your typical turnaround time?"
          answer="Our team works efficiently to deliver polished materials within tight deadlines. Typical projects range from 2-4 weeks depending on scope and complexity."
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
        <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/fd82af61-e28c-4999-b6f9-03bb02a7cc53.png" alt="" style={{
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
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        gap: isMobile ? '40px' : '0',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ maxWidth: isMobile ? '100%' : '320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/a35e7cae-f8d8-4d21-93e9-b4919d6e1ddd.png" alt="Footer Logo" style={{ height: '32px', width: 'fit-content' }} />
          <p style={{ color: COLORS.lightGrayBg, fontSize: '16px', lineHeight: '19.4px', margin: 0, fontFamily: FONTS.inter }}>
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
            <span style={{ color: COLORS.white, fontSize: '16px', fontFamily: FONTS.inter, fontWeight: 600, marginBottom: '4px' }}>Locations</span>
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
            padding: '12px 24px',
            backgroundColor: COLORS.white,
            color: COLORS.black,
            border: 'none',
            borderRadius: '50px',
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: FONTS.inter,
            cursor: 'pointer'
          }}>
            Request Samples
          </button>
          <Link to="/case-studies" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '12px 24px',
              backgroundColor: 'transparent',
              color: COLORS.white,
              border: `1px solid ${COLORS.grayText}`,
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: FONTS.inter,
              cursor: 'pointer',
              width: '100%'
            }}>
              Case Studies
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
};