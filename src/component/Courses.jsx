import React, { Component } from 'react'

export default class Courses extends Component {
    render() {
        return (
            <section className="page-section bg-primary text-bg-primary mb-0" id="courses">
                {/* Courses Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-bg-primary">Courses</h2>
                {/* Icon Divider*/}
                <div className="divider-custom divider">
                <div className="divider-custom-line" />
                <div className="divider-custom-icon"><i className="fas fa-circle" /></div>
                <div className="divider-custom-line" />
                </div>
                {/* Courses Section Content*/}
                <div className="row">
                <div className= "col-lg-6 me-auto">
                <p className="lead"> To be completed Fall 23: <b>Intro to Algorithms (CSE 421), Intro to
                    Embedded Systems (CSE 474), Intro to Differential Equations (MATH 207)</b></p>
                <p className="lead"> <b>Systems Programming (CSE 333) </b> UW Spring 23 </p>
                <p className="lead"> <b>Linear Algbera (MATH 208) </b> UW Spring 23 </p>
                <p className="lead"> <b>Data Structures and Parallelism (CSE 332) </b> UW Winter 23 </p>
                <p className="lead"> <b>Foundations of Computing 2 (CSE 312) </b> UW Winter 23 </p>
            
                </div> 
                <div className= "col-lg-6 me-auto">
                <p className="lead"> <b>Foundations of Computing 1 (CSE 311) </b> UW Autumn 22 </p>
                <p className="lead"> <b>The Hardware/Software Interface (CSE 351) </b> UW Autumn 22 </p>
                <p className="lead"> <b>Software Design and Implementation (CSE 331) </b> UW Spring 22 </p>
                <p className="lead"> <b>Computer Programming 1 & 2 (CSE 142 & 143) </b> UW Autumn 22 & Winter 23 </p>
                <p className="lead"> <b>Calculus 1,2, & 3 (MATH 124, 125, 126) </b> UW Autumn 22- Spring 23 </p>
               
                </div> </div>
                
            </section>
        )
    }
}