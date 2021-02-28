import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import Loader from '../../Loader/Loader';
import { RequestSAccept, RequestCAccept, RequestCCancel, RequestSCancel } from '../../../Store/Actions/AdminActions';

class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            showDS: false,
            showDC: false,
            SObj: null,
            Cobj: null,
        };
    }
    dS = (uid) => {
        const TemObjS = this.props.AllSrequests.find(v => v.userId === uid)
        this.setState({ show: false, showDS: true, showDC: false, SObj: TemObjS, Cobj: "" })
    }
    dC = (uid) => {
        const TemObjC = this.props.AllCrequests.find(v => v.userId === uid)
        this.setState({ show: false, showDS: false, showDC: true, SObj: "", Cobj: TemObjC })
    }
    show = () => {
        this.setState({ show: true, showDC: false, showDS: false, SObj: "", Cobj: "" })
    }
    render() {
        return (
            <div>{this.props.user ? (<Fragment>
                {this.state.show ? (<div>
                    <br />
                    <div className="row">
                        <div className="col s12 l7 offset-l3">
                            <div className="card">
                                <ul className="collection with-header myCollections">
                                    <li className="collection-header"><b className="orange-text">Student Requests</b></li>
                                    {this.props.AllSrequests.length > 0 ? (this.props.AllSrequests.map(v => <li key={v.userId} className="collection-item myCollections">
                                        <span><b>{v.firstName} {v.lastName}</b></span>
                                        <button className="btn-small btn-floating waves-effect waves-light transparent secondary-content" >
                                            <i className="material-icons orange-text text-darken-3" onClick={() => { this.props.RequestSCancel(v.urid) }}>highlight_off</i>
                                        </button>
                                        <span className="secondary-content">&nbsp; &nbsp;</span>
                                        <button className="btn-small btn-floating waves-effect waves-light transparent secondary-content" >
                                            <i className="material-icons orange-text text-darken-3" onClick={() => { this.props.RequestSAccept(v.editId, v.urid) }}>check_circle_outline</i>
                                        </button>
                                        <span className="secondary-content">&nbsp; &nbsp;</span>
                                        <button className="btn-small btn-floating waves-effect waves-light transparent secondary-content" >
                                            <i className="material-icons orange-text text-darken-3" onClick={() => { this.dS(v.userId) }}>info</i>
                                        </button>
                                    </li>)) : (<div className="center grey-text flow-text">No Requests.</div>)}
                                    <li className="collection-item myCollections"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 l7 offset-l3">
                            <div className="card">
                                <ul className="collection with-header myCollections">
                                    <li className="collection-header"><b className="orange-text">Companies Requests</b></li>
                                    {this.props.AllCrequests.length > 0 ? (this.props.AllCrequests.map(v => <li key={v.userId} className="collection-item myCollections">
                                        <span><b>{v.cname}</b></span>
                                        <button className="btn-small btn-floating waves-effect waves-light transparent secondary-content" >
                                            <i className="material-icons orange-text text-darken-3" onClick={() => { this.props.RequestCCancel(v.urid) }}>highlight_off</i>
                                        </button>
                                        <span className="secondary-content">&nbsp; &nbsp;</span>
                                        <button className="btn-small btn-floating waves-effect waves-light transparent secondary-content" >
                                            <i className="material-icons orange-text text-darken-3" onClick={() => { this.props.RequestCAccept(v.editId, v.urid) }}>check_circle_outline</i>
                                        </button>
                                        <span className="secondary-content">&nbsp; &nbsp;</span>
                                        <button className="btn-small btn-floating waves-effect waves-light transparent secondary-content" >
                                            <i className="material-icons orange-text text-darken-3" onClick={() => { this.dC(v.userId) }}>info</i>
                                        </button>
                                    </li>)) : (<div className="center grey-text flow-text">No Requests.</div>)}
                                    <li className="collection-item myCollections"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>) : (null)}
                {this.state.showDS ? (<div className="container">
                    <div className="grey-text underline form_a" onClick={this.show}><i className="material-icons">arrow_back</i></div>
                    <div className="row">
                        <div className="col s12 m6 l6 offset-l3">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-title red-text">
                                        Updation Data
                                </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>First Name:</th>
                                                <td>{this.state.SObj.firstName}</td>
                                            </tr>
                                            <tr>
                                                <th>Sur Name:</th>
                                                <td>{this.state.SObj.lastName}</td>
                                            </tr>
                                            <tr>
                                                <th>Age: </th>
                                                <td>{this.state.SObj.age} </td>
                                            </tr>
                                            <tr>
                                                <th>Gender: </th>
                                                <td>{this.state.SObj.gender}</td>
                                            </tr>
                                            <tr>
                                                <th>Department: </th>
                                                <td>{this.state.SObj.dep}</td>
                                            </tr>
                                            <tr>
                                                <th>Qualification: </th>
                                                <td>{this.state.SObj.qua}</td>
                                            </tr>
                                            <tr>
                                                <th>Skills: </th>
                                                <td>{this.state.SObj.skills}</td>
                                            </tr>
                                            <tr>
                                                <th>Email: </th>
                                                <td>{this.state.SObj.email}</td>
                                            </tr>
                                            <tr>
                                                <th>Contact Number: </th>
                                                <td>{this.state.SObj.phoneNumber}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : (null)}
                {this.state.showDC ? (<div className="container">
                    <div className="grey-text underline form_a" onClick={this.show}><i className="material-icons">arrow_back</i></div>
                    <div className="row">
                        <div className="col s12 m6 l6 offset-l3">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-title orange-text">
                                        Updation Data
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th className="grey-text">Comapny Name</th>
                                                <td>{this.state.Cobj.cname}</td>
                                            </tr>
                                            <tr>
                                                <th className="grey-text">Established</th>
                                                <td>{this.state.Cobj.es}</td>
                                            </tr>
                                            <tr>
                                                <th className="grey-text">HR Name</th>
                                                <td>{this.state.Cobj.hrname}</td>
                                            </tr>
                                            <tr>
                                                <th className="grey-text">Email</th>
                                                <td>{this.state.Cobj.email}</td>
                                            </tr>
                                            <tr>
                                                <th className="grey-text">Conatct Number</th>
                                                <td>{this.state.Cobj.cnum}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : (null)}
            </Fragment>) : (<Loader />)}</div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        AllSrequests: state.admin.Srequests,
        AllCrequests: state.admin.Crequests,
        user: state.auth.currentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        RequestSAccept: (editId, UpdationId) => dispatch(RequestSAccept(editId, UpdationId)),
        RequestCAccept: (editId, UpdationId) => dispatch(RequestCAccept(editId, UpdationId)),
        RequestSCancel: (UpdationId) => dispatch(RequestSCancel(UpdationId)),
        RequestCCancel: (UpdationId) => dispatch(RequestCCancel(UpdationId)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Request);