import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Box, Button, makeStyles, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import Sword from '../assets/Sword';
import PlayerList from '../components/PlayerList';
import './FiveMan.css';
import PlayerI from '../PlayerInterface';

const useStyles = makeStyles((theme) => ({
  body: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  middle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    marginBottom: '100px',
  },
  sword: { marginBottom: 100 },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: 200,
    height: 100,
    margin: 100,
    marginTop: 250,
  },
  addButton: {
    backgroundColor: 'rgba(0, 132, 39, 1)',
    transition: 'transform .2s',
    borderRadius: 0,

    '&:hover': {
      transform: 'scale(1.1)',
      cursor: 'pointer',
      backgroundColor: 'rgba(0, 132, 39, 1)',
    },
    fontSize: '1.1rem',
  },
  clearButton: {
    backgroundColor: 'rgba(255, 0, 0, 0.6)',
    transition: 'transform .2s',
    fontSize: '1.1rem',
    borderRadius: 0,

    '&:hover': {
      transform: 'scale(1.1)',
      cursor: 'pointer',
      backgroundColor: 'rgba(255, 0, 0, 0.6)',
    },
  },
  rollButton: {
    backgroundColor: '#2CB1DB',
    color: '#fff',
    borderRadius: 0,
    fontSize: '2rem',
    width: 200,
    transition: 'transform .2s',
    position: 'absolute',
    bottom: 100,
    '&:hover': {
      transform: 'scale(1.2)',
      cursor: 'pointer',
      backgroundColor: '#2CB1DB',
    },
  },
  dialog: {
    width: '1500px',
    height: '1000px',
    backgroundColor: '#090b0c',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  centerSword: {
    position: 'absolute',
    top: 30,
  },
}));

const FiveMan = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [players, setPlayers] = useState([
    { name: 'J4R Däjven', games: 0 },
    { name: 'J4R Streifner', games: 0 },
    { name: 'J4R Vlademort', games: 0 },
    { name: 'J4R Chosen', games: 0 },
    { name: 'J4R Godnaton', games: 0 },
  ]);
  const [parPlayers, setParPlayers] = useState<PlayerI[]>([]);
  const [loading, setLoading] = useState(true);

  const handleAddAll = () => {
    setParPlayers([...players, ...parPlayers]);
    setPlayers([]);
  };

  const handleClear = () => {
    setPlayers([...players, ...parPlayers]);
    setParPlayers([]);
  };

  const handleRoll = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div className="content">
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          classes={{ paper: classes.dialog }}
          maxWidth={'xl'}
        >
          <div className={classes.centerSword}>
            <Sword height={120} width={100} />
          </div>

          <div className="dialog-content">
            <PlayerList
              title={'TEAM'}
              players={players}
              parPlayers={parPlayers}
              setPlayers={setPlayers}
              setParPlayers={setParPlayers}
              version="no"
            />

            <PlayerList
              title={'SKIPPERS'}
              players={players}
              parPlayers={parPlayers}
              setPlayers={setPlayers}
              setParPlayers={setParPlayers}
              version="no"
            />
          </div>
          <Button onClick={handleClose} className={classes.rollButton}>
            OK
          </Button>
        </Dialog>
        <Navbar />
        <Box className={classes.body}>
          <Box className={classes.sword}>
            <Sword height={120} width={100} />
          </Box>

          <Box className={classes.middle}>
            <PlayerList
              title={'AVAILABLE PLAYERS'}
              players={players}
              parPlayers={parPlayers}
              setPlayers={setPlayers}
              setParPlayers={setParPlayers}
              version="av"
            />

            <Box className={classes.buttons}>
              <Button onClick={handleAddAll} className={classes.addButton}>
                ADD ALL
              </Button>
              <Button onClick={handleClear} className={classes.clearButton}>
                CLEAR
              </Button>
            </Box>
            <PlayerList
              title={'PARTICIPATING PLAYERS'}
              players={players}
              parPlayers={parPlayers}
              setPlayers={setPlayers}
              setParPlayers={setParPlayers}
              version="pa"
            />
          </Box>
          <Button onClick={handleRoll} className={classes.rollButton}>
            ROLL
          </Button>
        </Box>
      </div>
      <div className="background-component"></div>
    </div>
  );
};

export default FiveMan;
