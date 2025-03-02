import React from "react";
import { Box, CircularProgress } from "@mui/material";

type TLoaderProps = {
  size?: number;
};

export const Loader = ({ size = 60 }: TLoaderProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh" // Full viewport height
    >
      <CircularProgress size={size} data-testid="loader" />
    </Box>
  );
};
