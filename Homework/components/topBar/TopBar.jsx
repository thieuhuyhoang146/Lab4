import React from 'react';
import {
  AppBar, Toolbar, Typography, Grid
} from '@material-ui/core';
import './TopBar.css';

import fetchModel from "../../lib/fetchModelData";

/**
 * Define TopBar, a React componment of UIT project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: this.props.view,
      version: "",
      firstname: this.props.first_name
    };
    console.log('object1212 ', this.props.first_name);
  }

  hex_to_ascii = (str1) =>
  {
   var hex  = str1.toString();
   var str = '';
   for (var n = 0; n < hex.length; n += 2) {
     str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
   }
   return str;
  }
  

  componentDidUpdate(prevProps) {
    if (prevProps.view !== this.props.view) {
      this.setState({ view: this.props.view });
      let prom = fetchModel("http://localhost:3000/test/info");
      prom.then(response => {
        this.setState({ version: response.data.__v });
      });
      console.log('first1',this.state.version )
    }
    console.log('first2',prom )
  }
  


  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" color="inherit">
           { this.hex_to_ascii("54686965752048757920486f616e67")}
            </Typography>
            {/* <Typography variant="body1">
              version: {this.state.version}
            </Typography> */}
            <Typography variant="h5">Detail of user: Ian Malcolm</Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
