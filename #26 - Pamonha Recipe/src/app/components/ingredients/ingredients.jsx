import Image from "next/image";
import styles from "./ingredients.module.css";

import ingredients from "../../../../public/ingredients.svg";

export default function Ingredients({ count }) {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <Image src={ingredients} alt="" width={32} height={32} />
        <h3>Ingredientes</h3>
      </div>
      <ul className={styles.list}>
        <li>{1 * count} espiga de milho verde</li>
        <li>{1 * count} colher de sopa de açúcar</li>
        <li>{1 * count} colher de sopa de manteiga</li>
        <li>Sal a gosto</li>
        <li>Palha de milho (para embrulhar)</li>
      </ul>
    </main>
  );
}
