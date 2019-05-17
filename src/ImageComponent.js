import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

// src
// id
// width
// height
// groundtruth_caption_i
// predicted_caption
// object_predicted_caption
// attribute_predicted caption
// relation_predicted caption

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

class ImageComponent extends React.Component {
  state = {
    openDialog: false,
    openGroundtruth: false,
    openPredicted: false,
    openObject: false,
    openAttribute: false,
    openRelation: false,
  }

  render() {
    const photo = this.props.photo;
    const margin = this.props.margin;
    const direction = this.props.direction;
    const top = this.props.top;
    const left = this.props.left;

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
      <div>
        <Dialog 
          open={this.state.openDialog}
          onClose={() => {this.setState(state => ({ openDialog: false }));}}
        >
          <DialogTitle>COCO Image {photo.id}</DialogTitle>
          <List>
            {/* Groundtruth Captions */}
            <ListItem 
              button 
              onClick={() => {this.setState(state => ({ openGroundtruth: !this.state.openGroundtruth }));}}
            >
              <ListItemText primary="Groundtruth Captions"/>
              {this.state.openGroundtruth ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openGroundtruth} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText inset primary={photo.groundtruth_caption_1} />
                </ListItem>
                <ListItem>
                  <ListItemText inset primary={photo.groundtruth_caption_2} />
                </ListItem>
                <ListItem>
                  <ListItemText inset primary={photo.groundtruth_caption_3} />
                </ListItem>
                <ListItem>
                  <ListItemText inset primary={photo.groundtruth_caption_4} />
                </ListItem>
                <ListItem>
                  <ListItemText inset primary={photo.groundtruth_caption_5} />
                </ListItem>
              </List>
            </Collapse>

            {/* Predicted Caption */}
            <ListItem 
              button 
              onClick={() => {this.setState(state => ({ openPredicted: !this.state.openPredicted }));}}
            >
              <ListItemText primary="Predicted Caption"/>
              {this.state.openPredicted ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openPredicted} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText inset primary={photo.predicted_caption} />
                </ListItem>
              </List>
            </Collapse>

            {/* Object Caption */}
            <ListItem 
              button 
              onClick={() => {this.setState(state => ({ openObject: !this.state.openObject }));}}
            >
              <ListItemText primary="Predicted Object Caption"/>
              {this.state.openObject ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openObject} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText inset primary={photo.object_predicted_caption} />
                </ListItem>
              </List>
            </Collapse>

            {/* Attribute Caption */}
            <ListItem 
              button 
              onClick={() => {this.setState(state => ({ openAttribute: !this.state.openAttribute }));}}
            >
              <ListItemText primary="Predicted Object+Attribute Caption"/>
              {this.state.openAttribute ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openAttribute} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText inset primary={photo.attribute_predicted_caption} />
                </ListItem>
              </List>
            </Collapse>

            {/* Relation Caption */}
            <ListItem 
              button 
              onClick={() => {this.setState(state => ({ openRelation: !this.state.openRelation }));}}
            >
              <ListItemText primary="Predicted Relation Caption"/>
              {this.state.openRelation ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openRelation} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText inset primary={photo.relation_predicted_caption} />
                </ListItem>
              </List>
            </Collapse>
            
          </List>
        </Dialog>

        <Card style={{margin, ...cont}}>
          <CardActionArea onClick={() => {this.setState(state => ({ openDialog: true }));}}>
            <CardMedia
              style={{...imgStyle, ...photo}}
              image={photo.src}
            />
          </CardActionArea>
        </Card>
      </div>
    )
  }
}

export default ImageComponent;