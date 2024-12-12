import CreateAnnouncement from "../components/CreateAnnouncement";
import CreateArticle from "../components/CreateArticle";
import { auth } from "../config/firebase";
const Dashoboard = () => {
  const handleLogout = () => {
    try{
        console.log("logged out");
        
    }catch(err){
        console.error(err.message)
    }
  };
  return (
    <>
      <div className="mt-[110px] mx-6 h-screen grid grid-cols-3 "> 
        <h1 className="font-semibold text-[1.5rem] text-center py-2">Welcome, Name</h1>
        <button
          className="w-[full] py-2 px-4 mx-6 bg-black text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >See all Articles</button>
        <button
          type="submit"
          onClick={handleLogout}
          className="w-full  py-2 px-4 mr-7 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Log out
        </button>
        <CreateArticle />
        <CreateAnnouncement />
      </div>
    </>
  );
};

export default Dashoboard;
