import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    minHeight: '50vh',
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      flexDirection: 'column-reverse',
      marginTop: theme.spacing(2),
    },
  },
  profile: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
  },
  infoContainer: {
    maxWidth: '500px',
  },
  name: {
    fontSize: '3rem',
  },
  desc: {
    fontSize: '1.1rem',
  },
  input: {
    maxWidth: '500px',
    width: '300px',
  },
  formContainer: {
    minHeight: '50vh',
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      flexDirection: 'column',
      marginTop: theme.spacing(2),
    },
  },
  formwrapper: {
    width: '100%',
    background: '#ddd',
  },
  img: {
    marginRight: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.infoContainer}>
          <h1 className={classes.name}>Random Name</h1>
          <p className={classes.desc}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia,
          </p>
          <Button variant="contained" color="primary">
            Contact Me
          </Button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
          alt=""
          className={classes.profile}
        />
      </div>
      <div className={classes.formwrapper}>
        <div className={classes.formContainer}>
          <div>
            <h1>Contact Me</h1>
            <form name="contact" method="post" action="/contact">
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <TextField
                  name="name"
                  label="Full name"
                  type="text"
                  variant="outlined"
                  fullWidth
                  className={classes.input}
                />
              </p>
              <p>
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                />
              </p>
              <p>
                <TextField
                  name="message"
                  label="Message"
                  multiline
                  rows={10}
                  variant="outlined"
                  fullWidth
                />
              </p>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
          <img
            src={process.env.PUBLIC_URL + '/contact1.svg'}
            alt=""
            width="50%"
            className={classes.img}
          />
        </div>
      </div>
    </div>
  );
}
