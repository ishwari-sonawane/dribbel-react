import './cardscomponent.css'
import Cards from './Cards.jsx'
import Cardsimg1 from './assets/images/Cardsimg1.webp'



function Cardscomponent(){

    const dataArray = [

        {
    
            imageUrl: "Cardsimg",
    
            name: "John Doe",
    
            tag: "Pro",
    
            likes: 150,
    
            views: 3000
    
        },
    
        {
    
            imageUrl: "Cardsimg",
    
            name: "Jane Smith",
    
            tag: "Team",
    
            likes: 200,
    
            views: 4500
    
        },
    
        {
    
            imageUrl: "Cardsimg",
    
            name: "Alice Johnson",
    
            tag: "Pro",
    
            likes: 250,
    
            views: 5000
    
        },
    
        {
    
            imageUrl: "Cardsimg",
    
            name: "Bob Brown",
    
            tag: "Team",
    
            likes: 100,
    
            views: 2000
    
        },
    
        {
    
            imageUrl: "Cardsimg",
    
            name: "Charlie Davis",
    
            tag: "Pro",
    
            likes: 300,
    
            views: 6000
    
        },
    
        {
    
            imageUrl: "Cardsimg",
    
            name: "Emily White",
    
            tag: "Team",
    
            likes: 180,
    
            views: 3500
    
        },
    
        {
    
            imageUrl: "Cardsimg",
    
            name: "Michael Green",
    
            tag: "Pro",
    
            likes: 220,
    
            views: 4800
    
        },
    
        {
    
            imageUrl: "Cardsimg",
    
            name: "Sarah Black",
    
            tag: "Team",
    
            likes: 130,
    
            views: 2500
    
        },
    
        {
    
            imageUrl: "Cardsimg",
    
            name: "David Wilson",
    
            tag: "Pro",
    
            likes: 290,
    
            views: 7000
    
        },
    
        {
    
            imageUrl: "Cardsimg",
    
            name: "Laura Martinez",
    
            tag: "Team",
    
            likes: 160,
    
            views: 3200
    
        },

        {
    
            imageUrl: "Cardsimg",
    
            name: "John Doe",
    
            tag: "Pro",
    
            likes: 150,
    
            views: 3000
    
        },

        {
    
            imageUrl: "Cardsimg",
    
            name: "John Doe",
    
            tag: "Pro",
    
            likes: 150,
    
            views: 3000
    
        }
    
    ];

    console.log(dataArray);

    return(
       <div className="cards">
        {
            dataArray.map ((cards) => <Cards abc={cards} />)
        }
       </div>
    )
}

export default Cardscomponent;