import React from 'react';
import { Box, CircularProgress, makeStyles } from '@material-ui/core';
import Player from './Player';
import PlayerI from '../PlayerInterface';

const useStyles = makeStyles((theme) => ({
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 600,
    height: 600,
    [theme.breakpoints.down('lg')]: {
      width: 400,
      height: 400,
    },
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      backgroundColor: 'transparent',
      width: '0.5rem',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'gray',
      borderRadius: '10px',
      width: '0.5rem',
    },
  },
  title: { fontSize: '2rem', marginBottom: 30, color: '#cca257' },
  list: { display: 'flex', flexDirection: 'column' },
}));

const PlayerList = (props: any) => {
  const { title, players, parPlayers, version, setPlayers, setParPlayers, loading } = props;
  let v = version;
  const classes = useStyles();
  if (title === 'TEAM') {
    v = 'te';
  } else if (title === 'SKIPPERS') {
    v = 'sk';
  }

  const handlePlayerClick = (index: number) => {
    if (version !== 'no') {
      if (version === 'av') {
        const tempPlayer = players[index];
        let tempPlayers = players;
        let tempParPlayers = parPlayers;
        tempPlayers.splice(index, 1);
        setPlayers([...tempPlayers]);
        tempParPlayers.push(tempPlayer);
        setParPlayers([...tempParPlayers]);
      } else {
        const tempPlayer = parPlayers[index];
        let tempPlayers = players;
        let tempParPlayers = parPlayers;
        tempParPlayers.splice(index, 1);
        setParPlayers([...tempParPlayers]);
        tempPlayers.push(tempPlayer);
        setPlayers([...tempPlayers]);
      }
    }
  };

  if (version === 'no') {
    return (
      <div>
        <Box className={classes.body}>
          <Box className={classes.title}>{title}</Box>
          <Box className={classes.list}>
            {players.map((player: PlayerI, i: number) => (
              <div key={i} onClick={() => handlePlayerClick(i)}>
                <Player player={player} version={v} />
              </div>
            ))}
          </Box>
        </Box>
      </div>
    );
  }

  return (
    <div>
      <Box className={classes.body}>
        <Box className={classes.title}>{title}</Box>
        {loading ? (
          <CircularProgress />
        ) : (
          <Box className={classes.list}>
            {version === 'av'
              ? players.map((player: PlayerI, i: number) => (
                  <div key={i} onClick={() => handlePlayerClick(i)}>
                    <Player player={player} version={version} />
                  </div>
                ))
              : parPlayers.map((player: PlayerI, i: number) => (
                  <div key={i} onClick={() => handlePlayerClick(i)}>
                    <Player player={player} version={version} />
                  </div>
                ))}
          </Box>
        )}
      </Box>
    </div>
  );
};

export default PlayerList;
