
import Image from 'next/image'
import styles from '../styles/Yoda.module.css'

const Yoda = () => {
  return (
    <main className={styles.main}>
      <Image 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Retrato_del_Maestro_Yoda.jpg/640px-Retrato_del_Maestro_Yoda.jpg" 
        alt="Yoda" 
        width={400}
        height={400}
      />
      <h1 className={styles.title}>
        Hola soy un microfrontend del lado de la fuerza.
      </h1>
      <span>Estoy hosteado en <a target="_blank" href="https://eburgos-mf-app1.vercel.app" className={styles.link}>https://eburgos-mf-app1.vercel.app</a></span>
    </main>
  )
}

export default Yoda;
