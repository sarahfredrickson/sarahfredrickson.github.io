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
                        <iframe width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/Y_iR59kZ_tk?si=TBjICJ5ZNj_NlNJz" 
                        title="YouTube video player" 
                        frameborder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                         referrerpolicy="strict-origin-when-cross-origin" 
                         allowfullscreen></iframe>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
