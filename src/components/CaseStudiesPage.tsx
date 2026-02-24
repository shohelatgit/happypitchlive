import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
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

interface CaseStudyData {
  slug: string;
  company: string;
  industry: string;
  tagline: string;
  metrics: { value: string; label: string }[];
  challenge: string[];
  solution: string[];
  results: string[];
}

const caseStudyData: CaseStudyData[] = [
  {
    slug: 'novabio-therapeutics',
    company: 'NovaBio Therapeutics',
    industry: 'Biotech',
    tagline: 'From pre-clinical data to a fully funded pipeline in 90 days.',
    metrics: [
      { value: '$12M', label: 'Series A Raised' },
      { value: '90', label: 'Days to Close' },
      { value: '32', label: 'Investor Meetings' },
      { value: '4x', label: 'Oversubscribed' },
    ],
    challenge: [
      'NovaBio Therapeutics had a breakthrough oncology platform with strong pre-clinical data, but their existing pitch materials failed to communicate the science in a way that generalist healthcare investors could understand.',
      'Their founding team of PhD researchers struggled to translate complex mechanism-of-action data into a compelling investment thesis. After six months of fundraising with minimal traction, they were burning through runway and needed to close their Series A quickly.',
      'The existing deck was 47 slides of dense scientific data with no clear narrative arc, no competitive positioning, and no articulation of the commercial opportunity.',
    ],
    solution: [
      'We rebuilt their pitch from the ground up, starting with a clear 3-sentence investment thesis that framed the science in terms investors understand: unmet need, differentiated approach, and large addressable market.',
      'We distilled the 47-slide deck into a focused 18-slide narrative that led with the market opportunity ($14B TAM), introduced the platform with intuitive visual metaphors, and presented clinical milestones as de-risking events tied to value inflection points.',
      'We created a modular appendix system so the team could deep-dive into any scientific question without derailing the core pitch flow. We also designed a one-page teaser and a data room summary document for pre-meeting distribution.',
    ],
    results: [
      'NovaBio closed their $12M Series A in just 90 days — down from the 9+ months they had been struggling with previously.',
      'The new materials generated a 3.2x improvement in meeting-to-follow-up conversion rate, with investors specifically citing the clarity of the pitch as a differentiator.',
      'The round was 4x oversubscribed, with NovaBio ultimately selecting investors who brought strategic value beyond capital. Two of their lead investors had previously passed on the company when reviewing the old materials.',
    ],
  },
  {
    slug: 'cloudmetrics',
    company: 'CloudMetrics',
    industry: 'SaaS',
    tagline: 'A metrics-driven deck that tripled investor engagement overnight.',
    metrics: [
      { value: '3x', label: 'Investor Meeting Rate' },
      { value: '$8.5M', label: 'Series B Raised' },
      { value: '68%', label: 'Meeting Conversion' },
      { value: '21', label: 'Days to Term Sheet' },
    ],
    challenge: [
      'CloudMetrics, a B2B SaaS analytics platform with $3.2M ARR and 140% net revenue retention, was struggling to stand out in a crowded fundraising environment. Despite strong unit economics, their Series B outreach was generating a dismal 12% meeting acceptance rate.',
      'Their pitch deck buried the strongest metrics deep in the presentation and led with product features rather than business outcomes. The competitive landscape slide was a generic 2x2 matrix that failed to articulate their actual differentiation.',
      'With 8 months of runway remaining and aggressive hiring plans, the founding team needed to close their Series B within a quarter or face painful cuts.',
    ],
    solution: [
      'We restructured the entire narrative around CloudMetrics\' strongest asset: their metrics. The opening slide immediately presented the four numbers that matter most to SaaS investors — ARR, growth rate, NRR, and payback period — in a clean, bold visual format.',
      'We replaced the generic competitive matrix with a purpose-built comparison framework that highlighted CloudMetrics\' unique positioning at the intersection of real-time analytics and predictive modeling — a space no competitor had claimed.',
      'We built custom data visualization slides that turned their retention cohort data and expansion revenue trends into instantly compelling charts. Every slide was designed to answer one question and advance the narrative toward the ask.',
    ],
    results: [
      'Meeting acceptance rate jumped from 12% to 38% within the first two weeks of outreach with the new materials — a 3x improvement.',
      'CloudMetrics received their first term sheet just 21 days after launching the new deck, and ultimately closed an $8.5M Series B at a valuation 30% above their initial target.',
      'The 68% meeting-to-next-step conversion rate was the highest their lead investor had seen that quarter. The partner specifically noted that the deck "let the metrics speak for themselves" and made the due diligence process significantly faster.',
    ],
  },
  {
    slug: 'vaultedge-capital',
    company: 'VaultEdge Capital',
    industry: 'Fintech',
    tagline: 'Oversubscribed fund raise powered by a compelling narrative.',
    metrics: [
      { value: '$85M', label: 'Fund Close' },
      { value: '142%', label: 'Oversubscribed' },
      { value: '18', label: 'LP Commitments' },
      { value: '60', label: 'Days to First Close' },
    ],
    challenge: [
      'VaultEdge Capital, a fintech-focused venture fund launching their Fund II, had a strong track record from Fund I (2.8x MOIC, top-quartile DPI) but their marketing materials read like a compliance document rather than a compelling investment opportunity.',
      'The LP market had tightened considerably, with institutional allocators becoming increasingly selective. VaultEdge was competing against established brand-name funds for the same LP dollars, and their materials did nothing to differentiate their approach or track record.',
      'Their Fund I materials had been cobbled together internally and lacked the institutional quality that pension funds, endowments, and fund-of-funds expected. Several promising LP conversations had stalled after the initial materials review.',
    ],
    solution: [
      'We developed a complete suite of LP marketing materials anchored by a master pitch deck that told the VaultEdge story in three acts: the fintech opportunity (macro thesis), the VaultEdge edge (proprietary deal flow and operational playbook), and the proof (Fund I attribution and returns).',
      'We created detailed portfolio company case studies that demonstrated how VaultEdge\'s hands-on approach drove specific value creation levers — not just capital deployment, but introductions, hiring support, and go-to-market acceleration that directly impacted revenue growth.',
      'We designed a quarterly LP report template, a one-page fund summary for initial outreach, and a data room presentation that anticipated and addressed the top 20 questions LPs typically ask during due diligence.',
    ],
    results: [
      'VaultEdge achieved their first close of $45M in just 60 days — well ahead of their 6-month target. The final close brought the fund to $85M, 142% of their original $60M target.',
      'The fund attracted 18 LP commitments, including three institutional investors who had previously declined meetings. One endowment CIO noted that the materials were "the most professional and compelling we\'ve seen from an emerging manager."',
      'The quarterly LP report template they continue to use has been cited by multiple LPs as a best-in-class example of transparent fund communication, strengthening relationships ahead of a planned Fund III launch.',
    ],
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
    transition: 'all 0.2s ease',
    border: 'none',
    width: isMobile ? '100%' : 'auto',
    ...style
  };
  const variants = {
    primary: { backgroundColor: COLORS.black, color: COLORS.white },
    secondary: { backgroundColor: COLORS.white, color: COLORS.black, border: `1px solid ${COLORS.borderGray}` }
  };
  return <button onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ ...baseStyle, ...variants[variant] }}>
    {children}
  </button>;
};

export const CaseStudiesPage = () => {
  const { isMobile } = useResponsive();
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null);
  
  const currentStudy = caseStudyData.find(s => s.slug === selectedStudy);

  if (selectedStudy && currentStudy) {
    return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: COLORS.white, boxSizing: 'border-box' }}>
        <Navbar />
        
        {/* Hero */}
        <section style={{ width: '100%', padding: isMobile ? '120px 24px 80px' : '180px 120px 100px', background: `linear-gradient(to bottom, ${COLORS.lightGrayBg}, ${COLORS.white})` }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div 
              onClick={() => setSelectedStudy(null)}
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                color: COLORS.grayText, 
                fontSize: '14px', 
                cursor: 'pointer',
                marginBottom: '32px',
                fontFamily: FONTS.inter
              }}
            >
              <ArrowLeft size={16} />
              Back to Case Studies
            </div>
            <div>
              <span style={{ 
                display: 'inline-block', 
                padding: '6px 12px', 
                fontSize: '12px', 
                fontWeight: 500, 
                color: COLORS.grayText, 
                backgroundColor: COLORS.lightGrayBg, 
                borderRadius: '999px',
                marginBottom: '16px',
                fontFamily: FONTS.inter
              }}>
                {currentStudy.industry}
              </span>
              <h1 style={{ 
                fontSize: isMobile ? '32px' : '48px', 
                fontWeight: 700, 
                color: COLORS.black, 
                marginBottom: '16px',
                fontFamily: FONTS.inter,
                lineHeight: isMobile ? '38px' : '57.6px'
              }}>
                {currentStudy.company}
              </h1>
              <p style={{ 
                fontSize: isMobile ? '16px' : '20px', 
                color: COLORS.grayText, 
                fontFamily: FONTS.inter,
                lineHeight: isMobile ? '24px' : '30px'
              }}>
                {currentStudy.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Metrics Bar */}
        <section style={{ width: '100%', padding: '48px 24px', backgroundColor: COLORS.darkGray }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: `repeat(2, 1fr)`, gap: '32px' }}>
            {currentStudy.metrics.map((metric, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 700, color: COLORS.white, marginBottom: '4px', fontFamily: FONTS.inter }}>
                  {metric.value}
                </div>
                <div style={{ fontSize: '14px', color: COLORS.grayText, fontFamily: FONTS.inter }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Challenge */}
        <section style={{ width: '100%', padding: isMobile ? '60px 24px' : '80px 120px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: COLORS.black, marginBottom: '8px', fontFamily: FONTS.inter }}>The Challenge</h2>
              <div style={{ width: '48px', height: '4px', backgroundColor: '#ef4444', borderRadius: '2px' }}></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {currentStudy.challenge.map((paragraph, i) => (
                <p key={i} style={{ color: COLORS.grayText, lineHeight: '24px', fontFamily: FONTS.inter, fontSize: '16px' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section style={{ width: '100%', padding: isMobile ? '60px 24px' : '80px 120px', backgroundColor: COLORS.lightGrayBg }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: COLORS.black, marginBottom: '8px', fontFamily: FONTS.inter }}>Our Solution</h2>
              <div style={{ width: '48px', height: '4px', backgroundColor: '#3b82f6', borderRadius: '2px' }}></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {currentStudy.solution.map((paragraph, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <CheckCircle2 size={20} color="#3b82f6" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <p style={{ color: COLORS.grayText, lineHeight: '24px', fontFamily: FONTS.inter, fontSize: '16px' }}>
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Results */}
        <section style={{ width: '100%', padding: isMobile ? '60px 24px' : '80px 120px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: COLORS.black, marginBottom: '8px', fontFamily: FONTS.inter }}>The Results</h2>
              <div style={{ width: '48px', height: '4px', backgroundColor: '#22c55e', borderRadius: '2px' }}></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {currentStudy.results.map((paragraph, i) => (
                <p key={i} style={{ color: COLORS.grayText, lineHeight: '24px', fontFamily: FONTS.inter, fontSize: '16px' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ width: '100%', padding: isMobile ? '60px 24px' : '80px 120px', backgroundColor: COLORS.darkGray, textAlign: 'center' }}>
          <h2 style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 700, color: COLORS.white, marginBottom: '16px', fontFamily: FONTS.inter }}>
            Ready for results like these?
          </h2>
          <p style={{ fontSize: '16px', color: COLORS.grayText, maxWidth: '500px', margin: '0 auto 32px', fontFamily: FONTS.inter }}>
            Let's build a pitch that turns conversations into commitments.
          </p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ActionButton variant="secondary">Get Started</ActionButton>
          </Link>
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
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '32px' : '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/" style={{ textDecoration: 'none' }}><span style={{ color: COLORS.white, fontSize: '16px', fontFamily: FONTS.inter }}>Home</span></Link>
              <Link to="/industries" style={{ textDecoration: 'none' }}><span style={{ color: COLORS.grayText, fontSize: '16px', fontFamily: FONTS.inter }}>Industries</span></Link>
              <Link to="/services" style={{ textDecoration: 'none' }}><span style={{ color: COLORS.grayText, fontSize: '16px', fontFamily: FONTS.inter }}>Services</span></Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ color: COLORS.grayText, fontSize: '16px', fontFamily: FONTS.inter }}>Legal</span>
              <span style={{ color: COLORS.grayText, fontSize: '16px', fontFamily: FONTS.inter }}>Privacy</span>
              <span style={{ color: COLORS.grayText, fontSize: '16px', fontFamily: FONTS.inter }}>Contact</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'column', gap: '16px', width: isMobile ? '100%' : 'auto' }}>
            <ActionButton variant="secondary">Request Samples</ActionButton>
            <ActionButton variant="secondary">Case Studies</ActionButton>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: COLORS.white, boxSizing: 'border-box' }}>
      <Navbar />
      
      {/* Hero */}
      <section style={{ width: '100%', padding: isMobile ? '120px 24px 80px' : '180px 120px 100px', background: `linear-gradient(to bottom, ${COLORS.lightGrayBg}, ${COLORS.white})` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', fontWeight: 500, color: COLORS.grayText, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', fontFamily: FONTS.inter }}>
            Case Studies
          </p>
          <h1 style={{ fontSize: isMobile ? '36px' : '56px', fontWeight: 700, color: COLORS.black, marginBottom: '24px', fontFamily: FONTS.inter, lineHeight: isMobile ? '42px' : '67.2px' }}>
            Results That Speak for Themselves
          </h1>
          <p style={{ fontSize: isMobile ? '16px' : '20px', color: COLORS.grayText, maxWidth: '600px', margin: '0 auto', fontFamily: FONTS.inter, lineHeight: isMobile ? '24px' : '30px' }}>
            See how we've helped leading companies turn complex strategies into compelling narratives that close deals.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section style={{ width: '100%', padding: isMobile ? '60px 24px' : '80px 120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
          {caseStudyData.map((study) => (
            <div 
              key={study.slug}
              onClick={() => setSelectedStudy(study.slug)}
              style={{ 
                backgroundColor: COLORS.white, 
                border: `1px solid ${COLORS.borderGray}`, 
                borderRadius: '16px', 
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ padding: isMobile ? '24px' : '32px' }}>
                <span style={{ display: 'inline-block', padding: '6px 12px', fontSize: '12px', fontWeight: 500, color: COLORS.grayText, backgroundColor: COLORS.lightGrayBg, borderRadius: '999px', marginBottom: '16px', fontFamily: FONTS.inter }}>
                  {study.industry}
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: COLORS.black, marginBottom: '8px', fontFamily: FONTS.inter }}>
                  {study.company}
                </h3>
                <p style={{ fontSize: '14px', color: COLORS.grayText, marginBottom: '24px', fontFamily: FONTS.inter, lineHeight: '21px' }}>
                  {study.tagline}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  {study.metrics.slice(0, 2).map((metric, i) => (
                    <div key={i}>
                      <div style={{ fontSize: '20px', fontWeight: 700, color: COLORS.black, fontFamily: FONTS.inter }}>{metric.value}</div>
                      <div style={{ fontSize: '12px', color: COLORS.grayText, fontFamily: FONTS.inter }}>{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ padding: isMobile ? '16px 24px' : '20px 32px', backgroundColor: COLORS.lightGrayBg, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', fontWeight: 500, color: COLORS.black, fontFamily: FONTS.inter }}>Read Case Study</span>
                <ArrowRight size={16} color={COLORS.black} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ width: '100%', padding: isMobile ? '60px 24px' : '80px 120px', backgroundColor: COLORS.darkGray, textAlign: 'center' }}>
        <h2 style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 700, color: COLORS.white, marginBottom: '16px', fontFamily: FONTS.inter }}>
          Ready for results like these?
        </h2>
        <p style={{ fontSize: '16px', color: COLORS.grayText, maxWidth: '500px', margin: '0 auto 32px', fontFamily: FONTS.inter }}>
          Let's build a pitch that turns conversations into commitments.
        </p>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <ActionButton variant="secondary">Get Started</ActionButton>
        </Link>
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
          <ActionButton variant="secondary">Case Studies</ActionButton>
        </div>
      </footer>
    </div>
  );
};