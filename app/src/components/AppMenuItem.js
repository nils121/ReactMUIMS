import React from "react";
import PropTypes from "prop-types";
import { makeStyles, createStyles } from "@material-ui/styles";
// import { SvgIconProps } from '@mui/material/SvgIcon'

import List from "@mui/material/List";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";

import IconExpandLess from "@mui/icons-material/ExpandLess";
import IconExpandMore from "@mui/icons-material/ExpandMore";

import AppMenuItemComponent from "./AppMenuItemComponent";

// React runtime PropTypes
// export const AppMenuItemPropTypes = {
//   name: PropTypes.string.isRequired,
//   link: PropTypes.string,
//   Icon: PropTypes.elementType,
//   items: PropTypes.array,
// };

// TypeScript compile-time props type, infered from propTypes
// https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88
// type AppMenuItemPropTypes = PropTypes.InferProps<typeof AppMenuItemPropTypes>;
// type AppMenuItemPropsWithoutItems = Omit<AppMenuItemPropTypes, "items">;

// Improve child items declaration
// export type AppMenuItemProps = AppMenuItemPropsWithoutItems & {
//   items?: AppMenuItemProps[],
// };

const AppMenuItem = (props) => {
  const { name, link, Icon, items = [] } = props;
  //   const classes = useStyles();
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  const MenuItemRoot = (
    <AppMenuItemComponent className={""} link={link} onClick={handleClick}>
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={""}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </AppMenuItemComponent>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    menuItem: {
      "&.active": {
        background: "rgba(0, 0, 0, 0.08)",
        "& .MuiListItemIcon-root": {
          color: "#fff",
        },
      },
    },
    menuItemIcon: {
      color: "#97c05c",
    },
  })
);

export default AppMenuItem;
