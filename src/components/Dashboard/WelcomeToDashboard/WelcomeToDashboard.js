import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const WelcomeToDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <DashboardHeader title={'Dashboard'}></DashboardHeader>
            <div style={{ height: '100vh' , backgroundColor: '#F4F7FC'}}>
                <h3 className="text-center pt-5">Welcome To Dashboard <br/> Mr. {loggedInUser.name} </h3>
            </div>
            
        </div>
    );
};
export default WelcomeToDashboard;