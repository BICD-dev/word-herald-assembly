import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <div className="bg-[#252323] text-white text-center p-2" >
            <p>&copy; Bright Iheagwam 2024</p>
            <p><Link to ="/dashboard">Admin Dashboard</Link></p>
        </div>
     );
}
 
export default Footer;