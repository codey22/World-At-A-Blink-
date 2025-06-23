import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CountryCard = ({ country }) => {
  const navigate = useNavigate();
  const { name, flags, population, region, capital } = country;

  const handleReadMore = () => {
    navigate(`/countrydetails/${name.common}`);
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(145deg, #1f1f1f, #141414)",
        color: "white",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        overflow: "hidden",
        textAlign: "left",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={flags.svg}
        alt={name.common}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" noWrap>
          {name.common}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <strong>Population:</strong> {population.toLocaleString()}
        </Typography>
        <Typography variant="body2">
          <strong>Region:</strong> {region}
        </Typography>
        <Typography variant="body2">
          <strong>Capital:</strong> {capital?.[0] || "N/A"}
        </Typography>
      </CardContent>

      <Box sx={{ flexGrow: 1 }} />

      <Box textAlign="center" pb={2}>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            borderRadius: "999px",
            px: 3,
            "&:hover": {
              backgroundColor: "#333",
              borderColor: "white",
            },
          }}
          onClick={handleReadMore}
        >
          READ MORE →
        </Button>
      </Box>
    </Card>
  );
};

export default CountryCard;
