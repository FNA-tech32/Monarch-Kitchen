import './About.css';
import Navbar from "./../../component/Navbar/Navbar";
import Footer from "./../../component/Footer/Footer";
import Button from './../../component/Button/Button';
import Restaurant from "./images/restaurant.png";

export default function About() {
    return (
        <>
            <Navbar />
            <div className='about-main'>
                <div className='about'>
                    <div>
                        <img src={Restaurant} className='about-img' alt="Monarch Kitchen Restaurant" />
                    </div>
                    <div>
                        <h4 className='heading'>About Monarch Kitchen</h4>
                        <h3 className='quote'>We Provide Royal Quality &amp; Authentic <br />
                            Food to Your Family!</h3>
                        <p className='text-about'>
                            Welcome to <strong>Monarch Kitchen</strong>! We are dedicated to bringing you the finest culinary delicacies crafted with the freshest ingredients, authentic spices, and utmost hygiene. Whether you're craving traditional Maharashtrian dishes, royal North Indian gravies, savoury fast foods, or wholesome meals, Monarch Kitchen guarantees an unforgettable dining experience.
                        </p>
                        <Button text={"Explore Menu"} className="button"/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
