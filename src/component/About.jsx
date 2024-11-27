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
                Hi! I'm Sarah, and I am a senior computer science undergraduate at the University of Washington. I enjoy backend programming, computer graphics, and 3D animation!

                Outside of classes, I am an active member on my school's robotics team (Husky Robotics), where I 
                work in software developement. I am also in my school's animation capstone program where we learn about 3D animation in Maya and the animation production pipeline!
                </p>
                </div>
            </section>
        )
    }
}