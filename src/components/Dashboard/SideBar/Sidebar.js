import './Sidebar.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../resources/images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCartPlus, faShoppingBag, faComment, faUserAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://pure-inlet-65517.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <div className="sidebar">
            <Link to="/">
                <img className="brand-logo mt-3 ml-2" src={logo} alt="" />
            </Link>
            <ul class="nav flex-column mt-5">
                <li class="nav-item">
                    <Link to="/dashboard/welcome" class="nav-link text-dark">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        <span>Dashboard</span>
                    </Link>
                </li>

                {
                    isAdmin ?
                        <div>
                            <li class="nav-item">
                                <Link to="/dashboard/serviceTableData" class="nav-link text-dark">
                                    <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
                                    <span>Service List</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/dashboard/addService" class="nav-link text-dark">
                                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                                    <span>Add Service</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/dashboard/CreateAdmin" class="nav-link text-dark">
                                    <FontAwesomeIcon icon={faUserAlt} className="mr-2" />
                                    <span>Make Admin</span>
                                </Link>
                            </li>
                        </div>
                        :
                        <div>
                            <li class="nav-item">
                                <Link to="/dashboard/order" class="nav-link text-dark">
                                    <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                                    <span>Order</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/dashboard/serviceDataCard" class="nav-link text-dark">
                                    <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
                                    <span>Service Card</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/dashboard/review" class="nav-link text-dark">
                                    <FontAwesomeIcon icon={faComment} className="mr-2" />
                                    <span>Review</span>
                                </Link>
                            </li>
                        </div>
                }
            </ul>
        </div>
    );
};
export default Sidebar;