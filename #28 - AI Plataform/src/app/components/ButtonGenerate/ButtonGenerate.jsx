import Image from "next/image";
import styles from "./ButtonGenerate.module.css";

import arrow from "../../../../public/arrow.svg";

export default function ButtonGenerate({ image, text, alt }) {
  return (
    <main className={styles.main}>
      <button className={styles.button}>
        <div className={styles.iconAndText}>
          <div className={styles.backgroundImageIcon}>
            <Image
              src={image}
              alt={`icon of a ${alt}`}
              width={32}
              height={32}
            />
          </div>
          <p className={styles.textButton}>{text}</p>
        </div>
        <Image src={arrow} alt="arrow icon" width={32} height={32} />
      </button>
    </main>
  );
}
