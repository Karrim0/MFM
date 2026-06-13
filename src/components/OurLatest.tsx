import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import latestImage from "../assets/images/896a3483-1.png";
import "../styles/ourlatest.css";

gsap.registerPlugin(ScrollTrigger);

const LatestSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      const select = gsap.utils.selector(section);

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.matchMedia("(max-width: 960px)").matches;

        const background = select<HTMLElement>(".home-latest-background");
        const grid = select<HTMLElement>(".home-latest-grid");
        const orbs = select<HTMLElement>(".home-latest-orb");

        const imageCard = select<HTMLElement>(".home-latest-image-card");
        const imageInner = select<HTMLElement>(".home-latest-image-inner");
        const image = select<HTMLImageElement>(".home-latest-image");

        const mutedTitle = select<HTMLElement>(
          ".home-latest-title-word--muted",
        );

        const solidTitle = select<HTMLElement>(
          ".home-latest-title-word--solid",
        );

        const titleLine = select<HTMLElement>(".home-latest-title-line");
        const description = select<HTMLElement>(".home-latest-description");

        const button = select<HTMLButtonElement>(".home-latest-button");
        const buttonIcon = select<SVGElement>(".home-latest-button-icon");

        const imageOffset = isMobile ? { y: 42 } : { x: -58, y: 14 };

        const contentOffset = isMobile ? { y: 32 } : { x: 54, y: 10 };

        gsap.set(background, {
          scale: 1.045,
          autoAlpha: 0.72,
          transformOrigin: "center",
          willChange: "transform, opacity",
        });

        gsap.set(grid, {
          autoAlpha: 0,
          willChange: "opacity",
        });

        gsap.set(orbs, {
          scale: 0.82,
          autoAlpha: 0,
          transformOrigin: "center",
          willChange: "transform, opacity",
        });

        gsap.set(imageCard, {
          ...imageOffset,
          scale: 0.965,
          autoAlpha: 0,
          willChange: "transform, opacity",
        });

        gsap.set(imageInner, {
          autoAlpha: 0,
          willChange: "opacity",
        });

        gsap.set(image, {
          scale: 1.09,
          willChange: "transform",
        });

        gsap.set(mutedTitle, {
          ...contentOffset,
          autoAlpha: 0,
          willChange: "transform, opacity",
        });

        gsap.set(solidTitle, {
          ...contentOffset,
          y: isMobile ? 36 : 16,
          autoAlpha: 0,
          willChange: "transform, opacity",
        });

        gsap.set(titleLine, {
          scaleX: 0,
          autoAlpha: 0,
          transformOrigin: isMobile ? "center center" : "left center",
          willChange: "transform, opacity",
        });

        gsap.set(description, {
          y: 30,
          autoAlpha: 0,
          willChange: "transform, opacity",
        });

        gsap.set(button, {
          y: 26,
          autoAlpha: 0,
          willChange: "transform, opacity",
        });

        gsap.set(buttonIcon, {
          x: -8,
          autoAlpha: 0,
          willChange: "transform, opacity",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: () => (isMobile ? "top 88%" : "top 80%"),
            once: true,
            invalidateOnRefresh: true,
          },
          defaults: {
            ease: "power3.out",
            force3D: true,
          },
        });

        timeline
          .addLabel("start", 0)

          .to(
            background,
            {
              scale: 1,
              autoAlpha: 1,
              duration: 1.7,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start",
          )

          .to(
            grid,
            {
              autoAlpha: 1,
              duration: 1.5,
              ease: "power2.out",
              clearProps: "opacity,visibility,willChange",
            },
            "start+=0.12",
          )

          .to(
            orbs,
            {
              scale: 1,
              autoAlpha: 1,
              duration: 1.4,
              stagger: 0.16,
              ease: "power2.out",
              clearProps: "scale,opacity,visibility,willChange",
            },
            "start+=0.1",
          )

          .to(
            imageCard,
            {
              x: 0,
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 1.45,
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start+=0.22",
          )

          .to(
            imageInner,
            {
              autoAlpha: 1,
              duration: 1.15,
              ease: "power2.out",
              clearProps: "opacity,visibility,willChange",
            },
            "start+=0.38",
          )

          .to(
            image,
            {
              scale: 1,
              duration: 1.75,
              ease: "power2.out",
              clearProps: "transform,willChange",
            },
            "start+=0.3",
          )

          .to(
            mutedTitle,
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.15,
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start+=0.42",
          )

          .to(
            solidTitle,
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.25,
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start+=0.62",
          )

          .to(
            titleLine,
            {
              scaleX: 1,
              autoAlpha: 1,
              duration: 0.95,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start+=0.88",
          )

          .to(
            description,
            {
              y: 0,
              autoAlpha: 1,
              duration: 1.15,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start+=1",
          )

          .to(
            button,
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start+=1.24",
          )

          .to(
            buttonIcon,
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.7,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start+=1.46",
          );

        gsap.to(".home-latest-orb--one", {
          x: 12,
          y: -10,
          duration: 7,
          delay: 1.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          force3D: true,
        });

        gsap.to(".home-latest-orb--two", {
          x: -10,
          y: 14,
          duration: 8,
          delay: 1.55,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          force3D: true,
        });

        gsap.to(".home-latest-orb--three", {
          x: 8,
          y: 10,
          duration: 6.5,
          delay: 1.7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          force3D: true,
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
      id="our-latest"
      ref={sectionRef}
      className="home-latest"
      aria-labelledby="home-latest-title"
    >
      <div className="home-latest-background" aria-hidden="true">
        <span className="home-latest-orb home-latest-orb--one" />
        <span className="home-latest-orb home-latest-orb--two" />
        <span className="home-latest-orb home-latest-orb--three" />
        <span className="home-latest-grid" />
      </div>

      <div className="home-latest-container">
        <div className="home-latest-image-card">
          <div className="home-latest-image-inner">
            <img
              src={latestImage}
              alt="MFM latest creative work"
              className="home-latest-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="home-latest-content">
          <h2 id="home-latest-title" className="home-latest-title">
            <span className="home-latest-title-word home-latest-title-word--muted">
              OUR
            </span>

            <span className="home-latest-title-word home-latest-title-word--solid">
              LATEST
            </span>
          </h2>

          <span className="home-latest-title-line" aria-hidden="true" />

          <p className="home-latest-description">
            Discover our most recent creative work where innovation meets
            precision. We craft digital experiences that elevate brands, engage
            audiences, and deliver measurable impact. Every detail is designed
            with purpose and executed with excellence.
          </p>

          <button
            type="button"
            className="home-latest-button"
            onClick={() => navigate("/events")}
          >
            <span>Learn more</span>

            <ArrowRight
              className="home-latest-button-icon"
              size={18}
              strokeWidth={2}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestSection;
