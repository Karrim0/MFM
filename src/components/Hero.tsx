import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/hero.css';
import Logoo from '../assets/images/لوجو/لوجو.webp';

const Hero = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
        )
            .fromTo(
                paragraphRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
                '-=0.7'
            );

        gsap.to(scrollIndicatorRef.current, {
            y: 12,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });
    }, []);

    const scrollToLatestSection = () => {
        const targetSection = document.getElementById('our-latest');

        if (targetSection) {
            const navbarOffset = 80;
            const top =
                targetSection.getBoundingClientRect().top +
                window.scrollY -
                navbarOffset;

            window.scrollTo({
                top,
                behavior: 'smooth',
            });
        }
    };
    
    return (
        <section className="mfm-hero">
            <video autoPlay muted loop playsInline className="mfm-hero__video">
                <source src="/video/back.mp4" type="video/mp4" />
            </video>
            <div className="mfm-hero__overlay" />

            <div className="mfm-hero__content">
                <div className="img-logo">
                    <img
                        src={Logoo}
                        alt="MFM Logo"
                        className="mfm-hero__logo"
                    />
                </div>
                <h1 ref={titleRef} className="mfm-hero__title">
                    Marketing Facility Management
                </h1>
                <p ref={paragraphRef} className="mfm-hero__subtitle">
                    The company with more than 40 years experience in Egypt, Qatar, and KSA
                    as an integrated marketing communications and public relations firm.
                </p>
            </div>

            <div
                ref={scrollIndicatorRef}
                className="mfm-hero__scroll-indicator"
                onClick={scrollToLatestSection}
            >
                <div className="mfm-hero__scroll-arrow" />
            </div>
        </section>
    );
};

export default Hero;