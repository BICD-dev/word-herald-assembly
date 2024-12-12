import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import {useParams} from "react-router-dom";
const ArticleDetails = () => {
    const { id } = useParams();
    const [ documentData, setDocumentData] = useState({})
    useEffect( ()=>{
        const docRef = doc(db, "articles", id);
        const fetchDocument = async()=>{
            try{
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setDocumentData(docSnap.data());
                    console.log(documentData)
                } else {
                    console.log("No such document!");
                }
                console.log("data received, ")
            } catch(error){
                console.error(error.message);
            }
        }
        fetchDocument();
    }, [id]);
    return ( 
        <div className="mt-[100px] mx-6">
            <h1>Article detail</h1>
            {documentData ? (
        <section className="h-screen">
          <h1 className="text-3xl font-semibold capitalize text-center my-2">{ documentData.title}</h1>
          <p className="">{documentData.body}</p>
        </section>
      ) : (
        <p>Loading...</p>
      )}
        </div>
     );
}
 
export default ArticleDetails;