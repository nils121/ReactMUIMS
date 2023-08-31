import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import GainwellLogo from "../../assets/logo/gainwell_logo_300_rgb_rev.png";
import { Navbar, Button, Spinner } from "react-bootstrap";

import "./header.scss";

function Header(props) {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      className="header__container"
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          <img
            src={GainwellLogo}
            className="d-inline-block img-fluid header-left__logo-image"
            alt="Gainwell Technologies Logo"
          />
        </Typography>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          NJMMSIS Refference System
        </Typography>
        <Navbar.Text className="mr-3">
          <span className="header-right__text">
            Logged in as: <strong>{"user123 "}</strong>
            {/* {<span className="ml-1">("Admin")</span>} */}
          </span>
        </Navbar.Text>
        &nbsp;
        <Button type="button" className="header-right__logout-button">
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
