import React, { Component, Fragment } from 'react';
import Input from '../../../UIComponents/Input';
import Button from '../../../UIComponents/Button';
import Department from "../../../UIComponents/Department"
import { connect } from "react-redux"
import { addNewStudent, Validation, RemoveErrorMessages } from "../../../Store/Actions/StudentsAction"
import { UpdationRequest } from '../../../Store/Actions/AdminActions';
import Loader from '../../Loader/Loader';
import Gender from '../../../UIComponents/Gender';
class Registration extends Component {
    constructor() {
        super();
        this.state = {
            Name: "",
            LName: "",
            Age: '',
            Gender: '',
            Phone: "",
            Email: "",
            Qualification: "",
            Skills: '',
            Department: "",
            edit: false,
            editID: "",
            block: false, 
        }
    }
    componentDidMount() {
        this.setState({Email: this.props.currentUser.email})
        if (this.props.currentUser) {
            const userID = this.props.currentUser.uid
            if (this.props.allStudents) {
                let allStudents = this.props.allStudents
                let specific = allStudents.find((stu) => {
                    return stu.userId === userID
                })
                if (specific) {
                    this.setState({
                        Name: specific.firstName,
                        LName: specific.lastName,
                        Age: specific.age,
                        Gender: specific.gender,
                        Phone: specific.phoneNumber,
                        Email: specific.email,
                        Skills: specific.skills,
                        Department: specific.dep,
                        Qualification: specific.qua,
                        edit: true,
                        editID: specific.id,
                        block: specific.block,
                    })
                }
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser) {
            const userID = nextProps.currentUser.uid
            if (nextProps.allStudents) {
                let allStudents = nextProps.allStudents
                let specific = allStudents.find((stu) => {
                    return stu.userId === userID
                })
                if (specific) {
                    this.setState({
                        Name: specific.firstName,
                        LName: specific.lastName,
                        Age: specific.age,
                        Gender: specific.gender,
                        Phone: specific.phoneNumber,
                        Email: specific.email,
                        Department: specific.dep,
                        Qualification: specific.qua,
                        Skills: specific.skills,
                        edit: true,
                        editID: specific.id,
                        block: specific.block,
                    })
                }
            }
        }
    }
    onAdd = (event) => {
        event.preventDefault();
        const { Name,
            LName,
            Age,
            Gender,
            Phone,
            Email,
            Qualification, Skills, Department } = this.state;
        if (Name === "" &&
            LName === "" &&
            Age === "" &&
            Gender === "" &&
            Phone === "" &&
            Email === "" &&
            Qualification === "" && Skills === "" && Department === "") {
            this.props.valide("Please fill this form properly.")
            return;
        }
        else if (Name === '') {
            this.props.valide("Please enter your name.")
            return;
        }
        else if (Name.length > 20) {
            this.props.valide("Please enter your name properply.")
            return;
        }
        else if (Name.length < 2) {
            this.props.valide("Please enter your name properply.")
            return;
        }
        else if (LName === "") {
            this.props.valide("Please enter your sur name.")
            return;
        }
        else if (LName.length > 20) {
            this.props.valide("Please enter your sur name properply.")
            return;
        }
        else if (LName.length < 2) {
            this.props.valide("Please enter your sur name properply.")
            return;
        }
        else if (Age === '') {
            this.props.valide("Please enter your age.")
            return;
        }
        else if (Age <= 15) {
            this.props.valide("You are not eligible for jobs becuase you are under age!")
            return;
        }
        else if (Gender === '') {
            this.props.valide("Please select your gender.")
            return;
        }
        else if (Qualification === "") {
            this.props.valide("Please enter your qualification.")
            return;
        }
        else if (Qualification.length > 10) {
            this.props.valide("Please enter your qualification properply.")
            return;
        }
        else if (Qualification.length < 2) {
            this.props.valide("Please enter your qualification properply.")
            return;
        }
        else if (Department === "") {
            this.props.valide("Please select your department.")
            return;
        }
        else if (Skills === "") {
            this.props.valide("Please enter your skills.")
            return;
        }
        else if (Skills.length > 20) {
            this.props.valide("Please enter your skills properply.")
            return;
        }
        else if (Skills.length < 2) {
            this.props.valide("Please enter your skills properply.")
            return;
        }
        else if (Email === "") {
            this.props.valide("Please enter your valide email address.")
            return;
        }
        else if (Email.indexOf("@") === -1 || Email.indexOf(".com") === -1 ||
            Email.indexOf(" ") !== -1) {
            this.props.valide("Please enter your valid email address.")
            return;
        }
        else if (Phone === "") {
            this.props.valide("Please enter your phone number.")
            return;
        }
        else if (Phone.indexOf(" ") !== -1 || Phone.indexOf("-") !== -1 ||
            Phone.length < 11 || Phone.length > 11) {
            this.props.valide("Please enter your 11 digit phone number.")
            return;
        }
        else if (this.state.edit) {
            this.props.UpdateRequest({
                userId: this.props.currentUser.uid,
                firstName: Name, lastName: LName,
                age: Age,
                skills: Skills,
                gender: Gender, phoneNumber: Phone,
                email: Email, qua: Qualification,
                dep: Department,
                editId: this.state.editID,
                status: this.props.status,
                block: this.state.block,
            });
            this.props.history.push("/Profile");
        }
        else {
            this.props.newStudent({
                userId: this.props.currentUser.uid,
                firstName: Name, lastName: LName, age: Age,
                gender: Gender, phoneNumber: Phone,
                email: Email, qua: Qualification,
                dep: Department,
                skills: Skills,
                block: this.state.block,
            })
        }
    }

    whenChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
        this.props.error();
    }
    render() {
        return (
            <Fragment>
                {this.props.currentUser ? (
                    <Fragment>
                        {this.state.edit ? (null) : (<nav className="nav-wrapper orange darken-4">
                            <div className="container">
                                <span className="brand-logo hide-on-small-only">Campus Recruitment System</span>
                                <span className="hide-on-med-and-up">Campus Recruitment System</span>
                            </div>
                        </nav>)}
                        <div className="container">
                            <br />
                            <div className="row">
                                <div className="orange  col l12 s12 darken-1 white-text center flow-text">
                                    Student Registration Form
                            </div>
                                {this.props.errFlag ? (
                                    <div className="col l12 s12 center grey lighten-3 red-text">
                                        <h6>{this.props.errmess}
                                        </h6>
                                    </div>
                                ) : (null)}
                                <form onSubmit={this.onAdd}>
                                    <div className="orange col l12 s12 lighten-5">
                                        <br />
                                    </div>
                                    <div className="orange col l12 s12 lighten-5">
                                        <Input v={this.state.Name} oc={this.whenChange} t="text" f='name' d='name' l='First Name' n="Name" />
                                    </div>
                                    <div className="orange col l12 s12 lighten-5">
                                        <Input v={this.state.LName} oc={this.whenChange} t="text" f='lname' d='lname' l='Sur Name' n="LName" />
                                    </div>
                                    {this.state.edit ? (null) : (<div className="orange col l12 s12 lighten-5">
                                        <Gender oc={this.whenChange} v={this.state.Gender}/>
                                    </div>)}
                                    <div className="orange col l12 s12 lighten-5">
                                        <Input v={this.state.Age} oc={this.whenChange} t="number" f='age' d='age' l='Age' n="Age" />
                                    </div>
                                    <div className="orange col l12 s12 lighten-5">
                                        <Input v={this.state.Qualification} oc={this.whenChange} t="text" f='qua' d='qua' l='Qualification' n="Qualification" />
                                    </div>
                                    <div className="orange col l12 s12 lighten-5">
                                        <Input v={this.state.Skills} oc={this.whenChange} t="text" f='skills' d='skills' l='Skills' n="Skills" />
                                    </div>
                                    <div className="orange col l12 s12 lighten-5">
                                        <Input v={this.state.Phone} oc={this.whenChange} t="number" f="phn" d="phn" l="Conatct Number" n="Phone" />
                                    </div>
                                    {this.state.edit ? (null) : (<div className="orange col l12 s12 lighten-5">
                                        <Department v={this.state.Department} oc={this.whenChange} text="Department" id="dep-simple" f="dep-simple" n="Department" />
                                    </div>)}
                                    <div className="col l12 s12">
                                        &nbsp;
                                </div>
                                    <div className="col s4 l2 offset-s4 offset-l5 ">
                                        {this.state.edit ? (
                                            <Button cn="btn-large waves-effect waves-light  orange darken-1" t="Update Request" />
                                        ) : (
                                            <Button cn="btn-large waves-effect waves-light orange darken-1" t="Register" />)}
                                    </div>
                                    <br />
                                    <br />
                                </form>
                            </div>
                        </div>
                    </Fragment>
                ) : (<Loader />)}
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newStudent: (obj) => dispatch(addNewStudent(obj)),
        valide: (message) => dispatch(Validation(message)),
        error: () => dispatch(RemoveErrorMessages()),
        UpdateRequest: (sdata) => dispatch(UpdationRequest(sdata)),
    }
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        errmess: state.student.vErrorMessage,
        errFlag: state.student.vErrorFlag,
        allStudents: state.student.allStudents,
        status: state.auth.status,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration);