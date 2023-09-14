import Image from "next/image";
import styles from "./Ticket.module.css";

import backgroundTicket from "../../../../public/backgroundTicket.svg";
import photo from "../../../../public/photo.svg";
import barcode from "../../../../public/barcode.svg";

export default function Ticket({ name, avatarUrl }) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Image
          className={styles.backgroundTicket}
          src={backgroundTicket}
          alt="left background of ticket"
          layout="responsive"
        />
        <div className={styles.infosUserTicket}>
          <div className={styles.nameAndPhoto}>
            {avatarUrl ? (
              <Image
                className={styles.photo}
                src={avatarUrl}
                alt="photo of github user"
                width={20}
                height={20}
                layout="responsive"
              />
            ) : (
              <Image
                className={styles.photo}
                src={photo}
                alt="example of photo"
                layout="responsive"
              />
            )}
            <span className={styles.crew}>Tripulante</span>
            <h3 className={styles.username}>{name}</h3>
          </div>
          <div className={styles.eventInfo}>
            <ul>
              <li className={styles.list}>
                <span>evento</span>
                <span>ia para devs</span>
              </li>
              <li className={styles.list}>
                <span>data</span>
                <span>14-16 AGO. 2023</span>
              </li>
              <li className={styles.list}>
                <span>hora</span>
                <span>ao vivo - 19h</span>
              </li>
            </ul>
            <Image
              className={styles.barcode}
              src={barcode}
              alt="image of barcode"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
