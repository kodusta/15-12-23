import React from 'react';
import Hero from "../components/Hero";
import {useParams} from "react-router-dom";


const BlogDetail = (getBlogBySlugs) => {
    const {slug} = useParams();

    const blog = getBlogBySlugs.getBlogBySlugs(slug);
    console.log(blog);

    return (
        <>
            <Hero title="BlogDetail" subtitle="The point of using is that it has a more-or-less normal distribution of letters, as
                                    opposed to using Content here content here making it look"/>
            <main role="main">
                <link rel="stylesheet" href={process.env.PUBLIC_URL + "/css/style.min.css"} type="text/css"/>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8 col-lg-9">
                                <div className="content-container">
                                    <div className="posts">
                                        <div className="__item">
                                            <img width="100%" src={process.env.PUBLIC_URL + "/img/gallery_img/4.jpg"}
                                                 alt="demo"/>
                                            <div className="__content">
                                                <div className="mb-6 mb-md-8">
                                                    <time className="__date-post">April 12, 2017</time>
                                                    <h3 className="__title h5">Tips for Ripening your Fruit</h3>
                                                </div>
                                                <p>
                                                    We believe in helping brands create <a href="/">through
                                                    strategy</a>, story-telling, digital products, and integrated
                                                    experiences on web, mobile, and in the world. And you're here,
                                                    friends, because you also believe.
                                                </p>
                                                <p>
                                                    Our team has a passion for making things with real value. This
                                                    has led us to assemble a multi-talented group that can do just
                                                    about anything: from building sets to photographing food,
                                                    crafting websites to developing apps, beautiful design to
                                                    adventure cinematography. Designers, engineers, creatives,
                                                    makers, developers, artists, unite. Let’s do something
                                                    real-special together.Our team has a passion for making things
                                                    with real value. This has led us to assemble a multi-talented
                                                    group that can do just about anything: from building sets to
                                                    photographing food, crafting websites to developing apps,
                                                    beautiful design to adventure cinematography.
                                                </p>
                                                <blockquote className="blockquot">
                                                    <p>
                                                        <i>This has led us to assemble a multi-talented group that
                                                            can do just about anything: from building sets to
                                                            photographing food, crafting websites to developing
                                                            apps, beautiful design to adventure cinematography.
                                                            Designers, engineers, creatives,</i>
                                                    </p>
                                                </blockquote>
                                                <p>
                                                    We believe in helping brands create through strategy,
                                                    story-telling, digital products, and integrated experiences on
                                                    web, mobile, and in the world. And you're here, friends, because
                                                    you also believe.
                                                </p>
                                                <p>
                                                    Our team has a passion for making things with real value. This
                                                    has led us to assemble a multi-talented group that can do just
                                                    about anything: from building sets to photographing food,
                                                    crafting websites to developing apps, beautiful design to
                                                    adventure cinematography. Designers, engineers, creatives,
                                                    makers, developers, artists, unite. Let’s do something
                                                    real-special together. Our team has a passion for making things
                                                    with real value. This has led us to assemble a multi-talented
                                                    group that can do just about anything: from building sets to
                                                    photographing food, crafting websites to developing apps,
                                                    beautiful design to adventure cinematography.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="posts-feedback">
                                    <h6>4 Comments</h6>
                                    <ul className="comments-list">
                                        <li className="comment">
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-none d-lg-block">
                                                            <div className="comment__author-img">
                                                                <img className="img-fluid lazy" width={70}
                                                                     src="img/blank.gif" data-src="img/avatar.jpg"
                                                                     alt="demo"/>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td width="100%">
                                                        <time className="comment__date-post">April 12, 2017</time>
                                                        <div className="d-flex align-items-center mb-3 mb-lg-0">
                                                            <div className="d-block d-lg-none">
                                                                <div className="comment__author-img">
                                                                    <img className="img-fluid lazy" width={70}
                                                                         src="img/blank.gif"
                                                                         data-src="img/avatar.jpg" alt="demo"/>
                                                                </div>
                                                            </div>
                                                            <span
                                                                className="comment__author-name">Terens Smith</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td/>
                                                    <td>
                                                        <p>
                                                            Our team has a passion for making things with real
                                                            value. This has led us to assemble a multi-talented
                                                            group that can do just about anything: from building
                                                            sets to photographing food, crafting websites to
                                                            developing apps, beautiful design to adventure
                                                            cinematography. Designers, engineers, creatives, makers,
                                                            developers, artists, unite.
                                                        </p>
                                                        <div className="text-right">
                                                            <a className="comment__reply custom-btn custom-btn--tiny custom-btn--style-1"
                                                               href="/">REPLY</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <ul>
                                                <li className="comment">
                                                    <table>
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="d-none d-lg-block">
                                                                    <div className="comment__author-img">
                                                                        <img className="img-fluid lazy" width={70}
                                                                             src="img/blank.gif"
                                                                             data-src="img/avatar.jpg" alt="demo"/>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td width="100%">
                                                                <time className="comment__date-post">April 12,
                                                                    2017
                                                                </time>
                                                                <div
                                                                    className="d-flex align-items-center mb-3 mb-lg-0">
                                                                    <div className="d-block d-lg-none">
                                                                        <div className="comment__author-img">
                                                                            <img className="img-fluid lazy"
                                                                                 width={70} src="img/blank.gif"
                                                                                 data-src="img/avatar.jpg"
                                                                                 alt="demo"/>
                                                                        </div>
                                                                    </div>
                                                                    <span
                                                                        className="comment__author-name">Terens Smith</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td/>
                                                            <td>
                                                                <p>
                                                                    Our team has a passion for making things with
                                                                    real value. This has led us to assemble a
                                                                    multi-talented group that can do just about
                                                                    anything: from building sets to photographing
                                                                    food, crafting websites to developing apps,
                                                                    beautiful design to adventure cinematography.
                                                                    Designers, engineers, creatives, makers,
                                                                    developers, artists, unite.
                                                                </p>
                                                                <div className="text-right">
                                                                    <a className="comment__reply custom-btn custom-btn--tiny custom-btn--style-1"
                                                                       href="/">REPLY</a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <ul>
                                                        <li className="comment">
                                                            <table>
                                                                <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="d-none d-lg-block">
                                                                            <div className="comment__author-img">
                                                                                <img className="img-fluid lazy"
                                                                                     width={70} src="img/blank.gif"
                                                                                     data-src="img/avatar.jpg"
                                                                                     alt="demo"/>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td width="100%">
                                                                        <time className="comment__date-post">April
                                                                            12, 2017
                                                                        </time>
                                                                        <div
                                                                            className="d-flex align-items-center mb-3 mb-lg-0">
                                                                            <div className="d-block d-lg-none">
                                                                                <div
                                                                                    className="comment__author-img">
                                                                                    <img className="img-fluid lazy"
                                                                                         width={70}
                                                                                         src="img/blank.gif"
                                                                                         data-src="img/avatar.jpg"
                                                                                         alt="demo"/>
                                                                                </div>
                                                                            </div>
                                                                            <span className="comment__author-name">Terens Smith</span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td/>
                                                                    <td>
                                                                        <p>
                                                                            Our team has a passion for making things
                                                                            with real value. This has led us to
                                                                            assemble a multi-talented group that can
                                                                            do just about anything: from building
                                                                            sets to photographing food, crafting
                                                                            websites to developing apps, beautiful
                                                                            design to adventure cinematography.
                                                                            Designers, engineers, creatives, makers,
                                                                            developers, artists, unite.
                                                                        </p>
                                                                        <div className="text-right">
                                                                            <a className="comment__reply custom-btn custom-btn--tiny custom-btn--style-1"
                                                                               href="/">REPLY</a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="comment">
                                                    <table>
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="d-none d-lg-block">
                                                                    <div className="comment__author-img">
                                                                        <img className="img-fluid lazy" width={70}
                                                                             src="img/blank.gif"
                                                                             data-src="img/avatar.jpg" alt="demo"/>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td width="100%">
                                                                <time className="comment__date-post">April 12,
                                                                    2017
                                                                </time>
                                                                <div
                                                                    className="d-flex align-items-center mb-3 mb-lg-0">
                                                                    <div className="d-block d-lg-none">
                                                                        <div className="comment__author-img">
                                                                            <img className="img-fluid lazy"
                                                                                 width={70} src="img/blank.gif"
                                                                                 data-src="img/avatar.jpg"
                                                                                 alt="demo"/>
                                                                        </div>
                                                                    </div>
                                                                    <span
                                                                        className="comment__author-name">Terens Smith</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td/>
                                                            <td>
                                                                <p>
                                                                    Our team has a passion for making things with
                                                                    real value. This has led us to assemble a
                                                                    multi-talented group that can do just about
                                                                    anything: from building sets to photographing
                                                                    food, crafting websites to developing apps,
                                                                    beautiful design to adventure cinematography.
                                                                    Designers, engineers, creatives, makers,
                                                                    developers, artists, unite.
                                                                </p>
                                                                <div className="text-right">
                                                                    <a className="comment__reply custom-btn custom-btn--tiny custom-btn--style-1"
                                                                       href="/">REPLY</a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="comment">
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-none d-lg-block">
                                                            <div className="comment__author-img">
                                                                <img className="img-fluid lazy" width={70}
                                                                     src="img/blank.gif" data-src="img/avatar.jpg"
                                                                     alt="demo"/>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td width="100%">
                                                        <time className="comment__date-post">April 12, 2017</time>
                                                        <div className="d-flex align-items-center mb-3 mb-lg-0">
                                                            <div className="d-block d-lg-none">
                                                                <div className="comment__author-img">
                                                                    <img className="img-fluid lazy" width={70}
                                                                         src="img/blank.gif"
                                                                         data-src="img/avatar.jpg" alt="demo"/>
                                                                </div>
                                                            </div>
                                                            <span
                                                                className="comment__author-name">Terens Smith</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td/>
                                                    <td>
                                                        <p>
                                                            Our team has a passion for making things with real
                                                            value. This has led us to assemble a multi-talented
                                                            group that can do just about anything: from building
                                                            sets to photographing food, crafting websites to
                                                            developing apps, beautiful design to adventure
                                                            cinematography. Designers, engineers, creatives, makers,
                                                            developers, artists, unite.
                                                        </p>
                                                        <div className="text-right">
                                                            <a className="comment__reply custom-btn custom-btn--tiny custom-btn--style-1"
                                                               href="/">REPLY</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </li>
                                    </ul>
                                    <div className="mt-6 mt-lg-10 mb-lg-4">
                                        <div className="row align-items-center justify-content-between">
                                            <div className="col-12 col-md-auto mb-6">
                                                <div className="post-author">
                                                    <div className="d-table">
                                                        <div className="d-table-cell align-middle">
                                                            <div className="post-author__img">
                                                                <img className="img-fluid lazy" width={70}
                                                                     src="img/blank.gif" data-src="img/avatar.jpg"
                                                                     alt="demo"/>
                                                            </div>
                                                        </div>
                                                        <div className="d-table-cell align-middle">
                                                            <span>Posted by</span>
                                                            <span className="post-author__name">Terens Smith</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-auto mb-6">
                                                <div className="share-btns">
                                                    <ul>
                                                        <li><a className="fb" href="/"><i
                                                            className="fontello-facebook"/>facebook</a></li>
                                                        <li><a className="tw" href="/"><i
                                                            className="fontello-twitter"/>twitter</a></li>
                                                        <li><a className="ggl" href="/"><i
                                                            className="fontello-gplus"/>google plus</a></li>
                                                        <li><a className="pt" href="/"><i
                                                            className="fontello-pinterest-circled"/>pinterest</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h6>Leave a Reply</h6>
                                    <form action="/">
                                        <div className="row">
                                            <div className="col-12 col-sm-6">
                                                <div className="input-wrp">
                                                    <input className="textfield" type="text" defaultValue
                                                           placeholder="Name"/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="input-wrp">
                                                    <input className="textfield" type="text" defaultValue
                                                           placeholder="E-mail"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-wrp">
                                                <textarea className="textfield" placeholder="Comments"
                                                          defaultValue={""}/>
                                        </div>
                                        <button className="custom-btn custom-btn--medium custom-btn--style-1"
                                                type="submit">post comment
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12 my-6 d-md-none"/>
                            <div className="col-12 col-md-4 col-lg-3">
                                <aside className="sidebar">
                                    <div className="widget widget--text">
                                        <h4 className="h6 widget-title">About</h4>
                                        <p>
                                            We believe in helping brands create through strategy, story-telling,
                                            digital products, and integrated experiences on web, mobile, and in the
                                            world.
                                        </p>
                                    </div>
                                    <div className="widget widget--categories">
                                        <h4 className="h6 widget-title">CAtegories</h4>
                                        <ul className="list">
                                            <li className="list__item">
                                                <a className="list__item__link" href="/">Strategy</a>
                                                <span>(3)</span>
                                            </li>
                                            <li className="list__item">
                                                <a className="list__item__link" href="/">Technology</a>
                                                <span>(5)</span>
                                            </li>
                                            <li className="list__item">
                                                <a className="list__item__link" href="/">Creative</a>
                                                <span>(2)</span>
                                            </li>
                                            <li className="list__item">
                                                <a className="list__item__link" href="/">Content</a>
                                                <span>(8)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget--search">
                                        <form className="form--horizontal" action="/" method="get">
                                            <div className="input-wrp">
                                                <input className="textfield" name="s" type="text"
                                                       placeholder="Search"/>
                                            </div>
                                            <button className="custom-btn custom-btn--tiny custom-btn--style-1"
                                                    type="submit">Find
                                            </button>
                                        </form>
                                    </div>
                                    <div className="widget widget--posts">
                                        <h4 className="h6 widget-title">Features Posts</h4>
                                        <div>
                                            <article>
                                                <a className="link" href="/">
                                                    <img className="lazy" width={100} height={75}
                                                         src="img/blank.gif" data-src="img/posts_img/1s.jpg"
                                                         alt="demo"/>
                                                </a>
                                                <div>
                                                    This has led us to assemble a multi
                                                    <span className="date-post">April 12, 2017</span>
                                                </div>
                                            </article>
                                            <article>
                                                <a className="link" href="/">
                                                    <img className="lazy" width={100} height={75}
                                                         src="img/blank.gif" data-src="img/posts_img/2s.jpg"
                                                         alt="demo"/>
                                                </a>
                                                <div>
                                                    Our team has a passion for making things with
                                                    <span className="date-post">April 12, 2017</span>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="widget widget--tags">
                                        <h4 className="h6 widget-title">Popular Tags</h4>
                                        <ul>
                                            <li><a href="/">Art</a></li>
                                            <li><a href="/">design</a></li>
                                            <li><a href="/">concept</a></li>
                                            <li><a href="/">Media</a></li>
                                            <li><a href="/">Photography</a></li>
                                            <li><a href="/">UI</a></li>
                                        </ul>
                                    </div>
                                    <div className="widget widget--banner">
                                        <a href="/"><img className="img-fluid  lazy" src="img/blank.gif"
                                                         data-src="img/widget_banner.jpg" alt="demo"/></a>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section section--no-pt">
                    <div className="container">
                        <ul className="post-nav">
                            <li className="post-nav__item">
                                <a className="post-nav__link post-nav__link--prev" href="/">
            <span className="d-table">
              <span className="d-table-cell align-middle"><i className="ico fontello-left-1"/></span>
              <span className="d-table-cell align-middle">
                Previous reading
                <span className="name">Health Benefits of a Raw Food</span>
              </span>
            </span>
                                </a>
                            </li>
                            <li className="post-nav__item">
                                <a className="post-nav__link post-nav__link--next" href="/">
            <span className="d-table">
              <span className="d-table-cell align-middle">
                next reading
                <span className="name">Tips for Ripening your Fruit</span>
              </span>
              <span className="d-table-cell align-middle"><i className="ico fontello-right-1"/></span>
            </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="section section--dark-bg">
                    <div className="container">
                        <div className="section-heading section-heading--center section-heading--white"
                             data-aos="fade">
                            <h2 className="__title">Get <span>in touch</span></h2>
                            <p>Latin words, combined with a handful of model sentence structures, to generate Lorem
                                Ipsum which looks reasonable.</p>
                        </div>
                        <form className="contact-form js-contact-form" action="/" data-aos="fade">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="input-wrp">
                                        <input className="textfield" name="name" type="text" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="input-wrp">
                                        <input className="textfield" name="email" type="text" placeholder="E-mail"/>
                                    </div>
                                </div>
                            </div>
                            <div className="input-wrp">
                                    <textarea className="textfield" name="message" placeholder="Comments"
                                              defaultValue={""}/>
                            </div>
                            <button className="custom-btn custom-btn--medium custom-btn--style-3 wide" type="submit"
                            >Send
                            </button>
                            <div className="form__note"/>
                        </form>
                    </div>
                </section>
                <section className="section section--no-pt section--no-pb">
                    <div className="g_map" data-api-key="AIzaSyBXQROV5YMCERGIIuwxrmaZbBl_Wm4Dy5U"
                         data-longitude="44.958309" data-latitude="34.109925" data-marker="img/marker.png"
                         style={{minHeight: '255px'}}/>
                </section>
            </main>

        </>
    );

}


export default BlogDetail;
