import { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection} from "firebase/firestore";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [summary, setSummary] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{

      setIsPending(true);
      await addDoc(collection(db, "articles"),{title: title, body: body, summary: summary, author: author});
      setIsPending(false);
    } catch(error){
      console.error(error.message);
    }
  };

  return (
    <div>
      <div className="mt-[80px] mb-4 h-screen">
        <h1 className="text-4xl font-bold text-center">Create new blog</h1>
        <form onSubmit={handleSubmit} className="px-4">
          <label> Blog title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Title of the article"
            required
          />
          <label> Blog body: </label>
          <textarea
            value={body}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your article here"
            required
          ></textarea>
          <label>Blog Summary:</label>
          <input
            type="text"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Summary of the article"
            required
          />
          <label>Blog author:</label>
          <input
            type="text"
            value={author}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author name"
            required
          />
          {!isPending && <button 
          className="w-full py-2 px-4 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >Add blog</button>}
          {isPending && <button disabled>Adding blog...</button>}
        </form>
      </div>
    </div>
  );
};

export default Create;
