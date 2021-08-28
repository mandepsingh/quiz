import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import './Topnav.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: '20vh',
  },
  flexer: {
    flexDirection: 'row',
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.flexer}>
        <Link to='/'><Button label="Quiz by Mandy" style={{color:'white', fontSize: '1.2rem', marginLeft:'2vw'}}>Quiz by Mandy</Button></Link>
        <h2 class="selectLang2">Welcome to Mandy's the Quiz</h2>
        
      </AppBar>
    </div>
  );
}
