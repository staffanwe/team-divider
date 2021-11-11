import React from 'react';
import PlayerI from '../PlayerInterface';
import { Box, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Helmet from '../assets/Helmet';

const useStyles = makeStyles((theme) => ({
  body: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1.4rem',
    height: '4rem',
    width: '500px',
    backgroundColor: 'rgba(7, 7, 7, 0.43)',
    alignItems: 'center',
    marginBottom: 10,
    position: 'relative',
    transition: 'transform .2s',
    [theme.breakpoints.down('lg')]: {
      width: 350,
      heigth: '3rem',
      fontSize: '1.1rem',
    },

    '&:hover': {
      transform: 'scale(1.1)',
      cursor: 'pointer',
      //filter: 'drop-shadow( 0 0 0.5rem rgba(255, 225, 56, .7))',
      backgroundColor: 'rgba(0, 132, 39, 0.43)',
    },
  },
  body2: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1.4rem',
    height: '4rem',
    width: '500px',
    backgroundColor: 'rgba(7, 7, 7, 0.43)',
    alignItems: 'center',
    marginBottom: 10,
    position: 'relative',
    transition: 'transform .2s',
    [theme.breakpoints.down('lg')]: {
      width: 350,
      heigth: '3rem',
      fontSize: '1.1rem',
    },

    '&:hover': {
      transform: 'scale(1.1)',
      cursor: 'pointer',
      //filter: 'drop-shadow( 0 0 0.5rem rgba(255, 225, 56, .7))',
      backgroundColor: 'rgba(255, 0, 0, 0.43)',
    },
  },
  body3: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1.4rem',
    height: '4rem',
    width: '500px',
    backgroundColor: 'rgba(0, 132, 39, 0.43)',
    alignItems: 'center',
    marginBottom: 10,
    position: 'relative',
    transition: 'transform .2s',
    [theme.breakpoints.down('lg')]: {
      width: 350,
      heigth: '3rem',
      fontSize: '1.1rem',
    },
  },
  body4: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1.4rem',
    height: '4rem',
    width: '500px',
    backgroundColor: 'rgba(255, 0, 0, 0.43)',

    alignItems: 'center',
    marginBottom: 10,
    position: 'relative',
    transition: 'transform .2s',
    [theme.breakpoints.down('lg')]: {
      width: 350,
      heigth: '3rem',
      fontSize: '1.1rem',
    },
  },
  text: {
    marginLeft: 20,
  },
  icon: {
    position: 'absolute',
    right: 20,
    fontSize: '2rem',
    fontWeight: 600,
  },
  helmet: { marginLeft: 20 },
}));

const Player = (props: { player: PlayerI; version: string }) => {
  const { player, version } = props;
  const classes = useStyles();

  if (version === 'te' || version === 'sk') {
    return (
      <div>
        <Box className={version === 'te' ? classes.body3 : classes.body4}>
          <Box className={classes.helmet}>
            <Helmet height={25} width={25} />
          </Box>

          <Box className={classes.text}>{`${player.name}, ${player.nr_games} GAMES`}</Box>
        </Box>
      </div>
    );
  }

  return (
    <div>
      <Box className={version === 'av' ? classes.body : classes.body2}>
        <Box className={classes.helmet}>
          <Helmet height={25} width={25} />
        </Box>

        <Box className={classes.text}>{`${player.name}, ${player.nr_games} GAMES`}</Box>
        {version !== 'no' &&
          (version === 'av' ? <Box className={classes.icon}>+</Box> : <DeleteIcon className={classes.icon} />)}
      </Box>
    </div>
  );
};

export default Player;
