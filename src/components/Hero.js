import './Herostyle.css';
import Heroimg from './assets/Hero-img.png';

function Hero() {
  return (
    <>
      <div className="hero">
        <img src={Heroimg} className="Heroimg" alt="" />

        <div className="textsec">
          <p>We crush your competitors, goals, and sales records - without the B.S.</p>
          <button>Get free consultation</button>
        </div>
      </div>
    </>
  );
}


export default Hero;