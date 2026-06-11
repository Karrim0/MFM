import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/aboutpage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import img from "../assets/images/about/about3.jpg";

import g1 from "../assets/images/projects/project2.jpeg";
import g2 from "../assets/images/projects/project1.jpeg";
import g3 from "../assets/images/projects/project3.jpeg";
import g5 from "../assets/images/projects/project 9.jpeg";
import g6 from "../assets/images/projects/project6.jpeg";
import g7 from "../assets/images/projects/project7.jpeg";
import g8 from "../assets/images/projects/project8.jpeg";

import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const countRef = useRef<HTMLSpanElement>(null);
    const mainMediaRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    const [activeIndex, setActiveIndex] = useState(0);

    // 🔥 gallery (images + videos)
    const galleryItems = [
        { type: "image", src: g1 },
        { type: "image", src: g2 },
        { type: "video", src: "/video/project4.mp4" },
        { type: "image", src: g3 },
        { type: "video", src: "/video/project5.mp4" },
        { type: "image", src: g5 },
        { type: "image", src: g6 },
        { type: "image", src: g7 },
        { type: "image", src: g8 },
    ];

    const changeSlide = (index: number) => {
        if (!mainMediaRef.current) return;

        gsap.to(mainMediaRef.current, {
            opacity: 0,
            scale: 1.05,
            duration: 0.4,
            onComplete: () => {
                setActiveIndex(index);

                gsap.fromTo(
                    mainMediaRef.current,
                    { opacity: 0, scale: 1.1 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: "power3.out",
                    }
                );
            },
        });
    };

    const nextSlide = () => {
        const newIndex =
            activeIndex === galleryItems.length - 1 ? 0 : activeIndex + 1;
        changeSlide(newIndex);
    };

    const prevSlide = () => {
        const newIndex =
            activeIndex === 0 ? galleryItems.length - 1 : activeIndex - 1;
        changeSlide(newIndex);
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // HERO
            gsap.from(".about-hero-title", {
                y: -80,
                opacity: 0,
                duration: 1.2,
            });

            gsap.from(".about-hero-text p", {
                y: 40,
                opacity: 0,
                stagger: 0.3,
                duration: 1,
            });

            gsap.to(".about-hero-video", {
                y: 100,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // SECTION 2
            if (section2Ref.current) {
                const images = section2Ref.current.querySelectorAll(".about-image-box");
                const textItems =
                    section2Ref.current.querySelectorAll(".about-text-content > *");

                gsap.from(images, {
                    x: -100,
                    opacity: 0,
                    stagger: 0.3,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section2Ref.current,
                        start: "top 80%",
                    },
                });

                gsap.from(textItems, {
                    x: 100,
                    opacity: 0,
                    stagger: 0.3,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section2Ref.current,
                        start: "top 80%",
                    },
                });
            }

            // SECTION 3
            if (section3Ref.current) {
                const experienceBox =
                    section3Ref.current.querySelector(".about-experience-box");

                const experienceText =
                    section3Ref.current.querySelectorAll(".about-experience-text > *");

                if (experienceBox) {
                    gsap.from(experienceBox, {
                        scale: 0.8,
                        opacity: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: section3Ref.current,
                            start: "top 80%",
                        },
                    });
                }

                gsap.fromTo(
                    experienceText,
                    { x: 80, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        stagger: 0.3,
                        duration: 1,
                        scrollTrigger: {
                            trigger: section3Ref.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            if (countRef.current) {
                gsap.fromTo(
                    countRef.current,
                    { innerText: 0 },
                    {
                        innerText: 40,
                        duration: 2,
                        snap: { innerText: 1 },
                        scrollTrigger: {
                            trigger: section3Ref.current,
                            start: "top 80%",
                        },
                    }
                );
            }

            // SECTION 4 thumbnails animation
            if (projectsRef.current) {
                const thumbs =
                    projectsRef.current.querySelectorAll(".about-thumb");

                gsap.fromTo(
                    thumbs,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: projectsRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // stop videos when slide changes
    useLayoutEffect(() => {
        if (!projectsRef.current) return;

        const videos = projectsRef.current.querySelectorAll("video");

        videos.forEach((video) => {
            video.pause();
            video.currentTime = 0;
        });
    }, [activeIndex]);
    return (
        <div className="about-page" ref={containerRef}>
            <Navbar />

            {/* HERO */}
            <section className="about-hero" ref={heroRef}>
                <video autoPlay muted loop playsInline className="about-hero-video">
                    <source src="/video/back.mp4" type="video/mp4" />
                </video>
                <div className="about-overlay" />
                <div className="about-hero-content">
                    <h1 className="about-hero-title">
                        mfm-Egypt <br />
                        <span>(Marketing Facility Management)</span>
                    </h1>
                    <div className="about-hero-text">
                        <p>
                            the company with more than 40 years’ experience in Egypt, Qatar, UAE, and KSA as an Integrated marketing communications and Public Relations firm. We have an enviable list of clients across many sectors, all with one thing in common – the desire to maximize their returns through relevant, engaging, results-driven marketing. Our aim is simple: to win trust and business with original ideas that excite and engage through Business, Sports, Entertainment, and CSR initiatives.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 2 */}
            <section className="about-section-two" ref={section2Ref}>
                <div className="about-imagess">
                    <div className="about-image-box">
                        <img src={img} alt="" />
                    </div>
                </div>

                <div className="about-text-content">
                    <h2>Marketing Facility Management</h2>
                    <h3>
                        We believe that we live in a real-time world, which demands
                        real-time agencies.
                    </h3>
                    <br />
                    <p>In today’s world, change is constant and complexity is ever-growing. Organizations need communications partners to provide senior counsel and data-driven solutions to protect their brands and drive business results. mfm agency SAVE model was created to do just that.</p>
                    <br />
                    <h3>
                        Our Approach
                    </h3>
                    <br />
                    <p>Our approach is based on The SAVE model which is a marketing framework that focuses on providing solutions to customers and stakeholders, making products and services accessible, demonstrating value, and educating all stakeholders. It is a more customer-centric approach to marketing public relations than the traditional 4Ps (product, price, place, and promotion).</p>
                </div>
            </section>

            {/* SECTION 3 */}
            <section className="about-section-three" ref={section3Ref}>
                <div className="about-experience-box">
                    <h1>
                        +<span ref={countRef}>0</span>
                    </h1>
                    <p>Years of Experience</p>
                </div>

                <div className="about-experience-text">
                    <span>Why Choose Us?</span>
                    <h2>Focus On Getting Our Jobs Done Quickly</h2>
                    <p>By prioritizing solutions, ensuring accessibility, emphasizing value, and leading with education, your business can cultivate deeper, more meaningful relationships with your clients and position themselves as indispensable partners rather than just vendors.</p>
                    <br />
                    <p>MFM-Egypt helps Egypt’s Businesses develop tailored marketing communications solutions to drive success in national and international markets. Call us today to learn more.</p>
                    <button
                        className="buttonn"
                        onClick={() => navigate("/contact")}
                    >
                        Call Us
                    </button>
                </div>
            </section>

            {/* SECTION 4 */}
            <section className="about-projects-section" ref={projectsRef}>
                <h2 className="about-projects-title">Our Projects</h2>

                <div className="about-main-slider">
                    <button className="about-nav left" onClick={prevSlide}>‹</button>

                    <div className="about-main-media" ref={mainMediaRef}>
                        {galleryItems[activeIndex].type === "image" ? (
                            <img
                                src={galleryItems[activeIndex].src}
                                className="about-main-image"
                                alt=""
                            />
                        ) : (
                            <video
                                src={galleryItems[activeIndex].src}
                                className="about-main-image"
                                autoPlay
                                muted
                                loop
                                controls
                            />
                        )}
                    </div>

                    <button className="about-nav right" onClick={nextSlide}>›</button>
                </div>

                <div className="about-thumbnail-row">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className={`about-thumb ${index === activeIndex ? "active" : ""}`}
                            onClick={() => changeSlide(index)}
                        >
                            {item.type === "image" ? (
                                <img src={item.src} alt="" />
                            ) : (
                                <video src={item.src} muted />
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;