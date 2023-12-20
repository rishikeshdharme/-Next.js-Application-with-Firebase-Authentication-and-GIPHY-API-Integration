// // giphy.js
// import axios from 'axios';

// const GIPHY_API_KEY = ' GlVGYHkr3WSBnllca54iNt0yFbjz7L65';

// const giphy = axios.create({
//   baseURL: 'https://api.giphy.com/v1/gifs',
//   params: {
//     api_key:  GlVGYHkr3WSBnllca54iNt0yFbjz7L65
//     ,
//   },
// });

// export default giphy;

// Install axios for making API requests: npm install axios
import React, { useState } from 'react';
import axios from 'axios';

const GiphyGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [gifs, setGifs] = useState([]);

  const apiKey = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65';
  const apiUrl = `https://api.giphy.com/v1/gifs/search`;

  const handleSearch = async () => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          api_key: GlVGYHkr3WSBnllca54iNt0yFbjz7L65,
          q: searchTerm,
          limit: 10, // Adjust the limit as needed
        },
      });
      setGifs(response.data.data);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
        ))}
      </div>
    </div>
  );
};

export default GiphyGallery;
