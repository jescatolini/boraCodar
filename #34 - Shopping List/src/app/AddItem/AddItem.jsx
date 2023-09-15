import Image from "next/image";
import styles from "./AddItem.module.css";

import addButton from "../../../public/addButton.png";
import { useState } from "react";

export default function AddItem({ addItemToList }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unity, setUnity] = useState("");
  const [category, setCategory] = useState("");

  const handleAddItem = () => {
    const newItem = {
      item,
      quantity,
      unity,
      category,
    };
    addItemToList(newItem);
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <label className={styles.label}>Item</label>
        <input
          onChange={(e) => setItem(e.target.value)}
          className={styles.input}
          type="text"
        />
      </section>
      <section className={styles.section}>
        <label id="item" className={styles.label}>
          Quantidade
        </label>
        <div className={styles.inputSelect}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            className={styles.inputTogether}
            type="text"
            id="item"
          />
          <select
            onChange={(e) => setUnity(e.target.value)}
            className={styles.selectTogether}
            name=""
            id=""
          >
            <option value="">Selecione</option>
            <option value="Gramas">Gramas</option>
            <option value="Litros">Litros</option>
            <option value="Unidades">Unidades</option>
          </select>
        </div>
      </section>
      <section className={styles.section}>
        <label id="category" className={styles.label}>
          Categoria
        </label>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className={styles.select}
          name=""
          id="category"
        >
          <option value="">Selecione</option>
          <option value="Açogue">Açogue</option>
          <option value="Bebida">Bebida</option>
          <option value="Fruta">Fruta</option>
          <option value="Legume">Legume</option>
          <option value="Padaria">Padaria</option>
        </select>
      </section>
      <button onClick={handleAddItem} className={styles.addButton}>
        <Image
          src={addButton}
          alt="icon of add button"
          width={40}
          height={40}
        />
      </button>
    </main>
  );
}
