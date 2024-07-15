// import React from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

// const TemporaryDrawer = ({ open, toggleDrawer }) => {
//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
//       <List>
//         {[
//           "My Profile",
//           "New Groups",
//           "Contacts",
//           "Calls",
//           "People Nearby",
//           "Saved Messages",
//           "Settings",
//           "Invite Friends",
//         ].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       {/* <Divider /> */}
//       {/* <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List> */}
//     </Box>
//   );

//   return (
//     <div>
//       <Drawer open={open} onClose={toggleDrawer(false)}>
//         {DrawerList}
//       </Drawer>
//     </div>
//   );
// };

// export default TemporaryDrawer;
import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import ContactsIcon from "@mui/icons-material/Contacts";
import CallIcon from "@mui/icons-material/Call";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SettingsIcon from "@mui/icons-material/Settings";
import ShareIcon from "@mui/icons-material/Share";
import Switch from "@mui/material/Switch";
import { ColorModeContext } from "./themeContext";
import { useContext } from "react";

const TemporaryDrawer = ({ open, toggleDrawer }) => {
  const colorMode = useContext(ColorModeContext);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { text: "My Profile", icon: <PersonIcon /> },
          { text: "New Groups", icon: <GroupIcon /> },
          { text: "Contacts", icon: <ContactsIcon /> },
          { text: "Calls", icon: <CallIcon /> },
          { text: "People Nearby", icon: <PeopleAltIcon /> },
          { text: "Saved Messages", icon: <BookmarkIcon /> },
          { text: "Settings", icon: <SettingsIcon /> },
          { text: "Invite Friends", icon: <ShareIcon /> },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <ListItem>
        <ListItemText primary="Dark Mode" />
        <Switch onChange={colorMode.toggleColorMode} />
      </ListItem>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
