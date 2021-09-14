import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Cards from './Cards'
import bgpic from './images/jrwpic.jpg'
import dry from './images/drybulk.jpg'
import orange from './images/orangetruck.png'
import white from './images/whitetruck.png'
import RoomIcon from '@material-ui/icons/Room';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    height: '100vh',
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    textShadow: '-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000',
    fontFamily: 'Roboto',
    fontSize: '8vw',
    padding: '25px',
  },
  carddiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: '400px',
  },
  appbar: {
    background: '#014f99b8',
  },
  video: {
    zIndex: -1,
    objectFit: 'cover',
    position: 'fixed',
    height: '100vh',
    width: '100vw',
  },
  container: {
    background: 'red',
    backgroundImage: `url(${bgpic})`,
    height: '100vh',
    width: '100vw',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
}));
const video = 'https://d3ddatyom1hv87.cloudfront.net/trucking_video.mp4'

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <video className={classes.video} autoPlay loop playsInline defaultMuted muted>
						<source src={video} type='video/mp4' />
			</video>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
         
          <Typography variant="h6" className={classes.title}>
            JRW Transport LLC
          </Typography>
          
          <Button color="inherit" title="Google Maps"><RoomIcon /></Button>
        </Toolbar>
      </AppBar>
      <h1 className={classes.header}>
          Commercial transportation company 
      </h1>
      <div className={classes.carddiv}>
        <Cards title="Dry Bulk" text="Our services are top notch" image={dry} />
        <Cards title="Refridgerated" text="Keeping Your Product Cool" image={white} />
        <Cards title="Hauling" text="Haul weights up to XXX" image={orange} />
      </div>
      <div className={classes.container}>
        <div className={classes.carddiv}>
          <Cards title="Dry Bulk" text="Our services are top notch" image={dry} />
          <Cards title="Refridgerated" text="Keeping Your Product Cool" image={white} />
          <Cards title="Hauling" text="Haul weights up to XXX" image={orange} />
        </div>
      </div>

    </div>
  );
}
