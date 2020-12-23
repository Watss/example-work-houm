import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Toolbar,
  makeStyles,
  Typography
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  },
  logoColor : {
    color: theme.palette.text.logo
  }
}));

const TopBar = ({
  className,
}) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={3}
    >
      <Toolbar>
        <RouterLink to="/">
            <Typography color="error" className={classes.logoColor} variant="h5">{process.env.REACT_APP_NAME}</Typography>
        </RouterLink>
        <Box flexGrow={1} />
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;