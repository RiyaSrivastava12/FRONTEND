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

class Admin extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div class="card" style={{ width: "18rem" }}>
                <img src="images/doctor.jpg" class="card-img-top" alt="..." style={{height: "280px"}}/>
                <div class="card-body">
                  
                  <p class="card-text">
                   Here you can manage doctor details 
                  </p>
                  <Button
                    color="inherit"
                    to="/doctors"
                    component={NavLink}
                    style={{ marginRight: "auto" }}
                  >
                  <h5 class="card-title bg-primary" style={{height: "50px", textAlign: "center", color: "white"}}>Manage Doctor Details</h5>
                  </Button>
                </div>
              </div>
            </div>

            <div className="col">
              <div class="card" style={{ width: "18rem" }}>
                <img src="images/bills.jpg" class="card-img-top" alt="..." style={{height: "280px"}}/>
                <div class="card-body">
                  <p class="card-text">
                    Here you can manage finance or bills details
                  </p>
                  <Button
                    color="inherit"
                    to="/finances"
                    component={NavLink}
                    style={{ marginRight: "auto" }}
                  >
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="div"
                    >
                    <h5 class="card-title bg-primary" style={{height: "50px", textAlign: "center", color: "white"}}>Manage Bills Details</h5>
                    </Typography>
                  </Button>
                </div>
              </div>
            </div>

            <div className="col">
              <div class="card" style={{ width: "18rem" }}>
                <img src="images/patient.jpg" class="card-img-top" alt="..." style={{height: "280px"}}/>
                <div class="card-body">
                  <p class="card-text">
                  Here you can manage patient details
                  </p>
                  <Button
                    color="inherit"
                    to="/patient"
                    component={NavLink}
                    style={{ marginRight: "auto" }}
                  >
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="div"
                    >
                    <h5 class="card-title bg-primary" style={{height: "50px", textAlign: "center", color: "white"}}>Manage Patient Details</h5>
                    </Typography>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;