import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import './userList.css';
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

/**
 * Define UserList, a React componment of UIT project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: undefined
    }
    let prom = fetchModel(`http://localhost:3000/user/list`);
    prom.then(response => {
      this.setState({users: response.data});
    });
  }

  render() {
    return this.state.users ? (
      <>
        <List component="nav">
          {this.state.users.map(user => {
            return (
              <Link to={`/users/${user._id}`} key={user._id}>
                <ListItem>
                  <ListItemText
                    primary={`${user.first_name} ${user.last_name}`}
                  />
                </ListItem>
                <Divider />
              </Link>
            );
          })}
        </List>
        <Typography variant="body1">
          The model comes in from window.UITmodels.userListModel()
        </Typography>
      </>
    ): (<>
        <Typography variant="body1">
          This is the user list, which takes up 3/12 of the window.
          You might choose to use <a href="https://mui.com/components/lists/">Lists</a> and <a href="https://mui.com/components/dividers/">Dividers</a> to
          display your users like so:
        </Typography>
    </>);
  }
}

export default UserList;
