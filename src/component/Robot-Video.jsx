import React, { Component } from 'react'

export default class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio-modal modal fade" id="robot-video" tabIndex={-1} aria-labelledby="robot-video" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                <div className="modal-body text-center pb-5">
                    <div className="container">
                    <div className="row justify-content-center">
                        {/* Portfolio Modal - Video*/}
                        <iframe src="active-suspension.mp4"
                        height="480rem"
                        alt="video of active suspension working" /> 
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
