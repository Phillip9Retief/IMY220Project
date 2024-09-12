import React from 'react';

function Song({ title, artist, albumArt }) {
  return (
    <div className="song-item">
      <img src={albumArt} alt={title} className="song-cover" />
      <div className="song-info">
        <h4>{title}</h4>
        <p>{artist}</p>
      </div>
    </div>
  );
}

export default Song;
