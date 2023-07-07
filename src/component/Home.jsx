import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <header className="masthead bg-primary text-bg-primary text-center">
                <div className="container d-flex align-items-center flex-column">
                    <img className="masthead-avatar mb-5" src="avataaars.svg" alt="..." />
                    <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
                    <div className="divider-custom divider">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                    </div>
                    <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </header>     
        )
    }
}