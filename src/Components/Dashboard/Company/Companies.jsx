import React, { Fragment } from 'react';
import Loader from '../../Loader/Loader';
import { connect } from "react-redux";
const Companies = (props) => {
    const details = (id) => {
        props.history.push(`/CDetails/${id}`)
    }
    return (
        <Fragment>
            {props.user ? (<div className="container">
                <ul className="collection with-header ">
                    <li className="collection-header hide-on-small-only"><h2>All Companies</h2></li>
                    <li className="collection-header hide-on-med-and-up"><h4>All Companies</h4></li>
                    {props.status === "Admin" ? (props.allCompanies.length > 0 ? (
                        props.allCompanies.map(com => {
                            return (
                                <li key={com.companyID} className="collection-item myCollections">
                                    <span className="title">{com.cname}</span>
                                    <span className="btn-floating waves-effect waves-light btn-small orange secondary-content" onClick={() => details(com.userId)}>
                                        <i className="material-icons white-text text-darken-3">info</i>
                                    </span>
                                </li>
                            )
                        })
                    ) : (
                            <div className="center grey-text flow-text">
                                Sorry, No Company available.
                              </div>)) : (props.unBlockedCompanies.length > 0 ? (
                            props.unBlockedCompanies.map(com => {
                                return (
                                    <li key={com.companyID} className="collection-item myCollections">
                                        <span className="title">{com.cname}</span>
                                        <span className="btn-floating waves-effect waves-light btn-small orange secondary-content" onClick={() => details(com.userId)}>
                                            <i className="material-icons white-text text-darken-3">info</i>
                                        </span>
                                    </li>
                                )
                            })
                        ) : (
                                <div className="center grey-text flow-text">
                                    Sorry, No Company available.
                              </div>))}
                    <li className="collection-item myCollections">&nbsp;</li>
                </ul></div>) : (<Loader />)}
        </Fragment>
    );
}
const mapStateToProps = (state) => {
    const unBlockedCompanies = state.company.allCompanies.filter(v => !v.block)
    return {
        user: state.auth.currentUser,
        allCompanies: state.company.allCompanies,
        status: state.auth.status,
        unBlockedCompanies,
    }
}
export default connect(mapStateToProps)(Companies);