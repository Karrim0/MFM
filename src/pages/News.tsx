import { useLayoutEffect, useRef } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  FileText,
  Newspaper,
  Tag,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "../components/Footer";
import "../styles/newspage.css";

import featuredImage from "../assets/images/896a3483-1.png";

import featuredDoc from "../assets/files/relation.pdf";
import secondaryDoc from "../assets/files/lolaqezma.pdf";

gsap.registerPlugin(ScrollTrigger);

const News = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const featuredRef = useRef<HTMLElement>(null);
  const secondaryRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.matchMedia("(max-width: 760px)").matches;
        const horizontalOffset = isMobile ? 26 : 52;

        const heroTimeline = gsap.timeline({
          defaults: {
            ease: "power3.out",
            force3D: true,
          },
        });

        heroTimeline
          .fromTo(
            ".news-hero-background",
            {
              scale: 1.045,
              autoAlpha: 0.75,
            },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 1.7,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0,
          )
          .fromTo(
            ".news-hero-badge",
            {
              x: isMobile ? 0 : -horizontalOffset,
              y: isMobile ? 22 : 8,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1,
              clearProps: "transform,opacity,visibility",
            },
            0.2,
          )
          .fromTo(
            ".news-hero-title",
            {
              x: isMobile ? 0 : -horizontalOffset,
              y: isMobile ? 32 : 12,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.2,
              clearProps: "transform,opacity,visibility",
            },
            0.36,
          )
          .fromTo(
            ".news-hero-title-line",
            {
              scaleX: 0,
              autoAlpha: 0,
              transformOrigin: "left center",
            },
            {
              scaleX: 1,
              autoAlpha: 1,
              duration: 0.9,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.62,
          )
          .fromTo(
            ".news-hero-subtitle",
            {
              y: 28,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1.1,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.7,
          );

        gsap.to(".news-hero-background", {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.8,
            invalidateOnRefresh: true,
          },
        });

        const featuredTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: featuredRef.current,
            start: isMobile ? "top 90%" : "top 82%",
            once: true,
            invalidateOnRefresh: true,
          },
          defaults: {
            ease: "power3.out",
            force3D: true,
          },
        });

        featuredTimeline
          .fromTo(
            ".news-featured-section .news-section-kicker",
            {
              y: 20,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              clearProps: "transform,opacity,visibility",
            },
            0,
          )
          .fromTo(
            ".news-featured-section .news-section-heading h2",
            {
              y: 28,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1.1,
              clearProps: "transform,opacity,visibility",
            },
            0.14,
          )
          .fromTo(
            ".news-featured-section .news-heading-line",
            {
              scaleX: 0,
              autoAlpha: 0,
              transformOrigin: "center center",
            },
            {
              scaleX: 1,
              autoAlpha: 1,
              duration: 0.85,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.34,
          )
          .fromTo(
            ".news-featured-media",
            {
              x: isMobile ? 0 : -horizontalOffset,
              y: isMobile ? 36 : 12,
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
            0.42,
          )
          .fromTo(
            ".news-featured-image-frame",
            {
              y: 18,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1.05,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.64,
          )
          .fromTo(
            ".news-featured-label",
            {
              y: 16,
              scale: 0.94,
              autoAlpha: 0,
            },
            {
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 0.8,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.84,
          )
          .fromTo(
            ".news-featured-content .news-story-meta > span",
            {
              x: isMobile ? 0 : horizontalOffset,
              y: isMobile ? 18 : 0,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              stagger: 0.11,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.5,
          )
          .fromTo(
            ".news-featured-content h2",
            {
              x: isMobile ? 0 : horizontalOffset,
              y: isMobile ? 27 : 10,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.15,
              clearProps: "transform,opacity,visibility",
            },
            0.68,
          )
          .fromTo(
            ".news-featured-text p",
            {
              y: 22,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              stagger: 0.12,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.9,
          )
          .fromTo(
            ".news-primary-button",
            {
              y: 22,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            1.18,
          )
          .fromTo(
            ".news-primary-button svg",
            {
              x: -7,
              y: 7,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 0.6,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            1.36,
          );

        const secondaryTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: secondaryRef.current,
            start: isMobile ? "top 90%" : "top 84%",
            once: true,
            invalidateOnRefresh: true,
          },
          defaults: {
            ease: "power3.out",
            force3D: true,
          },
        });

        secondaryTimeline
          .fromTo(
            ".news-secondary-section .news-section-kicker",
            {
              x: isMobile ? 0 : -horizontalOffset,
              y: isMobile ? 20 : 8,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              clearProps: "transform,opacity,visibility",
            },
            0,
          )
          .fromTo(
            ".news-secondary-section .news-section-heading h2",
            {
              x: isMobile ? 0 : -horizontalOffset,
              y: isMobile ? 28 : 10,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.1,
              clearProps: "transform,opacity,visibility",
            },
            0.14,
          )
          .fromTo(
            ".news-secondary-section .news-heading-line",
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
            0.34,
          )
          .fromTo(
            ".news-secondary-card",
            {
              y: 38,
              scale: 0.985,
              autoAlpha: 0,
            },
            {
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 1.25,
              clearProps: "transform,opacity,visibility",
            },
            0.46,
          )
          .fromTo(
            ".news-secondary-icon",
            {
              y: 18,
              scale: 0.9,
              autoAlpha: 0,
            },
            {
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 0.85,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.64,
          )
          .fromTo(
            ".news-secondary-header .news-story-meta > span",
            {
              x: isMobile ? 0 : 22,
              y: isMobile ? 15 : 0,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 0.75,
              stagger: 0.1,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.7,
          )
          .fromTo(
            ".news-secondary-body h3",
            {
              y: 26,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1.05,
              clearProps: "transform,opacity,visibility",
            },
            0.83,
          )
          .fromTo(
            ".news-secondary-body p",
            {
              y: 24,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1.05,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            1,
          )
          .fromTo(
            ".news-secondary-footer",
            {
              y: 20,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.85,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            1.2,
          )
          .fromTo(
            ".news-secondary-button",
            {
              y: 14,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.75,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            1.32,
          );
      });
    }, page);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <div ref={pageRef} className="news-page">
      <main>
        <section
          ref={heroRef}
          className="news-hero"
          aria-labelledby="news-page-title"
        >
          <div className="news-hero-background" aria-hidden="true" />

          <div className="news-shell news-hero-layout">
            <div className="news-hero-content">
              <div className="news-hero-badge">
                <Newspaper size={17} aria-hidden="true" />
                <span>News &amp; Updates</span>
              </div>

              <h1 id="news-page-title" className="news-hero-title">
                Latest News
              </h1>

              <span className="news-hero-title-line" aria-hidden="true" />

              <p className="news-hero-subtitle">
                Stay updated with the latest developments, achievements, and
                insights from MFM Marketing.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={featuredRef}
          className="news-featured-section"
          aria-labelledby="featured-news-title"
        >
          <div className="news-shell">
            <header className="news-section-heading">
              <span className="news-section-kicker">Featured Story</span>

              <h2>Highlights from MFM Marketing</h2>

              <span className="news-heading-line" aria-hidden="true" />
            </header>

            <article className="news-featured-card">
              <div className="news-featured-media">
                <div className="news-featured-image-frame">
                  <img
                    src={featuredImage}
                    alt="MFM featured news"
                    className="news-featured-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <span className="news-featured-label">
                  <FileText size={14} aria-hidden="true" />
                  Featured
                </span>
              </div>

              <div className="news-featured-content">
                <div className="news-story-meta">
                  <span>
                    <CalendarDays size={15} aria-hidden="true" />
                    March 2024
                  </span>

                  <span>
                    <Tag size={15} aria-hidden="true" />
                    Recognition
                  </span>
                </div>

                <h2 id="featured-news-title">
                  In collaboration with experts and academics, MFM Product
                  Marketing launches the first forum for the Public Relations
                  Department.
                </h2>

                <div className="news-featured-text">
                  <p>
                    MFM Product Marketing announced the launch of its first
                    professional forum, &quot;The Circle of Public
                    Relations.&quot;
                  </p>

                  <p>
                    The event will include mentorship sessions, panel
                    discussions, and networking opportunities.
                  </p>

                  <p>
                    Industry experts and students will engage in discussions on
                    career development and real-world PR strategies.
                  </p>
                </div>

                <a
                  href={featuredDoc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-primary-button"
                >
                  Learn More
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section
          ref={secondaryRef}
          className="news-secondary-section"
          aria-labelledby="secondary-news-title"
        >
          <div className="news-shell">
            <header className="news-section-heading news-section-heading--left">
              <span className="news-section-kicker">More News</span>

              <h2>Stories and industry updates</h2>

              <span className="news-heading-line" aria-hidden="true" />
            </header>

            <article className="news-secondary-card">
              <div className="news-secondary-header">
                <div className="news-secondary-icon">
                  <Newspaper size={28} aria-hidden="true" />
                </div>

                <div className="news-story-meta news-story-meta--right">
                  <span>
                    <CalendarDays size={15} aria-hidden="true" />
                    March 2024
                  </span>

                  <span>
                    <Tag size={15} aria-hidden="true" />
                    Industry Event
                  </span>
                </div>
              </div>

              <div className="news-secondary-body">
                <h3 id="secondary-news-title">
                  For her distinguished career in public relations, the Public
                  Relations Department Forum honors &quot;Lola Zaghlama&quot; at
                  its first session.
                </h3>

                <p>
                  The Public Relations Forum, organized by MFM Marketing
                  Company, will honor Ms. Hoda Halim Abu Seif, a legend in the
                  field of public relations in Egypt, professionally known as
                  Lola Zaqalma. She is the President and CEO of Rada Research
                  and Public Relations Company and a pioneer in public relations
                  and communication in Egypt, with over fifty years of
                  experience in these fields. Her expertise lies in designing
                  marketing and communication strategies and strategic planning.
                  Shabrawi Khater, Chairman of the Board of Directors of MFM
                  Marketing Company, the forum&apos;s organizer, stated that
                  honoring her on the sidelines of the forum is a tribute to her
                  contributions throughout her career in public relations. The
                  forum will host a select group of leading public relations
                  practitioners from various business sectors in Egypt, along
                  with a distinguished group of professors and heads of public
                  relations departments from some of the leading media colleges.
                  Zaqalma has served as a consultant in communication and
                  strategic planning for a number of Egyptian government
                  institutions, including the General Authority for Investment
                  and Free Zones, and the Ministries of Tourism, International
                  Cooperation, and Communications and Information Technology,
                  among others.
                </p>
              </div>

              <footer className="news-secondary-footer">
                <a
                  href={secondaryDoc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-secondary-button"
                >
                  Learn More
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </footer>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
