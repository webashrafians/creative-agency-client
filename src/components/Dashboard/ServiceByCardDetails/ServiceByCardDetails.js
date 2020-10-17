import React from 'react';
import { Link } from 'react-router-dom';

const ServiceByCardDetails = ({ serviceCard }) => {
    
    return (
        <div className="col-md-4">
            <div className="card mt-3">
                <div className="d-flex justify-content-between">
                    {
                        serviceCard.image &&
                        <img className="card-img ml-3 mt-3" src={`data:image/png;base64,${serviceCard.image.img}`} alt="" />
                    }
                    <p className="text-danger mr-2 mt-3 p-1" style={{ width: '67px', background: '#FFE3E3', borderRadius: '6px' }}>{serviceCard.status}</p>
                </div>
                <div className="card-body">
                    <h5 class="card-title text-dark font-weight-bold">{serviceCard.projectTitle}</h5>
                    <p class="card-text text-secondary">{serviceCard.projectDetails}</p>
                    <p class="card-text font-weight-bold text-dark">Price: ${serviceCard.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceByCardDetails;