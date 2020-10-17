import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Sidebar from '../SideBar/Sidebar';
import 'react-toastify/dist/ReactToastify.css';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

toast.configure();

const CreateAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('https://pure-inlet-65517.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    // alert('Review Added Successfully');
                    toast.success('Admin Added Successfully')
                }
            })
    };

    return (
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 pr-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-8 pl-0" style={{ backgroundColor: '#F4F7FC', height: '100vh' }} >
                <DashboardHeader title='Add Admin'></DashboardHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="py-3">
                    <div className="form-row py-5 pl-5">
                        <div className="col">
                            <input type="email" name="email" ref={register({ required: true })} class="form-control " placeholder="By default rezafset@gmail.com and programming.hero.instructor@gmail.com" />
                            {errors.email && <span className="error text-danger">Email is required</span>}
                        </div>
                        <div className="col">
                            <button className="btn btn-success text-light brand-button">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default CreateAdmin;