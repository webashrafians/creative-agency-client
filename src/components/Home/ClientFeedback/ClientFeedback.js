import React from 'react';
import { useEffect, useState } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const ClientFeedback = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://pure-inlet-65517.herokuapp.com/reviewList', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify()
        })
        .then(response=> response.json())
        .then(data=>setReviews(data))
    })

    return (
        <div className="container" id="review">
            <h3 className="text-center pb-4 font-weight-bold"> <span style={{color: '#171B4E'}}>Clients</span>  <span style={{color: '#7AB259'}}>Feedback</span></h3>
            <div className="row">
                {
                    reviews.map(review=> <FeedbackCard key={review._id} review={review}></FeedbackCard>)
                }
            </div>
        </div>
    );
};
export default ClientFeedback;