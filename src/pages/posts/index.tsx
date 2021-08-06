import Link from 'next/link';
import { GetStaticProps } from 'next';

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

import { getPrismicClient } from '../../services/prismic';

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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.content'],
    },
  );

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
    };
  });

  return {
    props: {},
    revalidate: 60 * 60 * 12, // horas
  };
};
