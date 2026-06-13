import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import latestImage from "../assets/images/896a3483-1.png";
import "../styles/ourlatest.css";

gsap.registerPlugin(ScrollTrigger);

const LatestSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const sideOffset = window.innerWidth <= 768 ? 28 : 70;

        gsap.fromTo(
          imageRef.current,
          {
            x: -sideOffset,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 1.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          contentRef.current,
          {
            x: sideOffset,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 1.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              once: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section
      id="our-latest"
      ref={sectionRef}
      className="home-latest"
      aria-labelledby="home-latest-title"
    >
      <div className="home-latest-background" aria-hidden="true" />

      <div className="home-latest-container">
        <div ref={imageRef} className="home-latest-image-card">
          <div className="home-latest-image-inner">
            <img
              src={latestImage}
              alt="Latest Work"
              className="home-latest-image"
            />
          </div>
        </div>

        <div ref={contentRef} className="home-latest-content">
          <h2 id="home-latest-title" className="home-latest-title">
            OUR
            <span>LATEST</span>
          </h2>

          <p className="home-latest-description">
            Discover our most recent creative work where innovation meets
            precision. We craft digital experiences that elevate brands, engage
            audiences, and deliver measurable impact. Every detail is designed
            with purpose and executed with excellence.
          </p>

          <button
            type="button"
            className="home-latest-button"
            onClick={() => navigate("/events")}
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestSection;
