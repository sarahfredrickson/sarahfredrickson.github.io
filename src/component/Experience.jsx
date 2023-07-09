import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <section className="page-section bg-primary text-bg-primary mb-0" id="experience">
                {/* Experiences Section Heading*/}
                <h2 className="page-section-heading text-center text-bg-primary">Experience</h2>
                {/* Icon Divider*/}
                <div className="divider-custom divider">
                <div className="divider-custom-line" />
                <div className="divider-custom-icon"><i className="fa fa-circle" /></div>
                <div className="divider-custom-line" />
                </div>
                {/* Experiences Section Content*/}
                <div className="row">
                <div className=" ms-auto">
                <p className="lead"> <b>Husky Robotics at University of Washington: </b> Feb 2023- Present 
                    <li className="description">
                    For ~6 hours/week, collaborating in a team of about ~6 people to implement
                    software for a robotic Mars rover’s controls. Using C++ for working with
                    the rover’s hardware, and JavaScript for frontend work on the “mission control” 
                    application used to control the rover.</li>
                    <li className="description">
                    In C++, implemented a method to send the rover’s telemetry data from the
                    CAN bus to be displayed on the “mission control” application.</li>
                    <li className="description">
                    In C++, implemented methods to create and send packets of position
                    information to servo motors controlling the robotic hands on the arm of the rover.</li>
                    <li className="description">
                    In JavaScript, added controls to control the active suspension on the rover
                    from a keyboard and Xbox controllers. A video of the active suspension in action
                    is linked in the portfolio section! </li>
                    <li className="description">
                    Tested and debugged code directly on the rover. </li>
                </p>
                <p className="lead"> <b>Girls Who Code Summer Immersion Program </b> Teaching Assistant Jun 2023 - Aug 2023 
                    <li className="description">
                    Along with 4 other teaching staff members, teaching a classroom of
                    ~60 high school students beginner level coding
                     skills. Teaching the p5 play javascript library in a game design curriculum. </li>
                    <li className="description">
                    Personally instructing ~15 students in debugging, presenting, and confidence skills. </li>
                    <li className="description">
                    Spending 35 hours/week instructing students and hosting office hours to help students debug
                    their game design projects. </li>
                </p>
                <p className="lead"> <b>Social Futures Lab at the University of Washington </b> Undergraduate Research Assistant  Jan 2023 - Jun 2023
                    <li className="description">
                    Studied how online communities support internet fact checkers under Dr. Amy Zhang and PhD student Jina Yoon.</li>
                    <li className="description">
                    Research focused on how to improve the automated misinformation response tool, ARTT, more engaging to
                    users by creating a community of fact checkers who use the product.</li>
                    <li className="description">
                    Based on 8 interviews from prominent online fact checkers, prototyped in Figma
                    3 community-based design choices to make the ARTT tool more engaging to users. </li>
                </p>
                <p className="lead"> <b>Campus Path Web Application </b> CSE 331 Final Project May 2022 - Jun 2022 
                    <li className="description">
                    Used Java and React to create a web application that highlights paths on a map of the University of
                    Washington, Seattle campus given a start and end location. </li>
                    <li className="description">
                    Used Java to create a spark server to give the application the location coordinate data and path coordinates.</li>
                </p></div>
                
                </div>
                {/* Experiences Section Button*/}
                <div className="text-center mt-4">
                <a className="btn btn-xl btn-outline-primary" 
                href="https://docs.google.com/document/d/1truHoV-mVPuEVpvvdkT49fGjnqXHhuL1LlGgawE_RAA/edit?usp=sharing" target="_blank">
                    <i className="fas fa-file-alt me-2" />
                      Check out my resume!
                </a>
                </div>
            </section>
        )
    }
}