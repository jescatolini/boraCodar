import styles from "./text.module.css";

export default function Text() {
  return (
    <main className={styles.main}>
      <div className={styles.text}>
        <h3 className={styles.title}>Ops, esta página não foi encontrada</h3>
        <p className={styles.paragraph}>
          Parece que você se perdeu... Tente voltar para a página anterior ou
          acessar a home.
        </p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>voltar</button>
        <button className={styles.button}>ir para a home</button>
      </div>
    </main>
  );
}
