import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Home,
    Info,
    BriefcaseBusiness,
    CalendarDays,
    Newspaper,
    FileText,
    Monitor,
    UsersRound,
    Phone
} from 'lucide-react';

import '../styles/footer.css';
import logo from '../assets/images/لوجو/لوجو2.webp';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const footer = footerRef.current;

        if (!footer) return;

        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: footer,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });

            timeline
                .fromTo(
                    '.mfm-footer-brand',
                    {
                        y: -50,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: 'power3.out'
                    }
                )
                .fromTo(
                    '.mfm-footer-column',
                    {
                        y: 40,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        stagger: 0.12,
                        ease: 'power3.out'
                    },
                    '-=0.45'
                )
                .fromTo(
                    '.mfm-social-link',
                    {
                        y: 25,
                        opacity: 0,
                        scale: 0.85
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        stagger: 0.08,
                        ease: 'back.out(1.7)'
                    },
                    '-=0.35'
                )
                .fromTo(
                    '.mfm-footer-bottom',
                    {
                        y: 15,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: 'power2.out'
                    },
                    '-=0.25'
                );
        }, footer);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="mfm-footer">
            <section className="mfm-footer-brand">
                <div className="mfm-footer-logo-wrapper">
                    <img
                        src={logo}
                        alt="Marketing Facility Management Logo"
                        className="mfm-footer-logo"
                    />
                </div>

                <h2 className="mfm-footer-brand-title">
                    Marketing Facility Management
                </h2>

                <p className="mfm-footer-brand-description">
                    We create powerful marketing strategies, meaningful connections
                    and measurable business results.
                </p>
            </section>

            <div className="mfm-footer-container">
                <div className="mfm-footer-grid">
                    <div className="mfm-footer-column">
                        <h3 className="mfm-footer-title">MFM</h3>

                        <p className="mfm-footer-description">
                            A specialized marketing facility management company
                            providing creative, strategic and media solutions that
                            help brands grow and connect with their audiences.
                        </p>
                    </div>

                    <div className="mfm-footer-column">
                        <h4 className="mfm-footer-heading">Quick Links</h4>

                        <ul className="mfm-footer-links">
                            <li>
                                <Link to="/" className="mfm-footer-link">
                                    <Home size={18} />
                                    <span>Home</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/about" className="mfm-footer-link">
                                    <Info size={18} />
                                    <span>About Us</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/services" className="mfm-footer-link">
                                    <BriefcaseBusiness size={18} />
                                    <span>Our Services</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" className="mfm-footer-link">
                                    <Mail size={18} />
                                    <span>Contact Us</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mfm-footer-column">
                        <h4 className="mfm-footer-heading">Explore</h4>

                        <ul className="mfm-footer-links">
                            <li>
                                <Link to="/events" className="mfm-footer-link">
                                    <CalendarDays size={18} />
                                    <span>Events</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/news" className="mfm-footer-link">
                                    <Newspaper size={18} />
                                    <span>News</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/white-paper" className="mfm-footer-link">
                                    <FileText size={18} />
                                    <span>White Paper</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mfm-footer-column">
                        <h4 className="mfm-footer-heading">
                            Marketing Solutions
                        </h4>

                        <ul className="mfm-footer-links">
                            <li>
                                <Link
                                    to="/media-monitoring"
                                    className="mfm-footer-link"
                                >
                                    <Monitor size={18} />
                                    <span>Media Monitoring</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/influencers-marketing"
                                    className="mfm-footer-link"
                                >
                                    <UsersRound size={18} />
                                    <span>Influencers Marketing</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" className="mfm-footer-link">
                                    <Phone size={18} />
                                    <span>Get in Touch</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mfm-footer-socials">
                    <a
                        href="#"
                        className="mfm-social-link"
                        aria-label="Facebook"
                    >
                        <Facebook size={22} />
                    </a>

                    <a
                        href="#"
                        className="mfm-social-link"
                        aria-label="Twitter"
                    >
                        <Twitter size={22} />
                    </a>

                    <a
                        href="#"
                        className="mfm-social-link"
                        aria-label="Instagram"
                    >
                        <Instagram size={22} />
                    </a>

                    <a
                        href="#"
                        className="mfm-social-link"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={22} />
                    </a>

                    <Link
                        to="/contact"
                        className="mfm-social-link"
                        aria-label="Contact"
                    >
                        <Mail size={22} />
                    </Link>
                </div>

                <div className="mfm-footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Marketing Facility Management.
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;