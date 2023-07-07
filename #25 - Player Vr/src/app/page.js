import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './components/navBar/navBar'
import SideMenu from './components/slideMenu/sideMenu'
import Screen from './components/screen/screen.jsx'

import circle from '../../public/images/ellipse.svg'
import rectangle from '../../public/images/rectangle.svg'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.player}>
        <NavBar />
        <div className={styles.lowPlayer}>
          <SideMenu />
          <Screen />
        </div>
        <div className={styles.interaction}>
          <Image className={styles.circle} src={circle} alt='circle icon' height={8} width={8} />
          <Image className={styles.rectangle} src={rectangle} alt='rectangule icon' height={8} width={86} />
        </div>
      </div>
    </main>
  )
}
