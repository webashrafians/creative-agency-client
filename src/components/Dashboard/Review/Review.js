import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../SideBar/Sidebar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../../App';
import { useContext } from 'react';

toast.configure();

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        const reviewDetails = { review: data };
        fetch('https://pure-inlet-65517.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    // alert('Review Added Successfully');
                    toast.success('Review Added Successfully')
                    history.push("/reviewList");
                }
            })
    };
    return (
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-2 pr-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-8 col-xs-10 pl-0" style={{ backgroundColor: '#F4F7FC', height: '100vh' }} >
                <DashboardHeader title='Review'></DashboardHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="py-5 pl-5">
                    <div className="form-group">
                        <input type="text" defaultValue={loggedInUser.name} name="name" ref={register({ required: true })} class="form-control w-50" placeholder="Your Name" />
                        {errors.name && <span className="error text-danger">Name is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" name="companyName" ref={register({ required: true })} class="form-control w-50" placeholder="Company's Name, Designation" />
                        {errors.companyName && <span className="error text-danger">Company Name is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea name="description" ref={register({ required: true })} class="form-control w-50" cols="12" rows="6" placeholder="Description"  ></textarea>
                        {errors.description && <span className="error text-danger">Description is required</span>}
                    </div>

                    <div className="form-group mt-3">
                        <button className="btn btn-dark text-light brand-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;