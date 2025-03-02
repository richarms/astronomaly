import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import { blue, indigo, green, red } from '@material-ui/core/colors'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './App.css';
import {AlgorithmTab} from './components/AlgorithmTab'
import {AnomalyTab} from './components/AnomalyTab'
import {ClusteringTab} from './components/ClusteringTab'

// const DATA_TYPE = 'image';
// const DATA_TYPE = 'light_curve';

const styles = theme =>({
  root: {
    // backgroundColor: 'white',
    // width: 500,
    // flexGrow: 1,
  },
  card: {
    minWidth: 10,
    maxWidth: 400,
    backgroundColor: blue[100]
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[400]
    },
    primary: {
      main: indigo[700]
    },
    background: {
      main: blue[100]}
  },
});

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}


class App extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getDataType = this.getDataType.bind(this);
    this.state = {tabNumber: 0,
                  dataType: ''};
  }



  handleChange(event, newValue) {
    this.setState({tabNumber: newValue});
  }

  getDataType(){
    fetch("getdatatype", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify("datatype")
    })
    .then((res) => {return res.json()})
    // .then((res)=> {console.log(res);
    //               return res})
    .then((res) => this.setState({dataType:res}))
    .catch(console.log);
  }

  render (){
    // console.log('HELLO');
    // console.log(this.props);
    this.getDataType();
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <AppBar position="static" color="default">
            <Tabs 
              value={this.state.tabNumber}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              {/* <Tab label="Algorithm" /> */}
              <Tab label="Anomaly Scoring"/>
              <Tab label="Clustering"/>
            </Tabs>
          </AppBar>

          {/* {this.state.tabNumber === 0 && <AlgorithmTab />} */}
          {this.state.tabNumber === 0 && <AnomalyTab datatype={this.state.dataType} />}
          {this.state.tabNumber === 1 && <ClusteringTab datatype={this.state.dataType}/>}
        </ThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);


