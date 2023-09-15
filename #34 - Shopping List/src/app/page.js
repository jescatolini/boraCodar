"use client"
import styles from './page.module.css'
import AddItem from './AddItem/AddItem'
import List from './List/List'
import { useState } from 'react'


export default function Home() {
  const [items, setItems] = useState([])

  const addItemToList = (newItem) => {
    setItems([...items, newItem])
  }

  

  return (
    <main className={styles.main}>
      <div>
      <h1 className={styles.title}>Lista de Compras</h1>
      <AddItem addItemToList={addItemToList} />
      <List items={items} setItems={setItems} />
      </div>
    </main>
  )
}
