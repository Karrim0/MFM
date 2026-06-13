import { useLayoutEffect, useRef, type SyntheticEvent } from "react";
import { ArrowUpRight, CalendarDays, Download, FileText } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "../components/Footer";
import "../styles/whitepaper.css";

import whitePaperPdf from "../assets/files/influencers.pdf";

gsap.registerPlugin(ScrollTrigger);

interface WhitePaperItem {
  id: number;
  title: string;
  description: string;
  date: string;
  isoDate: string;
  image: string;
  category: string;
  pdfFile: string;
}

interface WhitePaperCardProps {
  article: WhitePaperItem;
  index: number;
}

const PLACEHOLDER_IMAGE =
  "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1200";

const whitePaperData: WhitePaperItem[] = [
  {
    id: 1,
    title: "Digital Trends: A Comprehensive Guide to Modern Marketing",
    description:
      "A comprehensive guide exploring the latest trends in digital marketing and the factors shaping modern company strategies toward success.",
    date: "May 10, 2026",
    isoDate: "2026-05-10",
    image: PLACEHOLDER_IMAGE,
    category: "Digital Strategy",
    pdfFile: whitePaperPdf,
  },
  {
    id: 2,
    title: "Branding Strategies in the Digital Competition Era",
    description:
      "How brands build strong identity and maintain genuine engagement with their audience in a crowded marketplace.",
    date: "May 3, 2026",
    isoDate: "2026-05-03",
    image:
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Branding Strategy",
    pdfFile: whitePaperPdf,
  },
  {
    id: 3,
    title: "SEO Optimization: The Practical Implementation Guide",
    description:
      "A comprehensive practical guide to understanding search engines and improving your website visibility in organic search results.",
    date: "May 1, 2026",
    isoDate: "2026-05-01",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Search Optimization",
    pdfFile: whitePaperPdf,
  },
  {
    id: 4,
    title: "Social Media Marketing: The Art and Science",
    description:
      "A comprehensive guide to maximizing social media platforms to build engaged communities and drive real sales.",
    date: "April 28, 2026",
    isoDate: "2026-04-28",
    image:
      "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Social Media",
    pdfFile: whitePaperPdf,
  },
  {
    id: 5,
    title: "Data Analytics and Business Intelligence",
    description:
      "How to transform raw data into actionable insights that drive strategic business decisions.",
    date: "April 20, 2026",
    isoDate: "2026-04-20",
    image:
      "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Business Intelligence",
    pdfFile: whitePaperPdf,
  },
  {
    id: 6,
    title: "Email Marketing: Effective ROI Strategy",
    description:
      "How to build an effective email list and use it to convert subscribers into loyal customers.",
    date: "April 12, 2026",
    isoDate: "2026-04-12",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Email Marketing",
    pdfFile: whitePaperPdf,
  },
  {
    id: 7,
    title: "Content Marketing: Building an Integrated Strategy",
    description:
      "A comprehensive guide to creating valuable content that attracts your audience and achieves your business goals.",
    date: "April 5, 2026",
    isoDate: "2026-04-05",
    image:
      "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Content Marketing",
    pdfFile: whitePaperPdf,
  },
  {
    id: 8,
    title: "Marketing Automation: Efficiency at Scale",
    description:
      "How to use automation tools to scale your marketing efforts without increasing resources.",
    date: "March 28, 2026",
    isoDate: "2026-03-28",
    image:
      "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Marketing Automation",
    pdfFile: whitePaperPdf,
  },
  {
    id: 9,
    title: "Measuring Success: KPIs and Measurement Tools",
    description:
      "How to define the right KPIs and measure the success of your marketing strategy.",
    date: "March 20, 2026",
    isoDate: "2026-03-20",
    image:
      "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Measurement & Analytics",
    pdfFile: whitePaperPdf,
  },
];

const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
  const image = event.currentTarget;

  if (image.dataset.fallbackApplied === "true") return;

  image.dataset.fallbackApplied = "true";
  image.src = PLACEHOLDER_IMAGE;
};

const WhitePaperCard = ({ article, index }: WhitePaperCardProps) => {
  return (
    <article className="wp-card">
      <div className="wp-card__media">
        <img
          src={article.image}
          alt={article.title}
          className="wp-card__image"
          loading="lazy"
          decoding="async"
          onError={handleImageError}
        />

        <div className="wp-card__overlay" aria-hidden="true" />

        <span className="wp-card__number">
          {String(index + 2).padStart(2, "0")}
        </span>

        <span className="wp-card__category">{article.category}</span>
      </div>

      <div className="wp-card__body">
        <div className="wp-card__date">
          <CalendarDays size={15} aria-hidden="true" />

          <time dateTime={article.isoDate}>{article.date}</time>
        </div>

        <h3 className="wp-card__title">{article.title}</h3>

        <p className="wp-card__description">{article.description}</p>

        <a
          href={article.pdfFile}
          target="_blank"
          rel="noopener noreferrer"
          className="wp-card__link"
          aria-label={`Open ${article.title}`}
        >
          <span>Read White Paper</span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};

const WhitePaper = () => {
  const pageRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const featuredRef = useRef<HTMLElement>(null);
  const libraryRef = useRef<HTMLElement>(null);

  const [featuredArticle, ...articles] = whitePaperData;

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.matchMedia("(max-width: 760px)").matches;

        const horizontalOffset = isMobile ? 0 : 52;

        const heroTimeline = gsap.timeline({
          defaults: {
            ease: "power3.out",
            force3D: true,
          },
        });

        heroTimeline
          .fromTo(
            ".wp-hero__background",
            {
              scale: 1.045,
              autoAlpha: 0.72,
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
            ".wp-hero__glow",
            {
              scale: 0.8,
              autoAlpha: 0,
            },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 1.4,
              stagger: 0.16,
              ease: "power2.out",
            },
            0.1,
          )
          .fromTo(
            ".wp-hero__eyebrow",
            {
              x: -horizontalOffset,
              y: isMobile ? 20 : 8,
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
            ".wp-hero__title-primary",
            {
              x: -horizontalOffset,
              y: isMobile ? 30 : 12,
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
            ".wp-hero__title-secondary",
            {
              x: horizontalOffset,
              y: isMobile ? 26 : 10,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.15,
              clearProps: "transform,opacity,visibility",
            },
            0.55,
          )
          .fromTo(
            ".wp-hero__divider",
            {
              scaleX: 0,
              autoAlpha: 0,
              transformOrigin: "center center",
            },
            {
              scaleX: 1,
              autoAlpha: 1,
              duration: 0.9,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.76,
          )
          .fromTo(
            ".wp-hero__subtitle",
            {
              y: 26,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1.1,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.82,
          );

        gsap.to(".wp-hero__background", {
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.8,
            invalidateOnRefresh: true,
          },
        });

        gsap.to(".wp-hero__glow--one", {
          x: 14,
          y: -10,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".wp-hero__glow--two", {
          x: -12,
          y: 15,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        const featuredTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: featuredRef.current,
            start: isMobile ? "top 90%" : "top 83%",
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
            ".wp-featured-section .wp-section-header__label",
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
            ".wp-featured-section .wp-section-header__title",
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
            ".wp-featured-section .wp-section-header__line",
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
            ".wp-featured-card",
            {
              y: 38,
              scale: 0.985,
              autoAlpha: 0,
            },
            {
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 1.3,
              clearProps: "transform,opacity,visibility",
            },
            0.46,
          )
          .fromTo(
            ".wp-featured-card__media",
            {
              x: isMobile ? 0 : -horizontalOffset,
              y: isMobile ? 26 : 8,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.15,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.62,
          )
          .fromTo(
            ".wp-featured-card__category",
            {
              y: -12,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.75,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.82,
          )
          .fromTo(
            ".wp-featured-card__date",
            {
              x: horizontalOffset,
              y: isMobile ? 18 : 0,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              clearProps: "transform,opacity,visibility",
            },
            0.66,
          )
          .fromTo(
            ".wp-featured-card__title",
            {
              x: horizontalOffset,
              y: isMobile ? 26 : 8,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.1,
              clearProps: "transform,opacity,visibility",
            },
            0.79,
          )
          .fromTo(
            ".wp-featured-card__description",
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
            0.98,
          )
          .fromTo(
            ".wp-featured-card__button",
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
            1.16,
          );

        const libraryCards = gsap.utils.toArray<HTMLElement>(".wp-card");

        const libraryTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: libraryRef.current,
            start: isMobile ? "top 90%" : "top 84%",
            once: true,
            invalidateOnRefresh: true,
          },
          defaults: {
            ease: "power3.out",
            force3D: true,
          },
        });

        libraryTimeline
          .fromTo(
            ".wp-library-section .wp-section-header__label",
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
            ".wp-library-section .wp-section-header__title",
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
            ".wp-library-section .wp-section-header__line",
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
            libraryCards,
            {
              y: 38,
              scale: 0.98,
              autoAlpha: 0,
            },
            {
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 1,
              stagger: 0.1,
              clearProps: "transform,opacity,visibility",
            },
            0.5,
          )
          .fromTo(
            ".wp-card__category, .wp-card__number",
            {
              y: 12,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              stagger: 0.045,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.74,
          )
          .fromTo(
            ".wp-card__date, .wp-card__title, .wp-card__description, .wp-card__link",
            {
              y: 15,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.78,
              stagger: 0.035,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.86,
          );
      });
    }, page);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <>
      <main ref={pageRef} className="wp-page">
        <section
          ref={heroRef}
          className="wp-hero"
          aria-labelledby="white-paper-page-title"
        >
          <div className="wp-hero__background" aria-hidden="true">
            <span className="wp-hero__glow wp-hero__glow--one" />
            <span className="wp-hero__glow wp-hero__glow--two" />
            <span className="wp-hero__grid" />
          </div>

          <div className="wp-container wp-hero__layout">
            <div className="wp-hero__content">
              <span className="wp-hero__eyebrow">
                <FileText size={17} aria-hidden="true" />
                MFM Insights
              </span>

              <h1 id="white-paper-page-title" className="wp-hero__title">
                <span className="wp-hero__title-primary">White Papers</span>

                <span className="wp-hero__title-secondary">
                  &amp; Marketing Insights
                </span>
              </h1>

              <span className="wp-hero__divider" aria-hidden="true" />

              <p className="wp-hero__subtitle">
                Explore research-driven insights, practical guides, and industry
                perspectives designed to help brands make smarter marketing
                decisions.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={featuredRef}
          className="wp-section wp-featured-section"
          aria-labelledby="featured-white-paper-title"
        >
          <div className="wp-container">
            <header className="wp-section-header">
              <span className="wp-section-header__label">
                Featured White Paper
              </span>

              <h2
                id="featured-white-paper-title"
                className="wp-section-header__title"
              >
                Latest Research
              </h2>

              <span className="wp-section-header__line" aria-hidden="true" />
            </header>

            <article className="wp-featured-card">
              <div className="wp-featured-card__media">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="wp-featured-card__image"
                  loading="eager"
                  decoding="async"
                  onError={handleImageError}
                />

                <div className="wp-featured-card__overlay" aria-hidden="true" />

                <span className="wp-featured-card__category">
                  {featuredArticle.category}
                </span>

                <span className="wp-featured-card__number">01</span>
              </div>

              <div className="wp-featured-card__body">
                <div className="wp-featured-card__date">
                  <CalendarDays size={16} aria-hidden="true" />

                  <time dateTime={featuredArticle.isoDate}>
                    {featuredArticle.date}
                  </time>
                </div>

                <h2 className="wp-featured-card__title">
                  {featuredArticle.title}
                </h2>

                <p className="wp-featured-card__description">
                  {featuredArticle.description}
                </p>

                <a
                  href={featuredArticle.pdfFile}
                  download="mfm-white-paper.pdf"
                  className="wp-featured-card__button"
                >
                  <span>Download White Paper</span>
                  <Download size={17} aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section
          ref={libraryRef}
          className="wp-section wp-library-section"
          aria-labelledby="white-paper-library-title"
        >
          <div className="wp-container">
            <header className="wp-section-header">
              <span className="wp-section-header__label">All White Papers</span>

              <h2
                id="white-paper-library-title"
                className="wp-section-header__title"
              >
                Research Library
              </h2>

              <span className="wp-section-header__line" aria-hidden="true" />
            </header>

            <div className="wp-grid">
              {articles.map((article, index) => (
                <WhitePaperCard
                  key={article.id}
                  article={article}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WhitePaper;
