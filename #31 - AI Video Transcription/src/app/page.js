import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header/Header'
import BoxVideo from './components/BoxVideo/BoxVideo'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header/>
        <BoxVideo />
      </div>
    </main>
  )
}
