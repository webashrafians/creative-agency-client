import React from 'react';
import { useState, useEffect } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://pure-inlet-65517.herokuapp.com/services', {
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container mt-5 py-4" id="portfolio">
            <h3 className="text-center py-5 font-weight-bold">Provide Awesome <span style={{ color: '#7AB259' }}>Services</span></h3>
            <div className="row">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );

};
export default Service;