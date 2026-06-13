import { useLayoutEffect, useRef } from "react";
import { ChevronsDown } from "lucide-react";
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

  const horizontalTriggerRef = useRef<ScrollTrigger | null>(null);

  const handleSkipGallery = () => {
    const section = sectionRef.current;
    const horizontalTrigger = horizontalTriggerRef.current;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (horizontalTrigger) {
      window.scrollTo({
        top: Math.ceil(horizontalTrigger.end) + 2,
        behavior: reducedMotion ? "auto" : "smooth",
      });

      return;
    }

    section?.nextElementSibling?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;

    if (!section || !viewport || !track || !progress) return;

    const media = gsap.matchMedia();

    const context = gsap.context(() => {
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

      const skipButton = section.querySelector<HTMLElement>(
        ".home-gallery__skip-button",
      );

      const progressTrack = section.querySelector<HTMLElement>(
        ".home-gallery__progress",
      );

      media.add("(prefers-reduced-motion: no-preference)", () => {
        if (
          !kicker ||
          !title ||
          !titleLine ||
          !subtitle ||
          !skipButton ||
          !progressTrack
        ) {
          return;
        }

        const animatedElements = [
          kicker,
          title,
          titleLine,
          subtitle,
          skipButton,
          track,
          progressTrack,
        ];

        gsap.set(animatedElements, {
          willChange: "transform, opacity",
        });

        const introTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
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
          },
        });

        introTimeline
          .fromTo(
            kicker,
            {
              y: 12,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.55,
              clearProps: "transform,opacity,visibility",
            },
            0,
          )
          .fromTo(
            title,
            {
              y: 18,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.75,
              clearProps: "transform,opacity,visibility",
            },
            0.08,
          )
          .fromTo(
            titleLine,
            {
              scaleX: 0,
              autoAlpha: 0,
              transformOrigin: "left center",
            },
            {
              scaleX: 1,
              autoAlpha: 1,
              duration: 0.6,
              clearProps: "transform,opacity,visibility",
            },
            0.2,
          )
          .fromTo(
            subtitle,
            {
              y: 14,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.68,
              clearProps: "transform,opacity,visibility",
            },
            0.14,
          )
          .fromTo(
            skipButton,
            {
              y: 10,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.6,
              clearProps: "transform,opacity,visibility",
            },
            0.24,
          )
          .fromTo(
            track,
            {
              y: 22,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.85,
              clearProps: "transform,opacity,visibility",
            },
            0.3,
          )
          .fromTo(
            progressTrack,
            {
              y: 8,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.55,
              clearProps: "transform,opacity,visibility",
            },
            0.46,
          );
      });

      media.add(
        "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
        () => {
          let isActive = true;
          let refreshFrame = 0;

          const getNavbarHeight = () => {
            const rootStyles = getComputedStyle(document.documentElement);

            return (
              parseFloat(rootStyles.getPropertyValue("--mfm-navbar-height")) ||
              84
            );
          };

          const getScrollDistance = () =>
            Math.max(0, track.scrollWidth - viewport.clientWidth);

          const getScrollDuration = () =>
            Math.max(getScrollDistance(), window.innerHeight * 0.78);

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
              end: () => `+=${getScrollDuration()}`,

              pin: true,
              pinSpacing: true,
              scrub: 0.65,
              anticipatePin: 1,
              fastScrollEnd: true,
              invalidateOnRefresh: true,

              onUpdate: (self) => {
                setProgress(self.progress);
              },

              onRefresh: (self) => {
                setProgress(self.progress);
              },
            },
          });

          horizontalTriggerRef.current = horizontalTween.scrollTrigger ?? null;

          const requestRefresh = () => {
            cancelAnimationFrame(refreshFrame);

            refreshFrame = requestAnimationFrame(() => {
              if (isActive) {
                ScrollTrigger.refresh();
              }
            });
          };

          const resizeObserver = new ResizeObserver(requestRefresh);

          resizeObserver.observe(viewport);

          const images = Array.from(
            track.querySelectorAll<HTMLImageElement>("img"),
          );

          Promise.allSettled(
            images.map((image) => {
              if (image.complete) {
                return image.decode?.() ?? Promise.resolve();
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
          ).then(() => {
            requestRefresh();
          });

          return () => {
            isActive = false;

            cancelAnimationFrame(refreshFrame);
            resizeObserver.disconnect();

            horizontalTriggerRef.current = null;

            horizontalTween.scrollTrigger?.kill();
            horizontalTween.kill();
          };
        },
      );

      media.add("(max-width: 900px)", () => {
        horizontalTriggerRef.current = null;

        gsap.set(track, {
          clearProps: "transform",
        });

        gsap.set(progress, {
          scaleX: 1,
        });
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        horizontalTriggerRef.current = null;

        gsap.set(
          [
            kicker,
            title,
            titleLine,
            subtitle,
            skipButton,
            track,
            progressTrack,
          ],
          {
            clearProps: "all",
          },
        );

        gsap.set(progress, {
          scaleX: 1,
        });
      });
    }, section);

    return () => {
      horizontalTriggerRef.current = null;

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

          <div className="home-gallery__heading-side">
            <p className="home-gallery__subtitle">
              Explore our portfolio of successful campaigns, crafted to create
              meaningful connections, strengthen brands, and deliver measurable
              impact.
            </p>

            <button
              type="button"
              className="home-gallery__skip-button"
              onClick={handleSkipGallery}
              aria-label="Skip the projects gallery"
            >
              <span>Skip section</span>
              <ChevronsDown size={17} aria-hidden="true" />
            </button>
          </div>
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
