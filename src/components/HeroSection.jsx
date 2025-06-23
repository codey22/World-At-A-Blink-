import { Box, Typography, Button, useTheme } from "@mui/material";
import world from "../assets/world.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "100vh",
        px: { xs: 4, md: 10 },
        py: { xs: 8, md: 12 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h3"
          component="h1"
          fontWeight="bold"
          gutterBottom
          sx={{ lineHeight: 1.2 }}
        >
          Explore the <span style={{ color: theme.palette.text.secondary }}>World</span>, One
          <br />
          <span style={{ color: theme.palette.text.secondary }}>Country at a Time.</span>
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 2, mb: 4 }}>
          Discover the history, culture, and beauty of every nation. Sort,
          search, and filter through countries to find the details you need.
        </Typography>

        <Button
          variant="outlined"
          color="inherit"
          onClick={() => navigate("/country")}
          sx={{
            borderRadius: 4,
            px: 4,
            py: 1.5,
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Start Exploring &rarr;
        </Button>
      </Box>

      <Box
        component="img"
        src={world}
        alt="World Monuments"
        sx={{
          flex: 1,
          width: { xs: "100%", md: "600px" },
          height: "auto",
          objectFit: "contain",
          mt: { xs: 4, md: 0 },
        }}
      />
    </Box>
  );
};

export default HeroSection;
