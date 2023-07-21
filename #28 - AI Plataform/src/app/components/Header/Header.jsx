import Image from "next/image";
import styles from "./Header.module.css";

import magicWand from "../../../../public/magic-wand.svg";

export default function Header() {
  return (
    <main className={styles.main}>
      <div className={styles.iconMagicWand}>
        <Image
          src={magicWand}
          alt="icon of a magic wand"
          width={40}
          height={40}
        />
      </div>
      <h3 className={styles.title}>
        Experimente o poder da Inteligência Artificial{" "}
      </h3>
    </main>
  );
}
