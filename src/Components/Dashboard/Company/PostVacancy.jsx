import React, { Component, Fragment } from 'react';
import Input from '../../../UIComponents/Input';
import Button from '../../../UIComponents/Button';
import { connect } from "react-redux";
import { addNewVacancy, RemoveErrorMessagesPC, ErrorPostC } from '../../../Store/Actions/VacancyActions';
import Loader from '../../Loader/Loader';
class PostVacancy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            JobName: "",
            JobDes: "",
            Salary: "",
            EC: "",
            block: false,
        };
    }
    whenChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
        this.props.removeError();
    }
    onAdd = (event) => {
        event.preventDefault();
        const { JobName,
            JobDes,
            Salary,
            EC, } = this.state;
        if (JobName === "" ||
            JobDes === "" ||
            Salary === "" ||
            EC === "") {
            this.props.error("All fields are required!");
            return;
        }
        else if(JobName.length > 25){
            this.props.error("Please enter Job Name properly.");
            return;
        }
        else if(JobName.length < 2){
            this.props.error("Please enter Job Name properly.");
            return;
        }
        else if(JobDes.length > 35){
            this.props.error("Please enter Job description properly.");
            return;
        }
        else if(JobDes.length < 5){
            this.props.error("Please enter Job description properly.");
            return;
        }
        else if(Salary < 5000){
            this.props.error("Salary can't be less than 5k.");
            return;
        }
        else if(Salary > 1000000){
            this.props.error("Salary can't be more than 1000000.")
            return;
        }
        else if(EC.length > 35){
            this.props.error("Please enter Eligibility Criteria properly.");
            return;
        }
        else {
            this.props.newVacancy({
                userId: this.props.currentUser.uid,
                jobname: JobName,
                jobdes: JobDes,
                salary: Salary,
                ec: EC,
                cname: this.props.currentCompany.cname,
                block: this.state.block,
            })
        }
        this.setState({
            JobName: "",
            JobDes: "",
            Salary: "",
            EC: "",
        })
        this.props.history.push("/Profile")
    }
    render() {
        return (
            <Fragment>
                {this.props.currentUser ? (
                    <div className="container">
                        <br />
                        <div className="row">
                            <div className="orange  col l12 s12 darken-1 white-text center flow-text">
                                Post New Vacancy
                            </div>
                            {this.props.errorFlag ? (
                                <div className="col l12 s12 center grey lighten-3 red-text">
                                    <h6>
                                        {this.props.errorMessagePostC}
                                    </h6>
                                </div>
                            ) : (null)}
                            <form onSubmit={this.onAdd}>
                                <div className="orange col l12 s12 lighten-5">
                                    <br />
                                </div>
                                <div className="orange col l12 s12 lighten-5">
                                    <Input v={this.state.JobName} oc={this.whenChange} t="text" f='jobName' d='jobName' l='Job Name' n="JobName" />
                                </div>
                                <div className="orange col l12 s12 lighten-5">
                                    <Input v={this.state.JobDes} oc={this.whenChange} t="text" f='jobDes' d='jobDes' l="Job description" n="JobDes" />
                                </div>
                                <div className="orange col l12 s12 lighten-5">
                                    <Input v={this.state.Salary} oc={this.whenChange} t="number" f='salary' d='salary' l='Salary' n="Salary" />
                                </div>
                                <div className="orange col l12 s12 lighten-5">
                                    <Input v={this.state.EC} oc={this.whenChange} t="text" f='ec' d='ec' l='Eligibility Criteria' n="EC" />
                                </div>
                                <div className="col l12 s12">
                                    &nbsp;
                                </div>
                                <div className="col s4 l2 offset-s4 offset-l5 ">
                                    <Button cn="btn-large waves-effect waves-light orange darken-1" t="Post" />
                                </div>
                                <br />
                                <br />
                            </form>
                        </div>
                    </div>
                ) : (<Loader />)}
            </Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        newVacancy: (obj) => dispatch(addNewVacancy(obj)),
        removeError: () => dispatch(RemoveErrorMessagesPC()),
        error: (mess) => dispatch(ErrorPostC(mess)),
    }
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        errorMessagePostC: state.vacancy.errorMessage,
        errorFlag: state.vacancy.errorFlag,
        currentCompany: state.company.allCompanies.find(v => v.userId === state.auth.currentUser.uid)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostVacancy);