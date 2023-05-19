import Image from 'next/image'
import styles from './page.module.css'
import TitleDriver from './components/titleDriver/titleDriver'
import DriverInformation from './components/driverInformation/driverInformation'
import ContactDriver from './components/contactDriver/contactDriver'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.barSlide}></div>
      <TitleDriver />
      <DriverInformation />
      <ContactDriver />
    </main>
  )
}
