import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useScrollTrigger, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Tab, Tabs } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from '../Link';
import { Menu, MenuItem } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import { FilterNone } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down("md")]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em"
    }
  },
  logo: {
    height: '8em',
    textTransform: 'none',
    [theme.breakpoints.down("md")]: {
      height: "7em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em"
    }
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent'
    },
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    margingLeft: '25px'
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  menu: {
    background: theme.palette.common.arcBlue,
    color: 'white',
    borderRadius: 0
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  },
  drawerIconContainer: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    marginLeft: 'auto',
  },
  drawer: {
    backgroundColor: theme.palette.common.arcBlue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.arcOrange
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1
    }
    // opacity: 1
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1
  }
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const routes = [
    { name: 'Home', link: '/', activeValue: 0 },
    {
      name: 'Services', link: '/services', activeValue: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: event => handleClickMenu(event)
    },
    { name: 'The Revolution', link: '/revolution', activeValue: 2 },
    { name: 'About Us', link: '/about', activeValue: 3 },
    { name: 'Contact Us', link: '/contact', activeValue: 4 },
    // { name: 'Free Estimate', link: '/estimate', activeValue: 5, specificClass: classes.drawerItemEstimate },
  ];
  const serviceMenuOptions = [
    { name: 'Services', link: '/services', activeValue: 1, activeIndex: 0 },
    { name: 'Custom Software Development', link: '/customsoftware', activeValue: 1, activeIndex: 1 },
    { name: 'iOS/Android Development', link: '/mobileapps', activeValue: 1, activeIndex: 2 },
    { name: 'Website Development', link: '/websites', activeValue: 1, activeIndex: 3 }];

  const { value, selectedIndex, setValue, setSelectedIndex } = props;
  useEffect(() => {
    [...routes, ...serviceMenuOptions].forEach(route => {
      if (route.link === window.location.pathname) {
        if (value !== route.activeValue) {
          setValue(route.activeValue);
          if (route.activeIndex && route.activeIndex !== selectedIndex) {
            setSelectedIndex(route.activeIndex);
          }
        }
      } else if (window.location.pathname === '/estimate' && props.value !== 5) {
        setValue(5);
      }
    })
  }, [value, selectedIndex, setValue, setSelectedIndex, serviceMenuOptions, routes]);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  }

  const handleClickMenu = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  }

  const handleCloseMenu = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  }

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(index);
  }

  const tabs = (
    <React.Fragment>
      <Tabs value={props.value} onChange={handleChange} className={classes.tabContainer} indicatorColor='primary'>
        {routes.map((route, index) => (
          <Tab key={route + index} className={classes.tab} component={Link} href={route.link} label={route.name}
            aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver} />
        ))}
      </Tabs>
      <Button variant="contained" color='secondary' className={classes.button} component={Link} href='/estimate'
        onClick={() => props.setValue(5)} noWrap
      >
        Free Estimate
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        classes={{ paper: classes.menu }}
        elevation={0}
        MenuListProps={{ onMouseLeave: handleCloseMenu }}
        keepMounted
        style={{ zIndex: 1302 }}
      >

        {serviceMenuOptions.map((item, index) => (
          <MenuItem
            key={index}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              handleCloseMenu();
              props.setValue(1)
            }}
            selected={props.value === 1 && index === props.selectedIndex}
            component={Link}
            href={item.link} >{item.name}</MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawerItems = routes.map(option => (
    <ListItem key={option.name} onClick={() => { setOpenDrawer(false); props.setValue(option.activeValue) }}
      divider button component={Link}
      href={option.link} selected={props.value === option.activeValue}
      className={option.specificClass} classes={{ selected: classes.drawerItemSelected }}
    >
      <ListItemText
        className={classes.drawerItem}
        disableTypography >{option.name}</ListItemText>
    </ListItem>));

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} classes={{ paper: classes.drawer }}
        open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {drawerItems}
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar disableGutters>
            <Button disableRipple component={Link} href='/' className={classes.logoContainer} onClick={() => props.setValue(0)}
            style={{textDecoration: 'none'}}>
              <svg className={classes.logo} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 139">
                <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 300;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style>
                <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" /><path class="st0" d="M-1 139h479.92v.01H-1z" />
                <text transform="translate(261.994 65.233)" className="st1 st2" fontSize="57">Arc</text>
                <text transform="translate(17.692 112.015)" className="st1 st2" fontSize="54">Development</text>
                <path className="st0" d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153" />
                <path d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z" fill="#0b72b9" />
                <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" />
                <g id="Group_186" transform="translate(30.153 11.413)">
                  <g id="Group_185">
                    <g id="Words">
                      <path id="Path_59" className="st1" d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z" />
                    </g>
                  </g>
                </g>
                <path class="st0" d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155" />
              </svg>
            </Button>
            <Hidden mdDown>
              {tabs}
            </Hidden>
            <Hidden lgUp>
              {drawer}
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}