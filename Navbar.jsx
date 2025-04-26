import "./Navbar.css"

function Navbar(){
    return(
       <div className="navbar">

        <div className="left">
        <h2>Dribbble</h2>
        </div>

        <div className="mid">
        <p>Explore</p>
        <p>Hire a Designer</p>
        <p>Find Jobs</p>
        <p>Blog</p>
        </div>

        <div className="right">
        <p>Sign up</p>
        <button>Log in</button>
        </div>

       </div>
    )
}

export default Navbar;