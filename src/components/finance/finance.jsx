import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

class Finance extends React.Component {
  state = {
    bills: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:8080/hsm/getBills")
      .then((res) => {
        console.log(res);
        this.setState({ bills: res.data });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDelete = (bId) => {
    //axios.delete("http://localhost:8082/bills/" + rollNo);
    axios
      .delete(`http://localhost:8080/hsm/deleteBill/${bId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const bills = this.state.bills.filter((s) => s.bId != bId);
        this.setState({ bills: bills });
        alert("Bill deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="table w-50 mx-auto">
        <Link to="/admin" className="btn btn-dark float-start mt-3 mb-3">
          <ArrowBackIcon />
          Admin
        </Link>
        <Link
          to="/finance/add"
          className="btn btn-dark float-end w-50 mt-3 mb-3"
          style={{
            backgroundColor: "#673ab7",
            opacity: "0.9",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
          }}
        >
          Add
        </Link>
        <table className="table table-success table-striped mt-3 border border-dark">
          <thead>
            <tr>
              <th>Bill Id</th>
              <th>Doctor Fees</th>
              <th>Registeration Fees</th>
              <th>Medical Amount</th>
              {this.props.login.loggedIn &&
                this.props.login.role === "admin" && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {this.state.bills.map((s) => (
              <tr>
                <td>{s.bId}</td>
                <td>{s.docFees}</td>
                <td>{s.regFees}</td>
                <td>{s.medAmount}</td>
                {this.props.login.loggedIn && this.props.login.role == "admin" && (
                <td>
                  <Link
                    to={`/finance/update/${s.bId}`}
                    className="btn btn-dark"
                    style={{
                      boxShadow:
                        "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                      marginRight: "15px",
                    }}
                  >
                    update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(s.bId)}
                    style={{
                      backgroundColor: "#F62217",
                      boxShadow:
                        "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                    }}
                  >
                    delete
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

export default connect(mapStateToProps)(Finance);