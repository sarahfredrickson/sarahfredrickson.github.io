import React, { Component } from 'react'

export default class Portfolio extends Component {
    render() {
        return (
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    {/* Portfolio Section Heading*/}
                    <h2 className="page-section-heading text-center text-secondary mb-0">Portfolio</h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-circle" /></div>
                    <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Grid Items*/}
                    <div className="row justify-content-center">
                        {/* ARTT Prototype Presentation*/}
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto">
                            <a href = "https://docs.google.com/presentation/d/12HHSjkNWzQXG1spF_XA2Wk-0FGUfZZG-Xr6YHrCwMKs/edit?usp=sharing" target="_blank">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-external-link-alt fa-3x" /></div>
                            </div>
                            <img className="img-fluid" src="artt-prototype.png" alt="Link to Google Slides of ARTT prototype presentation" />
                            </a>
                            </div>
                        </div>
                        {/* Robot Video*/}
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#robot-video">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-play fa-3x" /></div>
                            </div>
                            <img className="img-fluid" src="robot.png" alt="video of active suspension working" />
                            </div>
                        </div>
                        {/* Github Profile*/}
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto">
                            <a href = "https://github.com/sarahfredrickson" target = "_blank">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-external-link-alt fa-3x" /></div>
                            </div>
                            <img className="img-fluid" src="GitHub-Mark.png" alt="Link to my github page" /> </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        )
    }
}