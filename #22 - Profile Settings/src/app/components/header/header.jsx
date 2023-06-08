import Image from "next/image";
import styles from "./header.module.css";

import profileIcon from "../../../../public/profileIcon.svg";

export default function Header() {
  return (
    <main className={styles.main}>
      <Image src={profileIcon} alt="" width={50} height={50} />
      <div className={styles.dataProfile}>
        <h2 className={styles.namePerson}>Marvin McKinney</h2>
        <span className={styles.emailPerson}>marvin.mckinney@example.com</span>
      </div>
    </main>
  );
}
