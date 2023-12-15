import React, {Component} from 'react';
import Hero from "../components/Hero";


class Contact extends Component {
    render() {
        return (
            <>
                <Hero title="Contact" subtitle="The point of using is that it has a more-or-less normal distribution of letters, as
                                    opposed to using Content here content here making it look"/>

                <main role="main">
                    <link rel="stylesheet" href="css/style.min.css" type="text/css"/>
                    <section className="section">
                        <div className="container">
                            <div className="company-contacts  text-center">
                                <div className="__inner">
                                    <div className="row justify-content-around">
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <div className="__item">
                                                <i className="__ico fontello-location"/>
                                                <h4 className="__title">adress</h4>
                                                <p>
                                                    523 Sylvan Ave, 5th Floor Mountain View, CA 94041USA
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <div className="__item">
                                                <i className="__ico fontello-phone"/>
                                                <h4 className="__title">phone</h4>
                                                <p>
                                                    +1 (234) 56789,<br/>+1 987 654 3210
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <div className="__item">
                                                <i className="__ico fontello-mail-1"/>
                                                <h4 className="__title">e-mail</h4>
                                                <p><a href="mailto:support@agrocompany.com">support@agrocompany.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </>
        );
    }
}


export default Contact;
