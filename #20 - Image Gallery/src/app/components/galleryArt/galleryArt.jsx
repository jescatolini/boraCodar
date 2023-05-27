import { useState } from "react";
import Image from "next/image";
import styles from "./galleryArt.module.css";
import art1 from "../../../../public/img1.svg";
import art2 from "../../../../public/img2.svg";
import art3 from "../../../../public/img3.svg";
import art4 from "../../../../public/img4.svg";
import art5 from "../../../../public/img5.svg";
import art6 from "../../../../public/img6.svg";
import art7 from "../../../../public/img7.svg";
import art8 from "../../../../public/img8.svg";

const gallery = [
  { id: 1, name: "imagem1", src: art1 },
  { id: 2, name: "imagem2", src: art2 },
  { id: 3, name: "imagem3", src: art3 },
  { id: 4, name: "imagem4", src: art4 },
  { id: 5, name: "imagem5", src: art5 },
  { id: 6, name: "imagem6", src: art6 },
  { id: 7, name: "imagem7", src: art7 },
  { id: 8, name: "imagem8", src: art8 },
];

export default function GalleryArt() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (id) => {
    setIsHovered(id);
  };

  return (
    <main>
      <div className={styles.gallery}>
        {gallery.map((item) => (
          <div
            key={item.id}
            className={`${styles[item.name]} ${styles.borderImage}`}
          >
            <Image
              width={100}
              height={100}
              src={item.src}
              alt={item.name}
              onMouseEnter={() => handleHover(item.id)}
              onMouseLeave={() => handleHover(null)}
            />
            {isHovered === item.id && (
              <div
                className={`${
                  isHovered ? styles.isHovered : styles.notHovered
                }`}
              >
                Abstract {item.name}
              </div>
            )}
          </div>
        ))}
        {console.log(isHovered)}
      </div>
    </main>
  );
}
