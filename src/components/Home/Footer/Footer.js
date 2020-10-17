import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#FBD062'}} id="contact">
            <div className="container py-3 mt-5">
                <div className="row py-5">
                    <div className="col-md-5">
                        <h3 className="font-weight-bold">Let us handle your project, professionally</h3>
                        <p className="text-dark py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, vero!</p>
                    </div>
                    <div className="col-md-7">
                        <form>
                            <div className="form-group">
                                <input type="email" class="form-control form-control-lg" placeholder="Your email address" required />
                            </div>
                            <div className="form-group">
                                <input type="text" class="form-control form-control-lg" placeholder="Your name/company's name" required />
                            </div>
                            <div className="form-group">
                                <textarea class="form-control form-control-lg" cols="20" rows="10" placeholder="Your message" required  ></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-dark text-light brand-button"> <span>Send</span></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <hr/>
                     <p className="text-center text-dark py-3 mb-0">Copyright Orange lab {(new Date()).getFullYear()} </p>
                </div>
            </div>
        </div>
    );

};
export default Footer;