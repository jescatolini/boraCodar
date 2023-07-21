import Image from "next/image";
import styles from "./SearchBar.module.css";

import addArchiveIcon from "../../../../public/addArchiveIcon.svg";
import paperPlane from "../../../../public/paperPlane.svg";

export default function SearchBar() {
  return (
    <main className={styles.main}>
      <div className={styles.searchCommand}>
        <button className={styles.buttonAddArchive}>
          <Image
            src={addArchiveIcon}
            alt="icon of plus inside the circle to add archive"
            width={32}
            height={32}
          />
        </button>
        <input
          className={styles.inputSearch}
          type="text"
          placeholder="Envie uma mensagem ou digite “/” para exibir os comandos "
        ></input>
      </div>
      <button className={styles.imageSubmitSearch}>
        <Image
          src={paperPlane}
          alt="icon of a paper plane to submit the text"
          width={32}
          height={32}
        />
      </button>
    </main>
  );
}
