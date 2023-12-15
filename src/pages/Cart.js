import React, {Component} from 'react';
import Hero from "../components/Hero";


class Cart extends Component {
    render() {
        return (
            <>
                <Hero title="Cart" subtitle="The point of using is that it has a more-or-less normal distribution of letters, as
                                    opposed to using Content here content here making it look"/>

                <main role="main">
                    <link rel="stylesheet" href="css/style.min.css" type="text/css"/>
                    <section className="section">
                        <div className="decor-el decor-el--1" data-jarallax-element={-70} data-speed="0.2">
                            <img className="lazy" width={286} height={280} src="img/blank.gif"
                                 data-src="img/decor-el_1.jpg" alt="demo"/>
                        </div>
                        <div className="decor-el decor-el--2" data-jarallax-element={-70} data-speed="0.2">
                            <img className="lazy" width={99} height={88} src="img/blank.gif"
                                 data-src="img/decor-el_2.jpg" alt="demo"/>
                        </div>
                        <div className="decor-el decor-el--3" data-jarallax-element={-70} data-speed="0.2">
                            <img className="lazy" width={115} height={117} src="img/blank.gif"
                                 data-src="img/decor-el_3.jpg" alt="demo"/>
                        </div>
                        <div className="decor-el decor-el--4" data-jarallax-element={-70} data-speed="0.2">
                            <img className="lazy" width={84} height={76} src="img/blank.gif"
                                 data-src="img/decor-el_4.jpg" alt="demo"/>
                        </div>
                        <div className="decor-el decor-el--5" data-jarallax-element={-70} data-speed="0.2">
                            <img className="lazy" width={248} height={309} src="img/blank.gif"
                                 data-src="img/decor-el_5.jpg" alt="demo"/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="cart">
                                        <form className="cart__form" action="/">
                                            <div className="cart__table">
                                                <table>
                                                    <thead>
                                                    <tr>
                                                        <td width="10%">&nbsp;</td>
                                                        <td width="35%">added products</td>
                                                        <td width="15%">Price</td>
                                                        <td width="20%">Quantity</td>
                                                        <td width="15%">Total</td>
                                                        <td width="5%">&nbsp;</td>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <figure className="__image">
                                                                <a href="/">
                                                                    <img className="lazy" src="img/blank.gif"
                                                                         data-src="img/goods_img/5.jpg" alt="demo"/>
                                                                </a>
                                                            </figure>
                                                        </td>
                                                        <td>
                                                            <a href="/" className="__name">Big Banana</a>
                                                        </td>
                                                        <td>
                                                            <span className="__price">2.99 $</span>
                                                        </td>
                                                        <td>
                                                            <div className="quantity-counter js-quantity-counter">
                                                                <span className="__btn __btn--minus"/>
                                                                <input className="__q-input" type="text"
                                                                       defaultValue={1}/>
                                                                <span className="__btn __btn--plus"/>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="__total">2.99 $</span>
                                                        </td>
                                                        <td>
                                                            <a className="__remove" href="/"
                                                               aria-label="Remove this item">
                                                                <i className="fontello-cancel"/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <figure className="__image">
                                                                <a href="/">
                                                                    <img className="lazy" src="img/blank.gif"
                                                                         data-src="img/goods_img/8.jpg" alt="demo"/>
                                                                </a>
                                                            </figure>
                                                        </td>
                                                        <td>
                                                            <a href="/" className="__name">Freash Peach</a>
                                                        </td>
                                                        <td>
                                                            <span className="__price">2.99 $</span>
                                                        </td>
                                                        <td>
                                                            <div className="quantity-counter js-quantity-counter">
                                                                <span className="__btn __btn--minus"/>
                                                                <input className="__q-input" type="text"
                                                                       defaultValue={1}/>
                                                                <span className="__btn __btn--plus"/>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="__total">2.99 $</span>
                                                        </td>
                                                        <td>
                                                            <a className="__remove" href="/"
                                                               aria-label="Remove this item">
                                                                <i className="fontello-cancel"/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <figure className="__image">
                                                                <a href="/">
                                                                    <img className="lazy" src="img/blank.gif"
                                                                         data-src="img/goods_img/2.jpg" alt="demo"/>
                                                                </a>
                                                            </figure>
                                                        </td>
                                                        <td>
                                                            <a href="/" className="__name">Awesome Brocoli</a>
                                                        </td>
                                                        <td>
                                                            <span className="__price">2.99 $</span>
                                                        </td>
                                                        <td>
                                                            <div className="quantity-counter js-quantity-counter">
                                                                <span className="__btn __btn--minus"/>
                                                                <input className="__q-input" type="text"
                                                                       defaultValue={1}/>
                                                                <span className="__btn __btn--plus"/>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="__total">2.99 $</span>
                                                        </td>
                                                        <td>
                                                            <a className="__remove" href="/"
                                                               aria-label="Remove this item">
                                                                <i className="fontello-cancel"/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="py-5"/>
                                            <div className="row justify-content-md-between">
                                                <div className="col-12 col-md-6">
                                                    <div className="cart__coupon form--horizontal">
                                                        <div className="input-wrp">
                                                            <input className="textfield" type="text"
                                                                   placeholder="Coupon code"/>
                                                        </div>
                                                        <button
                                                            className="custom-btn custom-btn--medium custom-btn--style-1"
                                                            type="submit">Apply Coupon
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                                                    <div className="spacer py-5 d-md-none"/>
                                                    <div className="cart__total">
                                                        <table>
                                                            <thead>
                                                            <tr>
                                                                <td colSpan={2}><h3>CART <span>TOTALS</span></h3></td>
                                                            </tr>
                                                            </thead>
                                                            <tfoot>
                                                            <tr>
                                                                <td colSpan={2}>
                                                                    <a className="custom-btn custom-btn--medium custom-btn--style-1"
                                                                       href="/">Proceed to checkout</a>
                                                                </td>
                                                            </tr>
                                                            </tfoot>
                                                            <tbody>
                                                            <tr>
                                                                <td>Subtotal:</td>
                                                                <td>$96.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Shipping</td>
                                                                <td>Flat rate: $3.00 <br/>Shipping to Ukraine.</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Total</td>
                                                                <td>$99.00</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section--no-pt section--no-pb section--gutter">
                        <div className="container-fluid px-md-0">
                            <div className="simple-banner simple-banner--style-2" data-aos="fade" data-aos-offset={50}>
                                <div className="d-none d-lg-block">
                                    <img className="img-logo img-fluid  lazy" src="img/blank.gif"
                                         data-src="img/site_logo.png" alt="demo"/>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-12 col-lg-6">
                                        <a href="/"><img className="img-fluid w-100  lazy" src="img/blank.gif"
                                                         data-src="img/banner_bg_3.jpg" alt="demo"/></a>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <a href="/"><img className="img-fluid w-100  lazy" src="img/blank.gif"
                                                         data-src="img/banner_bg_4.jpg" alt="demo"/></a>
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


export default Cart;
