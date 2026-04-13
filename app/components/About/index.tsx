"use client";

import { useRef } from "react";
import styles from "./About.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const briefs = [
  { label: "Format", value: "hands-on" },
  { label: "Approach", value: "prototype first" },
  { label: "Outcome", value: "actionable reps" },
];

const happenings = [
  "prototype sprints, not passive sessions",
  "feedback loops with people who have built",
  "a room where first-time founders can start messy",
];

const phases = [
  {
    step: "01",
    label: "Spot the problem",
    desc: "We start with raw observations, campus pain points, and unfinished ideas worth testing.",
  },
  {
    step: "02",
    label: "Make it tangible",
    desc: "Workshops, scrappy prototypes, and fast validation turn vague interest into something real.",
  },
  {
    step: "03",
    label: "Learn in public",
    desc: "Mentorship, demos, and iteration help student builders grow from concept to confidence.",
  },
];

const rules = [
  "start messy",
  "momentum matters",
  "feedback is part of the work",
  "show the work early",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            `.${styles.revealRail}`,
            `.${styles.revealPanel}`,
            `.${styles.revealBand}`,
            `.${styles.revealCard}`,
          ],
          { clearProps: "all", opacity: 1 },
        );
        return;
      }

      gsap.fromTo(
        `.${styles.revealRail}`,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

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
            trigger: `.${styles.introGrid}`,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        `.${styles.revealBand}`,
        { y: 24, opacity: 0, scaleX: 0.96 },
        {
          y: 0,
          opacity: 1,
          scaleX: 1,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.manifestoBand}`,
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        `.${styles.revealCard}`,
        { y: 46, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.dossierGrid}`,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section className={styles.about} id="about" ref={sectionRef}>
      <div className={`${styles.topRail} ${styles.revealRail}`} style={{ opacity: 0 }}>
        <span>About the bootcamp</span>
        <span>Startup practice / campus-built / serious student energy</span>
      </div>

      <div className={styles.introGrid}>
        <aside className={`${styles.indexCard} ${styles.revealPanel}`} style={{ opacity: 0 }}>
          <span className={styles.indexLabel}>Section 02</span>
          <span className={styles.indexWord}>ABOUT</span>
          <div className={styles.indexMeta}>
            {briefs.map((item) => (
              <div className={styles.metaRow} key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </aside>

        <div className={`${styles.storyPanel} ${styles.revealPanel}`} style={{ opacity: 0 }}>
          <p className={styles.eyebrow}>Why this exists</p>
          <h2 className={styles.heading}>
            More working room
            <span className={styles.headingAccent}>than club room.</span>
          </h2>
          <p className={styles.lead}>
            IEDC Bootcamp CEC is where curious students stop just consuming
            startup culture and start practicing it. It is a space for rough
            ideas, fast prototypes, honest feedback, and the kind of learning
            that only happens when you actually try to build.
          </p>
        </div>

        <aside className={`${styles.contextPanel} ${styles.revealPanel}`} style={{ opacity: 0 }}>
          <span className={styles.contextLabel}>What happens here</span>
          <ul className={styles.contextList}>
            {happenings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>

      <div className={`${styles.manifestoBand} ${styles.revealBand}`} style={{ opacity: 0 }}>
        <span className={styles.bandTag}>Operating line</span>
        <p>Not another campus club. A working room for builders.</p>
      </div>

      <div className={styles.dossierGrid}>
        <article className={`${styles.board} ${styles.briefBoard} ${styles.revealCard}`} style={{ opacity: 0 }}>
          <div className={styles.boardHeader}>
            <span>Bootcamp brief</span>
            <span>01</span>
          </div>

          <div className={styles.briefCopy}>
            <p>
              The bootcamp is built to give first-time founders a place to make
              ideas tangible before they feel fully ready.
            </p>
            <p>
              That means experimentation, iteration, and enough structure to
              help students move from interest to action.
            </p>
          </div>
        </article>

        <article className={`${styles.board} ${styles.processBoard} ${styles.revealCard}`} style={{ opacity: 0 }}>
          <div className={styles.boardHeader}>
            <span>How we move</span>
            <span>02</span>
          </div>

          <div className={styles.phaseList}>
            {phases.map((phase) => (
              <div className={styles.phaseItem} key={phase.step}>
                <span className={styles.phaseStep}>{phase.step}</span>
                <div className={styles.phaseBody}>
                  <h3 className={styles.phaseLabel}>{phase.label}</h3>
                  <p className={styles.phaseDesc}>{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className={`${styles.board} ${styles.rulesBoard} ${styles.revealCard}`} style={{ opacity: 0 }}>
          <div className={styles.boardHeader}>
            <span>Operating cues</span>
            <span>03</span>
          </div>

          <div className={styles.ruleStack}>
            {rules.map((rule) => (
              <span className={styles.ruleChip} key={rule}>
                {rule}
              </span>
            ))}
          </div>

          <p className={styles.rulesNote}>
            The vibe is ambitious but not corporate: slightly chaotic, highly
            practical, and focused on making progress visible.
          </p>
        </article>
      </div>
    </section>
  );
}
