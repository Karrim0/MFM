import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/ServicesPage.css";
import Footer from "../components/Footer";

import certificate from "../assets/images/RECOGNITION_MFM (1)_page-0001.jpg"; // عدّل المسار حسب مكان الصورة عندك

import about1 from "../assets/images/projects/project2.jpeg";
import about2 from "../assets/images/projects/project6.jpeg";
import about3 from "../assets/images/projects/project7.jpeg";
import about4 from "../assets/images/projects/project1.jpeg";


import {
    FaAd,
    FaHandshake,
    FaUsersCog,
    FaSeedling,
    FaVideo,
    FaHashtag,
    FaCalendarCheck,
    FaStoreAlt,
    FaConciergeBell,
    FaSearch,
    FaGift,
    FaFilm,
    FaTools,
    FaPenNib,
    FaPrint,
    FaClipboardCheck,
    FaBuilding,
    FaAward,
    FaUsers,
} from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Service {
    title: string;
    icon: React.ReactNode;
    path?: string;
}

const services: Service[] = [
    { title: "Advertising & Rights sales", icon: <FaAd /> },
    { title: "Business Unit & Employee Engagement", icon: <FaUsersCog /> },
    { title: "Community & Grassroots Programs", icon: <FaSeedling /> },
    { title: "Content Production & Distribution", icon: <FaVideo /> },
    { title: "CSR", icon: <FaHandshake /> },
    { title: "Digital Marketing & Social Media", icon: <FaHashtag /> },
    { title: "Event Creation, Management", icon: <FaCalendarCheck /> },
    { title: "Exhibitions & Retail Display", icon: <FaStoreAlt /> },
    { title: "Hospitality Services", icon: <FaConciergeBell /> },
    {
        title: "Media Monitoring Service",
        icon: <FaSearch />,
        path: "/media-monitoring",
    },
    { title: "Merchandise and Giveaways", icon: <FaGift /> },
    { title: "MOVIE and Entertainment Placement", icon: <FaFilm /> },
    { title: "Overlay, Fit out & showcasing", icon: <FaTools /> },
    { title: "Public Relations Writing", icon: <FaPenNib /> },
    { title: "Publishing and Printing production", icon: <FaPrint /> },
    { title: "Retail Executions Monitoring", icon: <FaClipboardCheck /> },
    { title: "Shopping centres Service", icon: <FaBuilding /> },
    { title: "Sponsorship Activation & Rights Management", icon: <FaAward /> },
    {
        title: "Influencers Marketing Campaigns",
        icon: <FaUsers />,
        path: "/influencers-marketing"
    },
];

const ServicesPage: React.FC = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            /* ================= HERO ================= */

            const heroTl = gsap.timeline();

            heroTl
                .fromTo(
                    ".services-hero-content h1",
                    { y: 80, scale: 0.95, autoAlpha: 0 },
                    { y: 0, scale: 1, autoAlpha: 1, duration: 1.4, ease: "expo.out" }
                )
                .fromTo(
                    ".services-hero-content p",
                    { y: 40, autoAlpha: 0 },
                    { y: 0, autoAlpha: 1, duration: 1.2, ease: "power2.out" },
                    "-=0.8"
                );

            /* ================= SECTION 2 ================= */

            const sectionTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".services-content-section",
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
            });

            sectionTl.fromTo(
                ".services-image-grid",
                { x: -120, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 1.4, ease: "power3.out" }
            );

            sectionTl.fromTo(
                ".services-text-content",
                { x: 120, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 1.4, ease: "power3.out" },
                "-=1.1"
            );

        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="services-page" ref={pageRef}>

                {/* HERO */}
                <section className="services-hero-section">
                    <video autoPlay muted loop playsInline className="services-hero-video">
                        <source src="/video/back.mp4" type="video/mp4" />
                    </video>

                    <div className="services-overlay" />

                    <div className="services-hero-content">
                        <h1>Services</h1>
                        <p>
                            We are part of the Digital Marketing industry, our target market are the consumers inside the Egyptian territory, and our primary service line is showcasing the virtual side of the Egyptian shopping malls and Street markets in an interaction and integrated way.
                            Important characteristics of this platform is to facilitate the information and news to the shopping malls’ customers and visitors before and during their engagement with the malls.

                        </p>
                    </div>
                </section>

                {/* CONTENT */}
                <section className="services-content-section">
                    <div className="services-content-grid">
                        <div className="services-image-grid">
                            <img src={about1} alt="" />
                            <img src={about2} alt="" />
                            <img src={about3} alt="" />
                            <img src={about4} alt="" />
                        </div>

                        <div className="services-text-content">
                            <h2>Writing remains the key to public relations</h2>
                            <p className="services-intro">
                                The Shopping Centers and retail industry in Egypt has expanded rapidly in the past several years and growth is expected to continue at a strong pace for the foreseeable future. This offers excellent opportunities for new business ideas to enter this market. So, we intend to address the needs of retail customers in this market who seek to reach out and create an awareness with their targeted audiences. And we will address this need by providing an All-in-One Digital Platform, will name it MSJ (Mall’s Street Journal)
                                <br /> <br />
                                The mission of our new business is to produce services that deliver superior value, offer outstanding real-time information, provide highly personalized shopping solutions, specifically designed and individually tailored for the needs of each customer, for a specific market niche.
                                And to build a brand name franchise, that will lead their markets, as the most innovative in the marketing and retail shopping industry.
                                <br /> <br />
                                We intend to fulfill this mission by giving extra effort to Customer Service, Direct Sales, Content production and Management, research, superior workmanship, customer satisfaction, and addressing customer needs (Mall Management, Retail Sector, and Shoppers)
                            </p>
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="services-our-services">
                    <h2 className="services-sectionservices-title">Our Services</h2>
                    <div className="services-grid">
                        {services.map((service, index) =>
                            service.path ? (
                                <Link
                                    key={index}
                                    to={service.path}
                                    className="services-card"
                                >
                                    <div className="services-icon-circle">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                </Link>
                            ) : (
                                <div key={index} className="services-card">
                                    <div className="services-icon-circle">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                </div>
                            )
                        )}
                    </div>
                </section>

                {/* CENTER VIDEO */}
                <section className="services-certificate-section">
                    <div className="services-certificate-wrapper">
                        <img src={certificate} alt="Company Certificate" />
                    </div>
                </section>

            </div>

            <Footer />
        </>
    );
};

export default ServicesPage;

