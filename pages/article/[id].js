import { server } from "../../config";
import React from 'react';
import Image from "next/image";
import styles from '../../styles/BlogPost.module.css';

function Blog({ article }) {
  console.log(article);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{article.title}</h1>
      <p className={styles.excerpt}>{article.excerpt}</p>
      <Image src={article.img}
        width={854}
        height={480}
        className={styles.blogImage}
      />
      <hr />
      <p className={styles.description}>{article.description}</p>
    </div>
  )
}

export default Blog;

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: { article },
  };
};

export const getStaticPaths = async (context) => {
  console.log(context);

  const res = await fetch(`${server}/api/articles`);
  console.log(res);

  const articles = await res.json();

  const ids = articles.map(article => article.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }))


  return {
    paths,
    fallback: false
  }
}