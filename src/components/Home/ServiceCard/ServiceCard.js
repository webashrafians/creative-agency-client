import React from 'react';
import './ServiceCard.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    return (
        <div className="col-md-4 service-card">
            <Link to="/dashboard/welcome" style={{textDecoration: 'none'}}>
                <div class="card text-center mt-3 p-3">
                    {
                        service.image &&
                        <img className="card-img  mx-auto" src={`data:image/png;base64,${service.image.img}`} alt="" />
                    }
                    <div class="card-body">
                        <h5 class="card-title text-dark font-weight-bold">{service.title}</h5>
                        <p class="card-text text-secondary">{service.details}</p>
                    </div>
                </div>
            </Link>
        </div>
    );

};
export default ServiceCard;