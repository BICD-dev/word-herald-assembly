import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { doc, getDoc, collection } from "firebase/firestore";
const ArticleDetails = () => {
    const [ documentData, setDocumentData] = useState("")
    const docRef = collection(db, "articles");
    useEffect(()=>{
        try{
            console.log("data received")
        } catch(error){
            console.error(error.message);
        }
    }, [collection, documentData]);
    return ( 
        <div>
            <h1>Article detail</h1>
        </div>
     );
}
 
export default ArticleDetails;