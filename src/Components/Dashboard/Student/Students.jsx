import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import Loader from "../../Loader/Loader";
import Department from "../../../UIComponents/Department";

class Students extends Component {
  constructor() {
    super();
    this.state = {
      depSelected: "",
      selectedDepArray: null,
      showSpecificStudents: false,
      showAllStudents: true,
    }
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    if(this.props.status === "Admin"){
      const allStudents = this.props.allStudents;
      const Tem = allStudents.filter(v => v.dep === value)
      this.setState({
        selectedDepArray: Tem,
        showSpecificStudents: true,
        showAllStudents: false,
      })
    }
    else {
      const unBlockedStudents = this.props.unBlockedStudents;
      const Tem = unBlockedStudents.filter(v => v.dep === value)
      this.setState({
        selectedDepArray: Tem,
        showSpecificStudents: true,
        showAllStudents: false,
      })
    }
  }
  showAll = () => {
    this.setState({
      depSelected: "",
      selectedDepArray: null,
      showSpecificStudents: false,
      showAllStudents: true,
    })
  }

  details = (id, userId) => {
    this.props.history.push(`/SDetails/${id}`, userId)
  }

  render() {
    return (<Fragment>{
      this.props.User ? (
        <Fragment>
          {
            this.props.pervData ? (
              <div className="container">
                <ul className="collection with-header">
                  <li className="collection-header hide-on-small-only"><h2>Find Students</h2></li>
                  <li className="collection-header hide-on-med-and-up"><h4>Find Students</h4></li>
                  {this.props.status === "Admin" ? (this.props.allStudents.length > 0 ? (
                    <Fragment>
                      <li className="collection-item">
                        <Department text="Select Department" f="selectD" id="selectD" n="depSelected" v={this.state.depSelected} oc={this.onChange} />
                        {this.state.showSpecificStudents ?
                          (<div className="center">
                            <button className="btn-small waves-effect waves-light orange darken-1" onClick={this.showAll}>All Students</button>
                          </div>) : null
                        }
                      </li>
                      {this.state.showAllStudents ? (
                        this.props.allStudents.map((stu, index) => {
                          return (
                            <li key={index} className="collection-item avatar">
                              <i className="btn btn-floating waves-effect waves-light orange material-icons circle" onClick={() => this.details(stu.id, stu.userId)}>person</i>
                              <span className="title">{stu.firstName}</span>
                              <p className="grey-text">{stu.dep}</p>
                            </li>)
                        })) : (null)
                      }
                      {this.state.showSpecificStudents ? (
                        <Fragment>
                          {this.state.selectedDepArray.length > 0 ? (
                            this.state.selectedDepArray.map((stu, index) => {
                              return (
                                <li key={index} className="collection-item avatar">
                                  <i className="btn btn-floating waves-effect waves-light orange material-icons circle" onClick={() => this.details(stu.id, stu.userId)}>person</i>
                                  <span className="title">{stu.firstName}</span>
                                  <p className="grey-text">{stu.dep}</p>
                                </li>
                              )
                            })
                          ) : (
                              <div className="center grey-text flow-text">
                                Sorry, No Student available.
                              </div>)}
                        </Fragment>
                      ) : (null)
                      }
                    </Fragment>

                  ) : (
                      <div> <br /> <br />
                        <div className="center grey-text flow-text">
                          Sorry, No Student available.
                          </div>
                      </div>)
                  ) : (this.props.unBlockedStudents.length > 0 ? (
                    <Fragment>
                      <li className="collection-item">
                        <Department text="Select Department" f="selectD" id="selectD" n="depSelected" v={this.state.depSelected} oc={this.onChange} />
                        {this.state.showSpecificStudents ?
                          (<div className="center">
                            <button className="btn-small waves-effect waves-light orange darken-1" onClick={this.showAll}>All Students</button>
                          </div>) : null
                        }
                      </li>
                      {this.state.showAllStudents ? (
                        this.props.unBlockedStudents.map((stu, index) => {
                          return (
                            <li key={index} className="collection-item avatar">
                              <i className="btn btn-floating waves-effect waves-light orange material-icons circle" onClick={() => this.details(stu.id, stu.userId)}>person</i>
                              <span className="title">{stu.firstName}</span>
                              <p className="grey-text">{stu.dep}</p>
                            </li>)
                        })) : (null)
                      }
                      {this.state.showSpecificStudents ? (
                        <Fragment>
                          {this.state.selectedDepArray.length > 0 ? (
                            this.state.selectedDepArray.map((stu, index) => {
                              return (
                                <li key={index} className="collection-item avatar">
                                  <i className="btn btn-floating waves-effect waves-light orange material-icons circle" onClick={() => this.details(stu.id, stu.userId)}>person</i>
                                  <span className="title">{stu.firstName}</span>
                                  <p className="grey-text">{stu.dep}</p>
                                </li>
                              )
                            })
                          ) : (
                              <div className="center grey-text flow-text">
                                Sorry, No Student available.
                              </div>)}
                        </Fragment>
                      ) : (null)
                      }
                    </Fragment>

                  ) : (
                      <div> <br /> <br />
                        <div className="center grey-text flow-text">
                          Sorry, No Student available.
                          </div>
                      </div>)
                  )}
                </ul>
              </div>) : (<Loader />)
          }
        </Fragment>
      ) : (<Loader />)
    }
    </Fragment>)
  }
}
const mapStateToProps = (state) => {
  const unBlockedStudents = state.student.allStudents.filter(v => !v.block);
  console.log(unBlockedStudents);
  return {
    allStudents: state.student.allStudents,
    pervData: state.student.pervDataOfStudents,
    User: state.auth.currentUser,
    status: state.auth.status,
    unBlockedStudents,
  }
}
export default connect(mapStateToProps, null)(Students)