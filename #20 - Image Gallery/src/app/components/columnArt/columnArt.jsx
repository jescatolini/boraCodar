import GalleryArt from "../galleryArt/galleryArt";
import styles from "./columnArt.module.css";

export default function ColumnArt() {
  return (
    <main>
      <div className={styles.gallery}>
        <GalleryArt />
      </div>
    </main>
  );
}
