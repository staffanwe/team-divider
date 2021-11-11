import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Sword from '../assets/Sword';
import Swords from '../assets/Swords';
import Helmet from '../assets/Helmet';

const useStyles = makeStyles((theme) => ({
  bar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '120px',
  },
  title: { fontSize: '2.5rem', position: 'absolute', bottom: 20, left: 80, color: '#cca257', cursor: 'pointer' },
  links: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    right: 150,
    width: 400,
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontSize: '1.0rem',
    cursor: 'pointer',
    height: 120,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Box className={classes.bar}>
        <Box onClick={() => history.push('/')} className={classes.title}>
          TEAM DIVIDER
        </Box>
        <Box className={classes.links}>
          <Box onClick={() => history.push('/5man')} className={classes.link}>
            <Sword height={50} width={50} />5 MAN
          </Box>
          <Box onClick={() => history.push('/5v5')} className={classes.link}>
            <Swords height={50} width={50} />
            5v5
          </Box>
          <Box onClick={() => history.push('/players')} className={classes.link}>
            <Helmet height={50} width={50} />
            PLAYERS
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
