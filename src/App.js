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


export default class App extends Component {
    state = {
        categories: [],
        blog: [],
        products: []
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
        return this.state.blog.filter(item => item.slug === slug);
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

    render() {
        return (
            <>
                <Header/>
                <Routes>
                    <Route path="/"
                           element={<Shop categories={this.state.categories} products={this.state.products}
                                          getCategoryName={this.getCategoryName}/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/blog/:slug" element={<BlogDetail getBlogBySlugs={this.getBlogBySlugs}/>}/>
                    <Route path="/blog" element={<BlogList blog={this.state.blog}/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/product/:slug" element={<ProductDetail getProductBySlug={this.getProductBySlug}/>}/>

                    <Route path="*" element={<Shop/>}/>
                </Routes>
                <Footer/>
            </>
        );
    }
}