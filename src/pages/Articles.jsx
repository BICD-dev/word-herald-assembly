import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
const Articles = () => {
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
    <div className="mt-[80px]">
      {articles.map((article) => (
        <div key={article.id}>
          <h1>{article.title}</h1>
          <p>{article.body}</p>
          <p>Written by { article.author}</p>
        </div>
      ))}
    </div>
  );
};
//vincentopemipo7@gmail.com

export default Articles;
