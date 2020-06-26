import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginTop: '4rem',
    minWidth: 275,
    textAlign: 'centre',
  },
  bullet: {
    display: 'inline-block',
    margin: '0px 2px',
    transform: 'scale(0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 40,
   
  },
  pos: {
    marginBottom: 12,
   
  },
  centerBtn: {
    justifyContent: 'center',
    
  },
});

export default function Contacts() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          CONTACT US
        </Typography>
        <Typography variant="h5" className={classes.pos} component="h2">
          We are here to help and answer my qusetions you might have. We look forward to hearing from you.
        </Typography>
        <Button size="large" variant="outlined" className={classes.pos}>Click Here to Contact Us</Button>
      
        <Typography className={classes.pos} color="textSecondary">
         
        </Typography>
        <Typography variant="body2" className={classes.centerBtn} component="p">
          
          <br />
          
        </Typography>
      </CardContent>
     
        
    </Card>
  );
}
