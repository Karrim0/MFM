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
    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            defaults: {
              ease: "power3.out",
            },
          })
          .fromTo(
            ".news-hero-badge",
            {
              y: 18,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.55,
            },
          )
          .fromTo(
            ".news-hero-title",
            {
              y: 42,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.82,
            },
            "-=0.25",
          )
          .fromTo(
            ".news-hero-subtitle",
            {
              y: 24,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.65,
            },
            "-=0.4",
          );

        gsap.to(".news-hero-background", {
          yPercent: 8,
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
          ".news-featured-media",
          {
            x: -45,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuredRef.current,
              start: "top 76%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".news-featured-content > *",
          {
            y: 25,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuredRef.current,
              start: "top 76%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".news-secondary-card",
          {
            y: 35,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: secondaryRef.current,
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

  return (
    <div ref={pageRef} className="news-page">
      <main>
        {/* ================= HERO ================= */}

        <section ref={heroRef} className="news-hero">
          <div className="news-hero-background" aria-hidden="true" />

          <div className="news-shell news-hero-layout">
            <div className="news-hero-content">
              <div className="news-hero-badge">
                <Newspaper size={17} aria-hidden="true" />
                <span>News &amp; Updates</span>
              </div>

              <h1 className="news-hero-title">Latest News</h1>

              <p className="news-hero-subtitle">
                Stay updated with the latest developments, achievements, and
                insights from MFM Marketing
              </p>
            </div>
          </div>
        </section>

        {/* ================= FEATURED STORY ================= */}

        <section
          ref={featuredRef}
          className="news-featured-section"
          aria-labelledby="featured-news-title"
        >
          <div className="news-shell">
            <header className="news-section-heading">
              <span className="news-section-kicker">Featured Story</span>

              <h2>Highlights from MFM Marketing</h2>
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

        {/* ================= SECONDARY STORY ================= */}

        <section
          ref={secondaryRef}
          className="news-secondary-section"
          aria-labelledby="secondary-news-title"
        >
          <div className="news-shell">
            <header className="news-section-heading news-section-heading--left">
              <span className="news-section-kicker">More News</span>

              <h2>Stories and industry updates</h2>
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
                  Relations Department Forum honors &quot;Lola Zaghlama&quot;
                  at its first session.
                </h3>

                <p>
                  The Public Relations Forum, organized by MFM Marketing
                  Company, will honor Ms. Hoda Halim Abu Seif, a legend in the
                  field of public relations in Egypt, professionally known as
                  Lola Zaqalma. She is the President and CEO of Rada Research
                  and Public Relations Company and a pioneer in public relations
                  and communication in Egypt, with over fifty years of
                  experience in these fields. Her expertise lies in designing
                  marketing and communication strategies and strategic
                  planning. Shabrawi Khater, Chairman of the Board of Directors
                  of MFM Marketing Company, the forum&apos;s organizer, stated
                  that honoring her on the sidelines of the forum is a tribute
                  to her contributions throughout her career in public
                  relations. The forum will host a select group of leading
                  public relations practitioners from various business sectors
                  in Egypt, along with a distinguished group of professors and
                  heads of public relations departments from some of the leading
                  media colleges. Zaqalma has served as a consultant in
                  communication and strategic planning for a number of Egyptian
                  government institutions, including the General Authority for
                  Investment and Free Zones, and the Ministries of Tourism,
                  International Cooperation, and Communications and Information
                  Technology, among others.
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