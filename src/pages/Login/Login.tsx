import { Box, TextField, makeStyles, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../data/UserContext';
import './Login.css';

const useStyles = makeStyles((theme) => ({
  login: {
    width: '400px',
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': {
        backgroundColor: 'rgba(160, 160, 160, 0.3)',
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
        color: 'white',
      },
    },
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButton: {
    marginTop: '20px',
    width: '100px',
    color: 'white',
    backgroundColor: '#01B2CE',
    transition: 'transform .2s',
    fontWeight: 700,
    '&:hover': {
      backgroundColor: '#01B2CE',
      transform: 'scale(1.1)',
    },
    '&.MuiButton-root.Mui-disabled': {
      backgroundColor: 'grey',
    },
  },
}));

const Landing = () => {
  const { setUser } = useContext(UserContext);
  const [pwd, setPwd] = useState('');
  const [wrongPwd, setWrongPwd] = useState(false);
  const classes = useStyles();

  const handleChangeInput = (event: any) => {
    setPwd(event.target.value);
    if (wrongPwd) {
      setWrongPwd(false);
    }
  };
  const handleButton = () => {
    if (pwd === 'riften') {
      setWrongPwd(false);
      setUser({ authenticated: true });
    } else {
      setWrongPwd(true);
    }
  };

  return (
    <div>
      <div className="content">
        <div className="title">
          <h1>TEAM DIVIDER</h1>
        </div>
        <Box className={classes.body}>
          <TextField
            onKeyPress={(event) => {
              if (event.key === 'Enter' && pwd) handleButton();
            }}
            error={wrongPwd}
            className={classes.login}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            onChange={handleChangeInput}
            helperText={wrongPwd ? 'Incorrect password' : ''}
          />
          <Button disabled={!pwd} className={classes.signInButton} onClick={handleButton}>
            Sign in
          </Button>
        </Box>
      </div>
      <div className="background-component"></div>
    </div>
  );
};

export default Landing;
