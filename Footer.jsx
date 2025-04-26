import './Footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

function Footer(){
    return(
       <div className="footer">
            <div className="upper-footer">
                 <div className="left-upper-footer">
                        <h1>Dribbbel</h1>
                </div>

                <div className="mid-upper-footer">
                    <a href="">For designers</a>
                    <a href="">Hire talent</a>
                    <a href="">Inspiration</a>
                    <a href="">Advertising</a>
                    <a href="">Blog</a>
                    <a href="">About</a>
                    <a href="">Careers</a>
                    <a href="">Support</a>
                </div>

                <div className="right-upper-footer">
                <FaTwitter  />
                <FaFacebookF />
                <FaInstagram />
                <FaPinterest  />
                </div>
            </div>

            <div className="lower-footer">
                <div className="left-lower-footer">
                <a href="">© 2025 Dribbble</a>
                <a href="">Terms</a>
                <a href="">Privacy</a>
                <a href="">Cookie</a>
                </div>

                <div className="right-lower-footer">
                    <a href="">Job</a>
                    <a href="">Designer</a>
                    <a href="">Frelancer</a>
                    <a href="">Tags</a>
                    <a href="">Places</a>
                    <a href="">Resources</a>
                </div>
            </div>

       </div>
    )
}

export default Footer;