import { auth, provider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup,signOut } from "firebase/auth";
import { useState } from "react";


export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async () => {
    
    //vincentopemipo7@gmailcom
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error.message);
    }
  };
  const signinWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error.message);
    }
  };
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error.message);
    }
  };
  console.log(auth?.currentUser?.email);
  return (
    <div className="mt-[80px] ">
      
      <input
        type="email"
        placeholder="email"
        className="mt-2 border border-black border-solid p-1"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="mt-2 border border-black border-solid p-1"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSignIn}
        className="border bg-blue-700 border-solid text-white font-semibold p-2 mt-2 rounded-md"
      >
        Sign In
      </button>
      <button onClick={signinWithGoogle} className="border bg-red-700 border-solid text-white font-semibold p-2 mt-2 rounded-md">Sigin with google</button>
      <button onClick={logOut} className="border bg-green-700 border-solid text-white font-semibold p-2 mt-2 rounded-md">log out</button>
    </div>
  );
};
