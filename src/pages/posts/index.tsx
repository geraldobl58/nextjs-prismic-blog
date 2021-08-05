import Link from 'next/link';
import { GetStaticProps } from 'next';

import SEO from '../../components/SEO';

import styles from './posts.module.scss';

export default function Posts() {
  return (
    <>
      <SEO title="Posts" />

      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="#">
            <a>
              <time>05 de Agosto de 2021</time>
              <strong>Titulo</strong>
              <p>Lorem ipsum dolor sit am</p>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const response = await fetch('http://localhost:3333/posts');
//   const posts = await response.json();

//   return {
//     props: {},
//     revalidate: 60 * 60 * 12, // horas
//   };
// };
