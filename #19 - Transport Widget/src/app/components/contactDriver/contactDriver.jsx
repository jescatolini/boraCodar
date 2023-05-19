import Image from "next/image";
import styles from "./contactDriver.module.css";

import shield from "../../../../public/shieldIcon.svg";
import phone from "../../../../public/phoneIcon.svg";

export default function ContactDriver() {
  return (
    <div className={styles.container}>
      <input
        className={styles.inputSendMessage}
        type="text"
        name="sendMessage"
        id="sendMessage"
        placeholder="Enviar mensagem para Boris..."
      />
      <div className={styles.emergencyIcons}>
        <Image
          className={styles.phone}
          src={phone}
          alt="icon of a phone"
          width={48}
          height={48}
        />
        <Image
          className={styles.shield}
          src={shield}
          alt="icon of a shield"
          width={46}
          height={48}
        />
      </div>
    </div>
  );
}
