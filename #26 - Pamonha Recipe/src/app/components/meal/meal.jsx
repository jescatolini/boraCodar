import Image from "next/image";
import styles from "./meal.module.css";

import pamonha from "../../../../public/pamonha.svg";
import plus from "../../../../public/plus.svg";
import minus from "../../../../public/minus.svg";

export default function Meal({ count, increment, decrement }) {
    return (
        <main className={styles.meal}>
            <Image
                className={styles.pamonha}
                src={pamonha}
                alt="image of pamonha"
                width={409}
                height={293}
            />
            <div className={styles.description}>
                <h1 className={styles.title}>Pamonha</h1>
                <p className={styles.subtitle}>
                    Prato típico com milho verde ralado
                </p>
                <div className={styles.portions}>
                    <span>Porções</span>
                    <button className={styles.buttonPortion} type="button">
                        <Image
                            src={minus}
                            alt="icon of minus"
                            width={32}
                            height={32}
                            onClick={decrement}
                        />
                    </button>

                    <span>{count}</span>
                    <button
                        className={styles.buttonPortion}
                        type="button"
                        onClick={increment}
                    >
                        <Image
                            src={plus}
                            alt="icon of plus"
                            width={32}
                            height={32}
                        />
                    </button>
                </div>
            </div>
        </main>
    );
}
