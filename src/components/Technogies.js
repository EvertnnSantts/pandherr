import { useEffect, useRef } from "react";
import '../styles/components/Technologies.css';
//imgs:
import Ourteam from '../assets/ourteam.png';
import Foguete from '../assets/foguete.png';
import Innovation from '../assets/Innovation.png';

function Technologies(){
    const sectionsRef = useRef([]);
    const titleRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (titleRef.current) {
                const rect = titleRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8) {
                    titleRef.current.style.opacity = "1";
                    titleRef.current.style.transform = "translateY(0)";
                }
            }
            
            sectionsRef.current.forEach((section, index) => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top < window.innerHeight * 0.8) {
                        section.style.opacity = "1";
                        section.style.transform = "translateY(0)";
                        section.style.transitionDelay = `${index * 0.3}s`;
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return ( 
        <div className="Technologies">
          <h1 className="title1" ref={titleRef} style={{ opacity: 0, transform: "translateY(-50px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out" }}> Commitment to Quality, Technology, and a Specialized Team</h1>
           <div className="loyout">
             <div className="texts" ref={el => sectionsRef.current[0] = el} style={{ opacity: 0, transform: "translateY(50px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out" }}>
               <img id="imginnovation" src={Foguete} alt="foguete"/>
                <h2>Maintenance</h2>
                <p>We guarantee tested, high-performance products with strict quality control and specialized support to ensure the best customer experience.</p>
             </div>
             <div className="texts" ref={el => sectionsRef.current[1] = el} style={{ opacity: 0, transform: "translateY(50px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out" }}>
               <img id="imginnovation" src={Ourteam} alt="ourteam"/>
               <h2>Our Team</h2>
               <p>Passionate technology experts, always up to date with market trends to provide personalized service and the best accessories for gamers and enthusiasts.</p>
             </div>
             <div className="texts" ref={el => sectionsRef.current[2] = el} style={{ opacity: 0, transform: "translateY(50px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out" }}>
             <img id="imginnovation" src={Innovation} alt="Innovation"/>
             <h2>Innovation</h2>
             <p>We work with renowned suppliers and modern platforms to ensure security, speed, and the most advanced products on the market.</p>
             </div>
           </div>
        </div>
    );
}

export default Technologies;
