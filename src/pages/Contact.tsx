import React, { useLayoutEffect, useRef } from "react";
import "../styles/contact.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mapImage from "../assets/images/map.jpg";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            /* ================= HEADER ================= */
            const heroTl = gsap.timeline();

            heroTl
                .from(".contact-header h1", {
                    y: 80,
                    opacity: 0,
                    duration: 1.5,
                    ease: "expo.out",
                })
                .from(
                    ".contact-header p",
                    {
                        y: 40,
                        opacity: 0,
                        duration: 1.2,
                        ease: "power2.out",
                    },
                    "-=1"
                );

            /* ================= INFO ================= */
            gsap.from(".info-item", {
                scrollTrigger: {
                    trigger: ".contact-info",
                    start: "top 80%",
                },
                x: (i) => (i % 2 === 0 ? -100 : 100),
                opacity: 0,
                duration: 1.3,
                stagger: 0.2,
                ease: "power3.out",
            });

            /* ================= FORM ================= */
            gsap.from(".contact-form", {
                scrollTrigger: {
                    trigger: ".form-section",
                    start: "top 85%",
                },
                y: 120,
                opacity: 0,
                duration: 1.5,
                ease: "expo.out",
            });

            /* ================= MAP ================= */
            gsap.from(".map-section", {
                scrollTrigger: {
                    trigger: ".map-section",
                    start: "top 85%",
                },
                y: 150,
                opacity: 0,
                duration: 1.6,
                ease: "expo.out",
            });

        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="contact-page" ref={pageRef}>

                {/* HEADER */}
                <div className="contact-header">
                    <h1>Get in Touch With Us</h1>
                    <p>Call or email to schedule your complimentary consultation</p>
                </div>

                {/* INFO */}
                <div className="contact-info">
                    <div className="info-item">
                        <h4>ADDRESS</h4>
                        <p>Shabrawi Khater</p>
                        <p>Nasr City, Cairo, Egypt</p>
                    </div>

                    <div className="divider" />

                    <div className="info-item">
                        <h4>PHONE</h4>
                        <p>Tel: +20 150 385 5866 </p>
                    </div>

                    <div className="divider" />

                    <div className="info-item">
                        <h4>EMAIL</h4>
                        <p>sk@mfmegypt.com
                            www.mfmegypt.net </p>
                    </div>
                </div>

                {/* FORM */}
                <div className="form-section">
                    <form className="contact-form">
                        <label>Your Name</label>
                        <input type="text" />

                        <label>Email Address</label>
                        <input type="email" />

                        <label>Phone Number</label>
                        <input type="text" />

                        <label>Interested In</label>
                        <input type="text" />

                        <label>Comments</label>
                        <textarea rows={6}></textarea>

                        <div className="recaptcha">
                            <input type="checkbox" />
                            <span>I'm not a robot</span>
                        </div>

                        <button type="submit" className="submit-btn">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>

                {/* MAP SECTION */}
                <section className="map-section">
                    <div className="map-container">
                        <img src={mapImage} alt="Location Map" />

                        <div className="map-overlay-card">
                            <h3>Our Office</h3>
                            <p>Fairhope, Alabama</p>
                            <button
                                className="map-btn"
                                onClick={() =>
                                    window.open("https://maps.google.com", "_blank")
                                }
                            >
                                Get Directions
                            </button>
                        </div>
                    </div>
                </section>

            </div>

            {/* FOOTER */}
            <Footer />
        </>
    );
};

export default Contact;