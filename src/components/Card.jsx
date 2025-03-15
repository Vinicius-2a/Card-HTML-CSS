import styles from './Card.module.css';
import image from '../assets/images/illustration-article.svg'
import imagePerfil from '../assets/images/perfil.jfif'

export function Card() {
    return (
      <>
      <main className={styles.container}>
        <article className={styles.card}>
          <header className={styles.cardImg}>
            <img src={image} />
          </header>

          <div className={styles.cardContainer}>
            <span className={styles.tag}>Apredizado</span>
            <p className={styles.publishDate}>Publicado em 21 de dezembro de 2023</p>
            <h1 className={styles.title}>Fundamentos de HTML e CSS</h1>
            <p className={styles.description}>Essas linguagens são a espinha dorsal de todo site, definindo estrutura, conteúdo e apresentação.</p>

            <footer className={styles.author}>
              <img src={imagePerfil} alt="Foto do autor" className={styles.authorImage} />
              <span className={styles.authorName}>Vinícius Almeida</span>
            </footer>
          </div>

        </article>
      </main>
    </>
    )
}