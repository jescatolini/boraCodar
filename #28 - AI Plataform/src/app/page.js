import ButtonGenerate from './components/ButtonGenerate/ButtonGenerate'
import Header from './components/Header/Header'
import styles from './page.module.css'

import codeIcon from '../../public/codeIcon.svg'
import imageIcon from '../../public/imageSquareIcon.svg'
import playIcon from '../../public/playCircleIcon.svg'
import musicIcon from '../../public/musicIcon.svg'
import SearchBar from './components/SearchBar/SearchBar'

const infosButtons = [
  {id: 1, image: codeIcon, text: "Gerador de códigos", alt: "code"},
  {id: 2, image: imageIcon, text: "Edição de foto", alt: "image square"},
  {id: 3, image: playIcon, text: "Geração de vídeos", alt: "play button"},
  {id: 4, image: musicIcon, text: "Criador de áudios e musicas ", alt: "music"},
]

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <Header />
        {infosButtons.map((button) => (
          <ButtonGenerate
          key={button.id}
          image={button.image}
          text={button.text}
          alt={button.alt}
           />
        ))}
        <div className={styles.divider}></div>
        <SearchBar />
      </div>
    </main>
  )
}
