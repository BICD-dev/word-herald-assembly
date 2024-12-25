import { auth, db } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reEntryPassword, setReEntryPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    if (password === reEntryPassword){
      try{
        await createUserWithEmailAndPassword(auth, email, password);
        await addDoc(collection(db, "userInfo"),{userName:name, userEmail:email, userId: auth?.currentUser?.uid  });
          
          console.log(name);
          navigate('/signin');
  
      } catch(error){
          console.error(error.message);
  
        }
      } else{
        console.log("password dont match")
      }


    // Add your form submission logic here
  };

  return (
    <div className="mt-9 flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={signUp}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
          </div>
          <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >Re enter password</label>
          <input
            type="password"
            id="repassword"
            name="password"
            onChange={(e) => setReEntryPassword(e.target.value)}
            placeholder="Re enter your password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>

        <p className="mt-3">Have an account already? <a href="/signin" className="text-blue-500 hover:underline">Sign in</a></p>
      </form>
    </div>
  );
};

export default SignUp;
