import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Presentation, FileText, Briefcase, TrendingUp, MapPin, ChevronRight, ArrowRight, Sparkles, Beaker, Dna, Microscope } from 'lucide-react';
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
    description: 'Annual shareholder presentations, strategic board decks, and executive communications with institutional-grade polish for pharmaceutical companies.',
    icon: Building2,
    gradient: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
    accentColor: '#6366f1',
    deliverables: [
      'Board-ready annual reports and shareholder decks',
      'Strategic planning presentations',
      'Executive communications and town halls',
      'Investor day materials',
      'Earnings presentations'
    ],
    audience: 'C-Suite, Board Members, Shareholders'
  },
  {
    slug: 'pitch-decks',
    title: 'Pitch Decks',
    description: 'Investor-ready pitch decks for Series A through Series E that articulate your pharma company\'s equity story with clarity and impact.',
    icon: Presentation,
    gradient: 'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)',
    accentColor: '#f97316',
    deliverables: [
      'Series A through E fundraising decks',
      'Pre-IPO roadshow presentations',
      'Platform technology overviews',
      'Therapeutic area deep-dives',
      'Clinical data visualization'
    ],
    audience: 'Venture Capital, Private Equity, Institutional Investors'
  },
  {
    slug: 'investor-memos',
    title: 'Investor Memos',
    description: 'Investment memos that articulate your thesis, demonstrate track record, and build confidence with LPs in the pharmaceutical space.',
    icon: FileText,
    gradient: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
    accentColor: '#22c55e',
    deliverables: [
      'Investment thesis documents',
      'Market opportunity analyses',
      'Clinical milestone summaries',
      'Competitive landscape assessments',
      'Regulatory pathway overviews'
    ],
    audience: 'Limited Partners, Fund Managers, Family Offices'
  },
  {
    slug: 'cims',
    title: 'CIMs',
    description: 'Comprehensive sell-side materials that present your pharma business opportunity with depth, polish, and strategic insight.',
    icon: Briefcase,
    gradient: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
    accentColor: '#a855f7',
    deliverables: [
      'Confidential Information Memorandums',
      'Management presentations',
      'Virtual data room summaries',
      'Due diligence packages',
      'Pipeline valuation materials'
    ],
    audience: 'Strategic Buyers, Financial Sponsors, M&A Advisors'
  },
  {
    slug: 'sales-decks',
    title: 'Sales Decks',
    description: 'B2B sales presentations for pharma companies that articulate value proposition, demonstrate ROI, and accelerate complex buying cycles.',
    icon: TrendingUp,
    gradient: 'linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%)',
    accentColor: '#14b8a6',
    deliverables: [
      'Partner pitch decks',
      'Licensing presentation materials',
      'Co-development proposal decks',
      'Product launch presentations',
      'Market access presentations'
    ],
    audience: 'Strategic Partners, Licensing Teams, Commercial Teams'
  }
];

const locations = [
  { city: 'Boston', tagline: 'Biotech & Life Sciences Hub' },
  { city: 'NYC', tagline: 'Financial & Pharma HQ' },
  { city: 'Miami', tagline: 'Emerging Biotech Corridor' },
  { city: 'Houston', tagline: 'Medical & Research Center' },
  { city: 'Los Angeles', tagline: 'West Coast Pharma Gateway' },
];

export const PharmaIndustryPage = () => {
  const { isMobile } = useResponsive();

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: COLORS.white, boxSizing: 'border-box' }}>
      <Navbar />
      
      {/* Hero Section with Gradient Background */}
      <section style={{ 
        width: '100%', 
        padding: isMobile ? '140px 24px 100px' : '200px 120px 140px', 
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          display: isMobile ? 'none' : 'block'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          display: isMobile ? 'none' : 'block'
        }} />
        
        <div style={{ maxWidth: '1000px', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(0,0,0,0.05)',
            padding: '8px 16px',
            borderRadius: '50px',
            marginBottom: '24px'
          }}>
            <Beaker size={16} color={COLORS.black} />
            <span style={{ 
              fontSize: '13px', 
              fontWeight: 600, 
              color: COLORS.black, 
              textTransform: 'uppercase', 
              letterSpacing: '1px',
              fontFamily: FONTS.inter 
            }}>
              Pharmaceutical Industry
            </span>
          </div>
          
          <h1 style={{ 
            fontSize: isMobile ? '40px' : '64px', 
            fontWeight: 800, 
            color: COLORS.black, 
            marginBottom: '24px', 
            fontFamily: FONTS.inter, 
            lineHeight: isMobile ? '48px' : '72px',
            letterSpacing: isMobile ? '-1.2px' : '-2px'
          }}>
            Presentation Services for<br />
            <span style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Pharma Companies
            </span>
          </h1>
          
          <p style={{ 
            fontSize: isMobile ? '18px' : '22px', 
            color: COLORS.grayText, 
            fontFamily: FONTS.inter, 
            maxWidth: '700px', 
            lineHeight: isMobile ? '28px' : '34px',
            marginBottom: '32px'
          }}>
            From clinical trial results to regulatory milestones, we help pharmaceutical companies articulate their value proposition to investors, partners, and the medical community.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/services" style={{ textDecoration: 'none' }}>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                backgroundColor: COLORS.black,
                color: COLORS.white,
                border: 'none',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: 600,
                fontFamily: FONTS.inter,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}>
                Explore Services
                <ArrowRight size={18} />
              </button>
            </Link>
            <Link to="/case-studies" style={{ textDecoration: 'none' }}>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                backgroundColor: 'transparent',
                color: COLORS.black,
                border: `2px solid ${COLORS.black}`,
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: 600,
                fontFamily: FONTS.inter,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                View Case Studies
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Card Design */}
      <section style={{ width: '100%', padding: isMobile ? '80px 24px' : '120px 120px', backgroundColor: COLORS.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px'
            }}>
              <Sparkles size={20} color="#667eea" />
              <span style={{ 
                fontSize: '14px', 
                fontWeight: 600, 
                color: '#667eea', 
                textTransform: 'uppercase', 
                letterSpacing: '2px',
                fontFamily: FONTS.inter 
              }}>
                Our Services
              </span>
            </div>
            <h2 style={{ 
              fontSize: isMobile ? '32px' : '48px', 
              fontWeight: 800, 
              color: COLORS.black, 
              marginBottom: '16px', 
              fontFamily: FONTS.inter,
              letterSpacing: isMobile ? '-0.96px' : '-1.5px'
            }}>
              Tailored for Pharma
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: COLORS.grayText, 
              fontFamily: FONTS.inter,
              lineHeight: '28px'
            }}>
              Comprehensive presentation services designed specifically for pharmaceutical companies
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {services.map((service, index) => (
              <div key={service.slug} style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                backgroundColor: COLORS.white,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
                {/* Left Side - Icon & Title */}
                <div style={{
                  width: isMobile ? '100%' : '35%',
                  background: service.gradient,
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: isMobile ? 'center' : 'flex-start',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: COLORS.white,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}>
                    <service.icon size={40} color={service.accentColor} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ 
                    fontSize: '28px', 
                    fontWeight: 700, 
                    color: COLORS.black, 
                    marginBottom: '12px', 
                    fontFamily: FONTS.inter,
                    letterSpacing: '-0.5px'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ 
                    fontSize: '15px', 
                    color: COLORS.grayText, 
                    fontFamily: FONTS.inter,
                    lineHeight: '24px'
                  }}>
                    {service.description}
                  </p>
                </div>
                
                {/* Right Side - Details */}
                <div style={{
                  width: isMobile ? '100%' : '65%',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '40px' }}>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ 
                        fontSize: '12px', 
                        fontWeight: 700, 
                        color: COLORS.black, 
                        marginBottom: '16px', 
                        fontFamily: FONTS.inter, 
                        textTransform: 'uppercase', 
                        letterSpacing: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: service.accentColor }} />
                        Key Deliverables
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} style={{ 
                            fontSize: '15px', 
                            color: COLORS.grayText, 
                            fontFamily: FONTS.inter, 
                            padding: '10px 0',
                            borderBottom: idx < service.deliverables.length - 1 ? `1px solid ${COLORS.borderGray}` : 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                          }}>
                            <span style={{ 
                              width: '6px', 
                              height: '6px', 
                              borderRadius: '50%', 
                              backgroundColor: service.accentColor,
                              flexShrink: 0
                            }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ 
                        fontSize: '12px', 
                        fontWeight: 700, 
                        color: COLORS.black, 
                        marginBottom: '16px', 
                        fontFamily: FONTS.inter, 
                        textTransform: 'uppercase', 
                        letterSpacing: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: service.accentColor }} />
                        Perfect For
                      </h4>
                      <p style={{ 
                        fontSize: '15px', 
                        color: COLORS.grayText, 
                        fontFamily: FONTS.inter, 
                        lineHeight: '26px',
                        marginBottom: '24px'
                      }}>
                        {service.audience}
                      </p>
                      <Link to={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                        <button style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '12px 24px',
                          backgroundColor: service.accentColor,
                          color: 'white',
                          border: 'none',
                          borderRadius: '50px',
                          fontSize: '14px',
                          fontWeight: 600,
                          fontFamily: FONTS.inter,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: `0 4px 15px ${service.accentColor}40`
                        }}>
                          Learn More
                          <ArrowRight size={16} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section - Gradient Cards */}
      <section style={{ 
        width: '100%', 
        padding: isMobile ? '80px 24px' : '120px 120px', 
        backgroundColor: COLORS.offWhite,
        position: 'relative'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(102,126,234,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(249,115,22,0.03) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px'
            }}>
              <MapPin size={20} color="#667eea" />
              <span style={{ 
                fontSize: '14px', 
                fontWeight: 600, 
                color: '#667eea', 
                textTransform: 'uppercase', 
                letterSpacing: '2px',
                fontFamily: FONTS.inter 
              }}>
                Our Presence
              </span>
            </div>
            <h2 style={{ 
              fontSize: isMobile ? '32px' : '48px', 
              fontWeight: 800, 
              color: COLORS.black, 
              marginBottom: '16px', 
              fontFamily: FONTS.inter,
              letterSpacing: isMobile ? '-0.96px' : '-1.5px'
            }}>
              Where We Work
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: COLORS.grayText, 
              fontFamily: FONTS.inter,
              lineHeight: '28px'
            }}>
              Supporting pharmaceutical companies across key biotech and life sciences hubs
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, 1fr)', 
            gap: '20px' 
          }}>
            {locations.map((location, idx) => (
              <div key={idx} style={{
                background: COLORS.white,
                borderRadius: '20px',
                padding: '32px 24px',
                textAlign: 'center',
                boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  backgroundColor: COLORS.darkGray
                }} />
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: COLORS.darkGray,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                }}>
                  <MapPin size={28} color="white" />
                </div>
                <h3 style={{ 
                  fontSize: '22px', 
                  fontWeight: 700, 
                  color: COLORS.black, 
                  marginBottom: '8px', 
                  fontFamily: FONTS.inter 
                }}>
                  {location.city}
                </h3>
                <p style={{ 
                  fontSize: '13px', 
                  color: COLORS.grayText, 
                  fontFamily: FONTS.inter,
                  lineHeight: '20px',
                  fontWeight: 500
                }}>
                  {location.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - Feature Grid */}
      <section style={{ 
        width: '100%', 
        padding: isMobile ? '80px 24px' : '120px 120px', 
        backgroundColor: COLORS.white 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px'
            }}>
              <Microscope size={20} color="#667eea" />
              <span style={{ 
                fontSize: '14px', 
                fontWeight: 600, 
                color: '#667eea', 
                textTransform: 'uppercase', 
                letterSpacing: '2px',
                fontFamily: FONTS.inter 
              }}>
                Why Choose Us
              </span>
            </div>
            <h2 style={{ 
              fontSize: isMobile ? '32px' : '48px', 
              fontWeight: 800, 
              color: COLORS.black, 
              marginBottom: '16px', 
              fontFamily: FONTS.inter,
              letterSpacing: isMobile ? '-0.96px' : '-1.5px'
            }}>
              Built for Pharma
            </h2>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
            gap: '32px' 
          }}>
            {[
              {
                icon: Dna,
                title: 'Deep Industry Expertise',
                description: 'We understand clinical trial data, regulatory pathways, and the unique challenges of bringing therapeutics to market.',
                gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              },
              {
                icon: Beaker,
                title: 'Scientific Storytelling',
                description: 'We translate complex mechanism-of-action data into compelling narratives that resonate with healthcare investors.',
                gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
              },
              {
                icon: Microscope,
                title: 'Confidentiality First',
                description: 'We handle sensitive clinical and pre-clinical data with the utmost security and discretion.',
                gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
              }
            ].map((point, idx) => (
              <div key={idx} style={{
                backgroundColor: COLORS.offWhite,
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: point.gradient,
                  opacity: 0.1,
                  borderRadius: '0 0 0 100%'
                }} />
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: point.gradient,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                }}>
                  <point.icon size={32} color="white" strokeWidth={1.5} />
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: COLORS.black,
                  marginBottom: '12px',
                  fontFamily: FONTS.inter,
                  letterSpacing: '-0.5px'
                }}>
                  {point.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: COLORS.grayText,
                  fontFamily: FONTS.inter,
                  lineHeight: '26px'
                }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        width: '100%',
        backgroundColor: COLORS.black,
        padding: isMobile ? '60px 24px' : '120px 120px',
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
            fontSize: isMobile ? '32px' : '56px',
            fontWeight: 700,
            lineHeight: isMobile ? '36px' : '67.2px',
            margin: 0,
            fontFamily: FONTS.inter,
            letterSpacing: isMobile ? '-0.96px' : '-1.68px'
          }}>
            Your Next Raise Starts<br />With a Better Deck
          </h2>
          <p style={{
            color: COLORS.grayText,
            fontSize: isMobile ? '16px' : '22px',
            lineHeight: isMobile ? '22px' : '26.6px',
            margin: 0,
            fontFamily: FONTS.inter
          }}>
            Great strategies deserve great storytelling. Don't let a weak deck cost you your next allocation.
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