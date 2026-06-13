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
      const background = section.querySelector<HTMLElement>(
        ".home-gallery__background",
      );

      const grid = section.querySelector<HTMLElement>(".home-gallery__grid");

      const glows = Array.from(
        section.querySelectorAll<HTMLElement>(".home-gallery__glow"),
      );

      const kicker = section.querySelector<HTMLElement>(
        ".home-gallery__kicker",
      );

      const title = section.querySelector<HTMLElement>(".home-gallery__title");

      const titleLine = section.querySelector<HTMLElement>(
        ".home-gallery__title-line",
      );

      const subtitle = section.querySelector<HTMLElement>(
        ".home-gallery__subtitle",
      );

      const cards = Array.from(
        section.querySelectorAll<HTMLElement>(".home-gallery__card"),
      );

      const cardNumbers = Array.from(
        section.querySelectorAll<HTMLElement>(".home-gallery__card-number"),
      );

      const captionLabels = Array.from(
        section.querySelectorAll<HTMLElement>(".home-gallery__caption-label"),
      );

      const captionTitles = Array.from(
        section.querySelectorAll<HTMLElement>(".home-gallery__caption h3"),
      );

      const progressTrack = section.querySelector<HTMLElement>(
        ".home-gallery__progress",
      );

      media.add("(prefers-reduced-motion: no-preference)", () => {
        if (
          !background ||
          !grid ||
          !kicker ||
          !title ||
          !titleLine ||
          !subtitle ||
          !progressTrack
        ) {
          return;
        }

        const isMobile = window.matchMedia("(max-width: 900px)").matches;

        const introTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: () => (isMobile ? "top 88%" : "top 82%"),
            once: true,
            invalidateOnRefresh: true,
          },
          defaults: {
            ease: "power3.out",
            force3D: true,
          },
        });

        introTimeline
          .fromTo(
            background,
            {
              scale: 1.045,
              autoAlpha: 0.75,
            },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 1.7,
              clearProps: "transform,opacity,visibility",
            },
            0,
          )
          .fromTo(
            grid,
            {
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              duration: 1.45,
              ease: "power2.out",
              clearProps: "opacity,visibility",
            },
            0.15,
          )
          .fromTo(
            glows,
            {
              scale: 0.78,
              autoAlpha: 0,
            },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 1.35,
              stagger: 0.18,
              ease: "power2.out",
            },
            0.12,
          )
          .fromTo(
            kicker,
            {
              x: isMobile ? 0 : -42,
              y: isMobile ? 24 : 8,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1,
              clearProps: "transform,opacity,visibility",
            },
            0.18,
          )
          .fromTo(
            title,
            {
              x: isMobile ? 0 : -52,
              y: isMobile ? 28 : 12,
              autoAlpha: 0,
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.18,
              clearProps: "transform,opacity,visibility",
            },
            0.32,
          )
          .fromTo(
            titleLine,
            {
              scaleX: 0,
              autoAlpha: 0,
            },
            {
              scaleX: 1,
              autoAlpha: 1,
              duration: 0.9,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            0.58,
          )
          .fromTo(
            subtitle,
            {
              x: isMobile ? 0 : 48,
              y: isMobile ? 28 : 14,
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
            0.44,
          )
          .fromTo(
            cards,
            {
              y: 48,
              scale: 0.965,
              autoAlpha: 0,
            },
            {
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 1.15,
              stagger: 0.13,
              clearProps: "transform,opacity,visibility",
            },
            0.7,
          )

          .fromTo(
            cardNumbers,
            {
              y: -12,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.75,
              stagger: 0.13,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            1,
          )
          .fromTo(
            captionLabels,
            {
              y: 14,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.75,
              stagger: 0.13,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            1.08,
          )
          .fromTo(
            captionTitles,
            {
              y: 22,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              stagger: 0.13,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            1.16,
          )
          .fromTo(
            progressTrack,
            {
              y: 12,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.85,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
            1.35,
          );

        gsap.to(".home-gallery__glow--one", {
          x: 14,
          y: -11,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          force3D: true,
        });

        gsap.to(".home-gallery__glow--two", {
          x: -12,
          y: 15,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          force3D: true,
        });
      });

      media.add(
        "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
        () => {
          const getNavbarHeight = () => {
            const rootStyles = getComputedStyle(document.documentElement);

            return (
              parseFloat(rootStyles.getPropertyValue("--mfm-navbar-height")) ||
              84
            );
          };

          const getScrollDistance = () =>
            Math.max(0, track.scrollWidth - viewport.clientWidth);

          const setProgress = gsap.quickSetter(progress, "scaleX");

          gsap.set(progress, {
            scaleX: 0,
            transformOrigin: "left center",
          });

          const horizontalTween = gsap.to(track, {
            x: () => -getScrollDistance(),
            ease: "none",
            force3D: true,

            scrollTrigger: {
              trigger: section,

              start: () => `top top+=${getNavbarHeight()}`,

              end: () =>
                `+=${Math.max(getScrollDistance(), window.innerHeight * 0.85)}`,

              pin: true,
              pinSpacing: true,
              scrub: 1.15,
              anticipatePin: 1,
              invalidateOnRefresh: true,

              onUpdate: (self) => {
                setProgress(self.progress);
              },
            },
          });

          const resizeObserver = new ResizeObserver(() => {
            ScrollTrigger.refresh();
          });

          resizeObserver.observe(viewport);
          resizeObserver.observe(track);

          const imageElements = Array.from(
            track.querySelectorAll<HTMLImageElement>("img"),
          );

          Promise.all(
            imageElements.map((image) => {
              if (image.complete) {
                if (image.decode) {
                  return image.decode().catch(() => undefined);
                }

                return Promise.resolve();
              }

              return new Promise<void>((resolve) => {
                image.addEventListener("load", () => resolve(), {
                  once: true,
                });

                image.addEventListener("error", () => resolve(), {
                  once: true,
                });
              });
            }),
          ).finally(() => {
            ScrollTrigger.refresh();
          });

          return () => {
            resizeObserver.disconnect();
            horizontalTween.scrollTrigger?.kill();
            horizontalTween.kill();
          };
        },
      );

      media.add("(max-width: 900px)", () => {
        gsap.set(track, {
          clearProps: "transform",
        });

        gsap.set(progress, {
          scaleX: 1,
        });
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            background,
            grid,
            ...glows,
            kicker,
            title,
            titleLine,
            subtitle,
            ...cards,
            ...cardNumbers,
            ...captionLabels,
            ...captionTitles,
            progressTrack,
          ],
          {
            clearProps: "all",
          },
        );

        gsap.set(track, {
          clearProps: "transform",
        });

        gsap.set(progress, {
          scaleX: 1,
        });
      });
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
      <div className="home-gallery__background" aria-hidden="true">
        <span className="home-gallery__glow home-gallery__glow--one" />
        <span className="home-gallery__glow home-gallery__glow--two" />
        <span className="home-gallery__grid" />
      </div>

      <div className="home-gallery__shell">
        <header className="home-gallery__heading">
          <div className="home-gallery__title-group">
            <span className="home-gallery__kicker">Selected projects</span>

            <h2 id="home-gallery-title" className="home-gallery__title">
              Our Work
            </h2>

            <span className="home-gallery__title-line" aria-hidden="true" />
          </div>

          <p className="home-gallery__subtitle">
            Explore our portfolio of successful campaigns, crafted to create
            meaningful connections, strengthen brands, and deliver measurable
            impact.
          </p>
        </header>

        <div ref={viewportRef} className="home-gallery__viewport">
          <div ref={trackRef} className="home-gallery__track" role="list">
            {galleryImages.map((item, index) => (
              <figure
                key={item.id}
                className={`home-gallery__card${
                  index === 0 ? " home-gallery__card--featured" : ""
                }`}
                role="listitem"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="home-gallery__image"
                  loading={index === 0 ? "eager" : "lazy"}
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
                  <span className="home-gallery__caption-label">Our Work</span>

                  <h3>{item.title}</h3>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="home-gallery__progress" aria-hidden="true">
          <span ref={progressRef} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
