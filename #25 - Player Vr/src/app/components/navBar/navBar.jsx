import Image from "next/image";
import styles from "./navBar.module.css";

import slidebar from "../../../../public/images/akar-icons-sidebar-left.svg";
import previous from "../../../../public/images/chevron-back.svg";
import forward from "../../../../public/images/chevron-forward.svg";
import text from "../../../../public/images/text-2.svg";
import lock from "../../../../public/images/lock-closed-2.svg";
import refresh from "../../../../public/images/refresh-2.svg";
import share from "../../../../public/images/share-outline-1.svg";
import add from "../../../../public/images/add-outline-1.svg";
import copy from "../../../../public/images/copy-outline-1.svg";

export default function NavBar() {
  return (
    <main className={styles.main}>
      <nav className={styles.navegationBar}>
        <div className={styles.actions}>
          <Image
            className={styles.hovered}
            src={slidebar}
            alt="icon of slidebar"
            width={24}
            height={24}
          />
          <Image
            className={styles.hovered}
            src={previous}
            alt="icon of slidebar"
            width={24}
            height={24}
          />
          <Image
            className={styles.hovered}
            src={forward}
            alt="icon of slidebar"
            width={24}
            height={24}
          />
        </div>
        <div className={styles.adressBar}>
          <Image
            className={styles.hovered}
            src={text}
            alt="icon of slidebar"
            width={16}
            height={16}
          />
          <div className={styles.middleAdressBar}>
            <Image
              className={styles.hovered}
              src={lock}
              alt="icon of slidebar"
              width={16}
              height={16}
            />
            <span className={styles.adress}>rocketseat.com</span>
          </div>
          <Image
            className={styles.hovered}
            src={refresh}
            alt="icon of slidebar"
            width={24}
            height={24}
          />
        </div>
        <div className={styles.actions}>
          <Image
            className={styles.hovered}
            src={share}
            alt="icon of slidebar"
            width={24}
            height={24}
          />
          <Image
            className={styles.hovered}
            src={add}
            alt="icon of slidebar"
            width={24}
            height={24}
          />
          <Image
            className={styles.hovered}
            src={copy}
            alt="icon of slidebar"
            width={24}
            height={24}
          />
        </div>
      </nav>
    </main>
  );
}
