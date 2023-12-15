import React, {Component} from 'react';
import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";


class BlogList extends Component {



    render() {
        return (
            <>
                <Hero title="BlogList" subtitle="The point of using is that it has a more-or-less normal distribution of letters, as
                                    opposed to using Content here content here making it look"/>
                <main role="main">
                    <link rel="stylesheet" href="css/style.min.css" type="text/css"/>
                    <section className="section">
                        <div className="container">
                            <div className="posts posts--style-1">
                                <div className="__inner">
                                    <div className="row">


                                        {this.props.blog.map((item, index) => {
                                            return (
                                                <BlogCard key={index} item={item}/>
                                            )
                                        })}

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


export default BlogList;
