import styles from "./opacitySlidebar.module.css";

export default function OpacitySlider({ setSaturation }) {
    const handleSliderChange = (event) => {
        setSaturation(event.target.value);
    };

    return (
        <div>
            <input
                className={styles.slider}
                type="range"
                min={0}
                max={100}
                onChange={handleSliderChange}
                defaultValue={50}
            />
        </div>
    );
}
