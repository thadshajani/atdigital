import './Sectiononestyle.css';
import img2 from './assets/image 2.png';
import img1 from './assets/image 1.png';

const Sectionone = () => {
    return (
        <>
            <div className="sectionone">
                <img src={img2} className="leftimg2" alt="" />
                <div id="content-right">
                    <h2>Web & Mobile App Development</h2>
                    <p className="desc1">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                    <button className="butt1">LEARN MORE</button>
                </div>
            </div>

            <div className="sectiontwo">
                <img src={img1} className="rightimg1" alt="" />
                <div id="content-left">
                    <h2>Digital Strategy Consulting</h2>
                    <p className="desc2">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                    <button className="butt2">LEARN MORE</button>
                </div>
            </div>

        </>
    );
};

export default Sectionone;