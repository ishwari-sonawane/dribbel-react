import "./Button.css"
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";

function Button(){
    return(
       <div className="button">
        <div className="button1">
        <button>Popular 
        <IoIosArrowDown />
             </button>
       </div>
       <div className="button2">
        <button>Discover</button>
        <button>Animation</button>
        <button>Branding</button>
        <button>Illustration</button>
        <button>Mobile</button>
        <button>Print</button>
        <button>Product Design</button>
        <button>Typography</button>
        <button>Web Design</button>
       </div>
       <div className="button3">
        <button>Filter
        <CiMenuFries />
        </button>
       </div>
       </div>
       
    )
}

export default Button;