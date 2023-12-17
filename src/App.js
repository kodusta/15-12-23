import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Category from "./pages/Category";

export default class App extends Component {
    state = {
        categories: [],
        blog: [],
        products: [],
        cart: []
    }


    // get categories db.json
    componentDidMount() {
        this.getProducts();
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    categories: json
                })
            });
        fetch('http://localhost:3000/blog')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    blog: json
                })
            });
    }

    getBlogBySlugs = (slug) => {
        return this.state.blog.find(item => item.slug === slug);
    }

    getProducts = (categoryId) => {
        let url = "http://localhost:3000/products";
        if (categoryId) {
            url += "?categoryId=" + categoryId;
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => this.setState({products: data}));
    };

    getCategoryName = (categoryId) => {
        const category = this.state.categories.find(item => item.id === categoryId);
        return category ? category.categoryName : '';
    }

    getProductBySlug = (slug) => {
        return this.state.products.find((product) => product.slug === slug);
    };

    addToCart = (product) => {
        let newCart = this.state.cart;
        var addedItem = newCart.find((c) => c.product.id === product.id);
        if (addedItem) {
            addedItem.quantity += 1;
        } else {
            newCart.push({product: product, quantity: 1});
        }
        this.setState({cart: newCart});
    };

    removeToCart = (product) => {
        let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
        this.setState({cart: newCart});
    };


    render() {
        return (
            <>
                <Header cart={this.state.cart} categories={this.state.categories}/>
                <Routes>

                    <Route path="/shop/:categoryId"
                           element={<Category categories={this.state.categories} products={this.state.products}
                                              addToCart={this.addToCart}
                                              getProducts={this.getProducts} getCategoryName={this.getCategoryName}/>}/>
                    <Route path="/"
                           element={<Shop categories={this.state.categories} products={this.state.products}
                                          addToCart={this.addToCart}
                                          getProducts={this.getProducts} getCategoryName={this.getCategoryName}/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/blog/:slug" element={<BlogDetail getBlogBySlugs={this.getBlogBySlugs}/>}/>
                    <Route path="/blog" element={<BlogList blog={this.state.blog}/>}/>
                    <Route path="/cart" element={<Cart cart={this.state.cart} removeToCart={this.removeToCart}/>}/>
                    <Route path="/product/:slug"
                           element={<ProductDetail getProductBySlug={this.getProductBySlug} addToCart={this.addToCart}
                                                   getCategoryName={this.getCategoryName}/>}/>

                    <Route path="*" element={<Shop/>}/>
                </Routes>
                <Footer/>
            </>
        );
    }
}