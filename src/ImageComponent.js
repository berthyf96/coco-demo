import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const imgStyle = { 
  transition: 'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s' 
};
const selectedImgStyle = { 
  transform: 'translateZ(0px) scale3d(0.9, 0.9, 1)',
  transition: 'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s'
};
const cont = {
  backgroundColor: '#eee',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative'
}

const renderSelectImage = ({ photo, margin, direction, top, left }) => {  
  // calculate x,y scale
  const sx = (100 - ((30 / photo.width) * 100)) / 100;
  const sy = (100 - ((30 / photo.height) * 100)) / 100;
  selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;

  if (direction === 'column'){
    cont.position = 'absolute';
    cont.left = left;
    cont.top = top;
  }

  return (
    <Card style={{margin, ...cont}}>
      <CardActionArea>
        <CardMedia
          style={{...imgStyle, ...photo}}
          image={photo.src}
        />
        {/* <CardContent style={{width: photo.width}}>
          <List>
            <ListItem>
              <ListItemText primary={photo.gt_cap} secondary="COCO Groundtruth" />
            </ListItem>
            <ListItem>
              <ListItemText primary={photo.pred_cap} secondary="Predicted Caption" />
            </ListItem>
          </List>
        </CardContent> */}
      </CardActionArea>
    </Card>
  )
}

export default renderSelectImage;