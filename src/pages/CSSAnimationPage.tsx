import styles from "./CSSAnimationPage.module.css";

export const CSSAnimationPage: React.FC = () => {
  return (
    <div className={styles.cssAnimationPage}>
      <div>
        <span className={styles.bumpingArrow}></span>
      </div>
      <div>
        <span className={styles.jumpingHalfCircle}></span>
      </div>
    </div>
  );
};
