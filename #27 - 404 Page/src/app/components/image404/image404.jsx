import Image from "next/image";
import styles from "./image404.module.css";

import four from "../../../../public/number4.svg";
import planet from "../../../../public/planet.svg";

export default function Image404() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.number}
        src={four}
        alt="image of number four"
        width={80}
        height={105}
      />
      <Image
        className={styles.planet}
        src={planet}
        alt="image of a planet"
        width={230}
        height={230}
      />
      <Image
        className={styles.number}
        src={four}
        alt="image of number four"
        width={80}
        height={105}
      />
    </main>
  );
}
