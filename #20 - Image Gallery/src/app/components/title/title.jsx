import styles from "./title.module.css";
import rightDownArrow from "../../../../public/rightDownArrow.svg";
import Image from "next/image";

export default function Title() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>The — Abstract Gallery</h1>
      <button className={styles.buttonArrow}>
        <Image
          className={styles.rightDownArrow}
          src={rightDownArrow}
          alt="icon of right down arrow"
          width={32}
          height={32}
        />
      </button>
    </main>
  );
}
