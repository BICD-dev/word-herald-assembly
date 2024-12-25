import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <div className="bg-[#303030] text-gray-300 text-center p-2 " >
            <p><Link to ="/dashboard">Admin Dashboard</Link></p>
            <p>&copy;2024 Word herald Assembly. All Rights Reserved </p>
        </div>
     );
}
 
export default Footer;