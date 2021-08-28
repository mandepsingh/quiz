import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Quizsub from './Quizsub';
import './Topnav.css';


function TabPanel(props) {
  const { children, value,value1, index, ...other } = props;

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
  },
  flexer: {
    flexDirection: 'row',
    ['@media (max-width:910px)']: { // eslint-disable-line no-useless-computed-key
      flexDirection: 'column',
    },
  },
  flexer2:{
    flexDirection: 'row',
    //  
    // backgroundColor: 'red',
    ['@media (max-width:420px)']: { // eslint-disable-line no-useless-computed-key
      flexDirection: 'column',
    },
  },
  meranaam:{
    width: '59vw',

    //  
    // backgroundColor: 'red',
    ['@media (max-width:420px)']: { // eslint-disable-line no-useless-computed-key
      minWidth: '100vw',
      alignContent: 'center',
    },
  },
  section:{
     marginTop: '10vh',
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange1 = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.flexer}>
        <Tab className={classes.meranaam} label="Quiz by Mandy"/>
        <h3 class="selectLang">Select Language </h3>
        <Box value={value} className={classes.flexer2} onChange={handleChange1} aria-label="simple tabs example">
          <Tab label="Hindi" {...a11yProps(1)} />
          <Tab label="English" {...a11yProps(0)} />
          <Tab label="Urdu" {...a11yProps(2)} />
        </Box>
      </AppBar>
          <TabPanel className={classes.flexer2} >
            <Tab label="Literature" {...a11yProps(4)} />
            <Tab label="Language" {...a11yProps(5)} /> 
          </TabPanel>
      <TabPanel value={value} index={0}>
        <Container>
          <br/>
          <br/>
          <h3>No Test Available for Hindi click on English to begin with the Test !</h3>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Container>
          <br/>
          <br/>
          <h3>No Test Available !</h3>
        </Container>
      </TabPanel>
      <TabPanel className={classes.section} value={value} index={1}>
        <br/>
        <br/>
        <Quizsub />  
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container>
          <br/>
          <br/>
          <h3>No Test Available for Urdu click on English to begin with the Test !</h3>
        </Container>
      </TabPanel>
    </div>
  );
}
