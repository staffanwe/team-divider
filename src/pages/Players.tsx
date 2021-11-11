import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import apis from '../api/player-api';
import Navbar from '../components/Navbar';
import PlayerList from '../components/PlayerList';
import PlayerI from '../PlayerInterface';
import './Players.css';

const useStyles = makeStyles((theme) => ({
  body: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}));

const Players = () => {
  const [players, setPlayers] = useState<PlayerI[]>([]);
  const [parPlayers, setParPlayers] = useState<PlayerI[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPlayers = async () => {
    const res = await apis.getAllPlayers();
    const players = res.data.data;
    setPlayers(players);
    setLoading(false);
  };

  useEffect(() => {
    loadPlayers();
  }, []);
  return (
    <div>
      <div className="content">
        <Navbar />

        <PlayerList
          title={'PLAYERS'}
          players={players}
          parPlayers={parPlayers}
          setPlayers={setPlayers}
          setParPlayers={setParPlayers}
          loading={loading}
          version="no"
        />
      </div>
      <div className="background-component"></div>
    </div>
  );
};

export default Players;
