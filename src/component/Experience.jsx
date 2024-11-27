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
                    Worked with a team of 6 other software team members to solve driving, arm mobility, and soil testing challenges on a rover</li>
                    <li className="description">
                    Placed 2nd at the 2023 Canadian International Rover Challenge and 3rd in 2024! </li>
                    <li className="description">
                    Collaborated with mechanical and electrical engineers to assess the project requirements of a command line interface to control soil testing machine mechanisms</li>
                    <li className="description">
                    Deployed functions in C to create and send packets of positional information to servo motors controlling a robotic hand </li>
                    <li className="description">
                    Implemented a function in C++ to send the rover’s telemetry data via CAN protocol to be displayed on the “mission control” application </li>
                </p>
                <p className="lead"> <b>SailPoint Technologies </b> Backend Software Engineer Intern Jun 2024 - Aug 2024 
                    <li className="description">
                    Communicated with team software engineers to understand existing database systems and assess the best solution to update SQL table attributes
                    </li>
                    <li className="description">
                    Created info logs in GoLang for feature flags and tested with Postman and OpenSearch  </li>
                    <li className="description">
                    Established clear communication in a scrum environment by managing Jira tickets, updating Confluence documentation, and scheduling meetings on Outlook
                    </li>
                </p>
                <p className="lead"> <b>Girls Who Code Summer Immersion Program </b> Teaching Assistant Jun 2023 - Aug 2023 
                    <li className="description">
                    Teaching a classroom of ~60 high school students beginner level coding skills with the p5 play JavaScript library in
                    a game design curriculum. Instructing and hosting office hours for 35 hours/week alongside 4 other teaching staff
                    </li>
                    <li className="description">
                    Personally instructing ~15 students in debugging, presenting, and confidence skills </li>
                    <li className="description">
                    Increasing student engagement in virtual learning by encouraging camera usage, vocal participation, and
                    submitting assignments on time. Had one of the most engaged classrooms out of ~20 classrooms according to a
                    classroom observer
                    </li>
                </p>
                <p className="lead"> <b>Social Futures Lab at the University of Washington </b> Undergraduate Research Assistant  Jan 2023 - Jun 2023
                    <li className="description">
                    Studied how online communities support internet fact checkers under Dr. Amy Zhang and Ph.D. student Jina Yoon</li>
                    <li className="description">
                    Researched how to make the automated misinformation response tool, <a href= "https://artt.cs.washington.edu/faq/" target="_blank">
                    ARTT</a>, more engaging to users by creating a 
                    community of fact checkers who use the product</li>
                    <li className="description">
                    Prototyped 3 website design choices in Figma to make the ARTT tool more 
                    engaging to users based on interviews of prominent online fact checkers </li>
                </p>
                <p className="lead"> <b>Doom Parody Game </b>CSE 457 Final Project May 2024 - Jun 2024 
                    <li className="description">
                    Produced a Doom-style video game in Unity set in the University of Washington Computer Science building with a team of 3 people </li>
                    <li className="description">
                    Created 2d pixel art sprite sheets for enemies, weapons, and health icons; animated enemies in Unity and assisted with enemy melee AI in C# </li>
                </p>
                <p className="lead"> <b>Campus Path Web Application </b> CSE 331 Final Project May 2022 - Jun 2022 
                    <li className="description">
                    Built a web application that highlights paths on a map of the University of Washington, Seattle campus given a start and end location using React.js and Java </li>
                    <li className="description">
                    Created a spark server in Java to give the application the location coordinate data and path coordinates</li>
                </p></div>
                
                </div>
                {/* Experiences Section Button*/}
                <div className="text-center mt-4">
                <a className="btn btn-xl btn-outline-primary" 
                href="https://docs.google.com/document/d/1S6lISm4LfpycO17a2HedK6CI67t0tnYAeNTfi-yojPA/edit?usp=sharing" target="_blank">
                    <i className="fas fa-file-alt me-2" />
                      Check out my resume!
                </a>
                </div>
            </section>
        )
    }
}