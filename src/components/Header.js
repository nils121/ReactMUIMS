import React from "react";
import clsx from "clsx";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/styles";
import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function Header() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#696969",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Clipped drawer
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="User" />
              </ListItemButton>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
