// import React, { useState, useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import {
//   List,
//   ListItem,
//   ListItemAvatar,
//   Avatar,
//   ListItemText,
//   Typography,
//   Divider,


// const StackedListView = () => {
//   const [contacts, setContacts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchContacts = async () => {
//     try {
//       const response = await fetch(
//         `https://devapi.beyondchats.com/api/get_all_chats?page=${page}`
//       );
//       const datas = await response.json();
//       const newContacts = datas.data.data.map((chat) => ({
//         name: chat.creator.name,
//         message: chat.message,
//         avatar: "url_to_avatar", // replace this with the actual URL if available
//       }));

//       setContacts((prevContacts) => [...prevContacts, ...newContacts]);
//       setPage(page + 1);

//       if (newContacts.length === 0 || newContacts.length < 10) {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setHasMore(false);
//     }
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   return (
//     <InfiniteScroll
//       dataLength={contacts.length}
//       next={fetchContacts}
//       hasMore={hasMore}
//       loader={<h4>Loading...</h4>}
//       endMessage={<p style={{ textAlign: "center" }}>No more contacts</p>}
//       style={{ overflow: "hidden" }}
//     >
//       <List>
//         {contacts.map((contact, index) => (
//           <React.Fragment key={index}>
//             <ListItem alignItems="flex-start">
//               <ListItemAvatar>
//                 <Avatar alt={contact.name} src={contact.avatar} />
//               </ListItemAvatar>
//               <ListItemText
//                 primary={contact.name}
//                 secondary={
//                   <React.Fragment>
//                     <Typography
//                       component="span"
//                       variant="body2"
//                       color="text.primary"
//                     >
//                       {contact.message}
//                     </Typography>
//                   </React.Fragment>
//                 }
//               />
//             </ListItem>
//             {index < contacts.length - 1 && (
//               <Divider variant="inset" component="li" />
//             )}
//           </React.Fragment>
//         ))}
//       </List>
//     </InfiniteScroll>
//   );
// };

// export default StackedListView;
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

const StackedListView = ({ onChatTap }) => {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchContacts = async () => {
    try {
      const response = await fetch(
        `https://devapi.beyondchats.com/api/get_all_chats?page=${page}`
      );
      const datas = await response.json();
      const newContacts = datas.data.data.map((chat) => ({
        id: chat.id,
        name: chat.creator.name,
        message: chat.message,
        avatar: "url_to_avatar", // replace this with the actual URL if available
      }));

      setContacts((prevContacts) => [...prevContacts, ...newContacts]);
      setPage(page + 1);

      if (newContacts.length === 0 || newContacts.length < 10) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <InfiniteScroll
      dataLength={contacts.length}
      next={fetchContacts}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p style={{ textAlign: "center" }}>No more contacts</p>}
      style={{ overflow: "hidden" }}
    >
      <List>
        {contacts.map((contact, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start" onClick={onChatTap}>
              <ListItemAvatar>
                <Avatar alt={contact.name} src={contact.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={contact.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {contact.message}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            {index < contacts.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
    </InfiniteScroll>
  );
};

export default StackedListView;
