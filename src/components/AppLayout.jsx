// src/components/AppLayout.jsx
import { Outlet, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useContext } from "react";
import { ColorModeContext } from "./theme";
import { useTheme } from "@mui/material/styles";
import Footers from "./Footers"; // ✅ using "Footers"

export const AppLayout = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isDark = theme.palette.mode === "dark";

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: 2,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" color="inherit">
            World At A Blink!
          </Typography>
          <Box>
            <Button component={Link} to="/" sx={{ color: "inherit" }}>HOME</Button>
            <Button component={Link} to="/about" sx={{ color: "inherit" }}>ABOUT</Button>
            <Button component={Link} to="/country" sx={{ color: "inherit" }}>COUNTRY</Button>
            <Button component={Link} to="/contact" sx={{ color: "inherit" }}>CONTACT</Button>
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {isDark ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          minHeight: "calc(100vh - 128px)",
          px: 2,
          py: 4,
        }}
      >
        <Outlet />
      </Box>

      <Footers />
    </>
  );
};
