// src/components/Footers.jsx
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footers = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        textAlign: "center",
        py: 2,
        borderTop: `1px solid ${theme.palette.divider}`,
        mt: "auto",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} World At A Blink. Made with ❤️
      </Typography>
    </Box>
  );
};

export default Footers;
