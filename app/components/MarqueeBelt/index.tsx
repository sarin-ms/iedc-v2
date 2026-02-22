import styles from "./MarqueeBelt.module.css";

const phrases = [
  "IEDC",
  "BOOTCAMP",
  "Upcoming Events",
  "Announcements",
  "What's New",
  "Don't Miss Out",
  "Stay Tuned",
  "Mark Your Calendar",
];

export default function MarqueeBelt() {
  const items = [...phrases, ...phrases];

  return (
    <div className={styles.belt}>
      <div className={styles.track}>
        {items.map((phrase, i) => (
          <span className={styles.item} key={i}>
            <span className={styles.text}>{phrase}</span>
            {i % 2 === 0 ? (
              <span className={styles.divider} aria-hidden="true" />
            ) : (
              <span className={styles.star} aria-hidden="true">
                ✦
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
