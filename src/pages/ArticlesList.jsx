import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
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
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="mt-[80px] grid grid-cols-4">
      {articles.map((article) => (
        <div key={article.id} className="mt-2 px-4 border border-solid border-black-500 w-fit">
          <h1 className="text-xl text-center font-semibold capitalize">{article.title}</h1>
          < p className="">{article.summary}</p>
          <p>Written by { article.author}</p>
          <button className="bg-orange-600 text-white rounded-2xl p-1 px-2 mt-2">
              <a href="/blogs">Read More..</a>.
            </button>
        </div>
      ))}
    </div>
  );
};
//vincentopemipo7@gmail.com

export default ArticlesList;
