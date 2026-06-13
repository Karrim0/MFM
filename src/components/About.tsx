import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/about.css";

import aboutImage1 from "../assets/images/about/abot1.jpg";
import aboutImage2 from "../assets/images/about/about33.png";
import aboutImage3 from "../assets/images/about/about2.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      const select = gsap.utils.selector(sectionRef);

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        const kicker = select<HTMLElement>(".home-about-kicker");
        const title = select<HTMLElement>(".home-about-title");
        const titleLine = select<HTMLElement>(".home-about-title-line");
        const description = select<HTMLElement>(".home-about-description");
        const button = select<HTMLElement>(".home-about-button");
        const buttonIcon = select<SVGElement>(".home-about-button-icon");

        const mainCard = select<HTMLElement>(
          ".home-about-image-card--main",
        );

        const sideCards = select<HTMLElement>(
          ".home-about-image-card:not(.home-about-image-card--main)",
        );

        const mainImage = select<HTMLImageElement>(
          ".home-about-image-card--main .home-about-image",
        );

        const sideImages = select<HTMLImageElement>(
          ".home-about-image-card:not(.home-about-image-card--main) .home-about-image",
        );

        const overlay = select<HTMLElement>(".home-about-image-overlay");
        const experience = select<HTMLElement>(".home-about-experience");

        const experienceNumber = select<HTMLElement>(
          ".home-about-experience strong",
        );

        const experienceLabel = select<HTMLElement>(
          ".home-about-experience > span",
        );

        const contentOffset = isMobile
          ? { y: 28 }
          : { x: -48, y: 10 };

        const galleryOffset = isMobile
          ? { y: 38 }
          : { x: 52, y: 14 };

        if (countRef.current) {
          countRef.current.textContent = "0";
        }

        gsap.set(kicker, {
          ...contentOffset,
          autoAlpha: 0,
          willChange: "transform, opacity",
        });

        gsap.set(title, {
          ...contentOffset,
          autoAlpha: 0,
          willChange: "transform, opacity",
        });

        gsap.set(titleLine, {
          scaleX: 0,
          autoAlpha: 0,
          transformOrigin: "left center",
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

        gsap.set(mainCard, {
          ...galleryOffset,
          scale: 0.965,
          autoAlpha: 0,
          willChange: "transform, opacity",
        });

        gsap.set(sideCards, {
          ...galleryOffset,
          scale: 0.965,
          autoAlpha: 0,
          willChange: "transform, opacity",
        });

        gsap.set(mainImage, {
          scale: 1.09,
          willChange: "transform",
        });

        gsap.set(sideImages, {
          scale: 1.08,
          willChange: "transform",
        });

        gsap.set(overlay, {
          autoAlpha: 0,
          willChange: "opacity",
        });

        gsap.set(experience, {
          y: 26,
          autoAlpha: 0,
          willChange: "transform, opacity",
        });

        gsap.set(experienceNumber, {
          x: -12,
          autoAlpha: 0,
          willChange: "transform, opacity",
        });

        gsap.set(experienceLabel, {
          x: 12,
          autoAlpha: 0,
          willChange: "transform, opacity",
        });

        const counter = {
          value: 0,
        };

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
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
            kicker,
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.05,
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start",
          )

          .to(
            title,
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 1.2,
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start+=0.16",
          )

          .to(
            titleLine,
            {
              scaleX: 1,
              autoAlpha: 1,
              duration: 0.9,
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start+=0.4",
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
            "start+=0.52",
          )

          .to(
            button,
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start+=0.76",
          )

          .to(
            buttonIcon,
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.65,
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start+=0.98",
          )

          .to(
            mainCard,
            {
              x: 0,
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 1.4,
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start+=0.08",
          )

          .to(
            mainImage,
            {
              scale: 1,
              duration: 1.65,
              ease: "power2.out",
              clearProps: "transform,willChange",
            },
            "start+=0.08",
          )

          .to(
            sideCards,
            {
              x: 0,
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 1.25,
              stagger: 0.2,
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start+=0.38",
          )

          .to(
            sideImages,
            {
              scale: 1,
              duration: 1.45,
              stagger: 0.2,
              ease: "power2.out",
              clearProps: "transform,willChange",
            },
            "start+=0.38",
          )

          .to(
            overlay,
            {
              autoAlpha: 1,
              duration: 1,
              ease: "power2.out",
              clearProps: "opacity,visibility,willChange",
            },
            "start+=0.62",
          )

          .to(
            experience,
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start+=0.88",
          )

          .to(
            experienceNumber,
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.8,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start+=1.05",
          )

          .to(
            experienceLabel,
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.8,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility,willChange",
            },
            "start+=1.12",
          )

          .to(
            counter,
            {
              value: 40,
              duration: 2,
              ease: "power1.out",
              snap: {
                value: 1,
              },
              onUpdate: () => {
                if (countRef.current) {
                  countRef.current.textContent = Math.round(
                    counter.value,
                  ).toString();
                }
              },
              onComplete: () => {
                if (countRef.current) {
                  countRef.current.textContent = "40";
                }
              },
            },
            "start+=1.08",
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
      className="home-about"
      aria-labelledby="home-about-title"
    >
      <div className="home-about-container">
        <div className="home-about-content">
          <span className="home-about-kicker">
            About MFM Egypt
          </span>

          <h2
            id="home-about-title"
            className="home-about-title"
          >
            About Us
          </h2>

          <span
            className="home-about-title-line"
            aria-hidden="true"
          />

          <p className="home-about-description">
            With over 40 years of excellence in marketing facility management,
            we have established ourselves as a leading integrated marketing
            communications and public relations firm across Egypt, Qatar, and
            KSA.
          </p>

          <button
            type="button"
            className="home-about-button"
            onClick={() => navigate("/about")}
          >
            <span>Learn More</span>

            <ArrowRight
              className="home-about-button-icon"
              size={18}
              strokeWidth={2}
              aria-hidden="true"
            />
          </button>
        </div>

        <div
          className="home-about-gallery"
          aria-label="MFM projects and activities"
        >
          <figure className="home-about-image-card home-about-image-card--main">
            <img
              src={aboutImage1}
              alt="MFM marketing activity"
              className="home-about-image"
              decoding="async"
            />

            <div
              className="home-about-image-overlay"
              aria-hidden="true"
            />

            <figcaption className="home-about-experience">
              <strong>
                +<span ref={countRef}>40</span>
              </strong>

              <span>Years of experience</span>
            </figcaption>
          </figure>

          <figure className="home-about-image-card">
            <img
              src={aboutImage2}
              alt="MFM event and audience experience"
              className="home-about-image"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <figure className="home-about-image-card">
            <img
              src={aboutImage3}
              alt="MFM integrated marketing project"
              className="home-about-image"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;