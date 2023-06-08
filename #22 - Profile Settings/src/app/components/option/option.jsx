import rightArrow from "../../../../public/rightArrow.svg";
import Image from "next/image";
import styles from "./option.module.css";

export default function Option({ image, description, actualIndex }) {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.startOption}>
                    <Image
                        className={styles.iconOption}
                        src={image}
                        alt="image of '{description}'"
                        width={16}
                        height={16}
                    />
                    <span className={styles.description}>{description}</span>
                </div>
                {actualIndex && (
                    <Image
                        src={rightArrow}
                        alt="a icon of right arrow"
                        width={16}
                        height={16}
                    />
                )}
            </div>
        </main>
    );
}
