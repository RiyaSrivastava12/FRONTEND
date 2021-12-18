import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

class PatientPersonalDetails extends React.Component {
  state = {
    patientpersonaldetails: [],
  };
  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:8080/PatientPersonalDetails")
      .then((res) => {
        console.log(res);
        this.setState({ patientpersonaldetails: res.data });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  handleDelete = (pId) => {
    //axios.delete("http://localhost:8080/PatientPersonalDtails/" + pId);
    axios
      .delete(`http://localhost:8080/PatientPersonalDetails/${pId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const patientPersonalDetails = this.state.patientpersonaldetails.filter(
          (s) => s.pId != pId
        );
        this.setState({ patientpersonaldetails: patientPersonalDetails });
        alert(res.data.pName + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="w-75 mx-auto">
        <Link to="/patient/add" className="btn btn-info float-end">
          Add
        </Link>
        <Link to="/admin" className="btn btn-dark float-start">
          <ArrowBackIcon />
          Admin
        </Link>
        <table className="table w-75 mx-auto">
          <thead>
            <tr>
              <th>Patient_Id</th>
              <th>Patient Name</th>
              <th>patient Age</th>
              <th>Phone No</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Symptoms</th>
              {this.props.login.loggedIn &&
                this.props.login.role === "admin" && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {this.state.patientpersonaldetails.map((p) => (
              <tr key={p.pId}>
                <td>{p.pId}</td>
                <td>{p.pName}</td>
                <td>{p.pAge}</td>
                <td>{p.phoneNo}</td>
                <td>{p.gender}</td>
                <td>{p.address}</td>
                <td>{p.symptoms}</td>
                {this.props.login.loggedIn && this.props.login.role == "admin" && (
                <td>
                  <Link
                    to={`/patient/update/${p.pId}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(p.pId)}
                  >
                    Delete
                  </button>
                </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}


// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(PatientPersonalDetails);
