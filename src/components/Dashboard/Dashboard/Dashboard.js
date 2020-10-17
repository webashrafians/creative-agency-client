import React from 'react';
import Sidebar from '../SideBar/Sidebar';
import WelcomeToDashboard from '../WelcomeToDashboard/WelcomeToDashboard';

const Dashboard = () => {
    return (
    
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-2 pr-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-8 col-xs-10">
                <WelcomeToDashboard></WelcomeToDashboard>
            </div>
        </div>
       
    );
};

export default Dashboard;