import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/about.css";

import aboutImage1 from "../assets/images/about/abot1.jpg";
import aboutImage2 from "../assets/images/about/about3.jpg";
import aboutImage3 from "../assets/images/about/about2.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const media = gsap.matchMedia();

            media.add("(prefers-reduced-motion: no-preference)", () => {
                gsap.fromTo(
                    ".home-about-content > *",
                    {
                        y: 30,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                        },
                    }
                );

                gsap.fromTo(
                    ".home-about-image-card",
                    {
                        y: 38,
                        opacity: 0,
                        scale: 0.97,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.75,
                        stagger: 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".home-about-gallery",
                            start: "top 78%",
                        },
                    }
                );
            });

            return () => media.revert();
        }, sectionRef);

        return () => context.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="home-about"
            aria-labelledby="home-about-title"
        >
            <div className="home-about-container">
                <div className="home-about-content">
                    <span className="home-about-kicker">
                        About MFM Egypt
                    </span>

                    <h2
                        id="home-about-title"
                        className="home-about-title"
                    >
                        About Us
                    </h2>

                    <p className="home-about-description">
                        With over 40 years of excellence in marketing facility
                        management, we have established ourselves as a leading
                        integrated marketing communications and public relations
                        firm across Egypt, Qatar, and KSA.
                    </p>

                    <button
                        type="button"
                        className="home-about-button"
                        onClick={() => navigate("/about")}
                    >
                        Learn More
                        <ArrowRight size={18} aria-hidden="true" />
                    </button>
                </div>

                <div
                    className="home-about-gallery"
                    aria-label="MFM projects and activities"
                >
                    <figure className="home-about-image-card home-about-image-card--main">
                        <img
                            src={aboutImage1}
                            alt="MFM marketing activity"
                            className="home-about-image"
                        />

                        <div className="home-about-image-overlay" />

                        <figcaption className="home-about-experience">
                            <strong>40+</strong>
                            <span>Years of experience</span>
                        </figcaption>
                    </figure>

                    <figure className="home-about-image-card">
                        <img
                            src={aboutImage2}
                            alt="MFM event and audience experience"
                            className="home-about-image"
                        />
                    </figure>

                    <figure className="home-about-image-card">
                        <img
                            src={aboutImage3}
                            alt="MFM integrated marketing project"
                            className="home-about-image"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default About;