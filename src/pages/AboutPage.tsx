import React from 'react'
import './css/About.css';

type Props = {}

const AboutPage = (props: Props) => {
    return (
        <div className="" id="about-page">
            <div>
                <div className="bg-about">
                    <div className="container py-5">
                    <div className="row h-100 align-items-center py-5">
                        <div className="col-lg-6">
                        <h1 className="display-4 text-white">About us page</h1>
                        <p className="lead mb-0 text-light">History of establishment and development of Starbucks</p>
                        
                        </div>
                            <div className="col-lg-6 d-none d-lg-block"><img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648931637/Untitled-1_copy_lgjg1s.png"  className="img-fluid" /></div>
                    </div>
                    </div>
                </div>
                <div className="bg-white py-5">
                    <div className="container py-5">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary" />
                        <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                        </div>
                        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"  className="img-fluid mb-4 mb-lg-0" /></div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"  className="img-fluid mb-4 mb-lg-0" /></div>
                        <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary" />
                        <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                        </div>
                    </div>
                    </div>
                </div>
                
                
                </div>


        </div>
    )
}

export default AboutPage