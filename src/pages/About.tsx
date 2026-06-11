import { useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "../components/Footer";
import "../styles/aboutpage.css";

import aboutImage from "../assets/images/about/about3.jpg";
import project1 from "../assets/images/projects/project2.jpeg";
import project2 from "../assets/images/projects/project1.jpeg";
import project3 from "../assets/images/projects/project3.jpeg";
import project5 from "../assets/images/projects/project 9.jpeg";
import project6 from "../assets/images/projects/project6.jpeg";
import project7 from "../assets/images/projects/project7.jpeg";
import project8 from "../assets/images/projects/project8.jpeg";

gsap.registerPlugin(ScrollTrigger);

type GalleryItem = {
  type: "image" | "video";
  src: string;
  title: string;
};

const galleryItems: GalleryItem[] = [
  { type: "image", src: project1, title: "Brand activation" },
  { type: "image", src: project2, title: "Retail experience" },
  { type: "video", src: "/video/project4.mp4", title: "Campaign production" },
  { type: "image", src: project3, title: "Live event" },
  { type: "video", src: "/video/project5.mp4", title: "Creative execution" },
  { type: "image", src: project5, title: "Audience engagement" },
  { type: "image", src: project6, title: "Exhibition experience" },
  { type: "image", src: project7, title: "Corporate event" },
  { type: "image", src: project8, title: "Integrated campaign" },
];

const About = () => {
  const pageRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const mainMediaRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const changeSlide = (nextIndex: number) => {
    const mediaElement = mainMediaRef.current;

    if (!mediaElement || nextIndex === activeIndex) return;

    gsap.killTweensOf(mediaElement);

    gsap.to(mediaElement, {
      autoAlpha: 0,
      y: 12,
      duration: 0.22,
      ease: "power2.in",
      onComplete: () => {
        setActiveIndex(nextIndex);

        requestAnimationFrame(() => {
          const updatedMediaElement = mainMediaRef.current;
          if (!updatedMediaElement) return;

          gsap.fromTo(
            updatedMediaElement,
            { autoAlpha: 0, y: 12 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.42,
              ease: "power3.out",
            },
          );
        });
      },
    });
  };

  const nextSlide = () => {
    changeSlide((activeIndex + 1) % galleryItems.length);
  };

  const previousSlide = () => {
    changeSlide(activeIndex === 0 ? galleryItems.length - 1 : activeIndex - 1);
  };

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo(
            ".about-hero-title",
            { y: 40, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.82 },
          )
          .fromTo(
            ".about-hero-copy > *",
            { y: 22, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.58,
              stagger: 0.1,
            },
            "-=0.4",
          );

        gsap.to(".about-hero-video", {
          yPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        gsap.fromTo(
          ".about-story-media",
          { x: -46, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".about-story-section",
              start: "top 76%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".about-story-content > *",
          { y: 26, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.62,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".about-story-content",
              start: "top 78%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".about-experience-card",
          { scale: 0.95, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.72,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".about-experience-section",
              start: "top 79%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".about-experience-content > *",
          { y: 24, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".about-experience-content",
              start: "top 79%",
              once: true,
            },
          },
        );

        if (countRef.current) {
          gsap.fromTo(
            countRef.current,
            { innerText: 0 },
            {
              innerText: 40,
              duration: 1.7,
              snap: { innerText: 1 },
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".about-experience-section",
                start: "top 80%",
                once: true,
              },
            },
          );
        }

        gsap.fromTo(
          ".about-projects-shell",
          { y: 34, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.78,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".about-projects-section",
              start: "top 80%",
              once: true,
            },
          },
        );
      });
    }, pageRef);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  useLayoutEffect(() => {
    const thumbnailVideos = pageRef.current?.querySelectorAll<HTMLVideoElement>(
      ".about-thumbnail-row video",
    );

    thumbnailVideos?.forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });

    const activeVideo =
      mainMediaRef.current?.querySelector<HTMLVideoElement>("video");

    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => undefined);
    }
  }, [activeIndex]);

  const activeItem = galleryItems[activeIndex];

  return (
    <>
      <main className="about-page" ref={pageRef}>
        <section className="about-hero" ref={heroRef}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="about-hero-video"
            aria-hidden="true"
          >
            <source src="/video/back.mp4" type="video/mp4" />
          </video>

          <div className="about-hero-overlay" />

          <div className="about-shell about-hero-layout">
            <div className="about-hero-content">
              <h1 className="about-hero-title">
                <span className="about-hero-brand">mfm-Egypt</span>

                <span className="about-hero-company">
                  Marketing Facility Management
                </span>
              </h1>

              <div className="about-hero-copy">
                <p className="about-hero-description">
                  the company with more than 40 years’ experience in Egypt,
                  Qatar, UAE, and KSA as an Integrated marketing communications
                  and Public Relations firm.
                </p>

                <p className="about-hero-description">
                  We have an enviable list of clients across many sectors, all
                  with one thing in common – the desire to maximize their
                  returns through relevant, engaging, results-driven marketing.
                </p>

                <p className="about-hero-description">
                  Our aim is simple: to win trust and business with original
                  ideas that excite and engage through Business, Sports,
                  Entertainment, and CSR initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="our-story" className="about-story-section">
          <div className="about-shell about-story-grid">
            <div className="about-story-media">
              <div className="about-story-image-wrap">
                <img src={aboutImage} alt="MFM SAVE marketing model" />
              </div>
            </div>

            <div className="about-story-content">
              <span className="about-story-line" aria-hidden="true" />

              <h2>Marketing Facility Management</h2>

              <p className="about-story-lead">
                We believe that we live in a real-time world, which demands
                real-time agencies.
              </p>

              <p>
                In today&apos;s world, change is constant and complexity is
                ever-growing. Organizations need communications partners to
                provide senior counsel and data-driven solutions to protect
                their brands and drive business results. mfm agency SAVE model
                was created to do just that.
              </p>

              <div className="about-story-approach">
                <h3>Our Approach</h3>

                <p>
                  Our approach is based on The SAVE model which is a marketing
                  framework that focuses on providing solutions to customers and
                  stakeholders, making products and services accessible,
                  demonstrating value, and educating all stakeholders. It is a
                  more customer-centric approach to marketing public relations
                  than the traditional 4Ps (product, price, place, and
                  promotion).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-experience-section">
          <div className="about-shell about-experience-grid">
            <div className="about-experience-card">
              <span className="about-experience-number">
                +<span ref={countRef}>0</span>
              </span>

              <p>Years of experience</p>
            </div>

            <div className="about-experience-content">
              <span className="about-section-kicker about-section-kicker--light">
                Why choose us
              </span>

              <h2>Focused on work that gets done — and gets results.</h2>

              <p>
                We combine strategic thinking with practical delivery, helping
                organizations create stronger communication, better audience
                experiences and more meaningful client relationships.
              </p>

              <ul className="about-check-list">
                <li>
                  <FaCheckCircle aria-hidden="true" />
                  Regional market knowledge
                </li>

                <li>
                  <FaCheckCircle aria-hidden="true" />
                  Integrated communications expertise
                </li>

                <li>
                  <FaCheckCircle aria-hidden="true" />
                  Fast, accountable execution
                </li>
              </ul>

              <button
                type="button"
                className="about-btn about-btn--light"
                onClick={() => navigate("/contact")}
              >
                Talk to our team
                <FaArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        <section className="about-projects-section">
          <div className="about-shell about-projects-shell">
            <header className="about-projects-heading">
              <div>
                <span className="about-section-kicker">Selected work</span>
                <h2>Our projects</h2>
              </div>

              <p>
                A closer look at some of our campaigns, activations, events and
                audience experiences.
              </p>
            </header>

            <div className="about-slider">
              <div
                className="about-main-media"
                ref={mainMediaRef}
                aria-live="polite"
              >
                {activeItem.type === "image" ? (
                  <img src={activeItem.src} alt={activeItem.title} />
                ) : (
                  <video
                    src={activeItem.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                  />
                )}

                <div className="about-main-media-caption">
                  <span>
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(galleryItems.length).padStart(2, "0")}
                  </span>

                  <h3>{activeItem.title}</h3>
                </div>
              </div>

              <button
                type="button"
                className="about-nav about-nav--left"
                onClick={previousSlide}
                aria-label="Previous project"
              >
                <FaArrowLeft aria-hidden="true" />
              </button>

              <button
                type="button"
                className="about-nav about-nav--right"
                onClick={nextSlide}
                aria-label="Next project"
              >
                <FaArrowRight aria-hidden="true" />
              </button>
            </div>

            <div className="about-thumbnail-row">
              {galleryItems.map((item, index) => (
                <button
                  type="button"
                  key={`${item.src}-${index}`}
                  className={`about-thumb${
                    index === activeIndex ? " about-thumb--active" : ""
                  }`}
                  onClick={() => changeSlide(index)}
                  aria-label={`Open ${item.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <video
                      src={item.src}
                      muted
                      playsInline
                      preload="metadata"
                    />
                  )}

                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
