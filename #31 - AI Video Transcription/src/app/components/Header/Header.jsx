import Image from "next/image";
import styles from "./Header.module.css";

import magicWand from "../../../../public/magicWand.svg";

export default function Header() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Image
          src={magicWand}
          alt=" icon of a magic wand"
          height={32}
          width={32}
        />
        YouTube<strong>Transcription</strong>
      </header>
      <div className={styles.searchVideo}>
        <input className={styles.input} type="url" />
        <button className={styles.button}>Transcription</button>
      </div>
    </main>
  );
}
