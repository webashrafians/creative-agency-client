import { useEffect } from 'react';
import { useContext } from 'react';
import React, { useState } from 'react';
import Sidebar from '../SideBar/Sidebar';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import ServiceByCardDetails from '../ServiceByCardDetails/ServiceByCardDetails';

const ServiceByCard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceByCard, setServiceByCard] = useState([]);

    useEffect(() => {
        fetch('https://pure-inlet-65517.herokuapp.com/orderCard', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => setServiceByCard(data))
    }, [])

    return (
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 pr-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-8 pl-0" style={{ backgroundColor: '#F4F6FC', height: '100vh' }}>
                <DashboardHeader title={'Service Card'}></DashboardHeader>
                <div className="row">
                    {
                        serviceByCard.map(serviceCard => <ServiceByCardDetails key={serviceCard._id} serviceCard={serviceCard}></ServiceByCardDetails>)
                    }
                </div>
            </div>
        </div>
    );
};
export default ServiceByCard;