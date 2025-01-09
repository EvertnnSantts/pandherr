import '../styles/components/Home.css';
//img:
import Filipe from '../assets/Filipe.jpeg';
import Everton from '../assets/Everton.jpeg';
import Uendel from '../assets/Uendel.jpeg'

function Home(){
    return(
        <div className="home">
            <div className='texts'>
            <div className='Photos-team'>
            <img id='photos-img' src={Filipe} alt="Logo" />
            <img id='photos-img' src={Everton} alt="Logo" />
            <img id='photos-img' src={Uendel} alt="Logo" />
            </div>
            <h1>Your partner in the digital future!</h1>
             <h2 id='subtitlite'>Your Partner in the Digital Future: Enhancing Your Tech Experience with Style and Innovation!</h2>
            </div>
            <button id='Button-link'>talk to our team</button>
        </div>
    )
}

export default Home;