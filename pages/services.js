import React from 'react';
import Head from 'next/head';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid, Typography, Button } from '@material-ui/core';

import ButtonArrow from '../src/ui/ButtonArrow';

const useStyles = makeStyles(theme => ({
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
    marginTop: '10em',
    [theme.breakpoints.down('xs')]: {
      padding: 25
    }
  },
}))

const Services = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction='column'>
      <Head>
        <title key='title'>Top Custom Software Development Services | Arc Development</title>
        <meta name='description' key='description' content='
        Cutting-edge software, mobile app, and website development services with sleek 
        custom designs - get a free online estimate instantly!'/>
        <meta property='og:title' key='og:title' content='Bringing West Coast Technology to the Midwest | Services' />
        <meta property='og:url' key='og:url' content='arc.com/services'/>
        <link rel='canonical' key='canonical' href='https://arc.com/services' />
      </Head>
      <Grid item style={{marginLeft: matchesSM ? 0 : '5em', marginTop: matchesSM ? '1em': '2em'}}>
        <Typography variant='h2' gutterBottom align={matchesSM ? 'center' : undefined}>
          Services
        </Typography>
      </Grid>
      <Grid item> {/*----iOS/Android Block----*/}
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.serviceContainer}
          style={{ marginTop: matchesSM ? '1em' : '5em' }}
        >
          <Grid
            item
            style={{ textAlign: matchesSM ? 'center' : undefined, width: matchesSM ? undefined : '35em' }}>
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
            <img className='/assets/websiteIcon.svg' alt='mobile device icon' src='/assets/mobileIcon.svg' width='250em'/>
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
              onClick={() => { props.setValue(1); props.setSelectedIndex(1); }}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.icon} alt='custom software icon' src='/assets/Custom_Software_Icon.svg' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item> {/*----Website Development Block----*/}
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.serviceContainer}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            item
            style={{ textAlign: matchesSM ? 'center' : undefined, width: matchesSM ? undefined : '35em' }}
          >
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
              onClick={() => { props.setValue(1); props.setSelectedIndex(3); }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              style={{ marginRight: matchesSM ? 0 : '5em' }}
              alt='website development icon'
              src={websitesIcon}
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Services;