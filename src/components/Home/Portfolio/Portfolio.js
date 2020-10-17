import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import carousel1 from '../../../resources/images/carousel1.png';
import carousel2 from '../../../resources/images/carousel2.png';
import carousel3 from '../../../resources/images/carousel3.png';
import carousel4 from '../../../resources/images/carousel4.png';

const TeamWork = () => {

    return (
        <div className="my-5 section carouselbg" id="team">
            <div className="container py-5">
                <h2 className="text-light text-center font-weight-bold mb-5">Here are some of <span style={{color: '#7AB259'}}>our works</span> </h2>
                <OwlCarousel
                    className="owl-theme"
                    items="3"
                    autoPlay
                    loop
                    margin={15}
                    nav
                    dots
                >
                    <div class="item"> <img src={carousel1} alt="" /> </div>
                    <div class="item"> <img src={carousel2} alt="" /> </div>
                    <div class="item"> <img src={carousel3} alt="" /> </div>
                    <div class="item"> <img src={carousel4} alt="" /> </div>
                </OwlCarousel>
            </div>
        </div>
    );

};
export default TeamWork;