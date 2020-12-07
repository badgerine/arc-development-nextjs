import React from 'react';
import Head from 'next/head';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Link from '../src/Link';
import CallToAction from '../src/components/CallToAction';

import ButtonArrow from '../src/ui/ButtonArrow';

import animationData from '../src/animations/landinganimation/data';

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em'
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  buttonContainer: {
    marginTop: '1em'
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em'
    }
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.arcOrange
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    // padding: 5,
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2em'
    }
  },
  subtitle: {
    marginBottom: '1em'
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('xs')]: {
      padding: 25
    }
  },
  revolutionBackground: {
    backgroundImage: `url('/assets/repeatingBackground.svg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%'
    }
  },
  infoBackground: {
    backgroundImage: `url('/assets/infoBackground.svg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  }
}))

export default (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Head>
        <title key='title'>Custom Software, Mobile Apps, and Websites | Arc Development</title>
        <meta name='description' key='description' content='
        Pristine software, custom-designed from the ground up with cutting -edge optimizations. 
        Use our free estimate calculator to check your project cost.'/>
        <meta property='og:title' key='og:title' content='Bringing West Coast Technology to the Midwest |  Arc Development' />
        <meta property='og:url' key='og:url' content='arc.com' />
        <link rel='canonical' key='canonical' href='https://arc.com' />
      </Head>
      <Grid item> {/*----Hero Block----*/}
        <Grid container justify='flex-end' alignItems='center' direction='row'>
          <Grid sm item className={classes.heroTextContainer}>
            <Typography align='center' variant='h1'>
              Bringing West Coast Technology<br />to the Midwest
            </Typography>
            <Grid container justify='center' className={classes.buttonContainer}>
              <Grid item>
                <Button className={classes.estimateButton} variant='contained' component={Link} href='/estimate'
                  onClick={() => {
                    props.setValue(5);
                    window.gtag("event", "Home Page Pressed", {
                      event_category: "Estimate",
                      event_label: "estimate_request"
                    });
                  }}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' className={classes.learnButtonHero} component={Link} href='/revolution' onClick={() => props.setValue(2)}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item> {/*----Custom Software Block----*/}
        <Grid container direction='row' justify={matchesSM ? 'center' : undefined} className={classes.serviceContainer}>
          <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}>
            <Typography variant='h4'>
              Custom Software Development
            </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to{' '}<span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              variant='outlined'
              className={classes.learnButton}
              component={Link} href='/customsoftware'
              onClick={() => { props.setValue(1); props.setSelectedIndex(1) }}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.icon} alt='custom software icon' src='/assets/Custom_Software_Icon.svg' />
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid item>  */}
      {/*----iOS/Android Block----*/}
      {/* <Grid container direction='row' justify={matchesSM ? 'center' : 'flex-end'} className={classes.serviceContainer}> */}
      <Grid item container direction='row' justify='flex-end' style={{ justifyContent: matchesSM ? 'center' : 'flex-end' }} className={classes.serviceContainer} >
        <Grid item style={{ textAlign: matchesSM ? 'center' : undefined }}>
          <Typography variant='h4'>
            iOS/Android App Development
            </Typography>
          <Typography variant='subtitle1' className={classes.subtitle}>
            Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
          <Typography variant='subtitle1'>
            Integrate your web experience or create a standalone app
              {matchesSM ? ' ' : <br />}with either mobile platform.
            </Typography>
          <Button
            variant='outlined'
            className={classes.learnButton}
            component={Link}
            href='/mobileapps'
            onClick={() => { props.setValue(1); props.setSelectedIndex(2); }}
          >
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
          </Button>
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }} >
          <img className={classes.icon} alt='mobile device icon' src='/assets/mobileIcon.svg' />
        </Grid>
        {/* </Grid> */}
      </Grid>
      <Grid item> {/*----Website Development Block----*/}
        <Grid container direction='row' justify={matchesSM ? 'center' : undefined} className={classes.serviceContainer}>
          <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}>
            <Typography variant='h4'>
              Website Development
            </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search engines, built for speed.
            </Typography>
            <Button
              variant='outlined'
              className={classes.learnButton}
              component={Link}
              href='/websites'
              onClick={() => { props.setValue(1); props.setSelectedIndex(3); }}>
              >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.icon} alt='website development icon' src='/assets/websiteIcon.svg' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>{/*----The Revolution Block----*/}
        <Grid container alignItems='center' justify='center' style={{ justifyContent: 'center', height: '100em', marginTop: '12em' }}>
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid direction='column' style={{ textAlign: 'center' }}>
                <Grid item>
                  <Typography variant='h3' gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    Visionary insights coupled with cutting-edge technology is a recipe for revotuion.
                  </Typography>
                  <Button
                    variant='outlined'
                    className={classes.learnButtonHero}
                    component={Link}
                    href='/revolution'
                    onClick={() => { props.setValue(2) }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid item>{/*----Information Block----*/}
        <Grid container direction='row' className={classes.infoBackground} style={{ height: '80em' }} alignItems='center'>
          <Grid item container direction={matchesXS ? 'column' : 'row'} >
            <Grid item sm style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}>
              <Grid
                container
                direction='column'
                alignItems={matchesXS ? 'center' : 'inherit'}
                style={{ marginBottom: matchesXS ? '10em' : 0 }}
              >
                <Typography variant='h1' style={{ color: 'white' }}>
                  About Us
              </Typography>
                <Typography variant='subtitle2'>
                  Let's get personal.
              </Typography>
                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnButton}
                    style={{ color: 'white', borderColor: 'white' }}
                    component={Link} href='/about'
                    onClick={() => props.setValue(3)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item sm style={{ marginRight: '5em', textAlign: 'right' }}> */}
            <Grid item sm style={{ marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}>
              <Grid container direction='column' alignItems={matchesXS ? 'center' : 'flex-end'} >
                <Typography variant='h1' style={{ color: 'white' }}>
                  Contact Us
              </Typography>
                <Typography variant='subtitle2'>
                  Say Hello! <span role='img' aira-label='waving hand'></span>
                </Typography>
                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnButton}
                    style={{ color: 'white', borderColor: 'white' }}
                    component={Link} href='/contact'
                    onClick={() => props.setValue(4)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid>{/*----Call To Action----*/}
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}