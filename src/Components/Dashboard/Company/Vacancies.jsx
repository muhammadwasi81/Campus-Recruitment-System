import React, { Fragment } from 'react';
import { connect } from "react-redux";
import Loader from '../../Loader/Loader';
const Vacancies = (props) => {
    return (<Fragment>
        <div className="container hide-on-small-only"> <br /> <br /> {props.user ? (props.status === "Admin" ? (props.allVacancies.length > 0 ? (<div className="row">
            <div className="col l12 s12 m12">
                <table><thead className="orange darken-1 z-depth-1">
                    <tr className="white-text">
                        <th>S.No</th>
                        <th>Company Name</th>
                        <th>Job Name</th>
                        <th>Job Description</th>
                        <th>Salary</th>
                        <th>Eligibility Criteria</th>
                    </tr>
                </thead>
                    <tbody>
                        {props.allVacancies.map((v, i) => {
                            return (
                                <tr key={v.postId}>
                                    <td>{++i}.
                                    </td>
                                    <td>{v.cname}</td>
                                    <td>
                                        {v.jobname}
                                    </td>
                                    <td>
                                        {v.jobdes}
                                    </td>
                                    <td>
                                        {v.salary}
                                    </td>
                                    <td>
                                        {v.ec}
                                    </td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>) : (<div className="center">
            <h5 className="orange-text text-darken-1">No Company has posted any vacancy yet!</h5>
        </div>)) : (props.unBlockedVacanies.length > 0 ? (<div className="row">
            <div className="col l12 s12 m12">
                <table><thead className="orange darken-1 z-depth-1">
                    <tr className="white-text">
                        <th>S.No</th>
                        <th>Company Name</th>
                        <th>Job Name</th>
                        <th>Job Description</th>
                        <th>Salary</th>
                        <th>Eligibility Criteria</th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
                        {props.unBlockedVacanies.map((v, i) => {
                            return (
                                <tr key={v.postId}>
                                    <td>{++i}.
                                    </td>
                                    <td>{v.cname}</td>
                                    <td>
                                        {v.jobname}
                                    </td>
                                    <td>
                                        {v.jobdes}
                                    </td>
                                    <td>
                                        {v.salary}
                                    </td>
                                    <td>
                                        {v.ec}
                                    </td>
                                    {/*  <td>
                                            <span className="btn-floating waves-effect waves-light orange" onClick={() => {}}>
                                                <i className="material-icons white-text text-darken-3">spellcheck</i>
                                            </span>
                                        </td>  */}
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>) : (<div className="center">
            <h5 className="orange-text text-darken-1">No Company has posted any vacancy yet!</h5>
        </div>))) : (<Loader />)}</div>






        <div className="container hide-on-med-and-up"> <br /> <br /> {props.user ? (props.status === "Admin" ? (props.allVacancies.length > 0 ? (
        <div className="row">
            <div className="col l12 s12 m12">
                <table className="smallFont"><thead className="orange darken-1 z-depth-1">
                    <tr className="white-text">
                        <th colSpan="2" className="center">All Vacancies</th>
                    </tr>
                </thead>
                    <tbody>
                        {props.allVacancies.map((v, i) => {
                            return (
                                <Fragment key={v.postId}>
                                    <tr >
                                        <th>Company Name</th>
                                        <td>{v.cname}</td>
                                    </tr>
                                    <tr>
                                        <th>Job Name</th>
                                        <td>{v.jobname}</td>
                                    </tr>
                                    <tr>
                                        <th>Job Description</th>
                                        <td>{v.jobdes}</td>
                                    </tr>
                                    <tr>
                                        <th>Salary</th>
                                        <td>{v.salary}</td>
                                    </tr>
                                    <tr>
                                        <th>Eligibility Criteria</th>
                                        <td>{v.ec}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" className="orange lighten-4"></td>
                                    </tr>
                                </Fragment>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>) : (<div className="center">
            <h6 className="orange-text text-darken-1">No, Company has posted any vacancy yet!</h6>
        </div>)) : (props.unBlockedVacanies.length > 0 ? (<div className="row">
            <div className="col l12 s12 m12">
                <table className="smallFont"><thead className="orange darken-1 z-depth-1">
                    <tr className="white-text">
                        <th colSpan="2" className="center">All Vacancies</th>
                    </tr>
                </thead>
                    <tbody>
                        {props.unBlockedVacanies.map((v, i) => {
                            return (
                                <Fragment key={v.postId}>
                                    <tr >
                                        <th>Company Name</th>
                                        <td>{v.cname}</td>
                                    </tr>
                                    <tr>
                                        <th>Job Name</th>
                                        <td>{v.jobname}</td>
                                    </tr>
                                    <tr>
                                        <th>Job Description</th>
                                        <td>{v.jobdes}</td>
                                    </tr>
                                    <tr>
                                        <th>Salary</th>
                                        <td>{v.salary}</td>
                                    </tr>
                                    <tr>
                                        <th>Eligibility Criteria</th>
                                        <td>{v.ec}</td>
                                    </tr>
                                    <tr>
                                        <th colSpan="2" className="orange lighten-4">
                                            {/* <span className="waves-effect waves-light right btn-small orange darken-1" onClick={() => { }}>
                                                Apply Now
                                            </span> */}
                                        </th>
                                    </tr>
                                </Fragment>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>) : (<div className="center">
            <h6 className="orange-text text-darken-1">No, Company has posted any vacancy yet!</h6>
        </div>))) : (<Loader />)}</div>
    </Fragment>
    );
}
const mapStateToProps = (state) => {
    const unBlockedVacanies = state.vacancy.allVacancies.filter(v => !v.block)
    return {
        user: state.auth.currentUser,
        allVacancies: state.vacancy.allVacancies,
        status: state.auth.status,
        unBlockedVacanies,
    }
}
export default connect(mapStateToProps)(Vacancies);