"use client"
import styles from './page.module.css'
import SliderImage from './components/SliderImage/SliderImage'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <SliderImage />
      </div>
    </main>
  )
}
