import Image from "next/image";
import styles from "./screen.module.css";

export default function Screen() {
  return (
    <main className={styles.main}>
      <div className={styles.screen}>
      <video style={{borderRadius: 32}} width="100%" height="100%" controls>
        <source
            src="/videos/mainScreen.mp4"
            type="video/mp4"
          />
        Desculpe, o seu navegador não suporta a reprodução de vídeos.
      </video>

      </div>
    </main>
  );
}
