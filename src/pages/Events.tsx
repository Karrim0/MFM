import { useLayoutEffect, useRef, useState } from "react";
import {
  FaArrowDown,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "../components/Footer";
import "../styles/events.css";

import mainLogo from "../assets/images/896a3483-1.png";
import eventImage from "../assets/images/WhatsApp Image 2026-02-18 at 15.52.46.jpeg";

gsap.registerPlugin(ScrollTrigger);

const heroVideo = "/video/back.mp4";

interface EventType {
  id: number;
  title: string;
  description: string;
  date: string;
  isoDate: string;
  location: string;
  image?: string;
  logo?: string;
  link?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const targetTime = new Date(targetDate).getTime();
  const distance = targetTime - Date.now();

  if (Number.isNaN(targetTime) || distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: true,
    };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60),
    ),
    minutes: Math.floor(
      (distance % (1000 * 60 * 60)) /
        (1000 * 60),
    ),
    seconds: Math.floor(
      (distance % (1000 * 60)) / 1000,
    ),
    expired: false,
  };
};

const padNumber = (value: number) => String(value).padStart(2, "0");

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetDate),
  );

  useLayoutEffect(() => {
    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft(targetDate));
    };

    updateTimer();

    const intervalId = window.setInterval(updateTimer, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [targetDate]);

  if (timeLeft.expired) {
    return (
      <div className="events-countdown-expired" role="status">
        This event date has passed
      </div>
    );
  }

  const countdownItems = [
    {
      value: timeLeft.days,
      label: "Days",
    },
    {
      value: timeLeft.hours,
      label: "Hours",
    },
    {
      value: timeLeft.minutes,
      label: "Minutes",
    },
    {
      value: timeLeft.seconds,
      label: "Seconds",
    },
  ];

  return (
    <div
      className="events-countdown"
      aria-label="Time remaining until the event"
      aria-live="polite"
    >
      {countdownItems.map((item) => (
        <div
          key={item.label}
          className="events-countdown-item"
        >
          <strong>{padNumber(item.value)}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const EventsPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const featuredRef = useRef<HTMLElement>(null);
  const secondaryRef = useRef<HTMLElement>(null);

  const featuredEvent: EventType = {
    id: 1,
    title: "Innovation Event 2026",
    description:
      "Join us for the upcoming Innovation Event 2026, a gathering that celebrates cutting-edge creativity, groundbreaking technologies, and strategic marketing insights. This event will host industry leaders, innovators, and professionals from around the globe, providing an unmatched platform for networking, knowledge exchange, and collaboration. Participants will explore key topics ranging from AI-driven marketing strategies to sustainable business practices, and gain insights into the latest trends shaping the future of communication and branding. Don't miss this opportunity to engage with thought leaders, witness live demonstrations, and discover opportunities that will elevate your business strategy and personal growth. The event will feature keynote speeches, panel discussions, interactive workshops, and exclusive networking sessions designed to inspire, inform, and empower all attendees.",
    date: "2026-05-10",
    isoDate: "2026-05-10T09:00:00",
    location: "Cairo, Egypt",
    logo: mainLogo,
    link: "https://www.prcircle.shop",
  };

  const secondaryEvent: EventType = {
    id: 2,
    title: "Media Summit 2026",
    description:
      "Experience the Media Summit 2026, connecting marketing, media, and communication professionals across MENA. Learn from industry pioneers, explore innovative case studies, and gain practical insights to transform your organization's marketing strategy. Workshops, networking lounges, and keynote sessions are tailored to empower professionals with actionable knowledge. Whether you're seeking inspiration, partnership opportunities, or new skillsets, the Media Summit is your destination for excellence in communication.",
    date: "8th April 2026",
    isoDate: "2026-04-08T09:00:00",
    location: "Civic education center, Al Geezira",
    image: eventImage,
    logo: mainLogo,
  };

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          gsap
            .timeline({
              defaults: {
                ease: "power3.out",
              },
            })
            .fromTo(
              ".events-hero-logo-wrap",
              {
                y: 22,
                autoAlpha: 0,
                scale: 0.96,
              },
              {
                y: 0,
                autoAlpha: 1,
                scale: 1,
                duration: 0.65,
              },
            )
            .fromTo(
              ".events-hero-title",
              {
                y: 42,
                autoAlpha: 0,
              },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.82,
              },
              "-=0.3",
            )
            .fromTo(
              ".events-hero-subtitle",
              {
                y: 25,
                autoAlpha: 0,
              },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.65,
              },
              "-=0.4",
            )
            .fromTo(
              ".events-countdown, .events-countdown-expired",
              {
                y: 20,
                autoAlpha: 0,
              },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.55,
              },
              "-=0.32",
            )
            .fromTo(
              ".events-hero-scroll-btn",
              {
                y: 16,
                autoAlpha: 0,
              },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.5,
              },
              "-=0.25",
            );

          gsap.to(".events-hero-video", {
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
            ".events-featured-visual",
            {
              x: -45,
              autoAlpha: 0,
            },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: {
                trigger: featuredRef.current,
                start: "top 76%",
                once: true,
              },
            },
          );

          gsap.fromTo(
            ".events-featured-content > *",
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
            ".events-secondary-content > *",
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
                trigger: secondaryRef.current,
                start: "top 78%",
                once: true,
              },
            },
          );

          gsap.fromTo(
            ".events-secondary-media",
            {
              x: 45,
              autoAlpha: 0,
            },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: {
                trigger: secondaryRef.current,
                start: "top 78%",
                once: true,
              },
            },
          );
        },
      );
    }, pageRef);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  const scrollToEvents = () => {
    const section = featuredRef.current;

    if (!section) return;

    const rootStyles = getComputedStyle(document.documentElement);

    const navbarVariable =
      window.innerWidth <= 992
        ? "--mfm-navbar-mobile-height"
        : "--mfm-navbar-height";

    const navbarHeight =
      parseFloat(
        rootStyles.getPropertyValue(navbarVariable),
      ) || 84;

    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={pageRef}
      className="events-page-wrapper"
    >
      <main>
        <section
          ref={heroRef}
          className="events-hero-section"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="events-hero-video"
            aria-hidden="true"
          >
            <source
              src={heroVideo}
              type="video/mp4"
            />
          </video>

          <div className="events-hero-overlay" />

          <div className="events-shell events-hero-layout">
            <div className="events-hero-content">
              <div className="events-hero-logo-wrap">
                <img
                  src={mainLogo}
                  alt="MFM"
                  className="events-hero-logo"
                />
              </div>

              <h1 className="events-hero-title">
                Upcoming Events
              </h1>

              <p className="events-hero-subtitle">
                Explore our latest events, bringing together industry
                leaders, innovation, and unmatched networking
                opportunities across MENA.
              </p>

              <CountdownTimer
                targetDate={featuredEvent.isoDate}
              />

              <button
                type="button"
                className="events-hero-scroll-btn"
                onClick={scrollToEvents}
              >
                Discover Events
                <FaArrowDown aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        <section
          ref={featuredRef}
          id="events-list"
          className="events-featured-section"
        >
          <div className="events-shell">
            <article className="events-featured-card">
              <div className="events-featured-visual">
                <div className="events-featured-logo-card">
                  {featuredEvent.logo && (
                    <img
                      src={featuredEvent.logo}
                      alt={`${featuredEvent.title} logo`}
                    />
                  )}
                </div>

                <span className="events-featured-label">
                  Featured event
                </span>
              </div>

              <div className="events-featured-content">
                <span className="events-section-kicker">
                  Upcoming experience
                </span>

                <h2>{featuredEvent.title}</h2>

                <p className="events-featured-description">
                  {featuredEvent.description}
                </p>

                <div className="events-event-meta">
                  <div>
                    <span className="events-meta-icon">
                      <FaCalendarAlt aria-hidden="true" />
                    </span>

                    <div>
                      <small>Date</small>
                      <strong>{featuredEvent.date}</strong>
                    </div>
                  </div>

                  <div>
                    <span className="events-meta-icon">
                      <FaMapMarkerAlt aria-hidden="true" />
                    </span>

                    <div>
                      <small>Location</small>
                      <strong>{featuredEvent.location}</strong>
                    </div>
                  </div>
                </div>

                {featuredEvent.link && (
                  <a
                    href={featuredEvent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="events-primary-btn"
                  >
                    Learn more
                    <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          </div>
        </section>

        <section
          ref={secondaryRef}
          className="events-secondary-section"
        >
          <div className="events-shell">
            <article className="events-secondary-card">
              <div className="events-secondary-content">
                <span className="events-section-kicker">
                  More events
                </span>

                <h2>{secondaryEvent.title}</h2>

                <p>{secondaryEvent.description}</p>

                <div className="events-event-meta events-event-meta--secondary">
                  <div>
                    <span className="events-meta-icon">
                      <FaCalendarAlt aria-hidden="true" />
                    </span>

                    <div>
                      <small>Date</small>
                      <strong>{secondaryEvent.date}</strong>
                    </div>
                  </div>

                  <div>
                    <span className="events-meta-icon">
                      <FaMapMarkerAlt aria-hidden="true" />
                    </span>

                    <div>
                      <small>Location</small>
                      <strong>{secondaryEvent.location}</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="events-secondary-media">
                {secondaryEvent.image && (
                  <img
                    src={secondaryEvent.image}
                    alt={secondaryEvent.title}
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;