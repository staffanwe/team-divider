import React from 'react';
import Navbar from '../../components/Navbar';
import { Box, makeStyles } from '@material-ui/core';
import Sword from '../../assets/Sword';
import Swords from '../../assets/Swords';
import Helmet from '../../assets/Helmet';

const useStyles = makeStyles((theme) => ({
  body: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  choices: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '50%',
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: '100px',
  },
  choice: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    filter: 'drop-shadow( 10px 10px 8px rgba(0, 0, 0, .7))',
    transition: 'transform .2s',

    '&:hover': {
      transform: 'scale(1.4)',
      cursor: 'pointer',
      filter: 'drop-shadow( 0 0 0.5rem rgba(255, 225, 56, .7))',
    },
  },
  choiceText: {
    fontSize: '2rem',
    margin: 30,
  },
}));

const StartPage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className="content">
        <Navbar />
        <Box className={classes.body}>
          <Box className={classes.choices}>
            <Box className={classes.choice}>
              <Sword height={300} width={200} />
              <Box className={classes.choiceText}>5 MAN</Box>
            </Box>
            <Box className={classes.choice}>
              <Swords height={300} width={300} />
              <Box className={classes.choiceText}>5 VS 5</Box>
            </Box>
            <Box className={classes.choice}>
              <Helmet height={300} width={200} />
              <Box className={classes.choiceText}>PLAYERS</Box>
            </Box>
          </Box>
        </Box>
      </div>
      <div className="background-component"></div>
    </div>
  );
};

export default StartPage;
