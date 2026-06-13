import { useLayoutEffect, useRef, type FormEvent } from "react";
import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "../components/Footer";
import mapImage from "../assets/images/map.jpg";
import "../styles/contact.css";

gsap.registerPlugin(ScrollTrigger);

const CONTACT_EMAIL = "sk@mfmegypt.com";
const CONTACT_PHONE = "+20 150 385 5866";
const CONTACT_PHONE_LINK = "+201503855866";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Nasr+City+Cairo+Egypt";

const Contact = () => {
  const pageRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);
  const mapSectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const isDesktop = window.matchMedia("(min-width: 1121px)").matches;

        const contactTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: contactSectionRef.current,
            start: isDesktop ? "top 84%" : "top 91%",
            once: true,
            invalidateOnRefresh: true,
          },
          defaults: {
            ease: "power2.out",
          },
        });

        contactTimeline
          .addLabel("contactStart")
          .fromTo(
            ".contact-main-content .contact-section-kicker",
            {
              y: 14,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              clearProps: "transform,opacity,visibility",
            },
            "contactStart",
          )
          .fromTo(
            ".contact-main-content .contact-section-title",
            {
              y: 22,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              clearProps: "transform,opacity,visibility",
            },
            "contactStart+=0.1",
          )
          .fromTo(
            ".contact-main-content .contact-section-line",
            {
              scaleX: 0,
              autoAlpha: 0,
              transformOrigin: isDesktop ? "left center" : "center center",
            },
            {
              scaleX: 1,
              autoAlpha: 1,
              duration: 0.65,
              clearProps: "transform,opacity,visibility",
            },
            "contactStart+=0.25",
          )
          .fromTo(
            ".contact-main-content .contact-section-description",
            {
              y: 16,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.75,
              clearProps: "transform,opacity,visibility",
            },
            "contactStart+=0.3",
          )
          .fromTo(
            ".contact-info-card",
            {
              x: isDesktop ? -18 : 0,
              y: 18,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              stagger: 0.1,
              clearProps: "transform,opacity,visibility",
            },
            "contactStart+=0.48",
          )
          .fromTo(
            ".contact-form-card",
            {
              x: isDesktop ? 28 : 0,
              y: 18,
              scale: 0.99,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 1,
              clearProps: "transform,opacity,visibility",
            },
            "contactStart+=0.18",
          )
          .fromTo(
            ".contact-form-field",
            {
              y: 14,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.65,
              stagger: 0.07,
              clearProps: "transform,opacity,visibility",
            },
            "contactStart+=0.52",
          )
          .fromTo(
            ".contact-submit-button",
            {
              y: 12,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.65,
              clearProps: "transform,opacity,visibility",
            },
            "contactStart+=0.86",
          );

        const mapTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: mapSectionRef.current,
            start: isDesktop ? "top 84%" : "top 90%",
            once: true,
            invalidateOnRefresh: true,
          },
          defaults: {
            ease: "power2.out",
          },
        });

        mapTimeline
          .addLabel("mapStart")
          .fromTo(
            ".contact-map-section .contact-section-kicker",
            {
              y: 14,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              clearProps: "transform,opacity,visibility",
            },
            "mapStart",
          )
          .fromTo(
            ".contact-map-section .contact-section-title",
            {
              y: 22,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              clearProps: "transform,opacity,visibility",
            },
            "mapStart+=0.1",
          )
          .fromTo(
            ".contact-map-section .contact-section-line",
            {
              scaleX: 0,
              autoAlpha: 0,
              transformOrigin: "center center",
            },
            {
              scaleX: 1,
              autoAlpha: 1,
              duration: 0.65,
              clearProps: "transform,opacity,visibility",
            },
            "mapStart+=0.25",
          )
          .fromTo(
            ".contact-map-section .contact-section-description",
            {
              y: 16,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.75,
              clearProps: "transform,opacity,visibility",
            },
            "mapStart+=0.3",
          )
          .fromTo(
            ".contact-map-card",
            {
              y: 24,
              scale: 0.99,
              autoAlpha: 0,
            },
            {
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 1,
              clearProps: "transform,opacity,visibility",
            },
            "mapStart+=0.4",
          )
          .fromTo(
            ".contact-map-details",
            {
              x: isDesktop ? -20 : 0,
              y: isDesktop ? 0 : 15,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              clearProps: "transform,opacity,visibility",
            },
            "mapStart+=0.68",
          )
          .fromTo(
            ".contact-map-details > *",
            {
              y: 10,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.55,
              stagger: 0.07,
              clearProps: "transform,opacity,visibility",
            },
            "mapStart+=0.8",
          );
      });
    }, page);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`MFM website enquiry from ${name}`);

    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Interested in: ${service}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <main ref={pageRef} className="contact-page">
        <section
          ref={contactSectionRef}
          className="contact-main-section"
          aria-labelledby="contact-details-title"
        >
          <div className="contact-shell contact-main-layout">
            <div className="contact-main-content">
              <header className="contact-section-heading">
                <span className="contact-section-kicker">
                  Contact MFM Egypt
                </span>

                <h1
                  id="contact-details-title"
                  className="contact-section-title"
                >
                  Let&apos;s start a conversation.
                </h1>

                <span className="contact-section-line" aria-hidden="true" />

                <p className="contact-section-description">
                  Tell us about your goals, campaign, event, or marketing
                  challenge. Contact our team directly or send your project
                  details using the form below.
                </p>
              </header>

              <div className="contact-info-grid">
                <article className="contact-info-card">
                  <span className="contact-info-icon">
                    <MapPin aria-hidden="true" />
                  </span>

                  <h3>Address</h3>

                  <address>
                    <p>Shabrawi Khater</p>
                    <p>Nasr City, Cairo, Egypt</p>
                  </address>

                  <a href={MAP_URL} target="_blank" rel="noopener noreferrer">
                    View location
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </article>

                <article className="contact-info-card">
                  <span className="contact-info-icon">
                    <Phone aria-hidden="true" />
                  </span>

                  <h3>Phone</h3>

                  <a href={`tel:${CONTACT_PHONE_LINK}`}>
                    {CONTACT_PHONE}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </article>

                <article className="contact-info-card">
                  <span className="contact-info-icon">
                    <Mail aria-hidden="true" />
                  </span>

                  <h3>Email</h3>

                  <a href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </article>
              </div>
            </div>

            <form className="contact-form-card" onSubmit={handleSubmit}>
              <div className="contact-form-grid">
                <div className="contact-form-field">
                  <label htmlFor="contact-name">Your Name</label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-form-field">
                  <label htmlFor="contact-email">Email Address</label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="contact-form-field">
                  <label htmlFor="contact-phone">Phone Number</label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>

                <div className="contact-form-field">
                  <label htmlFor="contact-service">Interested In</label>

                  <input
                    id="contact-service"
                    name="service"
                    type="text"
                    required
                  />
                </div>

                <div className="contact-form-field contact-form-field--full">
                  <label htmlFor="contact-message">Comments</label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={7}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="contact-submit-button">
                <span>Send Message</span>
                <Send size={17} aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>

        <section
          ref={mapSectionRef}
          className="contact-map-section"
          aria-labelledby="contact-map-title"
        >
          <div className="contact-shell">
            <header className="contact-section-heading">
              <span className="contact-section-kicker">Contact Us</span>

              <h2 id="contact-map-title" className="contact-section-title">
                Get in Touch With Us
              </h2>

              <span className="contact-section-line" aria-hidden="true" />

              <p className="contact-section-description">
                Call or email to schedule your complimentary consultation.
              </p>
            </header>

            <div className="contact-map-card">
              <img
                src={mapImage}
                alt="Map showing the MFM Egypt office location in Nasr City, Cairo"
                className="contact-map-image"
                loading="lazy"
                decoding="async"
              />

              <div className="contact-map-shade" aria-hidden="true" />

              <div className="contact-map-details">
                <span className="contact-map-icon">
                  <Building2 aria-hidden="true" />
                </span>

                <span className="contact-map-label">MFM Egypt</span>

                <h3>Our Office</h3>

                <p>
                  Shabrawi Khater
                  <br />
                  Nasr City, Cairo, Egypt
                </p>

                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-button"
                >
                  Get Directions
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
