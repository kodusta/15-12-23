import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BlogCard extends Component {
    render() {
        return (
            <>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="__item __item--preview">
                        <figure className="__image">
                            <img src={process.env.PUBLIC_URL + "/" + this.props.item.image}
                                 alt="demo"/>
                        </figure>
                        <div className="__content">
                            <h3 className="__title h5">
                                <Link to={`/blog/${this.props.item.slug}`}>
                                    {this.props.item.title}
                                </Link>
                            </h3>
                            <p>
                                {this.props.item.desc}
                            </p>
                        </div>
                        <span className="__date-post">
                  <strong>{this.props.item.date}</strong>
                </span>
                    </div>
                </div>
            </>
        );
    }
}


export default BlogCard;
