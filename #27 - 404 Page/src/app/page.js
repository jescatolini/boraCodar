import Image404 from './components/image404/image404'
import Text from './components/text/text'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Text />
      <Image404 />
    </main>
  )
}
