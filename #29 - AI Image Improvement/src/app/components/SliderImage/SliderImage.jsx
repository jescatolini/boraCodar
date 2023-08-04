import { useState } from "react";
import styles from "./SliderImage.module.css";

export default function SliderImage() {
  const [value, setValue] = useState(50);

  const sharpValue = value;
  const blurValue = 100 - value;

  const handleSliderChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <main>
      <div className={styles.container}>
        <div
          className={`${styles["color-layer"]} ${styles["sharp-color"]}`}
          style={{
            clipPath: `polygon(0 0, ${sharpValue}% 0, ${sharpValue}% 100%, 0 100%)`,
          }}
        ></div>
        <div
          className={`${styles["color-layer"]} ${styles["blur-color"]}`}
          style={{
            clipPath: `polygon(${sharpValue}% 0, 100% 0, 100% 100%, ${sharpValue}% 100%)`,
          }}
        ></div>
        <div className={styles["slider-container"]}>
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            className={styles.slider}
            id="myRange"
            onChange={handleSliderChange}
          />
        </div>
      </div>
    </main>
  );
}
