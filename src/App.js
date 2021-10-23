import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Cards from './Cards'
import bgpic from './images/bigblue2.png'
import dry from './images/drybulk.jpg'
import orange from './images/orangetruck.png'
import white from './images/whitetruck.png'
import RoomIcon from '@material-ui/icons/Room';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    height: '100vh',
    display: 'block',
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignContent: 'center',
      textAlign: 'center',
      color: 'white',
      // textShadow: '-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000',
      fontFamily: 'Black Ops One, cursive',
      fontSize: '40px',
      width: '100vw',
      marginTop: '30%',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      // textShadow: '-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000',
      fontFamily: 'Black Ops One, cursive',
      fontSize: '8vw',
      width: '100vw',
      height: '100vh',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      // textShadow: '-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000',
      fontFamily: 'Black Ops One, cursive',
      fontSize: '8vw',
      width: '100vw',
      height: '100vh',
    },
  },
  carddiv: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      paddingBottom: '100px',
      flexWrap: 'wrap',
      alignContent: 'space-around'
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingBottom: '200px',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingBottom: '200px',
    },
  },
  appbar: {
    background: '#014f99b8',
  },
  video: {
    [theme.breakpoints.down('sm')]: {
      zIndex: -1,
      objectFit: 'cover',
      position: 'absolute',
      height: '100%',
      width: '100vw',
      },
    [theme.breakpoints.up('md')]: {
      zIndex: -1,
      objectFit: 'cover',
      position: 'fixed',
      height: '100%',
      width: '100vw',
      },
    [theme.breakpoints.up('lg')]: {
      zIndex: -1,
    objectFit: 'cover',
    position: 'fixed',
    height: '100%',
    width: '100vw',
    },
  },
  container: {
    backgroundImage: `url(${bgpic})`,
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    bottom: '0px',
  },
}));
const video = 'https://d3ddatyom1hv87.cloudfront.net/trucking_video.mp4'


export default function App() {
  const classes = useStyles();

  const handleClick = e => {
    window.location.href = "https://goo.gl/maps/HAzSMZYVhitb6Z8H8";
  }

  return (
    <>
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
          
          <Button onClick={handleClick} color="inherit" title="Google Maps"><RoomIcon /></Button>

          
        </Toolbar>
      </AppBar>
      <h1 className={classes.header}>
          A Premium Commercial transportation company 
      </h1>

    </div>
      <div className={classes.carddiv}>
        <Cards title="Dry Bulk" text="Our services are top notch" image={dry} />
        <Cards title="Refridgerated" text="Keeping Your Product Cool" image={white} />
        <Cards title="Hauling" text="Haul weights up to XXX" image={orange} />
      </div>
      <div className={classes.outbox}>
        <img className={classes.container} src={bgpic} alt='truck'/>
      </div>
      </>
  );
}
