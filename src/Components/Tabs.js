import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import StackedListView from "./StackedListView";

export default function Tabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="Regulars" value="2" />
            <Tab label="Unread" value="3" />
            <Tab label="Permissions" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <StackedListView />{" "}
        </TabPanel>
        <TabPanel value="2">Regulars</TabPanel>
        <TabPanel value="3">Unread</TabPanel>
        <TabPanel value="4">Permissions</TabPanel>
      </TabContext>
    </Box>
  );
}
