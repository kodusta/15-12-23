import React, {Component} from 'react';


class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer footer--style-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                            <div className="footer__item">
                                <a className="site-logo" href="index.html">
                                    <img className="img-fluid  lazy" src="img/blank.gif" data-src="img/site_logo.png"
                                         alt="demo"/>
                                </a>
                            </div>
                        </div>

                        <div className="col-12 col-md-9 col-lg-6">
                            <div className="footer__item">
                                <nav id="footer__navigation" className="navigation">
                                    <div className="row">
                                        <div className="col-6 col-sm-4">
                                            <h5 className="footer__item__title h6">Menu</h5>

                                            <ul>
                                                <li className="active"><a href="index.html">Home</a></li>
                                                <li><a href="/">About</a></li>
                                                <li><a href="/">Pages</a></li>
                                                <li><a href="/">Gallery</a></li>
                                                <li><a href="/">Blog</a></li>
                                                <li><a href="/">Contacts</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-6 col-sm-4">
                                            <h5 className="footer__item__title h6">Shop</h5>

                                            <ul>
                                                <li><a href="/">Partners</a></li>
                                                <li><a href="/">Customer Service</a></li>
                                                <li><a href="/">Vegetables</a></li>
                                                <li><a href="/">Fruits</a></li>
                                                <li><a href="/">Organic Food</a></li>
                                                <li><a href="/">Privacy policy</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-6 col-sm-4">
                                            <h5 className="footer__item__title h6">Information</h5>

                                            <ul>
                                                <li><a href="/">Delivery</a></li>
                                                <li><a href="/">Legal Notice</a></li>
                                                <li><a href="/">About Us</a></li>
                                                <li><a href="/">Secure Payment</a></li>
                                                <li><a href="/">Prices Drop</a></li>
                                                <li><a href="/">Documents</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>

                        <div className="col-12 col-md col-lg-4">
                            <div className="footer__item">
                                <h5 className="footer__item__title h6">Contacts</h5>

                                <address>
                                    <p>
                                        523 Sylvan Ave, 5th Floor Mountain View, CA 940 USA
                                    </p>

                                    <p>
                                        +1 (234) 56789, +1 987 654 3210
                                    </p>

                                    <p>
                                        <a href="mailto:support@agrocompany.com">support@agrocompany.com</a>
                                    </p>
                                </address>

                                <div className="social-btns">
                                    <a href="/"><i className="fontello-twitter"></i></a>
                                    <a href="/"><i className="fontello-facebook"></i></a>
                                    <a href="/"><i className="fontello-linkedin-squared"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-lg-end justify-content-lg-between copyright">
                        <div className="col-12 col-lg-6">
                            <div className="footer__item">
                                <span className="__copy">© 2019, AgroTheme by
                                    <a className="__dev" href="https://kodusta.com">
                                        Artureanec
                                    </a>
                                    |
                                    <a href="/">Privacy Policy</a> | <a href="/">Sitemap</a></span>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="footer__item">
                                <form className="form--horizontal no-gutters" action="/">
                                    <div className="col-sm-6">
                                        <div className="input-wrp">
                                            <input className="textfield" name="s" type="text"
                                                   placeholder="Your E-mail"/>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <button className="custom-btn custom-btn--medium custom-btn--style-3 wide"
                                                type="submit">subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}


export default Footer;
