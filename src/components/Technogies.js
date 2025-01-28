import '../styles/components/Technologies.css'
//imgs:
import Ourteam from '../assets/ourteam.png'
import Foguete from '../assets/foguete.png'
import Innovation from '../assets/Innovation.png'

function Technologies(){
    return ( 
        <div className="Technologies">
          <h1 className="title1"> Commitment to Quality, Technology, and a Specialized Team</h1>
           <div className="loyout">
             <div className="texts">
               <img id="imginnovation" src={Foguete} alt="foguete"/>
                <h2>Maintenance</h2>
                <p>We guarantee tested, high-performance products with strict quality control and specialized support to ensure the best customer experience.</p>
             </div>
             <div className="texts">
               <img id="imginnovation" src={Ourteam} alt="ourteam"/>
               <h2>Our Team</h2>
               <p>Passionate technology experts, always up to date with market trends to provide personalized service and the best accessories for gamers and enthusiasts.</p>
             </div>
             <div className="texts">
             <img id="imginnovation" src={Innovation} alt="Innovation"/>
             <h2>Innovation</h2>
             <p>We work with renowned suppliers and modern platforms to ensure security, speed, and the most advanced products on the market.</p>
             </div>
           </div>
        </div>
    )
}

export default Technologies;