import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section className="page-section bg-primary text-bg-primary mb-0" id="about">
                {/* About Section Heading*/}
                <h2 className="page-section-heading text-center text-bg-primary">About Me</h2>
                {/* Icon Divider*/}
                <div className="divider-custom divider">
                <div className="divider-custom-line" />
                <div className="divider-custom-icon"><i className="fas fa-circle" /></div>
                <div className="divider-custom-line" />
                </div>
                {/* About Section Content*/}
                <div className="text-center">
                <p className="lead">
                Hi! I'm Sarah, and I am a junior computer science undergraduate at the University of Washington. My favorite
                class so far has to be Systems Programming-- I enjoyed working on the lower level and learning how to communicate
                with the OS!

                Outside of classes, I am an active member on my school's robotics team (Husky Robotics), where I 
                work in software developement. I most enjoy working with hardware on our robotic rover, and
                so I am looking to learn more about backend/systems development!
                </p>
                </div>
            </section>
        )
    }
}