import React, { useState } from 'react';

function AddSongForm() {
  const [songData, setSongData] = useState({
    title: '',
    artist: '',
    albumArt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongData({ ...songData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the form submission
    console.log(songData);
  };

  return (
    <form onSubmit={handleSubmit} className="add-song-form">
      <input
        type="text"
        name="title"
        placeholder="Song Title"
        value={songData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="artist"
        placeholder="Artist Name"
        value={songData.artist}
        onChange={handleChange}
      />
      <input
        type="text"
        name="albumArt"
        placeholder="Album Art URL"
        value={songData.albumArt}
        onChange={handleChange}
      />
      <button type="submit">Add Song</button>
    </form>
  );
}

export default AddSongForm;
