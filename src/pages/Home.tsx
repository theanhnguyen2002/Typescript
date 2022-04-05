import React from 'react'
import ProductPage from './../pages/ProductPage';


import './js/scripts.js';
import './css/styles.css';

// import 'https://fonts.googleapis.com/css?family=Roboto|Open+Sans';
// import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
// import 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js';
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js';
// import './../pages/js/Home.js';





type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <div>

                <div>
                {/* Navigation*/}
                
                {/* Masthead*/}
                <header className="masthead">
                    <div className="container">
                    <div className="masthead-subheading">Welcome To Our Shop!</div>
                    <div className="masthead-heading text-uppercase">Starbucks</div>
                            <a className="btn-xl text-uppercase" id="btn-banner" href="#services">See more</a>
                    </div>
                </header>

                


                {/* 123*/}
                <section className="page-section" id="services">
                    <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Getting started is easy</h2>
                        <h3 className="section-subheading text-muted">Earn Stars and get rewarded in a few easy steps.</h3>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                        <button className="bt-so">
                            <h1>1</h1>
                        </button>
                            <h4 className="my-3">Create an account</h4>
                            <p className="text-muted">To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.</p>
                        </div>
                        <div className="col-md-4">
                        <button className="bt-so">
                            <h1>2</h1>
                        </button>
                            <h4 className="my-3">Order and pay how you like</h4>
                            <p className="text-muted">Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how</p>
                        </div>
                        <div className="col-md-4">
                        <button className="bt-so">
                            <h1>3</h1>
                        </button>
                            <h4 className="my-3">Earn Stars, get Rewards</h4>
                            <p className="text-muted">As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
                        </div>
                    </div>
                    </div>
                </section>
                {/* Category*/}
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Category</h2>
                        <h3 className="section-subheading text-muted">Drinks and Food</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-4">
                        {/* Portfolio item 1*/}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                            </div>
                                <img className="img-fluid" src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648922965/sbx20190617-33269-caffeamericano-ongreen-corelib-srgb_sfkl5o.jpg" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Coffees</div>
                                <div className="portfolio-caption-subheading text-muted">Drinks</div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                        {/* Portfolio item 2*/}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                            </div>
                                <img className="img-fluid" src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648922965/sbx20190624-38221-royalenglishbreakfastblacktea-ongreen-corelib-g7op_ds3trp.jpg" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Teas</div>
                            <div className="portfolio-caption-subheading text-muted">Drinks</div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                        {/* Portfolio item 3*/}
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                            </div>
                                <img className="img-fluid" src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648923331/starbucks-breakfast-sandwich_ctzp1o.jpg" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Sandwiches</div>
                            <div className="portfolio-caption-subheading text-muted">Food</div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </section>
                {/* About*/}
                <section className="page-section" id="about">
                    <div className="container">
                    <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">History of establishment and development of Starbucks</h3>
                    </div>
                    <ul className="timeline">
                        <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648926831/2971606c7a4764be6b94aa71f63b5f3c_umzhxh.jpg"/></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                            <h4>March 30, 1971, </h4>
                            <h4 className="subheading">the first Starbucks coffee shop was founded by 3 people</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">English teacher Jerry Baldwin, history teacher Zev Siegl, and writer Gordon Bowker.</p></div>
                        </div>
                        </li>
                        <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648927261/bai-hoc-kinh-doanh-ca-phe-tu-ceo-starbucks-howard-schultz_cwvc1h.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                            {/* <h4>March 2011</h4> */}
                            <h4 className="subheading">Inspirationn</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Inspired by Alfred Peet, founder of Peet's Coffee and Tea brand. Some time later, the shop moved to 1912 Pike Place, where it still exists today, and we also started buying beans directly from the farms.</p></div>
                        </div>
                        </li>
                        <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648927264/4_KCSE_yg7gve.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                            {/* <h4>December 2015</h4> */}
                            <h4 className="subheading">Starbucks brand name origin</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Originally, the studio intended to name it Pequod, inspired by the novel Moby-Dick. However, after the name was rejected by one of the co-founders, the company was named Starbucks, a character from the novel above.</p></div>
                        </div>
                        </li>
                        <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648927363/starbucks-coffee-24-giaoduc.vn.net_copy_r42dwc.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                            {/* <h4>July 2020</h4> */}
                            <h4 className="subheading">Development process</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Established on March 30, 1971 in Seattle. Howard Schultz joined the company in 1982 as Director of Retail Operations and Marketing. Schultz started the Il Giornale coffee bar chain in April 1986. In 1984, the original owners of Starbucks, led by Baldwin, took the opportunity to buy Peet (Baldwin still operates there). During the 1980s, Starbucks provided the best benefits to our employees.</p></div>
                        </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648927527/starbucks-coffee-logo_phzvh9.gif" alt="..." /></div>
                        </li>
                    </ul>
                    </div>
                </section>
                
                {/* Clients*/}
                
                {/* Contact*/}
                <section className="page-section" id="contact">
                    <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                    </div>
                    {/* * * * * * * * * * * * * * * **/}
                    {/* * * SB Forms Contact Form * **/}
                    {/* * * * * * * * * * * * * * * **/}
                    {/* This form is pre-integrated with SB Forms.*/}
                    {/* To make this form functional, sign up at*/}
                    {/* https://startbootstrap.com/solution/contact-forms*/}
                    {/* to get an API token!*/}
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                            {/* Name input*/}
                            <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div className="form-group">
                            {/* Email address input*/}
                            <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                            <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div className="form-group mb-md-0">
                            {/* Phone number input*/}
                            <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                            <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                            {/* Message input*/}
                            <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required" defaultValue={""} />
                            <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                        </div>
                        {/* Submit success message*/}
                        {/**/}
                        {/* This is what your users will see when the form*/}
                        {/* has successfully submitted*/}
                        <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                        </div>
                        {/* Submit error message*/}
                        {/**/}
                        {/* This is what your users will see when there is*/}
                        {/* an error submitting the form*/}
                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                        {/* Submit Button*/}
                        <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                    </form>
                    </div>
                </section>
                
                {/* Category item 1 modal popup*/}
                <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                                <div className="close-modal" data-bs-dismiss="modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                    <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                    </svg>
                                </div>
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                            <div className="modal-body">
                                {/* Project details*/}
                                <h2 className="text-uppercase">Coffees</h2>
                                <p className="item-intro text-muted">Drinks</p>
                                <img className="img-fluid d-block mx-auto" src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648922965/sbx20190617-33269-caffeamericano-ongreen-corelib-srgb_sfkl5o.jpg" alt="..." />
                                <p>Our Coffee masters have combined their years of Coffee tasting experience in three simple questions to help you find the coffee you're sure to love.</p>
                                {/* <ul className="list-inline">
                                <li>
                                    <strong>Client:</strong>
                                    Threads
                                </li>
                                <li>
                                    <strong>Category:</strong>
                                    Illustration
                                </li>
                                </ul> */}
                                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                <i className="fas fa-xmark me-1" />
                                See details
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Category item 2 modal popup*/}
                <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                                <div className="close-modal" data-bs-dismiss="modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                        <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                    </svg>
                                </div>
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                            <div className="modal-body">
                                {/* Project details*/}
                                <h2 className="text-uppercase">Teas</h2>
                                <p className="item-intro text-muted">Drinks</p>
                                <img className="img-fluid d-block mx-auto" src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648922965/sbx20190624-38221-royalenglishbreakfastblacktea-ongreen-corelib-g7op_ds3trp.jpg" alt="..." />
                                <p>Our Teas masters have combined their years of Teas tasting experience into three simple questions to help you find the Teas you're sure to love.</p>
                                
                                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                <i className="fas fa-xmark me-1" />
                                See details
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Category item 3 modal popup*/}
                <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                                <div className="close-modal" data-bs-dismiss="modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                        <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                    </svg>
                                </div>
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                            <div className="modal-body">
                                {/* Project details*/}
                                <h2 className="text-uppercase">Sandwiches</h2>
                                <p className="item-intro text-muted">Food</p>
                                <img className="img-fluid d-block mx-auto" src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648923331/starbucks-breakfast-sandwich_ctzp1o.jpg" alt="..." />
                                <p>Our Sandwiches masters have combined their years of Sandwiches tasting experience into three simple questions to help you find the Sandwiches you're sure to love.</p>
                                
                                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                <i className="fas fa-xmark me-1" />
                                See details
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                </div>




            </div>
            

            
        </div>
        
        
    )
}

export default Home