// import { useEffect, useState } from 'react';
import { useState } from 'react';
import useHook from '../../hooks/useHooks';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {

    const [reviews] = useHook();

    const [searchText, setSearchText] = useState([]);

    // const [reviews, setReviews] = useState([]);
    // useEffect(() => {
    //     fetch('reviews.json')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])

    const HandleSearchChange = event => {
        const searchText = event.target.value;
        const match = reviews.filter(r => r.name.includes(searchText));
        setSearchText(match);
    }

    return (
        <div className='review-details'>
            <h2>What our Customers say : </h2>
            <h3>search below to see individual review : </h3>

            <div className='search-box'>
                <input onChange={HandleSearchChange} placeholder='search' type="text" />
            </div>

            <div className='customers-say'>
                {
                    searchText.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;