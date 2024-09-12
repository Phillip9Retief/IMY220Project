import React from 'react';

function PlaylistPreview({ name, coverImage }) {
  return (
    <div className="playlist-preview">
      <img src={coverImage} alt={name} className="playlist-cover" />
      <h4>{name}</h4>
    </div>
  );
}

export default PlaylistPreview;
