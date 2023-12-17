import React from 'react';
import Hero from "../components/Hero";
import {useParams} from "react-router-dom";


const BlogDetail = (getBlogBySlugs) => {
    const {slug} = useParams();

    const blog = getBlogBySlugs.getBlogBySlugs(slug);
    console.log(blog);

    return (
        <>
            <Hero title={blog.title} subtitle={blog.desc}/>
            <main role="main">
                <link rel="stylesheet" href={process.env.PUBLIC_URL + "/css/style.min.css"} type="text/css"/>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="content-container">
                                    <div className="posts">
                                        <div className="__item">
                                            <img width="100%" src={process.env.PUBLIC_URL + "/" + blog.image}
                                                 alt="demo"/>
                                            <div className="__content">
                                                <div className="mb-6 mb-md-8">
                                                    <time className="__date-post">{blog.date}</time>
                                                    <h3 className="__title h5">{blog.title}</h3>
                                                </div>
                                                <p>
                                                    {blog.desc}
                                                </p>
                                            </div>
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


export default BlogDetail;
