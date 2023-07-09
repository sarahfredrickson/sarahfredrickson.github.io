import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer text-center" id ="contact-me">
                    <div className="row">
                    {/* Footer Email*/}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Contact me</h4>
                        <p className="lead mb-0">
                        sarahsf@cs.washington.edu
                        </p>
                    </div>
                    {/* Footer Social Icons*/}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Socials</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/sarahfredrickson" target="_blank">
                            <i className="fab fa-fw fa-github" /></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/sarah-savannah-fredrickson" target="_blank">
                            <i className="fab fa-fw fa-linkedin-in" /></a>
                    </div>
                    {/* Footer About Text*/}
                    <div className="col-lg-4">
                        <p className="lead mb-0">
                        Created by Sarah Fredrickson using React.js and this 
                        <a href="https://startbootstrap.com/theme/freelancer" target="_blank"> Bootstrap template</a>,
                        which is free to use under the MIT License.
                        </p>
                    </div>
                    </div>
            </footer>
        )
    }
}