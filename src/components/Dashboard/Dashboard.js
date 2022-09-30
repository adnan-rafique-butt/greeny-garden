import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";
import styles from "../../Styles/Dashboard/Dashboard.scss";
import logo from "../../images/logo.svg";

const DashboardLayout = (props) => {
  return (
    <Box className={"dashboardLayout"}>
      <Box className={"sidebar"}>
        <Box className={"sidebarLogo"}>
          <Box className={"sidebarLogoImg"}>
            <img src={logo} alt="logo" />
          </Box>
          {/* <Button
              className={"toggleButton"}
              onClick={() => setSidebar(!sidebar)}
            >
              <img src={toggleIcon} alt="toggler" />
            </Button> */}
        </Box>
        <Box className={"sidebarMenu"}>
          <NavLink to="/dashboard/1" className={"navMenuItem"}>
            <Box className={"menuItem"}>
              <Typography>Groups</Typography>
            </Box>
          </NavLink>
          <NavLink to="/dashboard/1" className={"navMenuItem"}>
            <Box className={"menuItem"}>
              <Typography>Operators</Typography>
            </Box>
          </NavLink>
          <NavLink to="/dashboard/1" className={"navMenuItem"}>
            <Box className={"menuItem"}>
              <Typography>History</Typography>
            </Box>
          </NavLink>
          <NavLink to="/dashboard" className={"navMenuItem"}>
            <Box className={"menuItem"}>
              <Typography>Printer hub</Typography>
            </Box>
          </NavLink>
          <NavLink to="/dashboard/1" className={"navMenuItem"}>
            <Box className={"menuItem"}>
              <Typography>Schedule</Typography>
            </Box>
          </NavLink>
          <NavLink to="/dashboard/1" className={"navMenuItem"}>
            <Box className={"menuItem"}>
              <Typography>Analytics</Typography>
            </Box>
          </NavLink>
        </Box>
      </Box>
      <Box className={"sidebarClosed"}>
        <Box className={"sidebarLogo"}>
          <Box className={"sidebarLogoImg"}>
            <img src={logo} alt="logo" />
          </Box>
        </Box>
        <Box className={"sidebarMenu"}>
          <NavLink to="/dashboard/1" className={"navMenuItem"}>
            <Box className={"menuItem"}>
              <Typography>Groups</Typography>
            </Box>
          </NavLink>
          <NavLink to="/dashboard/1" className={"navMenuItem"}>
            <Box className={"menuItem"}>
              <Typography>Operators</Typography>
            </Box>
          </NavLink>
          <NavLink to="/dashboard/1" className={"navMenuItem"}>
            <Box className={"menuItem"}>
              <Typography>History</Typography>
            </Box>
          </NavLink>
          <NavLink to="/dashboard" className={"navMenuItem"}>
            <Box className={"menuItem"}>
              <Typography>Printer hub</Typography>
            </Box>
          </NavLink>
          <NavLink to="/dashboard/1" className={"navMenuItem"}>
            <Box className={"menuItem"}>
              <Typography>Schedule</Typography>
            </Box>
          </NavLink>
          <NavLink to="/dashboard/1" className={"navMenuItem"}>
            <Box className={"menuItem"}>
              <Typography>Analytics</Typography>
            </Box>
          </NavLink>
        </Box>
      </Box>

      <Box className={"contentSection"}>
        <Box className={"contentBody"}>{props.children}</Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
