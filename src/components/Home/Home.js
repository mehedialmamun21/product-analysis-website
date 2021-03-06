import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import useHook from '../../hooks/useHooks';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {

    // const [reviews] = useHook();

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data.splice(0, 3)))
    }, [])

    return (
        <div >
            <div className='laptop-detail'>
                <div className='product-overview'>
                    <h2 >Acer Nitro 7 AN715-51</h2>
                    <p>Acer Nitro 7 AN715-51 Intel core i5 9300H 15.6 Inch
                        FHD IPS Display Black Gaming Laptop #NH.Q5HSI.005
                    </p>
                    <p>
                        Specialty : Backlit KeyBoard.
                    </p>
                    <p>
                        Others : HDCP Supported: Yes, Wireless LAN: Wireless-AC 9560,
                        IEEE 802.11a/b/g/n/ac, Front Camera/Webcam Video Resolution: 1280 x 720,
                        Number of Microphones: 2, Pointing Device Type: TouchPad,
                        TouchPad Features: Multi-touch Gesture
                    </p>
                    <p>
                        Country Of Origin : Taiwan <br />
                        Made in/ Assemble : China
                    </p>
                </div>
                <div className='product-image'>
                    <img src="images/acer_nitro.png" alt="" />
                </div>
            </div>


            {/* -------------------------------------------------------------------------- */}

            <div className='home-review'>
                <h2>Customer Reviews : <small> ({reviews.length}) </small> </h2>
                <div className='customers-say'>
                    {
                        reviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>

                <div className='more-reviews'>
                    <Link to="/reviews">
                        <button type="button">
                            see more reviews
                        </button>
                    </Link>
                </div>

            </div>

            {/*  */}
        </div >
    );
};

export default Home;