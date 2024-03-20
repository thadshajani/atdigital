import './Herostyle.css';
import Heroimg from './assets/Hero-img.png';

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img src={Heroimg} className="hero-img" alt="" />

        <div className="hero-text">
          <p>We crush your competitors, goals, and sales records - without the B.S.</p>
          <button>Get free consultation</button>
        </div>
      </div>
    </>
  );
}


export default Hero;