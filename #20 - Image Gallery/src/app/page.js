"use client";
import styles from './page.module.css'
import Title from './components/title/title'
import ColumnArt from './components/columnArt/columnArt'

export default function Home() {
  return (
    <main className={styles.main}>
      <Title />
      <ColumnArt />
    </main>
  )
}
