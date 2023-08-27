"use client";
import Image from "next/image";
import styles from "./BoxVideo.module.css";

import youtubeImage from "../../../../public/youtubeImage.svg";
import copyIcon from "../../../../public/copyIcon.svg";

export default function BoxVideo() {
  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <div>
          <Image
            src={youtubeImage}
            alt="picture of a youtube video"
            layout="responsive"
          />
        </div>
        <ul className={styles.list}>
          <li className={styles.pointList}>
            <span>00:00</span>
            <span>Consciousness is perhaps the biggest riddle in nature</span>
          </li>
          <li className={styles.pointList}>
            <span>00:04</span>
            <span>Stripped to its core meaning,</span>
          </li>
          <li className={styles.pointList}>
            <span>00:06</span>
            <span>
              consciousness is what allows us to be aware both of our
              surroundings
            </span>
          </li>
          <li className={styles.pointList}>
            <span>00:10</span>
            <span>and of our own inner state</span>
          </li>
          <li className={styles.pointList}>
            <span>00:13</span>
            <span>
              But thinking about consciousness has this habit of taking us round
              in circles.
            </span>
          </li>
          <li className={styles.pointList}>
            <span>00:19</span>
            <span>We all intuitively know what consciousness is.</span>
          </li>
          <li className={styles.pointList}>
            <span>00:22</span>
            <span>It`s this.</span>
          </li>
          <li className={styles.pointList}>
            <span>00:24</span>
            <span>It`s what you`re experiencing here, right now</span>
          </li>
        </ul>
        <button className={styles.copyButton}>
          <Image src={copyIcon} alt="" width={20} height={20} />
        </button>
      </div>
    </main>
  );
}
