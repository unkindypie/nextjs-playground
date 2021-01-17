import React from 'react';
import MuiCard from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import useStyles from './styles';

const Card = ({ title, text, imageUrl, date }) => {
  const classes = useStyles();

  const handleShareClick = React.useCallback(() => {
    try {
      navigator?.share({ title, text, url: window.location.href });
    } catch (err) {}
  }, []);

  return (
    <MuiCard className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardMedia className={classes.media} image={imageUrl} title={title} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share" onClick={handleShareClick}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
