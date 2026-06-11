import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Newspaper } from 'lucide-react';
import '../styles/newspage.css';
import Footer from '../components/Footer';

import featuredImage from '../assets/images/896a3483-1.png';

// استيراد ملفات PDF
import featuredDoc from '../assets/files/relation.pdf';
import secondaryDoc from '../assets/files/lolaqezma.pdf';

gsap.registerPlugin(ScrollTrigger);

function News() {
    const heroRef = useRef<HTMLDivElement>(null);
    const featuredRef = useRef<HTMLDivElement>(null);
    const secondaryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-title', {
                opacity: 0,
                y: 50,
                duration: 1.2,
                ease: 'power3.out',
            });

            gsap.from('.hero-subtitle', {
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.3,
                ease: 'power3.out',
            });

            gsap.from('.featured-content', {
                scrollTrigger: {
                    trigger: '.featured-news',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 60,
                duration: 1,
                ease: 'power3.out',
            });

            gsap.from('.featured-image-container', {
                scrollTrigger: {
                    trigger: '.featured-news',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                scale: 0.95,
                duration: 1.2,
                ease: 'power3.out',
            });

            gsap.from('.secondary-card', {
                scrollTrigger: {
                    trigger: '.secondary-news',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="news-page">

            {/* HERO */}
            <section className="hero-section" ref={heroRef}>
                <div className="hero-container">
                    <div className="hero-badge">
                        <Newspaper className="badge-icon" />
                        <span>NEWS & UPDATES</span>
                    </div>

                    <h1 className="hero-title">Latest News</h1>

                    <p className="hero-subtitle">
                        Stay updated with the latest developments, achievements, and insights from MFM Marketing
                    </p>
                </div>

                <div className="hero-background"></div>
            </section>

            {/* FEATURED */}
            <section className="featured-news" ref={featuredRef}>
                <div className="featured-container">

                    <div className="featured-badge">Featured Story</div>

                    <div className="featured-layout">

                        <div className="featured-image-container">
                            <img
                                src={featuredImage}
                                alt="featured news"
                                className="featured-image"
                            />
                            <div className="featured-overlay"></div>
                        </div>

                        <div className="featured-content">
                            <div className="featured-meta">
                                <span className="meta-date">March 2024</span>
                                <span className="meta-divider">•</span>
                                <span className="meta-category">Recognition</span>
                            </div>

                            <h2 className="featured-title">
                                In collaboration with experts and academics, MFM Product Marketing launches the first forum for the Public Relations Department.
                            </h2>

                            <div className="featured-text">
                                <p>
                                    MFM Product Marketing announced the launch of its first professional forum, "The Circle of Public Relations."
                                </p>

                                <p>
                                    The event will include mentorship sessions, panel discussions, and networking opportunities.
                                </p>

                                <p>
                                    Industry experts and students will engage in discussions on career development and real-world PR strategies.
                                </p>
                            </div>

                            {/* زرار Learn More لفتح PDF */}
                            <button
                                className="read-more-btn"
                                onClick={() => window.open(featuredDoc, '_blank')}
                            >
                                Learn More
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECONDARY */}
            <section className="secondary-news" ref={secondaryRef}>
                <div className="secondary-container">

                    <div className="secondary-card">

                        <div className="card-header">
                            <div className="card-logo">
                                <Newspaper className="card-logo-icon" />
                            </div>

                            <div className="card-meta">
                                <span className="card-date">March 2024</span>
                                <span className="card-category">Industry Event</span>
                            </div>
                        </div>

                        <h3 className="card-title">
                            For her distinguished career in public relations, the Public Relations Department Forum honors "Lola Zaghlama" at its first session.
                        </h3>

                        <div className="card-content">
                            <p>
                                The Public Relations Forum, organized by MFM Marketing Company, will honor Ms. Hoda Halim Abu Seif, a legend in the field of public relations in Egypt, professionally known as Lola Zaqalma. She is the President and CEO of Rada Research and Public Relations Company and a pioneer in public relations and communication in Egypt, with over fifty years of experience in these fields. Her expertise lies in designing marketing and communication strategies and strategic planning. Shabrawi Khater, Chairman of the Board of Directors of MFM Marketing Company, the forum's organizer, stated that honoring her on the sidelines of the forum is a tribute to her contributions throughout her career in public relations. The forum will host a select group of leading public relations practitioners from various business sectors in Egypt, along with a distinguished group of professors and heads of public relations departments from some of the leading media colleges. Zaqalma has served as a consultant in communication and strategic planning for a number of Egyptian government institutions, including the General Authority for Investment and Free Zones, and the Ministries of Tourism, International Cooperation, and Communications and Information Technology, among others.
                            </p>
                        </div>

                        <div className="card-footer">
                            {/* زرار Learn More لفتح PDF */}
                            <button
                                className="card-btn"
                                onClick={() => window.open(secondaryDoc, '_blank')}
                            >
                                Learn More
                                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                    </div>

                </div>
            </section>
            <Footer />
        </div>
    );
}

export default News;