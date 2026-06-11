import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/gallery.css";

import gallery1 from "../assets/images/work/work1.jpeg";
import gallery2 from "../assets/images/work/work2.jpeg";
import gallery3 from "../assets/images/work/work3.jpeg";
import gallery4 from "../assets/images/work/work4.jpeg";
import gallery5 from "../assets/images/work/work5.jpeg";
import gallery6 from "../assets/images/work/work6.jpeg";
import gallery7 from "../assets/images/work/work7.jpeg";

gsap.registerPlugin(ScrollTrigger);

interface GalleryImage {
    id: number;
    title: string;
    image: string;
}

const galleryImages: GalleryImage[] = [
    { id: 1, title: "Campaign 1", image: gallery1 },
    { id: 2, title: "Campaign 2", image: gallery2 },
    { id: 3, title: "Campaign 3", image: gallery3 },
    { id: 4, title: "Campaign 4", image: gallery4 },
    { id: 5, title: "Campaign 5", image: gallery5 },
    { id: 6, title: "Campaign 6", image: gallery6 },
    { id: 7, title: "Campaign 7", image: gallery7 },
];

const Gallery = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const viewportRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLSpanElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const viewport = viewportRef.current;
        const track = trackRef.current;
        const progress = progressRef.current;

        if (!section || !viewport || !track || !progress) return;

        const media = gsap.matchMedia();

        const context = gsap.context(() => {
            gsap.fromTo(
                ".home-gallery__heading > *",
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
                        trigger: section,
                        start: "top 82%",
                    },
                }
            );

            gsap.fromTo(
                ".home-gallery__card",
                {
                    y: 35,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 78%",
                    },
                }
            );

            media.add(
                "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
                () => {
                    const getNavbarHeight = () => {
                        const rootStyles = getComputedStyle(
                            document.documentElement
                        );

                        return (
                            parseFloat(
                                rootStyles.getPropertyValue(
                                    "--mfm-navbar-height"
                                )
                            ) || 84
                        );
                    };

                    const getScrollDistance = () =>
                        Math.max(
                            0,
                            track.scrollWidth - viewport.clientWidth
                        );

                    gsap.set(progress, {
                        scaleX: 0,
                        transformOrigin: "left center",
                    });

                    const horizontalTween = gsap.to(track, {
                        x: () => -getScrollDistance(),
                        ease: "none",

                        scrollTrigger: {
                            trigger: section,

                            start: () =>
                                `top top+=${getNavbarHeight()}`,

                            end: () =>
                                `+=${Math.max(
                                    getScrollDistance(),
                                    window.innerHeight * 0.8
                                )}`,

                            pin: true,
                            pinSpacing: true,
                            scrub: 1,
                            anticipatePin: 1,
                            invalidateOnRefresh: true,

                            onUpdate: (self) => {
                                gsap.set(progress, {
                                    scaleX: self.progress,
                                });
                            },
                        },
                    });

                    const resizeObserver = new ResizeObserver(() => {
                        ScrollTrigger.refresh();
                    });

                    resizeObserver.observe(viewport);
                    resizeObserver.observe(track);

                    const images = Array.from(
                        track.querySelectorAll<HTMLImageElement>("img")
                    );

                    Promise.all(
                        images.map((image) => {
                            if (image.complete) {
                                return image.decode?.().catch(() => undefined);
                            }

                            return new Promise<void>((resolve) => {
                                image.addEventListener(
                                    "load",
                                    () => resolve(),
                                    { once: true }
                                );

                                image.addEventListener(
                                    "error",
                                    () => resolve(),
                                    { once: true }
                                );
                            });
                        })
                    ).finally(() => {
                        ScrollTrigger.refresh();
                    });

                    return () => {
                        resizeObserver.disconnect();
                        horizontalTween.scrollTrigger?.kill();
                        horizontalTween.kill();
                    };
                }
            );

            media.add(
                "(max-width: 900px), (prefers-reduced-motion: reduce)",
                () => {
                    gsap.set(track, {
                        clearProps: "transform",
                    });

                    gsap.set(progress, {
                        scaleX: 1,
                    });
                }
            );
        }, section);

        return () => {
            media.revert();
            context.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="home-gallery"
            aria-labelledby="home-gallery-title"
        >
            <div className="home-gallery__background" aria-hidden="true" />

            <div className="home-gallery__shell">
                <header className="home-gallery__heading">
                    <h2
                        id="home-gallery-title"
                        className="home-gallery__title"
                    >
                        Our Work
                    </h2>

                    <p className="home-gallery__subtitle">
                        Explore our portfolio of successful campaigns
                    </p>
                </header>

                <div
                    ref={viewportRef}
                    className="home-gallery__viewport"
                >
                    <div
                        ref={trackRef}
                        className="home-gallery__track"
                        role="list"
                    >
                        {galleryImages.map((item, index) => (
                            <figure
                                key={item.id}
                                className={`home-gallery__card${
                                    index === 0
                                        ? " home-gallery__card--featured"
                                        : ""
                                }`}
                                role="listitem"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="home-gallery__image"
                                    loading="lazy"
                                    decoding="async"
                                />

                                <div
                                    className="home-gallery__card-overlay"
                                    aria-hidden="true"
                                />

                                <span className="home-gallery__card-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <figcaption className="home-gallery__caption">
                                    <span>Our Work</span>
                                    <h3>{item.title}</h3>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>

                <div
                    className="home-gallery__progress"
                    aria-hidden="true"
                >
                    <span ref={progressRef} />
                </div>
            </div>
        </section>
    );
};

export default Gallery;