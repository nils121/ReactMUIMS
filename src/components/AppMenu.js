import React from "react";
// import { makeStyles, createStyles } from "@material-ui/styles";
import { styled } from "@mui/system";

import List from "@mui/material/List";

import IconDashboard from "@mui/icons-material/Dashboard";
import IconShoppingCart from "@mui/icons-material/ShoppingCart";
import IconPeople from "@mui/icons-material/People";
import IconBarChart from "@mui/icons-material/BarChart";
import IconLibraryBooks from "@mui/icons-material/LibraryBooks";

import AppMenuItem from "./AppMenuItem";

const appMenuItems = [
  {
    name: "Dashboard",
    link: "/",
    Icon: IconDashboard,
  },
  {
    name: "Orders",
    link: "/orders",
    Icon: IconShoppingCart,
  },
  {
    name: "Customers",
    link: "/customers",
    Icon: IconPeople,
  },
  {
    name: "Reports",
    link: "/reports",
    Icon: IconBarChart,
  },
  {
    name: "Nested Pages",
    Icon: IconLibraryBooks,
    items: [
      {
        name: "Level 2",
      },
      {
        name: "Level 2",
        items: [
          {
            name: "Level 3",
          },
          {
            name: "Level 3",
          },
        ],
      },
    ],
  },
];

const AppMenu = () => {
  //   const classes = useStyles();

  return (
    <div>
      <List component="nav" className={""} disablePadding>
        {/* <AppMenuItem {...appMenuItems[0]} /> */}
        {appMenuItems.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
    </div>
  );
};

const drawerWidth = 240;

// const useStyles = styled((theme) =>
//   createStyles({
//     appMenu: {
//       width: "100%",
//     },
//     navList: {
//       width: drawerWidth,
//     },
//     menuItem: {
//       width: drawerWidth,
//     },
//     menuItemIcon: {
//       color: "#97c05c",
//     },
//   })
// );

export default AppMenu;
