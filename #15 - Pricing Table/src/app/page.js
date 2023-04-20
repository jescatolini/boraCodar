import Image from "next/image";
import { Titillium_Web } from "next/font/google";
import styles from "./page.module.css";
import Card from "./components/card/card";

const font = Titillium_Web({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function Home() {
    return (
        <main className={`${font.className} ${styles.main}`}>
            <Card />
        </main>
    );
}
