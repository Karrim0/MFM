import { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/about.css';

// ✅ Import images from local assets
import aboutImage1 from '../assets/images/about/abot1.jpg';
import aboutImage2 from '../assets/images/about/about3.jpg';
import aboutImage3 from '../assets/images/about/about2.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const navigate = useNavigate(); // ✅ مهم

    const textRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse',
                },
            });

            tl.fromTo(
                titleRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
            );

            tl.fromTo(
                textRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
                '-=0.4'
            );

            gsap.fromTo(
                '.about-image-wrapper',
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: imagesRef.current,
                        start: 'top center+=100',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="about">
            <div className="about-container">

                {/* Text Section */}
                <div ref={textRef} className="about-text">
                    <h2 ref={titleRef} className="about-title">About Us</h2>

                    <p className="about-description">
                        With over 40 years of excellence in marketing facility management,
                        we have established ourselves as a leading integrated marketing
                        communications and public relations firm across Egypt, Qatar,
                        and KSA.
                    </p>

                    <p className="about-description">
                        With over 40 years of excellence in marketing facility management,
                        we have established ourselves as a leading integrated marketing
                        communications and public relations firm across Egypt, Qatar,
                        and KSA.
                    </p>

                    <button
                        className="about-button"
                        onClick={() => navigate("/about")}
                    >
                        Learn More
                    </button>
                </div>

                {/* Images Section */}
                <div ref={imagesRef} className="about-images">

                    <div className="about-image-wrapper">
                        <img
                            src={aboutImage1}
                            alt="About Us 1"
                            className="about-image"
                        />
                    </div>

                    <div className="about-image-wrapper">
                        <img
                            src={aboutImage2}
                            alt="About Us 2"
                            className="about-image"
                        />
                    </div>

                    <div className="about-image-wrapper">
                        <img
                            src={aboutImage3}
                            alt="About Us 3"
                            className="about-image"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;