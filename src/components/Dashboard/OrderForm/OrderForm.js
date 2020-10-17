import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../SideBar/Sidebar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../../App';
import { useContext } from 'react';

toast.configure();

const OrderForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const [info, setInfo] = useState({ status: 'Pending' });
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('projectTitle', info.projectTitle);
        formData.append('projectDetails', info.projectDetails);
        formData.append('price', info.price);
        formData.append('status', info.status);

        fetch('https://pure-inlet-65517.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data) {
                    // alert('Order added Successfully')
                    toast.success('Order added Successfully');
                    history.push('/dashboard/serviceDataCard');
                }
            })
            .catch(error => {
                console.error(error)
            })

        e.preventDefault();
    }

    return (
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-2 pr-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-8 col-xs-10 pl-0">
                <DashboardHeader title={'Order'}></DashboardHeader>
                <div className="pl-5 py-3" style={{ backgroundColor: '#F4F7FC', height: '100vh' }}>
                    <form onSubmit={handleSubmit} className="py-3">
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" name="name" class="form-control w-50" placeholder="Enter Name" required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="email" name="email" class="form-control w-50" placeholder="Enter Email" required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" name="projectTitle" class="form-control w-50" placeholder="Enter Project Title" required />
                        </div>
                        <div className="form-group">
                            <textarea onBlur={handleBlur} name="projectDetails" class="form-control w-50" cols="12" rows="6" placeholder="Enter Project Details" required  ></textarea>
                        </div>
                        <div className="form-row w-50">
                            <div className="col">
                                <input onBlur={handleBlur} type="text" name="price" class="form-control " placeholder="Enter price" required />
                            </div>
                            <div className="col">
                                <input onChange={handleFileChange} type="file" class=" form-control  form-control-file" required />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <button className="btn btn-dark text-light brand-button">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;