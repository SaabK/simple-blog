import Head from "next/head";
import React from "react";

function Meta({ title, description, url }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="website content" content="programming, blogs, news" />
      <meta name="description" content={description} />
      <meta name="url" content={url} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charset="utf-8" />
    </Head>
  );
}

export default Meta;
