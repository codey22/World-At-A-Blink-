import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCountryData } from "../api/countryApi";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CircularProgress,
  useTheme,
} from "@mui/material";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await getCountryData();
      const found = res.data.find(
        (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
      );
      setCountry(found);
      setLoading(false);
    };
    fetchCountry();
  }, [countryName]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={8}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  if (!country) {
    return (
      <Typography variant="h5" color="error" align="center" mt={8}>
        Country not found.
      </Typography>
    );
  }

  const { name, flags, population, region, capital, subregion, languages, currencies } = country;

  return (
    <Container sx={{ mt: 6, color: theme.palette.text.primary }}>
      <Card
        sx={{
          backgroundColor: theme.palette.background.paper,
          padding: 4,
          borderRadius: 4,
          color: theme.palette.text.primary,
          boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {name.common}
        </Typography>

        <CardMedia
          component="img"
          height="180"
          image={flags.svg}
          alt={name.common}
          sx={{ objectFit: "contain", mb: 4 }}
        />

        <Typography><strong>Official Name:</strong> {name.official}</Typography>
        <Typography><strong>Capital:</strong> {capital?.[0] || "N/A"}</Typography>
        <Typography><strong>Region:</strong> {region}</Typography>
        <Typography><strong>Subregion:</strong> {subregion || "N/A"}</Typography>
        <Typography><strong>Population:</strong> {population.toLocaleString()}</Typography>
        <Typography>
          <strong>Languages:</strong> {languages ? Object.values(languages).join(", ") : "N/A"}
        </Typography>
        <Typography>
          <strong>Currencies:</strong> {currencies ? Object.values(currencies).map(c => c.name).join(", ") : "N/A"}
        </Typography>
      </Card>
    </Container>
  );
};

export default CountryDetails;
