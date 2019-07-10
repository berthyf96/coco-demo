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
// no_rl_cap
// rl_cs_cap
// rl_csu_cap
// rl_c_cap

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

class ImageComponentRL extends React.Component {
  state = {
    openDialog: false,
    openNoRl: true,
    openRlCs: true,
    openRlCsu: true,
    openRlC: true,
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
            {/* no_rl caption */}
            <ListItem 
              button 
              onClick={() => {this.setState(state => ({ openNoRl: !this.state.openNoRl }));}}
            >
              <ListItemText primary="no_rl"/>
              {this.state.openNoRl ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openNoRl} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText inset primary={photo.no_rl_cap} />
                </ListItem>
              </List>
            </Collapse>

            {/* rl_cs caption */}
            <ListItem 
              button 
              onClick={() => {this.setState(state => ({ openRlCs: !this.state.openRlCs }));}}
            >
              <ListItemText primary="no_rl"/>
              {this.state.openRlCs ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openRlCs} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText inset primary={photo.rl_cs_cap} />
                </ListItem>
              </List>
            </Collapse>

            {/* rl_csu caption */}
            <ListItem 
              button 
              onClick={() => {this.setState(state => ({ openRlCsu: !this.state.openRlCsu }));}}
            >
              <ListItemText primary="no_rl"/>
              {this.state.openRlCsu ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openRlCsu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText inset primary={photo.rl_csu_cap} />
                </ListItem>
              </List>
            </Collapse>

            {/* rl_c caption */}
            <ListItem 
              button 
              onClick={() => {this.setState(state => ({ openRlC: !this.state.openRlC }));}}
            >
              <ListItemText primary="no_rl"/>
              {this.state.openRlC ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openRlC} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText inset primary={photo.rl_c_cap} />
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

export default ImageComponentRL;