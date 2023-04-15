import Header from "@/components/Header";
import { tokens } from "@/styles/theme";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import type { NextPage } from "next";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { ColorLensRounded } from "@mui/icons-material";
import StatBox from "@/components/StatBox";
import LineChart from "@/components/LineChart";
import { mockTransactions } from "@/data/mockData";
import ProgressCircle from "@/components/ProgressCircle";
import BarChart from "@/components/BarChart";
import GeographyChart from "@/components/GeographyChart";

const Home: NextPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        gridAutoRows={"140px"}
        gap={"20px"}
      >
        <Box
          gridColumn={"span 3"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <StatBox
            title="12,3611"
            subtitle="Emails Sent"
            progress={0.5}
            increase={"+14%"}
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <StatBox
            title="431,222"
            subtitle="Sales Obtained"
            progress={0.75}
            increase={"+21%"}
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress={0.3}
            increase={"+5%"}
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Inbound"
            progress={0.8}
            increase={"+43%"}
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn={"span 8"}
          gridRow={"span 2"}
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight={"600"}
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight={"bold"}
                color={colors.greenAccent[500]}
              >
                $59,342
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height={"250px"} mt={"-20px"}>
            <LineChart isDashboard isCustomLineColors={false} />
          </Box>
        </Box>
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          overflow={"auto"}
          sx={{
            backgroundColor: colors.primary[400],
            "&::-webkit-scrollbar": {
              width: "0.4em",
            },
            "&::-webkit-scrollbar-track": {
              "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: colors.grey[100],
              borderRadius: 2,
            },
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography
              color={colors.grey[100]}
              variant="h5"
              fontWeight={"600"}
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight={"600"}
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                p="5px 10px"
                borderRadius={"4px"}
                sx={{ backgroundColor: colors.greenAccent[500] }}
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          p="30px"
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <Typography variant="h5" fontWeight={"600"}>
            Campaign
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            mt={"25px"}
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              mt={"15px"}
            >
              $48,543 revenue generated
            </Typography>
            <Typography>Include extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <Typography variant="h5" fontWeight={"600"} p="30px 30px 0 30px">
            Sales quantity
          </Typography>
          <Box height={"250px"} mt={"-20px"}>
            <BarChart isDashboard />
          </Box>
        </Box>

        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          p="30px"
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <Typography variant="h5" fontWeight={"600"} mb="15px">
            Geography Based Traffic
          </Typography>
          <Box height={"200px"}>
            <GeographyChart isDashboard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
