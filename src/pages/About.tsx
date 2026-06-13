import { useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";
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
  {
    type: "video",
    src: "/video/project4.mp4",
    title: "Campaign production",
  },
  { type: "image", src: project3, title: "Live event" },
  {
    type: "video",
    src: "/video/project5.mp4",
    title: "Creative execution",
  },
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
  const thumbnailRowRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const isChangingSlideRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  const changeSlide = (requestedIndex: number) => {
    const mediaElement = mainMediaRef.current;

    const nextIndex =
      (requestedIndex + galleryItems.length) % galleryItems.length;

    if (
      !mediaElement ||
      nextIndex === activeIndex ||
      isChangingSlideRef.current
    ) {
      return;
    }

    isChangingSlideRef.current = true;

    gsap.killTweensOf(mediaElement);

    gsap.to(mediaElement, {
      autoAlpha: 0,
      y: 10,
      scale: 0.992,
      duration: 0.32,
      ease: "power2.in",
      onComplete: () => {
        setActiveIndex(nextIndex);

        requestAnimationFrame(() => {
          const updatedMediaElement = mainMediaRef.current;

          if (!updatedMediaElement) {
            isChangingSlideRef.current = false;
            return;
          }

          gsap.fromTo(
            updatedMediaElement,
            {
              autoAlpha: 0,
              y: 12,
              scale: 0.992,
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
              onComplete: () => {
                isChangingSlideRef.current = false;
              },
            },
          );
        });
      },
    });
  };

  const nextSlide = () => {
    changeSlide(activeIndex + 1);
  };

  const previousSlide = () => {
    changeSlide(activeIndex - 1);
  };

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const horizontalOffset = isMobile ? 26 : 52;

        const heroTimeline = gsap.timeline({
          defaults: {
            ease: "power3.out",
            force3D: true,
          },
        });

        heroTimeline
          .fromTo(
            ".about-hero-video",
            {
              scale: 1.045,
              autoAlpha: 0.72,
            },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 1.8,
              clearProps: "transform,opacity,visibility",
            },
            0,
          )
          .fromTo(
            ".about-hero-brand",
            {
              x: -horizontalOffset,
              y: 10,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.15,
              clearProps: "transform,opacity,visibility",
            },
            0.2,
          )
          .fromTo(
            ".about-hero-company",
            {
              x: -horizontalOffset * 0.7,
              y: 14,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.1,
              clearProps: "transform,opacity,visibility",
            },
            0.4,
          )
          .fromTo(
            ".about-hero-description",
            {
              y: 24,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              stagger: 0.14,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.62,
          );

        gsap.to(".about-hero-video", {
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.8,
            invalidateOnRefresh: true,
          },
        });

        const storyTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".about-story-section",
            start: isMobile ? "top 90%" : "top 82%",
            once: true,
            invalidateOnRefresh: true,
          },
          defaults: {
            ease: "power3.out",
            force3D: true,
          },
        });

        storyTimeline
          .fromTo(
            ".about-story-media",
            {
              x: isMobile ? 0 : -horizontalOffset,
              y: isMobile ? 34 : 12,
              scale: 0.975,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 1.35,
              clearProps: "transform,opacity,visibility",
            },
            0,
          )
          .fromTo(
            ".about-story-image-wrap",
            {
              y: 18,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1.1,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.22,
          )
          .fromTo(
            ".about-story-line",
            {
              scaleY: 0,
              autoAlpha: 0,
              transformOrigin: "top center",
            },
            {
              scaleY: 1,
              autoAlpha: 1,
              duration: 1.05,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.2,
          )
          .fromTo(
            ".about-heading",
            {
              x: isMobile ? 0 : horizontalOffset,
              y: isMobile ? 28 : 10,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.2,
              clearProps: "transform,opacity,visibility",
            },
            0.3,
          )
          .fromTo(
            ".about-story-lead",
            {
              y: 24,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.52,
          )
          .fromTo(
            ".about-story-description",
            {
              y: 24,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.68,
          )
          .fromTo(
            ".about-story-approach",
            {
              y: 28,
              scale: 0.98,
              autoAlpha: 0,
            },
            {
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 1.1,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.84,
          )
          .fromTo(
            ".about-story-approach h3",
            {
              x: -14,
              autoAlpha: 0,
            },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.75,
              clearProps: "transform,opacity,visibility",
            },
            1.02,
          )
          .fromTo(
            ".about-story-approach p",
            {
              y: 16,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.85,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            1.12,
          );
        // =====
        const counterState = {
          value: 0,
        };

        if (countRef.current) {
          countRef.current.textContent = "0";
          gsap.set(countRef.current, {
            autoAlpha: 1,
          });
        }

        const counterTween = gsap.to(counterState, {
          value: 40,
          duration: 4.5,
          paused: true,
          ease: "power1.out",
          snap: {
            value: 1,
          },
          onUpdate: () => {
            if (!countRef.current) return;

            countRef.current.textContent = Math.round(
              counterState.value,
            ).toString();
          },
          onComplete: () => {
            if (countRef.current) {
              countRef.current.textContent = "40";
            }
          },
        });
        ScrollTrigger.create({
          trigger: ".about-experience-card",
          start: isMobile ? "top 82%" : "top 72%",
          once: true,
          invalidateOnRefresh: true,
          onEnter: () => {
            counterState.value = 0;

            if (countRef.current) {
              countRef.current.textContent = "0";
            }

            counterTween.restart();
          },
        });

        const experienceTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".about-experience-section",
            start: isMobile ? "top 88%" : "top 78%",
            once: true,
            invalidateOnRefresh: true,
          },
          defaults: {
            ease: "power3.out",
            force3D: true,
          },
        });

        experienceTimeline
          .fromTo(
            ".about-experience-card",
            {
              x: isMobile ? 0 : -horizontalOffset,
              y: isMobile ? 34 : 12,
              scale: 0.965,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 1.3,
              clearProps: "transform,opacity,visibility",
            },
            0,
          )
          .fromTo(
            ".about-experience-number",
            {
              y: 20,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.16,
          )
          .fromTo(
            ".about-experience-card p",
            {
              y: 15,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.85,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.34,
          )
          .fromTo(
            ".about-experience-content .about-section-kicker",
            {
              x: isMobile ? 0 : horizontalOffset,
              y: isMobile ? 24 : 8,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1,
              clearProps: "transform,opacity,visibility",
            },
            0.16,
          )
          .fromTo(
            ".about-experience-content h2",
            {
              x: isMobile ? 0 : horizontalOffset,
              y: isMobile ? 28 : 10,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.15,
              clearProps: "transform,opacity,visibility",
            },
            0.32,
          )
          .fromTo(
            ".about-experience-content > p",
            {
              y: 24,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.52,
          )
          .fromTo(
            ".about-check-list li",
            {
              x: isMobile ? 0 : 24,
              y: isMobile ? 18 : 0,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 0.85,
              stagger: 0.12,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.68,
          )
          .fromTo(
            ".about-btn--light",
            {
              y: 24,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.95,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            1,
          );

        const projectsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".about-projects-section",
            start: isMobile ? "top 90%" : "top 84%",
            once: true,
            invalidateOnRefresh: true,
          },
          defaults: {
            ease: "power3.out",
            force3D: true,
          },
        });

        projectsTimeline
          .fromTo(
            ".about-projects-heading .about-section-kicker",
            {
              x: isMobile ? 0 : -horizontalOffset,
              y: isMobile ? 22 : 8,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 0.95,
              clearProps: "transform,opacity,visibility",
            },
            0,
          )
          .fromTo(
            ".about-projects-heading h2",
            {
              x: isMobile ? 0 : -horizontalOffset,
              y: isMobile ? 28 : 10,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.15,
              clearProps: "transform,opacity,visibility",
            },
            0.14,
          )
          .fromTo(
            ".about-projects-title-line",
            {
              scaleX: 0,
              autoAlpha: 0,
              transformOrigin: "left center",
            },
            {
              scaleX: 1,
              autoAlpha: 1,
              duration: 0.85,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.36,
          )
          .fromTo(
            ".about-projects-heading > p",
            {
              x: isMobile ? 0 : horizontalOffset,
              y: isMobile ? 24 : 10,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.1,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.28,
          )
          .fromTo(
            ".about-slider",
            {
              y: 40,
              scale: 0.98,
              autoAlpha: 0,
            },
            {
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 1.25,
              clearProps: "transform,opacity,visibility",
            },
            0.5,
          )
          .fromTo(
            ".about-main-media-caption",
            {
              y: 20,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.78,
          )
          .fromTo(
            ".about-nav",
            {
              scale: 0.9,
              autoAlpha: 0,
            },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.75,
              stagger: 0.1,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.86,
          )
          .fromTo(
            ".about-thumbnail-row",
            {
              y: 22,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.95,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.94,
          )
          .fromTo(
            ".about-thumb",
            {
              y: 18,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              stagger: 0.07,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            1.02,
          );
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        if (countRef.current) {
          countRef.current.textContent = "40";
        }
      });
    }, page);

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

    const thumbnailRow = thumbnailRowRef.current;
    const activeThumbnail = thumbnailRefs.current[activeIndex];

    if (!thumbnailRow || !activeThumbnail) return;

    const targetPosition =
      activeThumbnail.offsetLeft -
      (thumbnailRow.clientWidth - activeThumbnail.offsetWidth) / 2;

    const maximumScroll = thumbnailRow.scrollWidth - thumbnailRow.clientWidth;

    const nextScrollPosition = Math.min(
      Math.max(targetPosition, 0),
      maximumScroll,
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    thumbnailRow.scrollTo({
      left: nextScrollPosition,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [activeIndex]);

  useLayoutEffect(() => {
    const thumbnailRow = thumbnailRowRef.current;

    if (!thumbnailRow) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;

      const maximumScroll = thumbnailRow.scrollWidth - thumbnailRow.clientWidth;

      if (maximumScroll <= 0) return;

      const movingForward = event.deltaY > 0;
      const atStart = thumbnailRow.scrollLeft <= 0;
      const atEnd = thumbnailRow.scrollLeft >= maximumScroll - 1;

      if ((movingForward && atEnd) || (!movingForward && atStart)) {
        return;
      }

      event.preventDefault();

      thumbnailRow.scrollBy({
        left: event.deltaY,
        behavior: "auto",
      });
    };

    thumbnailRow.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      thumbnailRow.removeEventListener("wheel", handleWheel);
    };
  }, []);

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

          <div className="about-hero-overlay" aria-hidden="true" />

          <div className="about-shell about-hero-layout">
            <div className="about-hero-content">
              <h1 className="about-hero-title">
                <span className="about-hero-brand">MFM-EGYPT</span>

                <span className="about-hero-company">
                  Marketing Facility Management
                </span>
              </h1>

              <div className="about-hero-copy">
                <p className="about-hero-description">
                  The company with more than 40 years’ experience in Egypt,
                  Qatar, UAE, and KSA as an integrated marketing communications
                  and public relations firm.
                </p>

                <p className="about-hero-description">
                  We have an enviable list of clients across many sectors, all
                  with one thing in common — the desire to maximize their
                  returns through relevant, engaging, results-driven marketing.
                </p>

                <p className="about-hero-description">
                  Our aim is simple: to win trust and business with original
                  ideas that excite and engage through business, sports,
                  entertainment, and CSR initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="our-story" className="about-story-section">
          <div className="about-shell about-story-grid">
            <div className="about-story-media">
              <div className="about-story-image-wrap">
                <img
                  src={aboutImage}
                  alt="MFM SAVE marketing model"
                  decoding="async"
                />
              </div>
            </div>

            <div className="about-story-content">
              <span className="about-story-line" aria-hidden="true" />

              <h2 className="about-heading">Marketing Facility Management</h2>

              <p className="about-story-lead">
                We believe that we live in a real-time world, which demands
                real-time agencies.
              </p>

              <p className="about-story-description">
                In today&apos;s world, change is constant and complexity is
                ever-growing. Organizations need communications partners to
                provide senior counsel and data-driven solutions to protect
                their brands and drive business results. MFM agency&apos;s SAVE
                model was created to do just that.
              </p>

              <div className="about-story-approach">
                <h3>Our Approach</h3>

                <p>
                  Our approach is based on the SAVE model, a marketing framework
                  focused on providing solutions, making products and services
                  accessible, demonstrating value, and educating stakeholders.
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
                experiences, and more meaningful client relationships.
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

                <span
                  className="about-projects-title-line"
                  aria-hidden="true"
                />
              </div>

              <p>
                A closer look at some of our campaigns, activations, events, and
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
                  <img
                    src={activeItem.src}
                    alt={activeItem.title}
                    decoding="async"
                  />
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

            <div ref={thumbnailRowRef} className="about-thumbnail-row">
              {galleryItems.map((item, index) => (
                <button
                  ref={(element) => {
                    thumbnailRefs.current[index] = element;
                  }}
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
