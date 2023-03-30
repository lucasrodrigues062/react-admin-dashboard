import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";

import { tokens } from "@/styles/theme";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import {
  Divider,
  Drawer,
  IconButton,
  Link,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

import Image from "next/image";
import NextLink from "next/link";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (arg: boolean) => void;
  sideBarWidth: number;
}

interface ItemProps {
  title: string;
  to: string;
  icon: any;
  selected: string;
  setSelected: (arg: string) => void;
  isCollapsed: boolean;
}
const Item = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  isCollapsed,
}: ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box display={"flex"} alignItems={"center"}>
      {icon}
      {!isCollapsed && (
        <ListItem
          style={{ color: colors.grey[100] }}
          onClick={() => setSelected(title)}
        >
          <NextLink href={to} passHref legacyBehavior>
            <Link color={colors.grey[100]} sx={{ textDecoration: "none" }}>
              {title}
            </Link>
          </NextLink>
        </ListItem>
      )}
    </Box>
  );
};

const Sidebar = ({
  isCollapsed,
  setIsCollapsed,
  sideBarWidth,
}: SidebarProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box display={"flex"} height="100%">
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: colors.primary[400],
          },
        }}
        sx={{
          width: 250,
          flexShrink: 0,
          "&  .MuiDrawer-paper": {
            width: sideBarWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box margin={"10px 0 20px 0"} color={colors.grey[100]}>
          {isCollapsed && (
            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
              <MenuOutlinedIcon />
            </IconButton>
          )}
          {!isCollapsed && (
            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
              ml="15px"
            >
              <Typography variant="h3" color={colors.grey[100]}>
                ADMINIS
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </Box>

        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Image
                alt="profile-user"
                width="100"
                height="100"
                src={`https://github.com/lucasrodrigues062.png`}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Ed Roh
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                VP Fancy Admin
              </Typography>
            </Box>
          </Box>
        )}
        <Box p={isCollapsed ? undefined : "10%"}>
          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Data
          </Typography>
          <Item
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Item
            title="Contacts Information"
            to="/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Item
            title="Invoices Balances"
            to="/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Pages
          </Typography>
          <Item
            title="Profile Form"
            to="/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Item
            title="FAQ Page"
            to="/faq"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Charts
          </Typography>
          <Item
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Item
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Item
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Item
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
