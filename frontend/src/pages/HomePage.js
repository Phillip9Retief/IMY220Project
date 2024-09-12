import React, { useState, useEffect } from 'react';
import '../SiteStyles.css';

function SearchInput({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="search-container animate-fade-in">
      <input
        type="text"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for songs or playlists..."
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

function FeedItem({ type, title, artist, image }) {
  return (
    <div className="feed-item animate-fade-in">
      <div className="image-container">
        <img src={image} alt={title} />
        {type === 'song' ? (
          <div className="overlay-icon">
            <i className="fa fa-play-circle"></i>
          </div>
        ) : (
          <div className="overlay-icon">
            <i className="fa fa-music"></i>
          </div>
        )}
      </div>
      <h3>{title}</h3>
      <p>{type === 'song' ? `Artist: ${artist}` : 'Playlist'}</p>
      <button className="action-button">
        {type === 'song' ? 'Play' : 'View Playlist'}
      </button>
    </div>
  );
}

function Feed({ items }) {
  return (
    <div className="feed">
      {items.map((item, index) => (
        <FeedItem key={index} {...item} />
      ))}
    </div>
  );
}

function HomePage() {
  const [feedItems, setFeedItems] = useState([
    { type: 'song', title: 'Bohemian Rhapsody', artist: 'Queen', image: 'https://via.placeholder.com/200x200?text=Bohemian+Rhapsody' },
    { type: 'playlist', title: '80s Hits', image: 'https://via.placeholder.com/200x200?text=80s+Hits' },
    { type: 'song', title: 'Shape of You', artist: 'Ed Sheeran', image: 'https://via.placeholder.com/200x200?text=Shape+of+You' },
    { type: 'playlist', title: 'Workout Mix', image: 'https://via.placeholder.com/200x200?text=Workout+Mix' },
  
  ]);

  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
    // Implement search
  };

  useEffect(() => {

    document.title = 'Tune Union - Home';
  }, []);

  return (
    <div className="container home-page">
      <h1 className="animate-fade-in">Welcome to Tune Union</h1>
      <SearchInput onSearch={handleSearch} />
      <Feed items={feedItems} />
    </div>
  );
}

export default HomePage;