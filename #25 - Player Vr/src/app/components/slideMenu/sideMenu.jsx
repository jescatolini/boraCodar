import Image from "next/image";
import styles from "./sideMenu.module.css";

import play from "../../../../public/images/play-circle-outline-1.svg";
import accessibility from "../../../../public/images/accessibility-outline-1.svg";
import albums from "../../../../public/images/albums-outline-1.svg";
import search from "../../../../public/images/search-outline-1.svg";

export default function SideMenu() {
  return (
    <main className={styles.main}>
      <div className={styles.sideMenu}>
        <Image
          className={styles.hovered}
          src={play}
          alt="icon of button play"
          width={24}
          height={24}
        />
        <Image
          className={styles.hovered}
          src={accessibility}
          alt="icon of accessbility"
          width={24}
          height={24}
        />
        <Image
          className={styles.hovered}
          src={albums}
          alt="icon of media albums"
          width={24}
          height={24}
        />
        <Image
          className={styles.hovered}
          src={search}
          alt="icon of search"
          width={24}
          height={24}
        />
      </div>
    </main>
  );
}
