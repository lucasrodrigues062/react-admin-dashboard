import GeographyChart from "@/components/GeographyChart";
import Header from "@/components/Header";
import { tokens } from "@/styles/theme";
import { Box, useTheme } from "@mui/material";
import type { NextPage } from "next";

const Geography: NextPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Header title="Geography" subtitle="Simple Geography Chart" />
      <Box height={"75vh"} border={`1px solid ${colors.grey[100]}`}>
        <GeographyChart isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Geography;
