import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '../CardComp/Card';
import Login from '../LoginPage/loginPage';
import Contacts from '../ContactInfoComp/contactInfo'
import HomePage from '../HomePageComp/HomePage'
import MainHeader from '../MainHeaderComp/MainHeader'
import Todo from '../ToDo/Todo';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'block'
  },
  mainHeader: {
    
  },

}));

export default function HeaderComp() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

    <MainHeader />
    
      
   
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Products" {...a11yProps(1)} />
          <Tab label="Contact Info" {...a11yProps(2)} />
          <Tab label="Login Page" {...a11yProps(3)} />
          <Tab label="ToDo" {...a11yProps(3)} />
        </Tabs>
        
     

      <TabPanel value={value} index={0}>
        <HomePage />
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Card />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contacts />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Login />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Todo />
      </TabPanel>
    </div>
  );
}
