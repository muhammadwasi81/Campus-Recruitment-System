import React from 'react';
import Type from '../../../Store/const/Types';
import { connect } from "react-redux";
import { LOGOUT } from '../../../Store/Actions/authActions';

const Blocked = (props) => {
    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <div className="orange lighten-4 center">
                <b className='flow-text hide-on-small-only'>Your Account has been blocked by Admin!</b>
                <b className='hide-on-med-and-up'>Your Account has been blocked by Admin!</b>
                <br />
                <br />
                <button className="btn-small waves-effect waves-light orange" onClick={() => {props.logOut(); props.goBack();}}>Go Back To SignUp/SignIn</button>
                <br />
                <br />
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        goBack: () => dispatch({ type: Type.userIsNotBlocked}),
        logOut: () => dispatch(LOGOUT()),
    }
}
export default connect(null, mapDispatchToProps)(Blocked);