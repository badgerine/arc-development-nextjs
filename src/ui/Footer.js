import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Link from '../Link';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.arcBlue,
    width: '100%',
    zIndex: '1302',
    position: 'relative'
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em'
    }
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      width: '2.5em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em'
    }
  }
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction='column'>
              <Grid item className={classes.link} component={Link} href='/'
                onClick={() => { props.setValue(0) }}>Home</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction='column'>
              <Grid item className={classes.link} component={Link} href='/services'
                onClick={() => { props.setValue(1); props.setSelectedIndex(0) }} >Services</Grid>
              <Grid item className={classes.link} component={Link} href='/customsoftware'
                onClick={() => { props.setValue(1); props.setSelectedIndex(1) }} >Custom Software Development</Grid>
              <Grid item className={classes.link} component={Link} href='/mobileapps'
                onClick={() => { props.setValue(1); props.setSelectedIndex(2) }} >iOS/Android Development</Grid>
              <Grid item className={classes.link} component={Link} href='/websites'
                onClick={() => { props.setValue(1); props.setSelectedIndex(3) }} >Website Development</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction='column'>
              <Grid item className={classes.link} component={Link} href='/revolution'
                onClick={() => { props.setValue(2); props.setSelectedIndex(0) }} >The Revolution</Grid>
              <Grid item className={classes.link} component={Link} href='/revolution'
                onClick={() => { props.setValue(2); props.setSelectedIndex(1) }} >Vision</Grid>
              <Grid item className={classes.link} component={Link} href='/revolution'
                onClick={() => { props.setValue(2); props.setSelectedIndex(2) }} >Technology</Grid>
              <Grid item className={classes.link} component={Link} href='/revolution'
                onClick={() => { props.setValue(2); props.setSelectedIndex(3) }} >Process</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction='column'>
              <Grid item className={classes.link} component={Link} href='/about'
                onClick={() => { props.setValue(3); props.setSelectedIndex() }} >About Us</Grid>
              <Grid item className={classes.link} component={Link} href='/about'
                onClick={() => { props.setValue(3); props.setSelectedIndex() }} >History</Grid>
              <Grid item className={classes.link} component={Link} href='/about'
                onClick={() => { props.setValue(3); props.setSelectedIndex() }} >Team</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction='column'>
              <Grid item className={classes.link} component={Link} href='/contact'
                onClick={() => { props.setValue(4); props.setSelectedIndex() }} >Contact Us</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img className={classes.adornment} alt='black decorative slash'
        // src={footerAdornment} 
        src='/assets/footerAdornment.svg'
      />
      <Grid container justify='flex-end' spacing={2} className={classes.socialContainer}>
        <Grid item component={'a'} href='http://www.facebook.com' rel='noopener noreferrer' target='_blank'>
          <img alt='facebook logo'
            // src={facebook} 
            src='/assets/facebook.svg'
            className={classes.icon} />
        </Grid>
        <Grid item component={'a'} href='http://www.twitter.com' rel='noopener noreferrer' target='_blank'>
          <img alt='twitter logo'
            // src={twitter} 
            src='/assets/twitter.svg'
            className={classes.icon} />
        </Grid>
        <Grid item component={'a'} href='http://www.instagram.com' rel='noopener noreferrer' target='_blank'>
          <img alt='instagram logo'
            // src={instagram} 
            src='/assets/instagram.svg'
            className={classes.icon} />
        </Grid >
      </Grid >
    </footer >)
}

export default Footer;