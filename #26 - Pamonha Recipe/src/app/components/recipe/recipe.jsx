import Image from "next/image";
import styles from "./recipe.module.css";

import prepare from "../../../../public/prepare.svg";

export default function Recipe() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <Image
          src={prepare}
          alt="icon of a boiled pan"
          width={32}
          height={32}
        />
        <h3>Modo de preparo</h3>
      </div>
      <ol className={styles.list}>
        <li> Descasque a espiga de milho e corte os grãos.</li>
        <li>Bata o milho, açúcar, manteiga e sal no liquidificador.</li>
        <li>Coloque a massa nas palhas de milho e feche bem.</li>
        <li>Cozinhe em água fervente por cerca de 40 minutos.</li>
        <li>Deixe esfriar e sirva.</li>
      </ol>
    </main>
  );
}
