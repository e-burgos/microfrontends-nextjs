
import Image from 'next/image'
import styles from '../styles/DarthVader.module.css'

const DarthVader = () => {
  return (
    <main className={styles.main}>
      <Image 
        src="https://cdn.pixabay.com/photo/2016/01/02/16/39/darth-vader-1118454_960_720.png" 
        alt="DarthVader" 
        width={300}
        height={400}
      />
      <h1 className={styles.title}>
        Hola soy un microfrontend del lado oscuro de la fuerza.
      </h1>
      <span>Estoy hosteado en <a target="_blank" href="https://eburgos-mf-app2.vercel.app" className={styles.link}>https://eburgos-mf-app2.vercel.app</a></span>
    </main>
  )
}

export default DarthVader;
