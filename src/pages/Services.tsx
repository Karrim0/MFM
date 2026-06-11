import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import type { IconType } from "react-icons";
import {
    FaAd,
    FaArrowRight,
    FaAward,
    FaBuilding,
    FaCalendarCheck,
    FaCheckCircle,
    FaClipboardCheck,
    FaConciergeBell,
    FaFilm,
    FaGift,
    FaHandshake,
    FaHashtag,
    FaPenNib,
    FaPrint,
    FaSearch,
    FaSeedling,
    FaStoreAlt,
    FaTools,
    FaUsers,
    FaUsersCog,
    FaVideo,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "../components/Footer";
import "../styles/ServicesPage.css";

import certificate from "../assets/images/RECOGNITION_MFM (1)_page-0001.jpg";
import about1 from "../assets/images/projects/project2.jpeg";
import about2 from "../assets/images/projects/project6.jpeg";
import about3 from "../assets/images/projects/project7.jpeg";
import about4 from "../assets/images/projects/project1.jpeg";

gsap.registerPlugin(ScrollTrigger);

interface Service {
    title: string;
    description: string;
    icon: IconType;
    path?: string;
}

const services: Service[] = [
    {
        title: "Advertising & Rights Sales",
        description: "Commercial strategies that maximize media, advertising and sponsorship assets.",
        icon: FaAd,
    },
    {
        title: "Employee Engagement",
        description: "Internal campaigns that strengthen culture, communication and participation.",
        icon: FaUsersCog,
    },
    {
        title: "Community Programs",
        description: "Local initiatives that build authentic connections with communities.",
        icon: FaSeedling,
    },
    {
        title: "Content Production",
        description: "Creative content planned and produced for the right channels and audiences.",
        icon: FaVideo,
    },
    {
        title: "Corporate Social Responsibility",
        description: "Purpose-led programs that create social value and strengthen reputation.",
        icon: FaHandshake,
    },
    {
        title: "Digital & Social Media",
        description: "Integrated campaigns focused on reach, engagement and measurable growth.",
        icon: FaHashtag,
    },
    {
        title: "Event Management",
        description: "End-to-end event planning, production and audience-experience management.",
        icon: FaCalendarCheck,
    },
    {
        title: "Exhibitions & Retail Display",
        description: "Exhibition stands and retail displays designed for stronger brand visibility.",
        icon: FaStoreAlt,
    },
    {
        title: "Hospitality Services",
        description: "Professional guest management for events, activations and corporate occasions.",
        icon: FaConciergeBell,
    },
    {
        title: "Media Monitoring",
        description: "Real-time tracking, reporting and insights that support smarter decisions.",
        icon: FaSearch,
        path: "/media-monitoring",
    },
    {
        title: "Merchandise & Giveaways",
        description: "Branded promotional products developed for memorable campaigns.",
        icon: FaGift,
    },
    {
        title: "Entertainment Placement",
        description: "Strategic brand placement within entertainment content and experiences.",
        icon: FaFilm,
    },
    {
        title: "Overlay, Fit-out & Showcasing",
        description: "Complete fit-out and showcasing solutions for branded spaces and venues.",
        icon: FaTools,
    },
    {
        title: "Public Relations Writing",
        description: "Clear, credible and audience-focused communication for organizations.",
        icon: FaPenNib,
    },
    {
        title: "Publishing & Printing",
        description: "Professional production of publications and marketing collateral.",
        icon: FaPrint,
    },
    {
        title: "Retail Execution Monitoring",
        description: "On-ground monitoring that protects quality and campaign consistency.",
        icon: FaClipboardCheck,
    },
    {
        title: "Shopping Centres Services",
        description: "Specialized marketing support created for shopping-centre environments.",
        icon: FaBuilding,
    },
    {
        title: "Sponsorship Activation",
        description: "Programs that transform sponsorship rights into audience engagement.",
        icon: FaAward,
    },
    {
        title: "Influencer Marketing",
        description: "Creator-led campaigns built around relevance and measurable performance.",
        icon: FaUsers,
        path: "/influencers-marketing",
    },
];

const ServicesPage: React.FC = () => {
    const pageRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const media = gsap.matchMedia();

        const context = gsap.context(() => {
            media.add("(prefers-reduced-motion: no-preference)", () => {
                gsap
                    .timeline({ defaults: { ease: "power3.out" } })
                    .fromTo(
                        ".services-hero-kicker",
                        { y: 18, autoAlpha: 0 },
                        { y: 0, autoAlpha: 1, duration: 0.55 }
                    )
                    .fromTo(
                        ".services-hero-title",
                        { y: 42, autoAlpha: 0 },
                        { y: 0, autoAlpha: 1, duration: 0.85 },
                        "-=0.25"
                    )
                    .fromTo(
                        ".services-hero-description",
                        { y: 24, autoAlpha: 0 },
                        { y: 0, autoAlpha: 1, duration: 0.7 },
                        "-=0.45"
                    )
                    .fromTo(
                        ".services-hero-actions > *",
                        { y: 18, autoAlpha: 0 },
                        {
                            y: 0,
                            autoAlpha: 1,
                            duration: 0.5,
                            stagger: 0.1,
                        },
                        "-=0.35"
                    );

                gsap.fromTo(
                    ".services-gallery-card",
                    { y: 36, autoAlpha: 0 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.7,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".services-story-section",
                            start: "top 75%",
                        },
                    }
                );

                gsap.fromTo(
                    ".services-story-copy > *",
                    { y: 28, autoAlpha: 0 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.65,
                        stagger: 0.08,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".services-story-copy",
                            start: "top 78%",
                        },
                    }
                );

                gsap.fromTo(
                    ".services-card",
                    { y: 32, autoAlpha: 0 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.55,
                        stagger: 0.045,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".services-grid",
                            start: "top 82%",
                        },
                    }
                );

                gsap.fromTo(
                    ".services-certificate-card",
                    { y: 34, autoAlpha: 0 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".services-certificate-section",
                            start: "top 80%",
                        },
                    }
                );
            });
        }, pageRef);

        return () => {
            media.revert();
            context.revert();
        };
    }, []);

    return (
        <>
            <main className="services-page" ref={pageRef}>
                <section className="services-hero-section">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="services-hero-video"
                        aria-hidden="true"
                    >
                        <source src="/video/back.mp4" type="video/mp4" />
                    </video>

                    <div className="services-hero-overlay" />

                    <div className="services-shell services-hero-content">
                        <span className="services-hero-kicker">MFM Solutions</span>

                        <h1 className="services-hero-title">
                            Marketing solutions built to
                            <span> move brands forward.</span>
                        </h1>

                        <p className="services-hero-description">
                            Strategy, content, media, events and retail experiences —
                            brought together in one integrated marketing partner.
                        </p>

                        <div className="services-hero-actions">
                            <a href="#services" className="services-btn services-btn--primary">
                                Explore services
                                <FaArrowRight aria-hidden="true" />
                            </a>

                            <Link to="/contact" className="services-btn services-btn--secondary">
                                Start a project
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="services-story-section">
                    <div className="services-shell services-story-grid">
                        <div className="services-gallery">
                            <figure className="services-gallery-card services-gallery-card--large">
                                <img src={about1} alt="MFM exhibition and live activation" />
                                <figcaption>Live brand activations</figcaption>
                            </figure>

                            <figure className="services-gallery-card">
                                <img src={about2} alt="MFM conference and event production" />
                            </figure>

                            <figure className="services-gallery-card">
                                <img src={about3} alt="MFM corporate event experience" />
                            </figure>

                            <figure className="services-gallery-card services-gallery-card--wide">
                                <img src={about4} alt="MFM retail and audience engagement project" />
                                <figcaption>Retail experiences</figcaption>
                            </figure>
                        </div>

                        <div className="services-story-copy">
                            <span className="services-section-kicker">What we do</span>

                            <h2>
                                One team from strategy to execution.
                            </h2>

                            <p className="services-story-lead">
                                We help brands connect physical spaces, digital channels
                                and real audiences through clear strategy and reliable
                                execution.
                            </p>

                            <p>
                                Our work supports shopping centres, retailers and
                                organizations with content, campaigns, events, media
                                intelligence and customer experiences that feel
                                consistent at every touchpoint.
                            </p>

                            <ul className="services-story-points">
                                <li>
                                    <FaCheckCircle aria-hidden="true" />
                                    Integrated retail and mall marketing
                                </li>
                                <li>
                                    <FaCheckCircle aria-hidden="true" />
                                    End-to-end content and campaign execution
                                </li>
                                <li>
                                    <FaCheckCircle aria-hidden="true" />
                                    Monitoring, reporting and actionable insights
                                </li>
                            </ul>

                            <div className="services-stats">
                                <div>
                                    <strong>{services.length}</strong>
                                    <span>Specialized services</span>
                                </div>
                                <div>
                                    <strong>360°</strong>
                                    <span>Integrated execution</span>
                                </div>
                                <div>
                                    <strong>1</strong>
                                    <span>Strategic partner</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="services-our-services">
                    <div className="services-shell">
                        <header className="services-section-heading">
                            <span className="services-section-kicker">Our capabilities</span>
                            <h2>Services shaped around your objectives.</h2>
                            <p>
                                Choose one focused service or combine several into a
                                complete marketing solution.
                            </p>
                        </header>

                        <div className="services-grid">
                            {services.map((service, index) => {
                                const Icon = service.icon;

                                const content = (
                                    <>
                                        <div className="services-card-header">
                                            <span className="services-icon-box">
                                                <Icon aria-hidden="true" />
                                            </span>

                                            <span className="services-card-number">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>

                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>

                                        {service.path && (
                                            <span className="services-card-link-label">
                                                View service
                                                <FaArrowRight aria-hidden="true" />
                                            </span>
                                        )}
                                    </>
                                );

                                return service.path ? (
                                    <Link
                                        key={service.title}
                                        to={service.path}
                                        className="services-card services-card--linked"
                                    >
                                        {content}
                                    </Link>
                                ) : (
                                    <article key={service.title} className="services-card">
                                        {content}
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="services-certificate-section">
                    <div className="services-shell">
                        <div className="services-certificate-card">
                            <div className="services-certificate-copy">
                                <span className="services-certificate-icon">
                                    <FaAward aria-hidden="true" />
                                </span>

                                <span className="services-section-kicker">Recognition</span>

                                <h2>Professional work recognized by trusted partners.</h2>

                                <p>
                                    This recognition reflects the consistency, attention
                                    to detail and quality standards behind our campaigns
                                    and client experiences.
                                </p>
                            </div>

                            <a
                                href={certificate}
                                target="_blank"
                                rel="noreferrer"
                                className="services-certificate-image"
                                aria-label="Open MFM recognition certificate"
                            >
                                <img
                                    src={certificate}
                                    alt="MFM company recognition certificate"
                                />
                                <span>View certificate</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default ServicesPage;
