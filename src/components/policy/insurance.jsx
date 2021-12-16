import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Insurance extends React.Component {
  state = {
    insurances: [],
  };
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:8080/api/getAllPolicy")
      .then((res) => {
        console.log(res);
        this.setState({ insurances: res.data });
      })
      .catch((err) => console.log(err));
  }
  
  handleDelete = (eid) => {
    axios
      .delete(`http://localhost:8080/api/deletePolicy/${eid}`)
      .then((res) => {
        console.log(res);
        const insurances = this.state.insurances.filter((i) => i.eid != eid);
        this.setState({ insurances: insurances });
        alert(eid + " deleted successfully");
      })
      .catch((err) => console.log(err));
  };
  render() {
    console.log(this.state.insurances);
    return (
      <div className="w-75 mx-auto">
        <Link to="/addinsurance" className="btn btn-info float-end">
          Add
        </Link>
        <table className="table w-75 mx-auto">
          <thead>
            <tr>
              <th>PolicyNumber</th>
              <th>PolicyNAME</th>
              <th>PolicyTerm</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.insurances.map((i) => (
              <tr>
                <td>{i.pNum}</td>
                <td>{i.pName}</td>
                <td>{i.pTerm}</td>
                <td>
                  <Link
                    to={`/updatepolicy/${i.pNum}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(i.pNum)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Insurance;