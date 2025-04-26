import "./Home.css"
import { FaSearch } from "react-icons/fa";


function Homepage(){
    return(
        <div className="home">
            <h1>Discover the world’s <br/>top designers</h1>
            <p>Explore work from the most talented and accomplished designers <br/> ready to take on your next project</p>
            <div >
            <input
             type="text" 
             placeholder="What are you Looking for?"/>
             <div className="icon">
             <FaSearch size={20}
            //  className="search"
            />
            </div>
            </div>
            <div className="buttons">
               <button>Trending searches</button>
               <button>landing page</button>
               <button>e-commerce</button>
               <button>mobile app</button>
               <button>logo designe</button>
               <button>dashboard</button>
               <button>icons</button>
           </div>
        </div>
    )
}

export default Homepage;