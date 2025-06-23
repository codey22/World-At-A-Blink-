import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../shine.css";

const drawerWidth = 240;
const navItems = ["Home", "About", "Country", "Contact"];

function Headers(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
          }}
        >
          World At A Blink!
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", px: 2, pt: 2 }}>
      <CssBaseline />
      <Box sx={{ width: "100%", position: "relative" }}>
        <AppBar
          component="nav"
          position="static"
          sx={{
            background:
              "linear-gradient(135deg, rgba(40,40,40,0.55), rgba(20,20,20,0.35))",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            color: "white",
            px: 2,
            overflow: "hidden",
            position: "relative",
            backgroundImage: `url("https://www.transparenttextures.com/patterns/dark-mosaic.png")`,
            backgroundRepeat: "repeat",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "-75%",
              height: "100%",
              width: "50%",
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)",
              transform: "skewX(-20deg)",
              animation: "shine 10s infinite",
              zIndex: 1,
            },
          }}
        >
          <Toolbar sx={{ position: "relative", zIndex: 2 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  fontSize: "30px",
                  color: "inherit",
                  fontWeight: "bold",
                }}
              >
                World At A Blink!
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                  component={Link}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#111",
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Headers.propTypes = {
  window: PropTypes.func,
};

export default Headers;
