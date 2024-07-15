import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

const MessageList = ({ messages }) => {
  return (
    <List>
      {messages.map((message, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={message.sender.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {message.message}
                  </Typography>
                  {" — " + new Date(message.created_at).toLocaleString()}
                </React.Fragment>
              }
            />
          </ListItem>
          {index < messages.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

export default MessageList;
