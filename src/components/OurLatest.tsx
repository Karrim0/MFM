import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import latestImage from "../assets/images/896a3483-1.png";
import "../styles/ourlatest.css";

gsap.registerPlugin(ScrollTrigger);

const LatestSection = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 80,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(textRef.current, {
                y: 40,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(imageRef.current, {
                x: -120,
                opacity: 0,
                scale: 1.1,
                duration: 1.4,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="our-latest"
            className="latest-section"
            ref={sectionRef}
        >
            <div className="latest-container">
                <div className="latest-image" ref={imageRef}>
                    <img
                        src={latestImage}
                        alt="Latest Work"
                    />
                </div>

                <div className="latest-content">
                    <h2 ref={titleRef}>
                        OUR <br /> LATEST
                    </h2>

                    <p ref={textRef}>
                        Discover our most recent creative work where innovation meets
                        precision. We craft digital experiences that elevate brands,
                        engage audiences, and deliver measurable impact. Every detail is
                        designed with purpose and executed with excellence.
                    </p>

                    {/* ================= LEARN MORE BUTTON ================= */}
                    <button
                        className="ourlatest-btn"
                        onClick={() => navigate("/events")} // <-- put the page route here
                    >
                        Learn more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LatestSection;