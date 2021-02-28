import React, { Component, Fragment } from 'react';
import Footer from '../Footer/Footer';
import SignUPIN from '../Auth/SignUP_IN';
class DashBoard extends Component {
    constructor() {
        super();
        this.state = {
            dashboard: true,
            signUp: false,
            status: "",
        }
    }
    showS = (s) => {
        this.setState({status: s, signUp: true, dashboard: false})
    }
    showDash = () => {
        this.setState({status: "", dashboard: true, signUp: false})
    }
    render() {
        return (
            <Fragment>
                {this.state.dashboard ? (<div className="mainPage">
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="container white">
                        <h2 className="orange-text text-darken-4 center mainHeading hide-on-med-and-down">
                            Welcome to Campus Recruitment System
                        </h2>
                        <h6 className="orange-text text-darken-4 center mainHeading hide-on-large-only">
                            Welcome to Campus Recruitment System
                        </h6>
                        <p className="center hide-on-med-and-down flow-text">Please select one, in order to SignUp/SignIn.</p>
                        <p className="center hide-on-large-only">Please select one, in order to SignUp/SignIn.</p>
                        <div className="row">
                            <div className="col s6 l6 m6 offset-l5 offset-s3 offset-m4">
                                <ul>
                                    <li className="form_a orange-text text-lighten-1" onClick={() => {this.showS("Student")}}>
                                        <h4>Student</h4>

                                    </li>
                                    <li className="form_a orange-text text-lighten-1" onClick={() => {this.showS("Company")}}>
                                        <h4>Company</h4>

                                    </li>
                                    <li className="flow-text form_a orange-text text-lighten-1" onClick={() => {this.showS("Admin")}}>
                                        <h4>Admin</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Footer />
                        <br />
                    </div>
                </div>) : (null)}
                {this.state.signUp ? (
                <Fragment>
                    <nav className="nav-wrapper orange darken-4">
                    <div className="container">
                        <span className="brand-logo hide-on-small-only">Campus Recruitment System</span>
                        <span className="hide-on-med-and-up">Campus Recruitment System</span>
                    </div>
                </nav>
                    <br/>
                    <div className="container">
                    <div className="grey-text waves-effect waves-light underline form_a" onClick={this.showDash}> &nbsp;
                    <i className="material-icons">arrow_back</i></div>
                    </div>
                    <SignUPIN status={this.state.status}/>
                </Fragment>) : (null)}
            </Fragment>
        )
    }
}

export default DashBoard;