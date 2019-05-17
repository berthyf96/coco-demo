import React from 'react';
import './App.css';

import Gallery from 'react-photo-gallery';
import ImageComponent from './ImageComponent';

import photos from './all_images.json';

function App() {
  return (
    <div className="App">
      <Gallery 
        photos={photos} 
        renderImage={ImageComponent}
      />
    </div>
  );
}

export default App;
