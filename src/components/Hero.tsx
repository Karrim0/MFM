import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import '../styles/hero.css';
import Logoo from '../assets/images/لوجو/لوجو.webp';

const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const scrollIndicatorRef = useRef<HTMLButtonElement>(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const timeline = gsap.timeline({
                defaults: {
                    ease: 'power3.out',
                },
            });

            timeline
                .fromTo(
                    logoRef.current,
                    {
                        opacity: 0,
                        y: 25,
                        scale: 0.94,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.75,
                    }
                )
                .fromTo(
                    titleRef.current,
                    {
                        opacity: 0,
                        y: 50,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.95,
                    },
                    '-=0.4'
                )
                .fromTo(
                    paragraphRef.current,
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.75,
                    },
                    '-=0.5'
                )
                .fromTo(
                    scrollIndicatorRef.current,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 0.55,
                    },
                    '-=0.25'
                );

            gsap.to(scrollIndicatorRef.current, {
                y: 8,
                duration: 1.3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        }, heroRef);

        return () => context.revert();
    }, []);

    const scrollToLatestSection = () => {
        const targetSection = document.getElementById('our-latest');

        if (!targetSection) return;

        const rootStyles = getComputedStyle(document.documentElement);

        const navbarVariable =
            window.innerWidth <= 992
                ? '--mfm-navbar-mobile-height'
                : '--mfm-navbar-height';

        const navbarOffset =
            parseFloat(rootStyles.getPropertyValue(navbarVariable)) || 84;

        const top =
            targetSection.getBoundingClientRect().top +
            window.scrollY -
            navbarOffset;

        window.scrollTo({
            top,
            behavior: 'smooth',
        });
    };

    return (
        <section ref={heroRef} className="mfm-hero">
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="mfm-hero__video"
                aria-hidden="true"
            >
                <source src="/video/back.mp4" type="video/mp4" />
            </video>

            <div className="mfm-hero__overlay" />
            <div className="mfm-hero__texture" aria-hidden="true" />

            <div className="mfm-hero__content">
                <div ref={logoRef} className="mfm-hero__logo-wrapper">
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

            <button
                ref={scrollIndicatorRef}
                type="button"
                className="mfm-hero__scroll-indicator"
                onClick={scrollToLatestSection}
                aria-label="Scroll to our latest work"
            >
                <span className="mfm-hero__scroll-arrow" />
            </button>
        </section>
    );
};

export default Hero;