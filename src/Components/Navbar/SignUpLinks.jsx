import React from 'react';
const SignUpLinks = (props) => {
    return (
        <div className="row">
            <div className="col s6 l6 m6 offset-l5 offset-s3">
                <ul>
                    <li className="form_a orange-text text-lighten-1" onClick={() => { props.props.history.push("/SignUp", "Student") }}>
                        <h4>Student</h4>

                    </li>
                    <li className="form_a orange-text text-lighten-1" onClick={() => { props.props.history.push("/SignUp", "Company") }}>
                        <h4>Company</h4>

                    </li>
                    <li className="flow-text form_a orange-text text-lighten-1" onClick={() => { props.props.history.push("/SignUp", "Admin") }}>
                        <h4>Admin</h4>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SignUpLinks;