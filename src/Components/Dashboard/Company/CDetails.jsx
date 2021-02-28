import React, { Fragment } from 'react';
import { connect } from "react-redux";
import DefaultPicC from "../../../defaultPicC.jpg";
import { BlockC, UnBlockC } from '../../../Store/Actions/AdminActions';
import Loader from '../../Loader/Loader';

const CDetails = (props) => {
    const goBack = () => {
        props.history.push("/Companies")
    }
    const currentCompany = props.allCompanies.find(com => {
        return com.userId === props.match.params.id;
    })
    return (
        <div><br />{props.user ? (<Fragment>{currentCompany ? (<div className="container"><div className="grey-text underline form_a" onClick={goBack}> &nbsp;
        <i className="material-icons">arrow_back</i></div>
            <div className="row">
                <div className="col s12 m12 l6 offset-l3">
                    <div className="card">
                        <div className="card-image">
                            <img src={DefaultPicC} alt="user-profile" className="pImage" />
                            {props.Status === "Admin" ? (props.isUserBlocked ? (
                            <span className="btn-floating halfway-fab waves-effect waves-light orange lighten-2" onClick={() => { props.unBlockC(currentCompany.companyID,currentCompany.userId, props.BlockedUser.key)}}>
                            <i className="material-icons">how_to_reg</i></span>) : (<span className="btn-floating halfway-fab waves-effect waves-light orange lighten-2" onClick={() => { props.blockC(currentCompany.companyID, currentCompany.userId)}}><i className="material-icons">block</i></span>)) : (null)}
                        </div>
                        <div className="card-content">
                            <div className="card-title orange-text">
                               <h5 className="hide-on-small-only"> COMPANY'S INFORMATION </h5>
                            </div>
                            <div className="card-title orange-text">
                               <h6 className="hide-on-med-and-up"> COMPANY'S INFORMATION </h6>
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Company Name</th>
                                        <td>{currentCompany.cname}</td>
                                    </tr>
                                    <tr>
                                        <th>Established</th>
                                        <td>{currentCompany.es}</td>
                                    </tr>
                                    <tr>
                                        <th>HR Name</th>
                                        <td>{currentCompany.hrname}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>{currentCompany.email}</td>
                                    </tr>
                                    <tr>
                                        <th>Conatct Number</th>
                                        <td>{currentCompany.cnum}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div></div>) : (<div className="center grey-text lighten-3">Loading. . . . </div>)}</Fragment>) : (<Loader />)}</div>
    );
}
const mapStateToProps = (state, ownProps) => {
    const CompanyUserId = ownProps.match.params.id;
    const isUserBlocked = state.admin.blockList.some(v => v.userId === CompanyUserId);
    const specificBU = state.admin.blockList.find(v => v.userId === CompanyUserId);
    return {
        user: state.auth.currentUser,
        allCompanies: state.company.allCompanies,
        Status: state.auth.status,
        isUserBlocked: isUserBlocked,
        BlockedUser: specificBU,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        blockC: (cid, cuid) => dispatch(BlockC(cid, cuid)),
        unBlockC: (cid, cuid, bukey) => dispatch(UnBlockC(cid, cuid, bukey)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CDetails);