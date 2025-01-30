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
        <div className="Technologies" id='our-team'>
          <h1 className="title1" ref={titleRef} style={{ opacity: 0, transform: "translateY(-50px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out" }}> Commitment to Quality, Innovation, and Expertise</h1>
           <div className="loyout">
             <div className="texts" ref={el => sectionsRef.current[0] = el} style={{ opacity: 0, transform: "translateY(50px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out" }}>
               <img id="imginnovation" src={Foguete} alt="foguete"/>
                <h2>Maintenance</h2>
                <p>We guarantee tested, high-performance software solutions with strict quality control and specialized support to provide the best customer experience.</p>
             </div>
             <div className="texts" ref={el => sectionsRef.current[1] = el} style={{ opacity: 0, transform: "translateY(50px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out" }}>
               <img id="imginnovation" src={Ourteam} alt="ourteam"/>
               <h2>Our Team</h2>
               <p>Technology experts, always up to date with market trends, delivering personalized and innovative software development solutions.</p>
             </div>
             <div className="texts" ref={el => sectionsRef.current[2] = el} style={{ opacity: 0, transform: "translateY(50px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out" }}>
             <img id="imginnovation" src={Innovation} alt="Innovation"/>
             <h2>Innovation</h2>
             <p>We leverage top-tier partners and cutting-edge platforms to deliver secure, high-performance, and innovative software solutions.</p>
             </div>
           </div>
        </div>
    );
}

export default Technologies;
