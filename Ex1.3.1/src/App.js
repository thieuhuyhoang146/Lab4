import 'typeface-roboto';
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import First from './First';
import Second from './Second';
import Third from './Third';
import { AppBar } from '@mui/material';

//ex1.3
// export default function App({ links = [] }) {
//   const [open, setOpen] = useState(false);

//   function toggleDrawer({ type, key }) {
//     if (type === 'keydown' && (key === 'Tab' || key === 'Shift')) {
//       return;
//     }
//     setOpen(!open);
//   }

//   return (
//     <Router>
//       <Button onClick={toggleDrawer}>Open Nav</Button>
//       <section>
//         <Route path='/first' element={<First />} />
//         <Route path='/second' element={<Second />} />
//         <Route path='/third' element={<Third />} />
//       </section>
//       <Drawer open={open} onClose={toggleDrawer}>
//         <div
//           style={{ width: 250 }}
//           role='presentation'
//           onClick={toggleDrawer}
//           onKeyDown={toggleDrawer}>
//           <List>
//             {links.map((link) => (
//               <ListItem button key={link.url} component={Link} to={link.url}>
//                 <ListItemText primary={link.name} />
//               </ListItem>
//             ))}
//           </List>
//         </div>
//       </Drawer>
//     </Router>
//   );
// }

// App.defaultProps={
//   links:[
//     { url: '/first', name:'First Page'},
//     { url: '/second', name:'Second Page'},
//     { url: '/third', name:'Third Page'},

//   ],
// };

//1.3.1
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


const tabContentStyle={
  padding:16,
};

function TabContenter({value})
{
  return(
    <AppBar position = 'static'>
      <Tabs value={value}>
        <Tab label = 'Item One' component = {Link} to='/'/>
        <Tab label = 'Item Two' component = {Link} to='/page2'/>
        <Tab label = 'Item Three' component = {Link} to='/page3'/>
      </Tabs>
    </AppBar>
  );
}

export default function App(){
  return(
    <Router>
      <Route
        exact
        path='/'
        render={() => (
          <>
            <TabContenter value={0}/>
            <Typography component='div' style={tabContentStyle}> 
              Item One
            </Typography>
          </>
        ) }
        />
      <Route
        exact
        path='/page2'
        render={() => (
          <>
            <TabContenter value={1}/>
            <Typography component='div' style={tabContentStyle}> 
              Item Two
            </Typography>
          </>
        ) }
        />
        <Route
        exact
        path='/page3'
        render={() => (
          <>
            <TabContenter value={2}/>
            <Typography component='div' style={tabContentStyle}> 
              Item Three
            </Typography>
          </>
        ) }
        />

    </Router>
  );
}