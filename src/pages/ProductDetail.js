import React from 'react';
import Hero from "../components/Hero";
import {useParams} from "react-router-dom";


const ProductDetail = ({getProductBySlug, getCategoryName, addToCart}) => {
    const {slug} = useParams();

    const product = getProductBySlug(slug);
    const CategoryName = getCategoryName(product.categoryId);


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
                                            <div className="__product-img">
                                                <img width={330}
                                                     src={process.env.PUBLIC_URL + "/" + product.image}
                                                     alt="demo"/>
                                                <span className="product-label product-label--new">New</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-5">
                                            <div className="content-container">
                                                <h3 className="__name">{product.productName}</h3>
                                                <div className="__categories">
                                                    Category:
                                                    <span>{CategoryName}</span>
                                                </div>
                                                <div className="product-price">
                                                    <span
                                                        className="product-price__item product-price__item--new">${product.price}</span>
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
                                                    {product.desc}
                                                </p>
                                                <button onClick={() => addToCart(product)}
                                                        className="custom-btn custom-btn--medium custom-btn--style-1">
                                                    <i className="fontello-shopping-bag"/>Add to Cart
                                                </button>
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
                                                            {product.desc}
                                                        </p>

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
