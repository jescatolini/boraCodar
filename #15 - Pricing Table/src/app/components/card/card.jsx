import Image from "next/image";
import styles from "./card.module.css";
import check from "../../../../public/check.svg";
import information from "../../../../public/information.svg";

export default function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <p className={styles.titleCard}>Para você começar</p>
                <div className={styles.nameProduct}>
                    <span className={styles.titleProduct}>Essentials</span>
                    <span className={styles.priceProduct}>R$ 19,97/mês</span>
                </div>
                <button className={styles.buttonSign} type="submit">
                    Assinar agora
                </button>
                <div className={styles.divider}></div>
                <div className={styles.features}>
                    <div className={styles.eachFeature}>
                        <div className={styles.featuresDescription}>
                            <Image
                                src={check}
                                alt="check symbol"
                                height={20}
                                width={20}
                            />
                            <span>Até 3 usuários</span>
                        </div>
                        <Image
                            src={information}
                            alt="information symbol"
                            height={20}
                            width={20}
                        />
                    </div>
                    <div className={styles.eachFeature}>
                        <div className={styles.featuresDescription}>
                            <Image
                                src={check}
                                alt="check symbol"
                                height={20}
                                width={20}
                            />
                            <span>Autoatendimento</span>
                        </div>
                        <Image
                            src={information}
                            alt="information symbol"
                            height={20}
                            width={20}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.cardMiddle}>
                <span className={styles.goldenBadge}>MAIS VANTAJOSO</span>
                <p className={styles.titleCard}>Para você decolar</p>
                <div className={styles.nameProductMiddle}>
                    <span className={styles.titleProduct}>Ultimate</span>
                    <span className={styles.priceProduct}>R$ 29,97/mês</span>
                </div>
                <button className={styles.buttonSignMiddle} type="submit">
                    Assinar agora
                </button>
                <div className={styles.divider}></div>
                <div className={styles.features}>
                    <div className={styles.eachFeature}>
                        <div className={styles.featuresDescriptionMiddle}>
                            <Image
                                src={check}
                                alt="check symbol"
                                height={20}
                                width={20}
                            />
                            <span>Usuários ilimitados</span>
                        </div>
                        <Image
                            src={information}
                            alt="information symbol"
                            height={20}
                            width={20}
                        />
                    </div>
                    <div className={styles.eachFeature}>
                        <div className={styles.featuresDescriptionMiddle}>
                            <Image
                                src={check}
                                alt="check symbol"
                                height={20}
                                width={20}
                            />
                            <span>Suporte 24/7</span>
                        </div>
                        <Image
                            src={information}
                            alt="information symbol"
                            height={20}
                            width={20}
                        />
                    </div>
                    <div className={styles.eachFeature}>
                        <div className={styles.featuresDescriptionMiddle}>
                            <Image
                                src={check}
                                alt="check symbol"
                                height={20}
                                width={20}
                            />
                            <span>CSM Dedicado</span>
                        </div>
                        <Image
                            src={information}
                            alt="information symbol"
                            height={20}
                            width={20}
                        />
                    </div>
                    <div className={styles.eachFeature}>
                        <div className={styles.featuresDescriptionMiddle}>
                            <Image
                                src={check}
                                alt="check symbol"
                                height={20}
                                width={20}
                            />
                            <span>Treinamentos</span>
                        </div>
                        <Image
                            src={information}
                            alt="information symbol"
                            height={20}
                            width={20}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <p className={styles.titleCard}>Para sua empresa</p>
                <div className={styles.nameProduct}>
                    <span className={styles.titleProduct}>Enterprise</span>
                </div>
                <button className={styles.buttonSign} type="submit">
                    Fale com a gente
                </button>
                <div className={styles.divider}></div>
                <div>
                    <div className={styles.featuresDescription}>
                        <Image
                            src={check}
                            alt="check symbol"
                            height={20}
                            width={20}
                        />
                        <span>
                            Plano customizado especialmente para a necessidade
                            de seu negocio
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
