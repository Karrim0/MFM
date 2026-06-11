import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/philosophy.css";

gsap.registerPlugin(ScrollTrigger);

interface PhilosophyCard {
    number: string;
    title: string;
    description: string;
}

const philosophyData: PhilosophyCard[] = [
    {
        number: "01",
        title: "Systematic Approach",
        description:
            "We believe in a methodical and structured approach to every project. Our systematic methodology ensures consistency, quality, and measurable results across all client engagements. By following proven frameworks and best practices, we deliver solutions that are both innovative and reliable.",
    },
    {
        number: "02",
        title: "Respect Matters",
        description:
            "Respect is the foundation of every relationship we build. We treat our clients, partners, and team members with the highest level of professionalism and consideration. This mutual respect creates an environment where creativity flourishes and collaboration thrives.",
    },
    {
        number: "03",
        title: "Positive Message",
        description:
            "We are committed to spreading positivity through every campaign and interaction. Our communications are designed to inspire, engage, and create meaningful connections. By focusing on optimistic and authentic messaging, we help brands build lasting emotional bonds with their audiences.",
    },
];

const Philosophy = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const media = gsap.matchMedia();

        const context = gsap.context(() => {
            media.add("(prefers-reduced-motion: no-preference)", () => {
                gsap.fromTo(
                    ".home-philosophy-card",
                    {
                        y: 38,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        stagger: 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".home-philosophy-grid",
                            start: "top 78%",
                        },
                    }
                );

                gsap.fromTo(
                    ".home-philosophy-cta",
                    {
                        y: 25,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".home-philosophy-cta",
                            start: "top 88%",
                        },
                    }
                );
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
            className="home-philosophy"
            aria-label="Our philosophy"
        >
            <div className="home-philosophy-background" aria-hidden="true" />

            <div className="home-philosophy-container">
                <div className="home-philosophy-grid">
                    {philosophyData.map((item) => (
                        <article
                            key={item.number}
                            className="home-philosophy-card"
                        >
                            <span
                                className="home-philosophy-number"
                                aria-hidden="true"
                            >
                                {item.number}
                            </span>

                            <div className="home-philosophy-divider" />

                            <h3 className="home-philosophy-title">
                                {item.title}
                            </h3>

                            <p className="home-philosophy-description">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>

                <button
                    type="button"
                    className="home-philosophy-cta"
                    onClick={() => navigate("/contact")}
                >
                    <span className="home-philosophy-cta-icon">
                        <Phone size={20} aria-hidden="true" />
                    </span>

                    <span>
                        Call or mail to schedule your complimentary consult
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Philosophy;