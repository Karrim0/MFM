import { useRef, useEffect, useState } from "react"; import "../styles/events.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

const heroVideo = "/video/back.mp4";

import mainLogo from "../assets/images/896a3483-1.png";
import featuredLogo from "../assets/images/896a3483-1.png";
import eventImage from "../assets/images/WhatsApp Image 2026-02-18 at 15.52.46.jpeg";

gsap.registerPlugin(ScrollTrigger);

interface EventType {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    image?: string;
    logo?: string;
}

// =================== COUNTDOWN COMPONENT ===================
const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = new Date(targetDate).getTime() - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(distance / (10000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="countdown-timer">
            <span>{timeLeft.days}d :</span>
            <span>{timeLeft.hours}h :</span>
            <span>{timeLeft.minutes}m :</span>
            <span>{timeLeft.seconds}s</span>
        </div>
    );
};

// =================== MAIN EVENTS PAGE ===================
const EventsPage = () => {
    const heroTitleRef = useRef<HTMLHeadingElement>(null);
    const heroSubRef = useRef<HTMLParagraphElement>(null);
    const featuredRef = useRef<HTMLDivElement>(null);
    const secondaryRef = useRef<HTMLDivElement>(null);

    const featuredEvent: EventType = {
        id: 1,
        title: "Innovation Event 2026",
        description:
            "Join us for the upcoming Innovation Event 2026, a gathering that celebrates cutting-edge creativity, groundbreaking technologies, and strategic marketing insights. This event will host industry leaders, innovators, and professionals from around the globe, providing an unmatched platform for networking, knowledge exchange, and collaboration. Participants will explore key topics ranging from AI-driven marketing strategies to sustainable business practices, and gain insights into the latest trends shaping the future of communication and branding. Don't miss this opportunity to engage with thought leaders, witness live demonstrations, and discover opportunities that will elevate your business strategy and personal growth. The event will feature keynote speeches, panel discussions, interactive workshops, and exclusive networking sessions designed to inspire, inform, and empower all attendees.",
        date: "2026-05-10",
        location: "Cairo, Egypt",
        logo: featuredLogo,
    };

    const secondaryEvent: EventType = {
        id: 2,
        title: "Media Summit 2026",
        description:
            "Experience the Media Summit 2026, connecting marketing, media, and communication professionals across MENA. Learn from industry pioneers, explore innovative case studies, and gain practical insights to transform your organization's marketing strategy. Workshops, networking lounges, and keynote sessions are tailored to empower professionals with actionable knowledge. Whether you're seeking inspiration, partnership opportunities, or new skillsets, the Media Summit is your destination for excellence in communication.",
        date: "8th April 2026",
        location: "Civic education center, Al Geezira",
        image: eventImage,
        logo: mainLogo,
    };

    // GSAP Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // HERO TITLES
            if (heroTitleRef.current) {
                gsap.from(heroTitleRef.current, {
                    x: 100,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out",
                });
            }

            if (heroSubRef.current) {
                gsap.from(heroSubRef.current, {
                    x: 100,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: 0.3,
                });
            }

            // FEATURED EVENT
            if (featuredRef.current) {
                gsap.from(featuredRef.current.children, {
                    scrollTrigger: {
                        trigger: featuredRef.current,
                        start: "top 80%",
                    },
                    x: 100,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                });
            }

            // SECONDARY EVENT
            if (secondaryRef.current) {
                gsap.from(secondaryRef.current.children, {
                    scrollTrigger: {
                        trigger: secondaryRef.current,
                        start: "top 80%",
                    },
                    x: 100,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                });
            }
        });

        return () => ctx.revert();
    }, []);

    const scrollToEvents = () => {
        featuredRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="events-page-wrapper">
            {/* HERO SECTION */}
            <section className="events-hero-section">
                <video autoPlay muted loop playsInline className="events-hero-video">
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="events-hero-overlay" />

                <div className="events-hero-content">
                    <img src={mainLogo} alt="Logo" className="events-hero-logo" />
                    <h1 ref={heroTitleRef} className="events-hero-title">
                        Upcoming Events
                    </h1>
                    <p ref={heroSubRef} className="events-hero-subtitle">
                        Explore our latest events, bringing together industry leaders, innovation,
                        and unmatched networking opportunities across MENA.
                    </p>

                    {/* ================= COUNTDOWN TIMER ================= */}
                    <CountdownTimer targetDate="2026-05-10T09:00:00" />

                    <button className="events-hero-scroll-btn" onClick={scrollToEvents}>
                        Discover Events
                    </button>
                </div>
            </section>

            {/* FEATURED EVENT */}
            <section ref={featuredRef} className="events-featured-section">
                <div className="events-featured-logo">
                    <img src={featuredEvent.logo} alt="Featured Logo" />
                </div>
                <div className="events-featured-text">
                    <h2>{featuredEvent.title}</h2>
                    <p>{featuredEvent.description}</p>
                    <p className="events-event-meta">
                        <strong>Date:</strong> {featuredEvent.date} <br />
                        <strong>Location:</strong> {featuredEvent.location}
                    </p>
                    <a
                        href="https://www.prcircle.shop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="events-mojo-btn"
                    >
                        Learn more
                    </a>
                </div>
            </section>

            {/* SECONDARY EVENT */}
            <section ref={secondaryRef} className="events-secondary-section">
                <div className="events-secondary-text">
                    <h3>{secondaryEvent.title}</h3>
                    <p>{secondaryEvent.description}</p>
                    <p className="events-event-meta">
                        <strong>Date:</strong> {secondaryEvent.date} <br />
                        <strong>Location:</strong> {secondaryEvent.location}
                    </p>
                </div>
                <img src={secondaryEvent.image} alt={secondaryEvent.title} />
            </section>

            {/* FOOTER */}
            <Footer />
        </div>
    );
};

export default EventsPage;