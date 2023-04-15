import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import { Box } from "@mui/material";
import type { NextPage } from "next";

const Bar: NextPage = () => {
  return (
    <Box m={"20px"}>
      <Header title="BARCHART" subtitle="Simple Bar Chart" />
      <Box height={"75vh"}>
        <BarChart isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Bar;
