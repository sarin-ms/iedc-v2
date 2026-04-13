"use client";

import { useRef, useEffect } from "react";
import styles from "./Team.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Faculty from "./Faculty";
import Execom from "./Execom";
import SubExecom from "./SubExecom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set([`.${styles.revealPanel}`], {
          clearProps: "all",
          opacity: 1,
        });
        return;
      }

      // Intro Panels
      gsap.fromTo(
        `.${styles.revealPanel}`,
        { y: 42, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.headingBlock}`,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  useEffect(() => {
    //change color of navbar on enter and leaving
    const navbar = document.getElementById("navbar-ref");
    if (!navbar) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 0%",
        toggleActions: "play none none reverse",
      },
    });
    // to match the nav color to the section color
    tl.to(navbar, {
      "--nav-color-rgb": "var(--team-color-rgb, 26, 26, 26)",
      "--nav-text-color": "var(--color-white)",
      "--nav-logo-color": "var(--color-white)",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className={styles.teamMain} id="team" ref={sectionRef}>
      <div className={styles.bgOverlay} />

      <div className={styles.contentWrapper}>
        <div
          className={`${styles.headingBlock} ${styles.revealPanel}`}
          style={{ opacity: 0, marginBottom: "3.5rem" }}
        >
          <h2 className={styles.heading}>
            <span className={styles.the}>THE</span>
            <span className={styles.crew}>CREW</span>
          </h2>
        </div>

        <div className={styles.teamGroup}>
          <Faculty />
        </div>
        <div className={styles.teamGroup}>
          <Execom />
        </div>
        <div className={styles.teamGroup}>
          <SubExecom />
        </div>
      </div>
    </section>
  );
}
