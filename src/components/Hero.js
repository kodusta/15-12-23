import React, {Component} from 'react';


class Hero extends Component {
    render() {
        return (
            <>
                <div id="hero" className="jarallax" data-speed="0.7" data-img-position="50% 80%"
                     style={{
                         backgroundImage: `url(${process.env.PUBLIC_URL}/img/intro_img/12.jpg)`,
                         color: '#333',
                     }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-7">
                                <h1 className="__title"> {this.props.title}</h1>
                                <p>
                                    {this.props.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Hero;
