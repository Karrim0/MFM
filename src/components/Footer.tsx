import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Home,
  Info,
  BriefcaseBusiness,
  CalendarDays,
  Newspaper,
  FileText,
  Monitor,
  UsersRound,
  Phone,
} from "lucide-react";

import "../styles/footer.css";
import logo from "../assets/images/لوجو/لوجو2.webp";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const select = gsap.utils.selector(footer);

        const gridPattern = select(".mfm-footer-background-grid");
        const glows = select(".mfm-footer-glow");

        const logoWrapper = select(".mfm-footer-logo-wrapper");
        const brandTitle = select(".mfm-footer-brand-title");
        const brandDescription = select(".mfm-footer-brand-description");

        const columnHeadings = select(
          ".mfm-footer-title, .mfm-footer-heading",
        );

        const columnDescriptions = select(".mfm-footer-description");
        const linkItems = select(".mfm-footer-link-item");
        const socialLinks = select(".mfm-social-link");
        const footerBottom = select(".mfm-footer-bottom");

        const animatedElements = [
          ...logoWrapper,
          ...brandTitle,
          ...brandDescription,
          ...columnHeadings,
          ...columnDescriptions,
          ...linkItems,
          ...socialLinks,
          ...footerBottom,
        ];

        gsap.set(animatedElements, {
          willChange: "transform, opacity",
        });

        const glowOneMovement = gsap.to(".mfm-footer-glow--one", {
          x: 10,
          y: -8,
          duration: 11,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          paused: true,
        });

        const glowTwoMovement = gsap.to(".mfm-footer-glow--two", {
          x: -9,
          y: 11,
          duration: 13,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          paused: true,
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: footer,
            start: "top 94%",
            once: true,
            invalidateOnRefresh: true,
          },
          defaults: {
            ease: "power2.out",
          },
          onComplete: () => {
            gsap.set(animatedElements, {
              clearProps: "willChange",
            });

            glowOneMovement.play();
            glowTwoMovement.play();
          },
        });

        timeline
          .fromTo(
            gridPattern,
            {
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              duration: 1.1,
              clearProps: "opacity,visibility",
            },
            0,
          )
          .fromTo(
            glows,
            {
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              duration: 1.2,
              stagger: 0.12,
              clearProps: "opacity,visibility",
            },
            0,
          )
          .fromTo(
            logoWrapper,
            {
              y: 18,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.75,
              force3D: true,
              clearProps: "transform,opacity,visibility",
            },
            0.08,
          )
          .fromTo(
            brandTitle,
            {
              y: 16,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              force3D: true,
              clearProps: "transform,opacity,visibility",
            },
            0.18,
          )
          .fromTo(
            brandDescription,
            {
              y: 12,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.72,
              force3D: true,
              clearProps: "transform,opacity,visibility",
            },
            0.3,
          )
          .fromTo(
            columnHeadings,
            {
              y: 14,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.68,
              stagger: 0.08,
              force3D: true,
              clearProps: "transform,opacity,visibility",
            },
            0.43,
          )
          .fromTo(
            columnDescriptions,
            {
              y: 10,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.68,
              stagger: 0.08,
              force3D: true,
              clearProps: "transform,opacity,visibility",
            },
            0.52,
          )
          .fromTo(
            linkItems,
            {
              y: 10,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.6,
              stagger: 0.045,
              force3D: true,
              clearProps: "transform,opacity,visibility",
            },
            0.57,
          )
          .fromTo(
            socialLinks,
            {
              y: 12,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.62,
              stagger: 0.07,
              force3D: true,
              clearProps: "transform,opacity,visibility",
            },
            0.92,
          )
          .fromTo(
            footerBottom,
            {
              y: 10,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.65,
              force3D: true,
              clearProps: "transform,opacity,visibility",
            },
            1.08,
          );
      });
    }, footer);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <footer ref={footerRef} className="mfm-footer">
      <div className="mfm-footer-background" aria-hidden="true">
        <span className="mfm-footer-glow mfm-footer-glow--one" />
        <span className="mfm-footer-glow mfm-footer-glow--two" />
        <span className="mfm-footer-background-grid" />
      </div>

      <section className="mfm-footer-brand">
        <div className="mfm-footer-logo-wrapper">
          <img
            src={logo}
            alt="Marketing Facility Management Logo"
            className="mfm-footer-logo"
            loading="lazy"
            decoding="async"
          />
        </div>

        <h2 className="mfm-footer-brand-title">
          Marketing Facility Management
        </h2>

        <p className="mfm-footer-brand-description">
          We create powerful marketing strategies, meaningful connections, and
          measurable business results.
        </p>
      </section>

      <div className="mfm-footer-container">
        <div className="mfm-footer-grid">
          <div className="mfm-footer-column">
            <h3 className="mfm-footer-title">MFM</h3>

            <p className="mfm-footer-description">
              A specialized marketing facility management company providing
              creative, strategic, and media solutions that help brands grow and
              connect with their audiences.
            </p>
          </div>

          <div className="mfm-footer-column">
            <h4 className="mfm-footer-heading">Quick Links</h4>

            <ul className="mfm-footer-links">
              <li className="mfm-footer-link-item">
                <Link to="/" className="mfm-footer-link">
                  <Home size={18} aria-hidden="true" />
                  <span>Home</span>
                </Link>
              </li>

              <li className="mfm-footer-link-item">
                <Link to="/about" className="mfm-footer-link">
                  <Info size={18} aria-hidden="true" />
                  <span>About Us</span>
                </Link>
              </li>

              <li className="mfm-footer-link-item">
                <Link to="/services" className="mfm-footer-link">
                  <BriefcaseBusiness size={18} aria-hidden="true" />
                  <span>Our Services</span>
                </Link>
              </li>

              <li className="mfm-footer-link-item">
                <Link to="/contact" className="mfm-footer-link">
                  <Mail size={18} aria-hidden="true" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mfm-footer-column">
            <h4 className="mfm-footer-heading">Explore</h4>

            <ul className="mfm-footer-links">
              <li className="mfm-footer-link-item">
                <Link to="/events" className="mfm-footer-link">
                  <CalendarDays size={18} aria-hidden="true" />
                  <span>Events</span>
                </Link>
              </li>

              <li className="mfm-footer-link-item">
                <Link to="/news" className="mfm-footer-link">
                  <Newspaper size={18} aria-hidden="true" />
                  <span>News</span>
                </Link>
              </li>

              <li className="mfm-footer-link-item">
                <Link to="/white-paper" className="mfm-footer-link">
                  <FileText size={18} aria-hidden="true" />
                  <span>White Paper</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mfm-footer-column">
            <h4 className="mfm-footer-heading">Marketing Solutions</h4>

            <ul className="mfm-footer-links">
              <li className="mfm-footer-link-item">
                <Link to="/media-monitoring" className="mfm-footer-link">
                  <Monitor size={18} aria-hidden="true" />
                  <span>Media Monitoring</span>
                </Link>
              </li>

              <li className="mfm-footer-link-item">
                <Link to="/influencers-marketing" className="mfm-footer-link">
                  <UsersRound size={18} aria-hidden="true" />
                  <span>Influencers Marketing</span>
                </Link>
              </li>

              <li className="mfm-footer-link-item">
                <Link to="/contact" className="mfm-footer-link">
                  <Phone size={18} aria-hidden="true" />
                  <span>Get in Touch</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mfm-footer-socials">
          <a href="#" className="mfm-social-link" aria-label="Facebook">
            <Facebook size={21} aria-hidden="true" />
          </a>

          <a href="#" className="mfm-social-link" aria-label="Twitter">
            <Twitter size={21} aria-hidden="true" />
          </a>

          <a href="#" className="mfm-social-link" aria-label="Instagram">
            <Instagram size={21} aria-hidden="true" />
          </a>

          <a href="#" className="mfm-social-link" aria-label="LinkedIn">
            <Linkedin size={21} aria-hidden="true" />
          </a>

          <Link to="/contact" className="mfm-social-link" aria-label="Contact">
            <Mail size={21} aria-hidden="true" />
          </Link>
        </div>

        <div className="mfm-footer-bottom">
          <p>
            © {new Date().getFullYear()} Marketing Facility Management. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;