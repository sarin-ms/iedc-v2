"use client";

import { useRef } from "react";
import styles from "./Announcements.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const events = [
  {
    id: 1,
    title: "Startup Bootcamp",
    category: "Featured session",
    when: "APR 24",
    slot: "9:30 AM / Innovation Lab",
    note: "A hands-on sprint for students who want to move from a rough startup idea to a testable first prototype.",
    accent: "#e8a020",
  },
  {
    id: 2,
    title: "Ideathon 2026",
    category: "Open call",
    when: "MAY 03",
    slot: "10:00 AM / Main Block",
    note: "Fast teams, clear problem statements, and rapid idea shaping around campus and community challenges.",
    accent: "#c76a21",
  },
  {
    id: 3,
    title: "Pitch Night",
    category: "Community night",
    when: "MAY 10",
    slot: "5:30 PM / Media Hall",
    note: "Bring the early version, say it out loud, and get honest feedback before you polish too much.",
    accent: "#1a1a1a",
  },
  {
    id: 4,
    title: "Design Sprint",
    category: "Workshop",
    when: "MAY 16",
    slot: "2:00 PM / Studio Room",
    note: "A compact session on turning vague product instincts into clearer flows, interfaces, and experiments.",
    accent: "#2f6f5f",
  },
  {
    id: 5,
    title: "Hack and Build",
    category: "Build jam",
    when: "MAY 24",
    slot: "6:00 PM / Open Lab",
    note: "An evening build room for students who want accountability, quick help, and real shipping momentum.",
    accent: "#9f3d2c",
  },
];

const ticker = [
  "open calls",
  "prototype rooms",
  "pitch practice",
  "founder sessions",
  "demo nights",
];

export default function Announcements() {
  const sectionRef = useRef<HTMLElement>(null);
  const featuredEvent = events[0];
  const queuedEvents = events.slice(1);

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
            `.${styles.revealCard}`,
            `.${styles.revealTicker}`,
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
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.headerBlock}`,
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        `.${styles.revealCard}`,
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.contentGrid}`,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        `.${styles.revealTicker}`,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `.${styles.tickerRow}`,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section className={styles.container} id="events" ref={sectionRef}>
      <div className={`${styles.topRail} ${styles.revealRail}`} style={{ opacity: 0 }}>
        <span>Announcements</span>
        <span>Live board / upcoming sessions / next build moments</span>
      </div>

      <div className={styles.headerBlock}>
        <div className={`${styles.headingBlock} ${styles.revealPanel}`} style={{ opacity: 0 }}>
          <p className={styles.eyebrow}>Now announcing</p>
          <h2 className={styles.heading}>What is coming up.</h2>
          <p className={styles.intro}>
            Upcoming sessions, open calls, and build-room moments for students
            who want to stay in motion instead of waiting for the perfect time
            to start.
          </p>
        </div>

        <div className={`${styles.statusCard} ${styles.revealPanel}`} style={{ opacity: 0 }}>
          <span className={styles.statusLabel}>Board status</span>
          <strong>{events.length} active updates</strong>
          <p>Workshops, jams, and sessions currently on deck.</p>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <article
          className={`${styles.featureCard} ${styles.revealCard}`}
          style={
            {
              "--feature-accent": featuredEvent.accent,
              opacity: 0,
            } as React.CSSProperties
          }
        >
          <div className={styles.featureTopline}>
            <span>{featuredEvent.category}</span>
            <span>{featuredEvent.when}</span>
          </div>

          <div className={styles.featureBody}>
            <h3 className={styles.featureTitle}>{featuredEvent.title}</h3>
            <p className={styles.featureNote}>{featuredEvent.note}</p>
          </div>

          <div className={styles.featureMeta}>
            <span>{featuredEvent.slot}</span>
            <span>Open for first-time builders</span>
          </div>
        </article>

        <div className={styles.queueColumn}>
          {queuedEvents.map((event) => (
            <article
              className={`${styles.queueCard} ${styles.revealCard}`}
              key={event.id}
              style={
                {
                  "--queue-accent": event.accent,
                  opacity: 0,
                } as React.CSSProperties
              }
            >
              <div className={styles.queueDate}>
                <span>{event.when}</span>
              </div>

              <div className={styles.queueBody}>
                <div className={styles.queueTopline}>
                  <span>{event.category}</span>
                  <span>{event.slot}</span>
                </div>
                <h3 className={styles.queueTitle}>{event.title}</h3>
                <p className={styles.queueNote}>{event.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.tickerRow}>
        {ticker.map((item) => (
          <span className={`${styles.tickerChip} ${styles.revealTicker}`} key={item} style={{ opacity: 0 }}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
