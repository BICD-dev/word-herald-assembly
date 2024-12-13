import { useState } from "react";
import { db, auth } from "../config/firebase";
import { addDoc, collection} from "firebase/firestore";

const CreateAnnouncement = () => {
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleCreate = async(e) => {
    e.preventDefault();
    try{

      setIsPending(true);
      await addDoc(collection(db, "announcement"),{ body: body, userId: auth?.currentUser?.uid  });
      setBody("");
      setIsPending(false);
    } catch(error){
      console.error(error.message);
    }
  };

  return (
    <div>
      <div className="mt-4 mb-4 h-2/3">
        <h1 className="text-4xl font-bold text-center mb-4">Create new announcement</h1>
        <form onSubmit={handleCreate} className="px-4">
          
          <label> Announcement body: </label>
          <textarea
            value={body}
            className="h-[9rem] block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your announcement here"
            required
          ></textarea>
          
          {!isPending && <button 
          className="w-full py-2 px-4 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >Add Announcement</button>}
          {isPending && <button disabled>Adding announcement...</button>}
        </form>
      </div>
    </div>
  );
};

export default CreateAnnouncement;
