import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
  root: {
    margin: '4rem',
    minWidth: 275,
    textAlign: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0px 2px',
    transform: 'scale(0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  
  },
  pos: {
    marginBottom: 12,
    textAlign: 'center', 
  },
  centerBtn: {
    textAlign: 'center', 
    
  },
  inputs: {
    margin: '1rem',
    minWidth:'300px',
  }
});

export default function Contacts() {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
   
    <div className={classes.root}>
    
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          CONTACT US
        </Typography>
        <Typography variant="h5" className={classes.pos} component="h2">
          We are here to help and answer my qusetions you might have. We look forward to hearing from you.
        </Typography>
        <Button size="large"  className={classes.pos} variant="outlined" color="primary" onClick={handleClickOpen}>Click Here to Contact Us</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.root}>
        <DialogTitle id="form-dialog-title">Contact Us</DialogTitle>
        <DialogContent>
          <DialogContentText>
              Enter the information below:
          </DialogContentText>
          <form   autoComplete="off" >
          <TextField
          id="standard-text-input"
          label="Name"
          type="Name"
          autoComplete="current-name"
          className={classes.inputs}
        />
        <TextField
          id="standard-email-input"
          label="Email"
          type="email"
          autoComplete="current-email"
          className={classes.inputs}
        />
        </form>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} color="primary" className={classes.centerBtn}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}
