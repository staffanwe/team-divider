import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '120px',
  },
  title: { fontSize: '2.5rem', position: 'absolute', bottom: 20, left: 80, color: '#cca257' },
  links: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    right: 150,
    width: 400,
    justifyContent: 'space-between',
  },
  link: {
    fontSize: '1.5rem',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.bar}>
        <Box className={classes.title}>TEAM DIVIDER</Box>
        <Box className={classes.links}>
          <Typography className={classes.link}>5 MAN</Typography>
          <Typography className={classes.link}>5 VS 5</Typography>
          <Typography className={classes.link}>PLAYERS</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
