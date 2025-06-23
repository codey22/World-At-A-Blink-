import countryFacts from "../api/countryData.json";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";

const About = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 4,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: theme.palette.text.primary,
        }}
      >
        Here Are The Interesting Facts
        <br />
        We're Proud Of
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {countryFacts.map((country) => {
          const { id, country: countryName, population, fact } = country;

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  height: 250,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: theme.palette.mode === "light"
                    ? "#f5f5f5"
                    : "linear-gradient(145deg, #1c1c1c, #0f0f0f)",
                  color: theme.palette.text.primary,
                  borderRadius: "20px",
                  p: 2,
                }}
                elevation={5}
              >
                <CardContent>
                  <Typography variant="body2" component="div" gutterBottom>
                    {countryName.toUpperCase()}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary }}
                    gutterBottom
                  >
                    <strong>Population:</strong> {population}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      lineHeight: 1.5,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    <strong>Interesting Fact:</strong> {fact}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default About;
