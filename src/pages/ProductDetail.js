import React from 'react';
import Hero from "../components/Hero";
import {useParams} from "react-router-dom";


const ProductDetail = (getProductBySlug) => {
    const {slug} = useParams();

    const product = getProductBySlug.getProductBySlug(slug);
    console.log(product);

    return (
        <>
            <Hero title={product.productName} subtitle={product.desc}/>

            <main role="main">
                <link rel="stylesheet" href="css/style.min.css" type="text/css"/>
                <section className="section">

                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="product-single">
                                    <div className="row">
                                        <div className="col-12 col-lg-7">
                                            <div className="__product-img">y
                                                <img width={330}
                                                     src={process.env.PUBLIC_URL + "/img/goods_img/2.jpg"}
                                                     alt="demo"/>
                                                <span className="product-label product-label--new">New</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-5">
                                            <div className="content-container">
                                                <h3 className="__name">Brocoli</h3>
                                                <div className="__categories">
                                                    Category:
                                                    <span>Vegetables</span>
                                                </div>
                                                <div className="product-price">
                                                    <span className="product-price__item product-price__item--new">3,35 $</span>
                                                </div>
                                                <div className="rating">
                                                        <span className="rating__item rating__item--active"><i
                                                            className="fontello-star"/></span>
                                                    <span className="rating__item rating__item--active"><i
                                                        className="fontello-star"/></span>
                                                    <span className="rating__item rating__item--active"><i
                                                        className="fontello-star"/></span>
                                                    <span className="rating__item rating__item--active"><i
                                                        className="fontello-star"/></span>
                                                    <span className="rating__item"><i
                                                        className="fontello-star"/></span>
                                                </div>
                                                <p>
                                                    The generated Lorem Ipsum is therefore always free from
                                                    repetition injected humour, or non-characteristic words etc.
                                                </p>
                                                <p>
                                                    Susp endisse ultricies nisi vel quam suscipit. Sabertooth
                                                    peacock flounder; chain pickerel hatchetfish, pencilfish
                                                    snailfish
                                                </p>
                                                <form className="__add-to-cart" action="/">
                                                    <div className="quantity-counter js-quantity-counter">
                                                        <span className="__btn __btn--minus"/>
                                                        <input className="__q-input" type="text" defaultValue={1}/>
                                                        <span className="__btn __btn--plus"/>
                                                    </div>
                                                    <button
                                                        className="custom-btn custom-btn--medium custom-btn--style-1"
                                                        type="submit"><i
                                                        className="fontello-shopping-bag"/>Add to Cart
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="spacer py-5 py-md-9"/>
                                            <div className="tab-container">
                                                <nav className="tab-nav">
                                                    <a href="/">Description</a>
                                                </nav>
                                                <div className="tab-content">
                                                    <div className="tab-content__item is-visible">
                                                        <p>
                                                            The generated Lorem Ipsum is therefore always free from
                                                            repetition injected humour, or non-characteristic words
                                                            etc. Susp endisse ultricies nisi vel quam suscipit
                                                        </p>
                                                        <p>
                                                            Sabertooth peacock flounder; chain pickerel hatchetfish,
                                                            pencilfish snailfish filefish Antarctic icefish goldeye
                                                            aholehole trumpetfish pilot fish airbreathing catfish,
                                                            electric ray sweeper.
                                                        </p>
                                                        <div className="description-table"
                                                             style={{maxWidth: '370px'}}>
                                                            <table>
                                                                <tbody>
                                                                <tr>
                                                                    <td>Weight</td>
                                                                    <td>1 kg</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Country of Origin</td>
                                                                    <td>Agro Farm</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Quality</td>
                                                                    <td>Organic</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Сheck</td>
                                                                    <td>Healthy</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Min Weight</td>
                                                                    <td>250 Kg</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="spacer py-5 py-md-9"/>
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


export default ProductDetail;
