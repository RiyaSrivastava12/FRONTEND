import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { margin, textAlign } from "@mui/system";

class AdminPatient extends React.Component {
  render() {
    return (
      <div>
        <section class="key-features" style={{backgroundImage:"url('images/admin.jpg')"}}>
        <div class="container">
          <div class="inner-title">
            <h2 style={{ textAlign: "center" }}>Patient Dashboard</h2>
            <p style={{ textAlign: "center" }}>
             
            </p>
          </div>

          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="single-key">
              
                <h5>Patient Personal Details</h5>
                 
                <Button
                    color="inherit"
                    to="/patient"
                    component={NavLink}
                    style={{ marginRight: "auto" }}
                  >
                  <h5 class="card-title bg-primary" style={{height: "30px", textAlign: "center", color: "white",margin:"auto"}}> Click</h5>
                  </Button>
              
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="single-key">
               
                <h5>Patient-History Details</h5>
                 
                <Button
                    color="inherit"
                    to="/patientHistories"
                    component={NavLink}
                    style={{ marginRight: "auto" }}
                  >
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="div"
                    >
                    <h5 class="card-title bg-primary" style={{height: "30px", textAlign: "center", color: "white"}}> Click </h5>
                    </Typography>
                  </Button>
                
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="single-key">
              
              <h5>Patient Treatment Details</h5>
                 
              <Button
                    color="inherit"
                    to="/treatments"
                    component={NavLink}
                    style={{ marginRight: "auto" }}
                  >
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="div"
                    >
                    <h5 class="card-title bg-primary" style={{height: "30px", textAlign: "center", color: "white"}}> Click </h5>
                    </Typography>
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default AdminPatient;