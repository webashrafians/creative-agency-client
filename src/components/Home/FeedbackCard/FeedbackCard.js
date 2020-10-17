import React from 'react';
import './FeedbackCard.css';

const FeedbackCard = (props) => {
    const {name, companyName, description} = props.review.review;
    return (
        <div className="col-md-4 py-2">
            <div class="card p-3 feedback-card">
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">{name}</h5>
                    <h6 class="card-subtitle mb-2">{companyName}</h6>
                    <p class="card-text text-secondary">{description}</p>
                </div>
            </div>
        </div>
    );
};
export default FeedbackCard;