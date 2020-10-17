import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Company from '../Company/Company';
import Service from '../Service/Service';
import TeamWork from '../TeamWork/TeamWork';
import ClientFeedback from '../ClientFeedback/ClientFeedback';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Company></Company>
            <Service></Service>
            <TeamWork></TeamWork>
            <ClientFeedback></ClientFeedback>
            <Footer></Footer>
        </div>
    );
};
export default Home;