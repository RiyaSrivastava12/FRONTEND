import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Treatment extends React.Component {
  state = {
    treatments: [],
  };

  // class component life cycle methods
  componentDidMount() {
    axios
      .get("http://localhost:8080/treatments")
      .then((res) => {
        console.log(res);
        this.setState({ treatments: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/treatments/${id}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const treatments = this.state.treatments.filter((d) => d.id != id);
        this.setState({ treatments: treatments });
        alert(res.data.tid + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="w-75 mx-auto shadow p-3 mb-5 bg-body rounded">
        <Link to="/treatments/add" className="btn btn-info float-end">
          Add
        </Link>

        <table className="table w-75 mx-auto shadow-sm p-3 mb-5 bg-body rounded ">
          <thead>
            <tr className="shadow-sm p-3 mb-5 bg-body rounded">
              <th>Treatment_Id</th>
              <th>Reports</th>
              <th>Medicines</th>
              <th>Description</th>
              {this.props.login.loggedIn &&
                this.props.login.role === "admin" && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {this.state.treatments.map((d) => (
              <tr>
                <td>{d.tid}</td>
                <td>{d.reports}</td>
                <td>{d.medicines}</td>
                <td>{d.description}</td>
                <td>
                  <Link
                    to={`/treatments/update/${d.tid}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(d.tid)}
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

// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(Treatment);
