import { server } from "../config";
import Cards from "../components/Cards";

export default function Home({ articles }) {
  return (
    <>
      <Cards articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: { articles },
  };
};
