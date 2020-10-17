import React from 'react';
import airbnb from '../../../resources/images/logos/airbnb.png';
import google from '../../../resources/images/logos/google.png';
import netflix from '../../../resources/images/logos/netflix.png';
import slack from '../../../resources/images/logos/slack.png';
import uber from '../../../resources/images/logos/uber.png';
import './Company.css';

const Company = () => {
    return (
        <div className="container d-flex justify-content-center flex-wrap py-5 mt-3">
            <img className="company-logo mr-5" src={slack} alt=""/>
            <img className="company-logo mr-5" src={google} alt=""/>
            <img className="company-logo mr-5" src={uber} alt=""/>
            <img className="company-logo mr-5" src={netflix} alt=""/>
            <img className="company-logo mr-5" src={airbnb} alt=""/>
        </div>
    );
};

export default Company;