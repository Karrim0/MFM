import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/about.css";

import aboutImage1 from "../assets/images/about/abot1.jpg";
import aboutImage2 from "../assets/images/about/about33.png";
import aboutImage3 from "../assets/images/about/about2.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const sideOffset = window.innerWidth <= 768 ? 28 : 70;

        /* ================= TEXT FROM LEFT ================= */

        gsap.fromTo(
          ".home-about-content",
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

        /* ================= IMAGES FROM RIGHT ================= */

        gsap.fromTo(
          ".home-about-image-card",
          {
            x: sideOffset,
            autoAlpha: 0,
            scale: 0.985,
          },
          {
            x: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 1.75,
            stagger: 0.18,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".home-about-gallery",
              start: "top 82%",
              once: true,
            },
          },
        );
        /* ================= EXPERIENCE COUNTER ================= */

        if (countRef.current) {
          gsap.fromTo(
            countRef.current,
            {
              innerText: 0,
            },
            {
              innerText: 40,
              duration: 2.5,
              ease: "power1.out",
              snap: {
                innerText: 1,
              },
              scrollTrigger: {
                trigger: ".home-about-experience",
                start: "top 88%",
                once: true,
              },
            },
          );
        }
      });
    }, sectionRef);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-about"
      aria-labelledby="home-about-title"
    >
      <div className="home-about-container">
        <div className="home-about-content">
          <span className="home-about-kicker">About MFM Egypt</span>

          <h2 id="home-about-title" className="home-about-title">
            About Us
          </h2>

          <p className="home-about-description">
            With over 40 years of excellence in marketing facility management,
            we have established ourselves as a leading integrated marketing
            communications and public relations firm across Egypt, Qatar, and
            KSA.
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
              <strong>
                +<span ref={countRef}>40</span>
              </strong>
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
