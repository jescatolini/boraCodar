import Image from "next/image";
import styles from "./List.module.css";

import detailsIcon from "../../../public/detailsIcon.svg";
import fruitTag from "../../../public/fruitTag.svg";
import bakeryTag from "../../../public/bakeryTag.svg";
import drinkTag from "../../../public/drinkTag.svg";
import legumeTag from "../../../public/legumeTag.svg";
import meatTag from "../../../public/meatTag.svg";
import { useState } from "react";

export default function List({ items, setItems }) {
  const [checkedItems, setCheckedItems] = useState([]);
  const [deleteConfirmationIndex, setDeleteConfirmationIndex] = useState(-1);

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleDeleteConfirmation = (index) => {
    if (deleteConfirmationIndex === index) {
      setDeleteConfirmationIndex(-1); // Reset when clicking again
    } else {
      setDeleteConfirmationIndex(index);
    }
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setCheckedItems(new Array(updatedItems.length).fill(false));
    setItems(updatedItems);
  };

  return (
    <main className={styles.main}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.boxItem} ${
            checkedItems[index] ? styles.scratchedBoxItem : ""
          }`}
        >
          <div className={styles.checkboxItem}>
            <input
              type="checkbox"
              name=""
              id="{`checkbox-${index}`}"
              onChange={() => handleCheckboxChange(index)}
            />
            <div className={styles.items}>
              <h4
                className={`${styles.item} ${
                  checkedItems[index] ? styles.scratched : ""
                }`}
              >
                {item.item}
              </h4>
              <div className={styles.quantityAndUnity}>
                <span className={styles.quantity}>{item.quantity}</span>
                <span className={styles.unity}>{item.unity}</span>
              </div>
            </div>
          </div>
          <div className={styles.typeAndPlus}>
            <Image
              src={
                item.category === "Fruta"
                  ? fruitTag
                  : item.category === "Padaria"
                  ? bakeryTag
                  : item.category === "Bebida"
                  ? drinkTag
                  : item.category === "Legume"
                  ? legumeTag
                  : item.category === "Açogue"
                  ? meatTag
                  : ""
              }
              alt="tag of fruit product"
              width={82}
              height={32}
            />
            <Image
              className={styles.about}
              src={detailsIcon}
              alt="tag of fruit product"
              width={20}
              height={20}
              onClick={() => handleDeleteConfirmation(index)}
            />
            {deleteConfirmationIndex === index && (
              <span className={styles.deleteConfirmation}>
                Delete?{" "}
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(index)}
                >
                  Yes
                </button>
              </span>
            )}
          </div>
        </div>
      ))}
    </main>
  );
}
