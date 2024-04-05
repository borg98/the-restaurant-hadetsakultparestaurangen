import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import "../style/_ResponsiveNav.scss";
import { HiddenAdminButton } from "./HiddenAdminButton";

export const ResponsiveNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Booking", path: "/booking" },
    { text: "Contact", path: "/contact" },
    { text: "Menu", path: "/menu" },
    { text: "About", path: "/about" },
  ];

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen(open);
    };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{
        width: "250px",
        backgroundColor: "black",
        color: "white",
        height: "100%",
      }}
    >
      <List sx={{ fontSize: "20px" }}>
        {menuItems.map((menuItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={Link} to={menuItem.path}>
              <ListItemText primary={menuItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <div className="nav-mobile">
        {isMobile && (
          <IconButton
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "rgba",
              },
            }}
            edge="end"
            onClick={toggleDrawer(true)}
            className="burger-icon nav-mobile__button"
          >
            <MenuIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        )}
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer(false)}
          sx={{
            ".MuiDrawer-paper": {
              backgroundColor: "black",
              color: "white",
              textTransform: "uppercase",
            },
          }}
        >
          {list()}
        </Drawer>
        <HiddenAdminButton pos="relative" />
      </div>
    </div>
  );
};

export default ResponsiveNav;
