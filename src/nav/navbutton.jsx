import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ApiIcon from "@mui/icons-material/Api";
import MailIcon from "@mui/icons-material/Mail";
import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import TimerIcon from "@mui/icons-material/Timer";
import ExtensionIcon from "@mui/icons-material/Extension";
import { Link } from "react-router-dom";
import "./navbutton.scss";

export default function NavButton() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  //link 格納
  const Links = ["JokeAPI", "StopWatch", "Mail","TicTacToe", "Unexpected"];
  //link icon 切り替え
  const changeIcon = (link) => {
    switch (link) {
      case "JokeAPI":
        return <ApiIcon />;
      case "StopWatch":
        return <TimerIcon />;
      case "Unexpected":
        return <ErrorOutlineIcon />;
      case "Mail":
        return <MailIcon />;
      case "TicTacToe":
        return <ExtensionIcon />;
      default:
        return <></>;
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      {Links.map((link) => (
        <List key={link}>
          <Link to={"/" + link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{changeIcon(link)}</ListItemIcon>
                <ListItemText primary={link} />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      ))}
      <Divider />
      <List>
        {["Home"].map((text, index) => (
          <Link to="/" key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        onClick={toggleDrawer(true)}
        id="nav-button"
      >
        <MenuIcon />
      </Fab>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}
