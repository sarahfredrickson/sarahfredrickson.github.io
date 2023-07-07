import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <section className="page-section bg-primary text-bg-primary mb-0" id="experience">
                {/* About Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-bg-primary">Experience</h2>
                {/* Icon Divider*/}
                <div className="divider-custom divider">
                <div className="divider-custom-line" />
                <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                <div className="divider-custom-line" />
                </div>
                {/* About Section Content*/}
                <div className="row">
                <div className="col-lg-4 ms-auto"><p className="lead">Look at all my experience</p></div>
                <div className="col-lg-4 me-auto"><p className="lead">I'm so experienced!</p></div>
                </div>
                {/* About Section Button*/}
                <div className="text-center mt-4">
                <a className="btn btn-xl btn-outline-primary" href="https://startbootstrap.com/theme/freelancer/">
                    <i className="fas fa-download me-2" />
                    Free Download!
                </a>
                </div>
            </section>
        )
    }
}