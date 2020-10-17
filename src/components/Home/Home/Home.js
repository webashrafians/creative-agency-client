import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Company from '../Company/Company';
import Service from '../Service/Service';
import Portfolio from '../Portfolio/Portfolio';
import ClientFeedback from '../ClientFeedback/ClientFeedback';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Company></Company>
            <Service></Service>
            <Portfolio></Portfolio>
            <ClientFeedback></ClientFeedback>
            <Footer></Footer>
        </div>
    );
};
export default Home;