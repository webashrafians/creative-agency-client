import React from 'react';
import Sidebar from '../SideBar/Sidebar';
import DashboardIntro from '../DashboardIntro/DashboardIntro';

const Dashboard = () => {

    return (    
        <div className="row">
            <div className="col-lg-2 col-md-4 pr-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 col-md-8">
                <DashboardIntro></DashboardIntro>
            </div>
        </div>
    );
};
export default Dashboard;