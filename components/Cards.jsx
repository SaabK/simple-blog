import React from "react";
import Card from "./Card";
import styles from "../styles/Cards.module.css";

function Cards({ articles }) {
  return (
    <section className={styles.gridContainer}>
      {articles?.map((article) => (
        <Card key={article.id} article={article} />
      ))}
    </section>
  );
}

export default Cards;
