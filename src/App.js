import React from 'react';
import './App.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Gallery from 'react-photo-gallery';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import ImageComponent from './ImageComponent';
import ImageComponentRL from './ImageComponentRL';

import photos from './all_images.json';
import photos_rl from './all_images_rl.json';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#2196f3',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: '#f50057',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});

class App extends React.Component {
  state = {
    checkedRL: false,
    photos: photos,
    imageComponent: ImageComponent,
  }

  handleChange = event => {
    this.setState({ 
      checkedRL: event.target.checked,
      photos: event.target.checked ? photos_rl : photos,
      imageComponent: event.target.checked ? ImageComponentRL : ImageComponent,
    });
  }

  renderGallery = () => {
    return(
      <Gallery 
        photos={this.state.photos} 
        renderImage={this.state.imageComponent}
      />
    )
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" color="primary">

            <Toolbar>
              <Typography variant="h5" color="inherit">
                Explore COCO Captions
              </Typography>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.checekdRL}
                      onChange={(event) => {this.handleChange(event)}}
                      value={this.state.checekdRL}
                      color="secondary" />
                  }
                  label="Show RL Comparison"
                />
              </FormGroup>
            </Toolbar>

          </AppBar>
          {this.renderGallery()}
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
