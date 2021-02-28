import React, { Fragment } from 'react'
import { connect } from "react-redux"
import DefaultPic from '../../../defaultPic.jpg';
import { BlockS, UnBlockS } from '../../../Store/Actions/AdminActions';
import Loader from '../../Loader/Loader';

const SDetails = (props) => {
    const goBack = () => {
        if(props.Status === "Company"){
            props.history.push("/")
        }
        if(props.Status === "Admin"){
            props.history.push("/Students")
        }
    }
    const { student } = props
    return (
        <div className="container">
            <br />
            {props.currentUser ? (
                props.student ? (
                    <Fragment>
                        <div className="grey-text underline form_a" onClick={goBack}> &nbsp;
                    <i className="material-icons">arrow_back</i></div>
                        <div className="row">
                            <div className="col s12 m12 l6 offset-l3">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={DefaultPic} alt="user-profile" className="pImage" />
                                        {props.Status === "Admin" ? (props.isUserBlocked ? (<span className="btn-floating halfway-fab waves-effect waves-light orange lighten-2" onClick={() => {props.unBlockS(student.id, student.userId, props.BlockedUser.key)}}><i className="material-icons">how_to_reg</i>
                                        </span>) : (<span className="btn-floating halfway-fab waves-effect waves-light orange lighten-2" onClick={() => { props.blockS(student.id,student.userId)}}><i className="material-icons">block</i></span>)) : (null)}
                                    </div>
                                    <div className="card-content">
                                        <div className="card-title red-text">
                                            STUDENT DETAILS
                                </div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>First Name:</th>
                                                    <td>{student.firstName}</td>
                                                </tr>
                                                <tr>
                                                    <th>Sur Name:</th>
                                                    <td>{student.lastName}</td>
                                                </tr>
                                                <tr>
                                                    <th>Age: </th>
                                                    <td>{student.age} </td>
                                                </tr>
                                                <tr>
                                                    <th>Gender: </th>
                                                    <td>{student.gender}</td>
                                                </tr>
                                                <tr>
                                                    <th>Department: </th>
                                                    <td>{student.dep}</td>
                                                </tr>
                                                <tr>
                                                    <th>Qualification: </th>
                                                    <td>{student.qua}</td>
                                                </tr>
                                                <tr>
                                                    <th>Skills: </th>
                                                    <td>{student.skills}</td>
                                                </tr>
                                                <tr>
                                                    <th>Email: </th>
                                                    <td>{student.email}</td>
                                                </tr>
                                                <tr>
                                                    <th>Contact Number: </th>
                                                    <td>{student.phoneNumber}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>) : (<div className="center grey-text lighten-3">Loading. . . . </div>)
            ) : (<Loader />)}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const specific = state.student.allStudents.find((student) => {
        return student.id === id
    })
    const StudentUserId = ownProps.location.state;
    const isUserBlocked = state.admin.blockList.some(v => v.userId === StudentUserId)
    const specificBU = state.admin.blockList.find(v => v.userId === StudentUserId)
    return {
        student: specific,
        currentUser: state.auth.currentUser,
        Status: state.auth.status,
        isUserBlocked: isUserBlocked,
        BlockedUser: specificBU,
    }
}
const mapDispactToProps = (dispatch) => {
    return {
        blockS: (sid, suid) => dispatch(BlockS(sid, suid)),
        unBlockS: (sid, suid, bukey) => dispatch(UnBlockS(sid, suid, bukey)),
    }
}
export default connect(mapStateToProps, mapDispactToProps)(SDetails)
