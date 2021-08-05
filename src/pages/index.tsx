import SEO from '../components/SEO';

import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div>
      <SEO title="Inicio" />

      <main className={styles.content}>
        <section className={styles.section}>
          <span>Hello Dev</span>
          <h1>
            Bem vindo e bem vinda ao <br /> <span>Nextjs</span> Blog
          </h1>
          <p>
            Um blog desenvolvido com
            <span> NextJS e Prismic CMS</span>
          </p>
        </section>
        <img src="/home.svg" alt="Nextjs Blog" />
      </main>
    </div>
  );
}
