import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import { ListSubheader } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
// import HomeIcon from "./assets/icons/company.png";
// import SearchIcon from "./assets/icons/zoom.png";
// import LogoutIcon from "./assets/icons/sign_out.png";
// import AddIcon from "./assets/icons/add.png";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";

import Header from "./components/Header/Header";

import "./App.css";

const drawerWidth = 240;

export default function ClippedDrawer() {
  const [open, setOpen] = useState(false);
  const [menuData, setMenuData] = useState("Home");

  console.log("menuData", menuData);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding onClick={() => setMenuData("Home")}>
              <ListItemButton>
                <ListItemIcon>
                  <AdminPanelSettingsIcon style={{ fill: "#00c791" }} />
                </ListItemIcon>
                <ListItemText primary="Admin Menu" />
              </ListItemButton>
            </ListItem>
            <ListSubheader onClick={() => setMenuData("Home")}>
              <ListItemButton>
                <ListItemIcon>
                  <AddCircleOutlineIcon style={{ fill: "#00c791" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Add/Update UCC"
                  primaryTypographyProps={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                />
              </ListItemButton>
            </ListSubheader>
          </List>
          <List>
            <ListItem disablePadding onClick={() => setMenuData("Dashboard")}>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon style={{ fill: "#00c791" }} />
                </ListItemIcon>
                <ListItemText primary="Main Menu" />
              </ListItemButton>
            </ListItem>
            <ListSubheader onClick={() => setMenuData("Dashboard")}>
              <ListItemButton className="icon">
                <ListItemIcon>
                  <HomeIcon style={{ fill: "#00c791" }} />
                </ListItemIcon>

                <ListItemText
                  primary="Home"
                  primaryTypographyProps={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                />
              </ListItemButton>
              Home
            </ListSubheader>
            <ListSubheader onClick={() => setMenuData("Dashboard")}>
              <ListItemButton>
                <ListItemIcon>
                  <SearchIcon style={{ fill: "#00c791" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Search UCC "
                  primaryTypographyProps={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                />
              </ListItemButton>
            </ListSubheader>
            <ListSubheader onClick={() => setMenuData("Dashboard")}>
              <ListItemButton>
                <ListItemIcon>
                  <SearchIcon style={{ fill: "#00c791" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Search Surgical Code"
                  primaryTypographyProps={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                />
              </ListItemButton>
            </ListSubheader>
            <ListSubheader onClick={() => setMenuData("Dashboard")}>
              <ListItemButton>
                <ListItemIcon>
                  <SearchIcon style={{ fill: "#00c791" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Search Benefit Plan Code"
                  primaryTypographyProps={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                />
              </ListItemButton>
            </ListSubheader>
            <ListSubheader onClick={() => setMenuData("Dashboard")}>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon style={{ fill: "#00c791" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Log out"
                  primaryTypographyProps={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    padding: "-2px",
                  }}
                />
              </ListItemButton>
            </ListSubheader>
          </List>
          {/* <Divider /> */}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <Toolbar /> */}
        {menuData == "Home" && <Home />}
        {menuData == "Dashboard" && <Dashboard />}
      </Box>
    </Box>
  );
}
