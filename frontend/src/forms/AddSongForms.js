// AddSongForm.js
import React, { useState } from 'react';

function AddSongForm({ onAddSong }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSong({ title, artist, image });
    setTitle('');
    setArtist('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-song-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Song Title"
      />
      <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Artist"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />
      <button type="submit">Add Song</button>
    </form>
  );
}

export default AddSongForm;
