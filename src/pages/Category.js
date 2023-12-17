import React, {useEffect} from 'react';
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import {useParams} from "react-router-dom";

const Category = ({categories, getProducts, products, addToCart, getCategoryName}) => {
    const {categoryId} = useParams();
    console.log(categoryId);
    useEffect(() => {
        const product = getProducts(categoryId);
        console.log(product);
    }, [categoryId]);

    return (
        <>
            <>
                <Hero title="Shop" subtitle="The point of using is that it has a more-or-less normal distribution of letters, as
                                    opposed to using Content here content here making it look"/>
                <main role="main">
                    <section className="section">
                        <div className="container">
                            <div className="goods-catalog">
                                <div className="row">
                                    <div className="col-12 col-md-4 col-lg-3">
                                        <aside className="sidebar goods-filter">
                                            <span className="goods-filter-btn-close js-toggle-filter"><i
                                                className="fontello-cancel"/></span>
                                            <div className="goods-filter__inner">
                                                <h4 className="goods-filter__title">Filter</h4>
                                                <Categories categories={categories}
                                                            getProducts={getProducts}/>
                                            </div>
                                        </aside>
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9">
                                        <div className="spacer py-6 d-md-none"/>
                                        <div className="spacer py-3"/>
                                        <div className="goods goods--style-1">
                                            <div className="__inner">
                                                <div className="row">
                                                    {products.map(product => (
                                                        <ProductCard key={product.id} product={product}
                                                                     addToCart={addToCart}
                                                                     getCategoryName={getCategoryName}/>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spacer py-5"/>
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item"><a className="page-link" href="/">1</a></li>
                                                <li className="page-item active"><a className="page-link" href="/">2</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="/">3</a></li>
                                                <li className="page-item"><a className="page-link" href="/">4</a></li>
                                                <li className="page-item"><a className="page-link" href="/"><i
                                                    className="fontello-angle-right"/></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        </>
    );
}

export default Category;