import styles from "./colorSliderbar.module.css";

export default function ColorSlider({ hue, setHue }) {
    const handleSliderChange = (event) => {
        const { value } = event.target;
        setHue(parseInt(value));
    };

    return (
        <div>
            <input
                className={styles.slider}
                type="range"
                min={0}
                max={360}
                defaultValue={265}
                onChange={handleSliderChange}
            />
        </div>
    );
}
