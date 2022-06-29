import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "5%",
  justifyContent: "center",
  gap: "10px",
  flexWrap: "wrap"
}));

export const Text = styled(Typography)(({ theme }) => ({
  textShadow: "1px 1px grey"
}));
