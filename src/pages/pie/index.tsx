import Header from "@/components/Header";
import PieChart from "@/components/PieChart";
import { Box } from "@mui/material";
import type { NextPage } from "next";

const Bar: NextPage = () => {
  return (
    <Box m={"20px"}>
      <Header title="PIECHART" subtitle="Simple Pie Chart" />
      <Box height={"75vh"}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Bar;
