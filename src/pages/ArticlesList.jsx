import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import SkeletalLoader from "../components/SkeletalLoader";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const[isPending, setIsPending] = useState(true);
  const articleCollection = collection(db, "articles");
  useEffect(() => {
    const fetchArticles = async () => {
      // read data from db
      // set the articles state
      try {
        const data = await getDocs(articleCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setArticles(filteredData);
        setIsPending(false);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="mt-[100px] ml-2 grid grid-cols-4">
      {isPending && <SkeletalLoader />}
      {articles.map((article) => (
        <div
          key={article.id}
          className="mt-2 px-4 border border-solid border-black-500 w-fit"
        >
          <Link to={`/articlesList/${article.id}`}>
            <h1 className="text-xl text-center font-semibold capitalize">
              {article.title}
            </h1>
            <p className="">{article.summary}</p>
            <p>Written by {article.author}</p>
            <button className="bg-orange-600 text-white rounded-xl p-1 px-2 mt-2">
              Read More..
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};
//vincentopemipo7@gmail.com

export default ArticlesList;
