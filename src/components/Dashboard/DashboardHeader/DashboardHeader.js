import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import './DashboardHeader.css';

const DashboardHeader = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="dashboard font-weight-bold d-flex justify-content-between align-items-center">
            <h3 className="pl-5">{props.title}</h3>
            <div className="d-flex pr-5">
                <img className="user-img  mr-2" src={loggedInUser.photo} alt=""/>
                <h5>{loggedInUser.name}</h5>
            </div>
        </div>
    );
};

export default DashboardHeader;