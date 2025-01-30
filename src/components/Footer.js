import '../styles/components/Footer.css';
//imgs:
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'

const Footer = () => {
  return (
    <footer className="footer">
       <div class="infos">
          <div class="info1">
             <h1 id="TitleInfo1">About Me</h1>
             <h1 id="textinfo1">I am a developer passionate about creating efficient and innovative solutions. With experience in backend development using technologies like JavaScript, MySQL, ReactJS, and PHP.</h1>
          </div>
          <div class="info2">
              <h1 id="TitleInfo2">Contact Me</h1>
              <h1 id="textinfo2">Have an idea or project in mind? I'd love to chat about how I can help! Reach out to discuss how we can turn your needs into amazing digital solutions.</h1>   
          </div>
           <div class="info3">
           <h1 id="TitleInfo3">Social Media</h1>
           <div id="textinfo3">
            <a href='https://www.facebook.com/share/1LW29SzEzJ/'><img id='photos-icons' src={facebook} alt="Logo" /></a>
            <a href='https://www.instagram.com/panndherr/'> <img id='photos-icons' src={instagram} alt="Logo" /></a>
           </div>
          </div>
        </div>
        <div class="icons2">

        </div>
     </footer>
  );
};

export default Footer;
