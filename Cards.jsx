import './Cards.css'
import { FcLike } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import Profile from './assets/images/img1.webp'

function Cards ({abc}){

    return(
        <div className="card">
            <div className="upper-card">
                <img src={abc.imageUrl} alt="" />
            </div>

            <div className="lower-card">
                <div className="left-lower">
                    <div className="profile">
                        <img src={Profile} alt="" />
                    </div>
                    <p>{abc.name}</p>
                    <p className='tag'>{abc.tag}</p>
                </div>

                <div className="right-lower">
                <FcLike size={25}/> 
                <p>{abc.likes}</p>
                <FaEye size={25}/>
                <p>{abc.views}</p>

                </div>

            </div>
        </div>
    )
}

export default Cards;