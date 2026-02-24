import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Presentation, FileText, Briefcase, TrendingUp, MapPin, ChevronRight, ArrowRight, Sparkles, Beaker, Dna, Microscope, Landmark, Users, ShoppingCart, Megaphone, CreditCard } from 'lucide-react';
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

const bostonServices = [
  {
    slug: 'biotech-pitch-decks',
    title: 'Biotech Pitch Decks',
    description: 'Harvard biotech startups and Kendall Square innovators trust us to craft compelling investor presentations that secure Series A through Series E funding.',
    icon: Dna,
    gradient: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
    accentColor: '#6366f1',
    deliverables: [
      'Series A through E fundraising decks',
      'Technology platform presentations',
      'Clinical data visualization',
      'Investor meeting decks',
      'Board presentations'
    ],
    audience: 'Venture Capital, Private Equity, Family Offices'
  },
  {
    slug: 'corporate-presentations',
    title: 'Corporate Presentations',
    description: 'Board-ready presentations for Boston\'s leading pharmaceutical and biotech companies. From annual shareholder meetings to strategic board decks.',
    icon: Building2,
    gradient: 'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)',
    accentColor: '#f97316',
    deliverables: [
      'Annual shareholder presentations',
      'Strategic board decks',
      'Executive communications',
      'Investor day materials',
      'Earnings presentations'
    ],
    audience: 'C-Suite, Board Members, Shareholders'
  },
  {
    slug: 'investor-memos',
    title: 'Investor Memos & CIMs',
    description: 'Investment memorandums and confidential information memorandums that present your Boston biotech or pharma opportunity with depth and polish.',
    icon: FileText,
    gradient: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
    accentColor: '#22c55e',
    deliverables: [
      'Investment thesis documents',
      'Confidential Information Memorandums',
      'Management presentations',
      'Due diligence packages',
      'Virtual data room summaries'
    ],
    audience: 'Strategic Buyers, Financial Sponsors, M&A Advisors'
  },
  {
    slug: 'financial-presentations',
    title: 'Financial Presentations',
    description: 'Clear, compelling financial communications for Boston\'s investment firms, hedge funds, and wealth managers.',
    icon: Landmark,
    gradient: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
    accentColor: '#a855f7',
    deliverables: [
      'Fund performance presentations',
      'LP reporting decks',
      'Investment committee materials',
      'Capital raise presentations',
      'Quarterly investor updates'
    ],
    audience: 'Limited Partners, Fund Managers, Family Offices'
  },
  {
    slug: 'sales-decks',
    title: 'Sales Decks',
    description: 'B2B sales presentations that articulate value proposition and accelerate complex buying cycles in the Boston healthcare ecosystem.',
    icon: TrendingUp,
    gradient: 'linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%)',
    accentColor: '#14b8a6',
    deliverables: [
      'Partner pitch decks',
      'Licensing presentation materials',
      'Co-development proposals',
      'Product launch presentations',
      'Market access decks'
    ],
    audience: 'Strategic Partners, Licensing Teams, Commercial Teams'
  },
  {
    slug: 'board-materials',
    title: 'Board Materials',
    description: 'Professional board presentations and committee materials for Boston\'s startup and growth-stage companies.',
    icon: Briefcase,
    gradient: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
    accentColor: '#ef4444',
    deliverables: [
      'Board meeting presentations',
      'Committee deck packages',
      'Strategic review materials',
      'Budget & forecast presentations',
      'M&A board summaries'
    ],
    audience: 'Boards of Directors, Executive Teams, Investors'
  }
];

const bostonIndustries = [
  {
    slug: 'pharma',
    title: 'Pharmaceuticals',
    description: 'Communicating innovation to investors and stakeholders',
    icon: Beaker,
  },
  {
    slug: 'biotech',
    title: 'Biotechnology',
    description: 'Translating complex science into compelling narratives',
    icon: Dna,
  },
  {
    slug: 'private-equity',
    title: 'Private Equity',
    description: 'LP presentations that raise capital with confidence',
    icon: Landmark,
  },
  {
    slug: 'private-credit',
    title: 'Private Credit',
    description: 'Fixed income strategies presented with clarity',
    icon: CreditCard,
  },
  {
    slug: 'venture-capital',
    title: 'Venture Capital',
    description: 'Fundraising materials for the next generation of startups',
    icon: TrendingUp,
  },
  {
    slug: 'family-office',
    title: 'Family Office',
    description: 'Sophisticated communications for high-net-worth investors',
    icon: Users,
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Technology adoption stories that drive business',
    icon: Building2,
  },
  {
    slug: 'food-beverages',
    title: 'Food & Beverages',
    description: 'Consumer brands that tell their story effectively',
    icon: ShoppingCart,
  },
  {
    slug: 'saas',
    title: 'SaaS',
    description: 'Cloud companies with metrics that matter',
    icon: Megaphone,
  },
];

export const BostonLocationPage = () => {
  const { isMobile } = useResponsive();

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: COLORS.white,
      overflowX: 'hidden'
    }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{
        padding: isMobile ? '80px 24px 60px' : '140px 120px 100px',
        backgroundColor: COLORS.white,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: isMobile ? '100%' : '700px',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px'
          }}>
            <MapPin size={20} color={COLORS.grayText} />
            <span style={{
              color: COLORS.grayText,
              fontSize: '16px',
              fontFamily: FONTS.inter,
              fontWeight: 500
            }}>
              Boston Office
            </span>
          </div>
          <h1 style={{
            fontSize: isMobile ? '40px' : '72px',
            fontWeight: 700,
            lineHeight: isMobile ? '44px' : '79.2px',
            margin: '0 0 24px 0',
            fontFamily: FONTS.inter,
            letterSpacing: isMobile ? '-1.2px' : '-2.16px',
            color: COLORS.black
          }}>
            Boston's Premier<br />Financial Presentations
          </h1>
          <p style={{
            color: COLORS.grayText,
            fontSize: isMobile ? '18px' : '22px',
            lineHeight: isMobile ? '26px' : '33px',
            margin: '0 0 40px 0',
            fontFamily: FONTS.inter,
            maxWidth: '560px'
          }}>
            From Kendall Square to the Seaport, we help Boston's biotech, pharma, and financial services companies communicate their value to investors.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '16px'
          }}>
            <button style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: isMobile ? '14px 24px' : '18px 32px',
              gap: '12px',
              borderRadius: '990px',
              cursor: 'pointer',
              fontFamily: FONTS.inter,
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: 600,
              backgroundColor: COLORS.black,
              color: COLORS.white,
              border: 'none',
              width: isMobile ? '100%' : 'auto'
            }}>
              Get Started
              <ArrowRight size={20} />
            </button>
            <Link to="/case-studies" style={{ textDecoration: 'none', width: isMobile ? '100%' : 'auto' }}>
              <button style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: isMobile ? '14px 24px' : '18px 32px',
                gap: '12px',
                borderRadius: '990px',
                cursor: 'pointer',
                fontFamily: FONTS.inter,
                fontSize: isMobile ? '16px' : '18px',
                fontWeight: 600,
                backgroundColor: COLORS.white,
                color: COLORS.black,
                border: `1px solid ${COLORS.borderGray}`,
                width: '100%'
              }}>
                View Case Studies
              </button>
            </Link>
          </div>
        </div>

        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          right: isMobile ? '-100px' : '-100px',
          top: isMobile ? '40px' : '100px',
          width: isMobile ? '400px' : '700px',
          height: isMobile ? '400px' : '700px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.04) 50%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1
        }} />
      </section>

      {/* Boston Stats Section */}
      <section style={{
        padding: isMobile ? '60px 24px' : '80px 120px',
        backgroundColor: COLORS.offWhite
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
          gap: isMobile ? '32px' : '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { number: '200+', label: 'Boston Projects' },
            { number: '$2B+', label: 'Capital Raised' },
            { number: '50+', label: 'VC Firms Engaged' },
            { number: '15+', label: 'Years Combined Experience' }
          ].map((stat, idx) => (
            <div key={idx} style={{
              textAlign: isMobile ? 'left' : 'center'
            }}>
              <div style={{
                fontSize: isMobile ? '36px' : '48px',
                fontWeight: 700,
                fontFamily: FONTS.inter,
                color: COLORS.black,
                marginBottom: '8px'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '16px',
                fontFamily: FONTS.inter,
                color: COLORS.grayText
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        padding: isMobile ? '60px 24px' : '100px 120px',
        backgroundColor: COLORS.white
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: isMobile ? '48px' : '64px'
          }}>
            <h2 style={{
              fontSize: isMobile ? '32px' : '48px',
              fontWeight: 700,
              lineHeight: isMobile ? '38px' : '57.6px',
              margin: '0 0 16px 0',
              fontFamily: FONTS.inter,
              letterSpacing: isMobile ? '-0.96px' : '-1.44px',
              color: COLORS.black
            }}>
              Services in Boston
            </h2>
            <p style={{
              color: COLORS.grayText,
              fontSize: isMobile ? '16px' : '20px',
              lineHeight: isMobile ? '24px' : '30px',
              margin: 0,
              fontFamily: FONTS.inter,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Comprehensive financial communication services tailored for Boston's innovative ecosystem
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? '20px' : '24px'
          }}>
            {bostonServices.map((service, index) => (
              <div key={index} style={{
                background: service.gradient,
                borderRadius: '24px',
                padding: isMobile ? '28px' : '32px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: COLORS.white,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}>
                  <service.icon size={28} color={service.accentColor} />
                </div>
                <h3 style={{
                  fontSize: isMobile ? '22px' : '24px',
                  fontWeight: 700,
                  lineHeight: '28.8px',
                  margin: '0 0 12px 0',
                  fontFamily: FONTS.inter,
                  color: COLORS.black
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: isMobile ? '14px' : '16px',
                  lineHeight: isMobile ? '20px' : '24px',
                  margin: '0 0 20px 0',
                  fontFamily: FONTS.inter,
                  color: COLORS.darkGray
                }}>
                  {service.description}
                </p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: FONTS.inter,
                    color: COLORS.black
                  }}>
                    Key Deliverables:
                  </span>
                  <ul style={{
                    margin: 0,
                    paddingLeft: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontFamily: FONTS.inter,
                        color: COLORS.darkGray
                      }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{
                  marginTop: '20px',
                  paddingTop: '16px',
                  borderTop: `1px solid rgba(0,0,0,0.08)`
                }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    fontFamily: FONTS.inter,
                    color: service.accentColor,
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    padding: '4px 12px',
                    borderRadius: '20px'
                  }}>
                    {service.audience}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve in Boston */}
      <section style={{
        padding: isMobile ? '60px 24px' : '100px 120px',
        backgroundColor: COLORS.offWhite
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: isMobile ? '48px' : '64px'
          }}>
            <h2 style={{
              fontSize: isMobile ? '32px' : '48px',
              fontWeight: 700,
              lineHeight: isMobile ? '38px' : '57.6px',
              margin: '0 0 16px 0',
              fontFamily: FONTS.inter,
              letterSpacing: isMobile ? '-0.96px' : '-1.44px',
              color: COLORS.black
            }}>
              Industries We Serve in Boston
            </h2>
            <p style={{
              color: COLORS.grayText,
              fontSize: isMobile ? '16px' : '20px',
              lineHeight: isMobile ? '24px' : '30px',
              margin: 0,
              fontFamily: FONTS.inter,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Expert financial communications across Boston's key industries
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '16px' : '24px'
          }}>
            {bostonIndustries.map((industry, index) => (
              <Link to={`/industries/${industry.slug}`} key={index} style={{
                textDecoration: 'none'
              }}>
                <div style={{
                  backgroundColor: COLORS.white,
                  borderRadius: '16px',
                  padding: isMobile ? '24px' : '32px',
                  border: `1px solid ${COLORS.borderGray}`,
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: COLORS.offWhite,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <industry.icon size={24} color={COLORS.black} />
                  </div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    lineHeight: '28px',
                    margin: '0 0 8px 0',
                    fontFamily: FONTS.inter,
                    color: COLORS.black
                  }}>
                    {industry.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    margin: 0,
                    fontFamily: FONTS.inter,
                    color: COLORS.grayText
                  }}>
                    {industry.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '40px'
          }}>
            <Link to="/industries" style={{ textDecoration: 'none' }}>
              <button style={{
                display: 'inline-flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '14px 28px',
                gap: '8px',
                borderRadius: '990px',
                cursor: 'pointer',
                fontFamily: FONTS.inter,
                fontSize: '16px',
                fontWeight: 600,
                backgroundColor: COLORS.black,
                color: COLORS.white,
                border: 'none'
              }}>
                View All Industries
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Happy Pitch for Boston */}
      <section style={{
        padding: isMobile ? '60px 24px' : '100px 120px',
        backgroundColor: COLORS.black
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: isMobile ? '48px' : '64px'
          }}>
            <h2 style={{
              fontSize: isMobile ? '32px' : '48px',
              fontWeight: 700,
              lineHeight: isMobile ? '38px' : '57.6px',
              margin: '0 0 16px 0',
              fontFamily: FONTS.inter,
              letterSpacing: isMobile ? '-0.96px' : '-1.44px',
              color: COLORS.white
            }}>
              Why Boston Companies Choose Us
            </h2>
            <p style={{
              color: COLORS.grayText,
              fontSize: isMobile ? '16px' : '20px',
              lineHeight: isMobile ? '24px' : '30px',
              margin: 0,
              fontFamily: FONTS.inter,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Deep expertise in Boston's biotech and financial ecosystem
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '24px' : '32px'
          }}>
            {[
              {
                title: 'Biotech Expertise',
                description: 'We understand the science, the FDA pathways, and what VCs want to see in biotech pitch decks.'
              },
              {
                title: 'Local Boston Network',
                description: 'Connections with top VCs, PE firms, and family offices active in the Boston ecosystem.'
              },
              {
                title: 'Fast Turnaround',
                description: 'Boston-based team means responsive communication and quick revisions when you need them.'
              },
              {
                title: 'Proven Track Record',
                description: '$2B+ in capital raised for Boston companies across all stages and therapeutic areas.'
              },
              {
                title: 'Board-Level Quality',
                description: 'Presentations that impress board members and pass due diligence with flying colors.'
              },
              {
                title: 'End-to-End Service',
                description: 'From initial strategy to final delivery, we handle every aspect of your presentation.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: isMobile ? '24px' : '32px',
                backgroundColor: 'rgba(255,255,255,0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Sparkles size={24} color={COLORS.white} />
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '28px',
                  margin: '0 0 12px 0',
                  fontFamily: FONTS.inter,
                  color: COLORS.white
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '22px',
                  margin: 0,
                  fontFamily: FONTS.inter,
                  color: COLORS.grayText
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: isMobile ? '60px 24px' : '100px 120px',
        backgroundColor: COLORS.black,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '24px' : '40px',
          position: 'relative',
          zIndex: 2
        }}>
          <h2 style={{
            color: COLORS.white,
            fontSize: isMobile ? '32px' : '56px',
            fontWeight: 700,
            lineHeight: isMobile ? '36px' : '67.2px',
            margin: 0,
            fontFamily: FONTS.inter,
            letterSpacing: isMobile ? '-0.96px' : '-1.68px'
          }}>
            Ready to Raise<br />in Boston?
          </h2>
          <p style={{
            color: COLORS.grayText,
            fontSize: isMobile ? '16px' : '22px',
            lineHeight: isMobile ? '22px' : '26.6px',
            margin: 0,
            fontFamily: FONTS.inter,
            maxWidth: '400px'
          }}>
            Let's discuss how we can help your Boston company communicate its value to investors.
          </p>
          <button style={{
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
            backgroundColor: COLORS.white,
            color: COLORS.black,
            border: `1px solid ${COLORS.borderGray}`,
            width: isMobile ? '100%' : 'auto',
            alignSelf: 'flex-start'
          }}>
            Book Consultation
            <ChevronRight size={20} />
          </button>
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
        gap: isMobile ? '40px' : '0'
      }}>
        <div style={{ maxWidth: isMobile ? '100%' : '320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/374684919160512512/figma-assets/a35e7cae-f8d8-4d21-93e9-b4919d6e1ddd.png" alt="Footer Logo" style={{ height: '32px', width: 'fit-content' }} />
          <p style={{ color: COLORS.lightGrayBg, fontSize: isMobile ? '14px' : '16px', lineHeight: '19.4px', margin: 0, fontFamily: FONTS.inter }}>
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
            <Link to="/locations/boston" style={{ textDecoration: 'none' }}><span style={{ color: COLORS.white, fontSize: '16px', fontFamily: FONTS.inter }}>Boston</span></Link>
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
