import React from 'react';

const Review = (props) => {
    const { name, feedback, rating } = props.review;
    return (

        <div className="card-group">
            <div className="card">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">Name :{name}</h5>
                    <p className="card-text">Feedback :{feedback}</p>
                    <p className="card-text">Ratings : {rating}</p>
                </div>
            </div>
        </div>

    );
};

export default Review;