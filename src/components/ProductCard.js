import React, {Component} from 'react';
import {Link} from "react-router-dom";


class ProductCard extends Component {
    render() {
        return (
            <>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="__item">
                        <figure className="__image">
                            <img width={188} src={process.env.PUBLIC_URL + "/" + this.props.product.image}/>
                        </figure>
                        <div className="__content">
                            <h4 className="h6 __title">
                                <Link to={`/product/${this.props.product.slug}`}>
                                    {this.props.product.productName}
                                </Link>
                            </h4>
                            <div className="__category">
                                <a href="/">
                                    {this.props.getCategoryName(this.props.product.categoryId)}
                                </a>
                            </div>
                            <div className="product-price">
                                <span
                                    className="product-price__item product-price__item--new">${this.props.product.price}</span>
                            </div>
                            <p className="custom-btn custom-btn--medium custom-btn--style-1"
                               onClick={() => this.props.addToCart(this.props.product)}>
                                <i className="fontello-shopping-bag"/>
                                Add to cart
                            </p>
                        </div>
                        <span className="product-label product-label--sale">Sale</span>
                    </div>
                </div>
            </>
        );
    }
}


export default ProductCard;
