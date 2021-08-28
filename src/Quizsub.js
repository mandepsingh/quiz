import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import langimg from '../src/images/lang.jpg';
import litimg from '../src/images/Liter.jpg';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

export default function DisableElevation() {
  // const  = makeStyles((theme) => ({
    const useStyles =  makeStyles((theme) => ({
        paperContainer1: {
          backgroundImage: `url(${litimg})`,
          backgroundPosition: 'center',
          height: "60vh",
          width: "40vw",
          color: 'black',
          borderRight: '1',
          // "&:hover": {
          //     backgroundColor: 'rgb(7, 177, 77, 0.42)'
          //   }
          ['@media (max-width:955px)']: { // eslint-disable-line no-useless-computed-key
            height: '28vh',
            width: '96vw',
            marginLeft: '-28px',
          },
        },
        paperContainer2: {
            backgroundImage: `url(${langimg})`,
            backgroundPosition: 'center',
            height: "60vh",
            width: "40vw",
            ['@media (max-width:955px)']: { // eslint-disable-line no-useless-computed-key
              height: '28vh',
              width: '96vw',
              marginLeft: '-28px',
            },
        },
        sections:{
          // marginTop: '17vh',
        },
        // subSection:{
          
        // }
    }));
    
    function checkme(index){
      window.location.href = index;
    }
    const classes = useStyles();
  
  return (
      <Router>
    <Container  className={classes.sections}  style={{alignContent:'center', alignItems: 'center', textAlign:'center',}}>
        <Box disableElevation variant="contained" color="primary">
        <Link to='/quizLit'><Button onClick={() => checkme('quizLit')} borderColor="grey.1000" className={classes.paperContainer1}></Button></Link>
        <Link to='/quizLan'><Button onClick={() => checkme('quizLan')} borderColor="grey.500" className={classes.paperContainer2} ></Button></Link>
        </Box>  
    </Container>
    </Router>
  );
}
