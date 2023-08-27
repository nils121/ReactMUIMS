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

const drawerWidth = 240;

export default function ClippedDrawer() {
  const [open, setOpen] = useState(false);
  const [menuData, setMenuData] = useState("Home");

  console.log("menuData", menuData);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#436175",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Gainwell
          </Typography>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            NJMMSIS Refferene System
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ flexGrow: 1, textAlign: "center" }}>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
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
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding onClick={() => setMenuData("Dashboard")}>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
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
