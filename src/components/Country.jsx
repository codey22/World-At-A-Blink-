import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/countryApi";
import CountryCard from "../components/CountryCard";
import { Box, Container, Typography, useTheme } from "@mui/material";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending)
    return (
      <h1 style={{ textAlign: "center", color: theme.palette.text.primary }}>
        Loading...
      </h1>
    );

  return (
    <Container sx={{ mt: 4, mb: 8 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: theme.palette.text.primary,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Country Explorer
      </Typography>
      <br />
      <br />

      {/* Flex container */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {countries.map((country, index) => (
          <Box key={index} sx={{ width: "300px", flex: "0 0 auto" }}>
            <CountryCard country={country} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Country;
