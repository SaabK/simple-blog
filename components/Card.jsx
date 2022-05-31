import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card({ article }) {
  return (
    <div className="card" style={{ width: `${18}rem` }}>
      <Image
        src={article.img}
        width="1280px"
        height="720px"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.excerpt}</p>
        <Link href="/article/[id]" as={`/article/${article.id}`}>
          <a className="btn btn-primary">Read More</a>
        </Link>
      </div>
    </div>
  );
}

export default Card;
