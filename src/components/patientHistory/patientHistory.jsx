import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class PatientHistory extends React.Component {
  state = {
    patientHistories: [],
  };

  // class component life cycle methods
  componentDidMount() {
    axios
      .get("http://localhost:8080/patientHistories")
      .then((res) => {
        console.log(res);
        this.setState({ patientHistories: res.data });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/patientHistories/${id}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const patientHistories = this.state.patientHistories.filter((d) => d.id != id);
        this.setState({ patientHistories: patientHistories });
        alert(res.data.id + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="w-75 mx-auto shadow p-3 mb-5 bg-body rounded">
      <Link to="/patientHistories/add" className="btn btn-info float-end">
      Add
    </Link>

        <table className="table w-75 mx-auto shadow-sm p-3 mb-5 bg-body rounded ">
          <thead>
            <tr className="shadow-sm p-3 mb-5 bg-body rounded">
              <th>Patient_History_Id</th>
              <th>Disease</th>
              <th>Doctor_Advice</th>
              <th>Diet</th>
              {this.props.login.loggedIn &&
                this.props.login.role === "admin" && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {this.state.patientHistories.map((d) => (
              <tr>
                <td>{d.id}</td>
                <td>{d.disease}</td>
                <td>{d.dAdvice}</td>
                <td>{d.diet}</td>
                {this.props.login.loggedIn && this.props.login.role == "admin" && (
                <td>
                  <Link
                    to={`/patientHistories/update/${d.id}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(d.id)}
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

export default connect(mapStateToProps)(PatientHistory);