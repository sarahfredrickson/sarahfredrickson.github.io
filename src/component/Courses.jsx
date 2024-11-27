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
                <p className="lead"> <b>Animation Capstone Program </b> UW 24 - 25 </p>
                <p className="lead"> <b>Intro to Computer Communication Networks (CSE 461) </b> UW Fall 24 </p>
                <p className="lead"> <b>Computer Graphics (CSE 457)</b> UW Spring 24</p>
                <p className="lead"> <b>Intro to Operating Systems (CSE 451) </b> UW Spring 24 </p>
                <p className="lead"> <b>Intro to Machine Learning (CSE 446) </b> UW Winter 24 </p>   
                <p className="lead"> <b>Intro to Algorithms (CSE 421)</b> UW Fall 23</p>
            
                </div> 
                <div className= "col-lg-6 me-auto">
                <p className="lead"> <b>Systems Programming (CSE 333) </b> UW Spring 23 </p>
                <p className="lead"> <b>Data Structures and Parallelism (CSE 332) </b> UW Winter 23 </p>
                <p className="lead"> <b>Foundations of Computing 2 (CSE 312) </b> UW Winter 23 </p>
                <p className="lead"> <b>Foundations of Computing 1 (CSE 311) </b> UW Autumn 22 </p>
                <p className="lead"> <b>The Hardware/Software Interface (CSE 351) </b> UW Autumn 22 </p>
                <p className="lead"> <b>Software Design and Implementation (CSE 331) </b> UW Spring 22 </p>
            
               
                </div> </div>
                
            </section>
        )
    }
}