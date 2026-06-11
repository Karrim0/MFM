import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone } from 'lucide-react';
import '../styles/philosophy.css';
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface PhilosophyCard {
    number: string;
    title: string;
    description: string;
}

const philosophyData: PhilosophyCard[] = [
    {
        number: '01',
        title: 'Systematic Approach',
        description:
            'We believe in a methodical and structured approach to every project. Our systematic methodology ensures consistency, quality, and measurable results across all client engagements. By following proven frameworks and best practices, we deliver solutions that are both innovative and reliable.',
    },
    {
        number: '02',
        title: 'Respect Matters',
        description:
            'Respect is the foundation of every relationship we build. We treat our clients, partners, and team members with the highest level of professionalism and consideration. This mutual respect creates an environment where creativity flourishes and collaboration thrives.',
    },
    {
        number: '03',
        title: 'Positive Message',
        description:
            'We are committed to spreading positivity through every campaign and interaction. Our communications are designed to inspire, engage, and create meaningful connections. By focusing on optimistic and authentic messaging, we help brands build lasting emotional bonds with their audiences.',
    },
];

const Philosophy = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonCTARef = useRef<HTMLButtonElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = containerRef.current?.querySelectorAll('.philosophy-column');

            if (cards) {
                gsap.fromTo(
                    cards,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top center+=100',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }

            gsap.fromTo(
                buttonCTARef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: buttonCTARef.current,
                        start: 'top center+=100',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="philosophy">
            <div className="philosophy-container" ref={containerRef}>
                <div className="philosophy-columns">
                    {philosophyData.map((item, index) => (
                        <div key={index} className="philosophy-column">
                            <div className="philosophy-icon">{item.number}</div>
                            <h3 className="philosophy-title">{item.title}</h3>
                            <p className="philosophy-description">{item.description}</p>
                        </div>
                    ))}
                </div>

                <button
                    ref={buttonCTARef}
                    className="philosophy-cta"
                    onClick={() => navigate("/contact")}
                >
                    <Phone className="cta-icon" size={24} />
                    <span>Call or mail to schedule your complimentary consult</span>
                </button>
            </div>
        </section>
    );
};

export default Philosophy;
