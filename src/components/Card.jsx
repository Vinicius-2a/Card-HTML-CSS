import styles from './Card.module.css';

export function Card() {
    return (
      <>
      <main className={styles.container}>
        <article className={styles.card}>
          <header className={styles.cardImg}>
            <img src="src\assets\images\illustration-article.svg" />
          </header>

          <div className={styles.cardContainer}>
            <span className={styles.tag}>Apredizado</span>
            <p className={styles.publishDate}>Publicado em 21 de dezembro de 2023</p>
            <h1 className={styles.title}>Fundamentos de HTML e CSS</h1>
            <p className={styles.description}>Essas linguagens são a espinha dorsal de todo site, definindo estrutura, conteúdo e apresentação.</p>

            <footer className={styles.author}>
              <img src="src/assets/images/perfil.jfif" alt="Foto do autor" className={styles.authorImage} />
              <span className={styles.authorName}>Vinícius Almeida</span>
            </footer>
          </div>

        </article>
      </main>
    </>
    )
}