import { useEffect, useRef, useState } from 'react';
import '../styles/whitepaper.css';
import Footer from '../components/Footer';

interface WhitePaper {
    id: number;
    title: string;
    description: string;
    date: string;
    image: string;
    category: string;
    pdfFile: string;
}

const PLACEHOLDER_IMG = 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800';

// ──── White Paper Data for MFM Marketing Company ────
const whitepaperData: WhitePaper[] = [
    {
        id: 1,
        title: 'Digital Trends: A Comprehensive Guide to Modern Marketing',
        description: 'A comprehensive guide exploring the latest trends in digital marketing and the factors shaping modern company strategies toward success.',
        date: 'May 10, 2026',
        image: PLACEHOLDER_IMG,
        category: 'Digital Strategy',
        pdfFile: '/src/assets/files/influencers.pdf',
    },
    {
        id: 2,
        title: 'Branding Strategies in the Digital Competition Era',
        description: 'How brands build strong identity and maintain genuine engagement with their audience in a crowded marketplace.',
        date: 'May 3, 2026',
        image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Branding Strategy',
        pdfFile: '/src/assets/files/influencers.pdf',
    },
    {
        id: 3,
        title: 'SEO Optimization: The Practical Implementation Guide',
        description: 'A comprehensive practical guide to understanding search engines and improving your website visibility in organic search results.',
        date: 'May 1, 2026',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Search Optimization',
        pdfFile: '/src/assets/files/influencers.pdf',
    },
    {
        id: 4,
        title: 'Social Media Marketing: The Art and Science',
        description: 'A comprehensive guide to maximizing social media platforms to build engaged communities and drive real sales.',
        date: 'April 28, 2026',
        image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Social Media',
        pdfFile: '/src/assets/files/influencers.pdf',
    },
    {
        id: 5,
        title: 'Data Analytics and Business Intelligence',
        description: 'How to transform raw data into actionable insights that drive strategic business decisions.',
        date: 'April 20, 2026',
        image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Business Intelligence',
        pdfFile: '/src/assets/files/influencers.pdf',
    },
    {
        id: 6,
        title: 'Email Marketing: Effective ROI Strategy',
        description: 'How to build an effective email list and use it to convert subscribers into loyal customers.',
        date: 'April 12, 2026',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Email Marketing',
        pdfFile: '/src/assets/files/influencers.pdf',
    },
    {
        id: 7,
        title: 'Content Marketing: Building an Integrated Strategy',
        description: 'A comprehensive guide to creating valuable content that attracts your audience and achieves your business goals.',
        date: 'April 5, 2026',
        image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Content Marketing',
        pdfFile: '/src/assets/files/influencers.pdf',
    },
    {
        id: 8,
        title: 'Marketing Automation: Efficiency at Scale',
        description: 'How to use automation tools to scale your marketing efforts without increasing resources.',
        date: 'March 28, 2026',
        image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Marketing Automation',
        pdfFile: '/src/assets/files/influencers.pdf',
    },
    {
        id: 9,
        title: 'Measuring Success: KPIs and Measurement Tools',
        description: 'How to define the right KPIs and measure the success of your marketing strategy.',
        date: 'March 20, 2026',
        image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Measurement & Analytics',
        pdfFile: '/src/assets/files/influencers.pdf',
    },
];

/* ── Intersection observer hook ── */
function useVisible(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);

    return { ref, visible };
}

/* ── NewsCard ── */
interface NewsCardProps {
    article: WhitePaper;
    delay?: number;
    onReadMore: (article: WhitePaper) => void;
}

function NewsCard({ article, delay = 0, onReadMore }: NewsCardProps) {
    const { ref, visible } = useVisible();

    return (
        <div
            ref={ref}
            className={`wp-card${visible ? ' wp-card--visible' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="wp-card__image-wrap">
                <img src={article.image} alt={article.title} className="wp-card__image" loading="lazy" />
                <span className="wp-card__category">{article.category}</span>
            </div>
            <div className="wp-card__body">
                <div className="wp-card__date">
                    <CalendarIcon />
                    <span>{article.date}</span>
                </div>
                <h3 className="wp-card__title">{article.title}</h3>
                <p className="wp-card__desc">{article.description}</p>
                <button className="wp-card__btn" onClick={() => onReadMore(article)}>
                    <span>Learn More</span>
                    <ArrowIcon />
                </button>
            </div>
        </div>
    );
}



/* ── Icon helpers ── */
function CalendarIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    );
}



/* ── Main White Paper page ── */
export default function WhitePaper() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [heroVisible, setHeroVisible] = useState(false);
    const featuredRef = useRef<HTMLDivElement>(null);
    const [featuredVisible, setFeaturedVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setHeroVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const el = featuredRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setFeaturedVisible(true); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const handleReadMore = (article: WhitePaper) => {
        window.open(article.pdfFile, '_blank');
    };

    const [featured, ...rest] = whitepaperData;

    return (
        <main className="wp-page">
            {/* Hero */}
            <section className={`wp-hero${heroVisible ? ' wp-hero--visible' : ''}`} ref={heroRef}>
                <div className="wp-hero__overlay" />
                <div className="wp-hero__content">
                    <span className="wp-hero__eyebrow">MFM Marketing</span>
                    <h1 className="wp-hero__title">White Papers</h1>
                    <p className="wp-hero__subtitle">
                        Explore our latest research and comprehensive guides on digital marketing and branding. Valuable insights to develop effective marketing strategies.
                    </p>
                    <div className="wp-hero__divider" />
                </div>
                <div className="wp-hero__shapes">
                    <div className="wp-hero__shape wp-hero__shape--1" />
                    <div className="wp-hero__shape wp-hero__shape--2" />
                    <div className="wp-hero__shape wp-hero__shape--3" />
                </div>
            </section>

            {/* Featured */}
            <section className="wp-section">
                <div className="wp-container">
                    <div className="wp-section-header">
                        <span className="wp-section-header__label">Featured White Paper</span>
                        <h2 className="wp-section-header__title">Latest Research</h2>
                        <div className="wp-section-header__line" />
                    </div>
                    <div ref={featuredRef} className={`wp-featured-card${featuredVisible ? ' wp-featured-card--visible' : ''}`}>
                        <div className="wp-featured-card__image-wrap">
                            <img src={featured.image} alt={featured.title} className="wp-featured-card__image" />
                            <span className="wp-featured-card__category">{featured.category}</span>
                        </div>
                        <div className="wp-featured-card__body">
                            <div className="wp-featured-card__date">
                                <CalendarIcon />
                                <span>{featured.date}</span>
                            </div>
                            <h2 className="wp-featured-card__title">{featured.title}</h2>
                            <p className="wp-featured-card__desc">{featured.description}</p>
                            <div className="wp-featured-card__actions">
                                <button className="wp-btn-primary" onClick={() => handleReadMore(featured)}>
                                    <span>Download White Paper</span>
                                    <ArrowIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="wp-section wp-section--grid">
                <div className="wp-container">
                    <div className="wp-section-header">
                        <span className="wp-section-header__label">All White Papers</span>
                        <h2 className="wp-section-header__title">Research Library</h2>
                        <div className="wp-section-header__line" />
                    </div>
                    <div className="wp-grid">
                        {rest.map((article, i) => (
                            <NewsCard key={article.id} article={article} delay={i * 80} onReadMore={handleReadMore} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
