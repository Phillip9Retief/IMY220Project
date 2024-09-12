import React from 'react';

function AddToPlaylist({ playlists, onAdd }) {
  const handleAdd = (playlistId) => {
    onAdd(playlistId);
  };

  return (
    <div className="add-to-playlist">
      <h4>Select Playlist</h4>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id} onClick={() => handleAdd(playlist.id)}>
            {playlist.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddToPlaylist;
