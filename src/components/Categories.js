import React, {Component} from 'react';

class Categories extends Component {


    render() {

        return (
            <>
                <div className="widget widget--categories">
                    <h4 className="h6 widget-title">Categories</h4>
                    <ul className="list">
                        {this.props.categories.map((category, index) => (
                            <li className="list__item" key={index}>
                                <a className="list__item__link" href="/">{category.categoryName}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}

export default Categories;
