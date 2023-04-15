import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import LineChart from "@/components/LineChart";
import { Box } from "@mui/material";
import type { NextPage } from "next";

const Line: NextPage = () => {
  return (
    <Box m={"20px"}>
      <Header title="LINECHART" subtitle="Simple Line Chart" />
      <Box height={"75vh"}>
        <LineChart isDashboard={false} isCustomLineColors={false} />
      </Box>
    </Box>
  );
};

export default Line;
