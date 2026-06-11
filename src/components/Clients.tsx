import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/clients.css";

import client1 from "../assets/images/clients/client1.png";
import client2 from "../assets/images/clients/client2.jpeg";
import client3 from "../assets/images/clients/clent3.jpeg";

gsap.registerPlugin(ScrollTrigger);

interface ClientLogo {
    id: number;
    name: string;
    logo: string;
}

const clientsData: ClientLogo[] = [
    { id: 1, name: "Client 1", logo: client1 },
    { id: 2, name: "Client 2", logo: client2 },
    { id: 3, name: "Client 3", logo: client3 },
];

const Clients = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const media = gsap.matchMedia();

        const context = gsap.context(() => {
            media.add("(prefers-reduced-motion: no-preference)", () => {
                gsap.fromTo(
                    ".home-clients-heading > *",
                    {
                        y: 24,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.65,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                        },
                    }
                );

                gsap.fromTo(
                    ".home-client-card",
                    {
                        y: 32,
                        opacity: 0,
                        scale: 0.96,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.65,
                        stagger: 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".home-clients-grid",
                            start: "top 82%",
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
            className="home-clients"
            aria-labelledby="home-clients-title"
        >
            <div className="home-clients-background" aria-hidden="true" />

            <div className="home-clients-container">
                <header className="home-clients-heading">
                    <span className="home-clients-kicker">
                        Trusted Partnerships
                    </span>

                    <h2
                        id="home-clients-title"
                        className="home-clients-title"
                    >
                        Our Clients
                    </h2>

                    <p className="home-clients-subtitle">
                        Trusted by leading brands across the region
                    </p>
                </header>

                <div className="home-clients-grid">
                    {clientsData.map((client) => (
                        <article
                            key={client.id}
                            className="home-client-card"
                        >
                            <div className="home-client-logo-wrapper">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="home-client-logo"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;