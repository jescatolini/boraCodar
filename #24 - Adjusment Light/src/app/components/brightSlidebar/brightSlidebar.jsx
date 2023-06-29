import styles from "./brightSlidebar.module.css";

export default function BrighterSlider({ setBrightness }) {
    const handleSliderChange = (event) => {
        setBrightness(event.target.value);
    };

    return (
        <div>
            <input
                className={styles.slider}
                type="range"
                min={0}
                max={100}
                defaultValue={100}
                onChange={handleSliderChange}
            />
        </div>
    );
}
