import CreateAnnouncement from "../components/CreateAnnouncement";
import CreateArticle from "../components/CreateArticle";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Dashoboard = () => {
  const navigate = useNavigate();
  const handleLogout = async() => {
    try{
        // console.log("logged out");
        const auth = getAuth();
        await signOut(auth);
        navigate("/signin");
        
    }catch(err){
        console.error(err.message)
    }
  };
  return (
    <>
      <h1 className="mt-[110px] mx-6 font-semibold text-[1.5rem] text-center py-2">Admin Dashboard</h1>
      <div className=" mx-6 h-screen grid grid-cols-1 sm:grid-cols-3  overflow-auto"> 
        <h1 className="font-semibold text-[1.5rem] text-center py-2">Welcome, Name</h1>
        <button
          className="w-[full] py-2 px-4 sm:mx-6 mb-2 bg-black sm:mb-[9rem] text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          ><a href="/articlesList">See all Articles</a></button>
        <button
          type="submit"
          onClick={handleLogout}
          className="w-full  py-2 px-4 mr-7 mb-2 bg-red-600 sm:mb-[9rem] text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
