import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../SiteStyles.css';

// Playlist Component
function Playlist({ playlist, onEdit }) {
  return (
    <div className="playlist-card">
      <img src={playlist.coverImage} alt={playlist.title} className="playlist-cover" />
      <h2>{playlist.title}</h2>
      <p>Created by: {playlist.creator}</p>
      <p>{playlist.description}</p>
      <button onClick={onEdit} className="edit-button">Edit Playlist</button>
    </div>
  );
}

// Edit Playlist Component
function EditPlaylist({ playlist, onSave, onCancel }) {
  const [editedPlaylist, setEditedPlaylist] = useState(playlist);

  const handleChange = (e) => {
    setEditedPlaylist({ ...editedPlaylist, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedPlaylist);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-playlist-form">
      <input
        type="text"
        name="title"
        value={editedPlaylist.title}
        onChange={handleChange}
        placeholder="Playlist Title"
      />
      <textarea
        name="description"
        value={editedPlaylist.description}
        onChange={handleChange}
        placeholder="Playlist Description"
      />
      <div className="button-group">
        <button type="submit" className="save-button">Save</button>
        <button type="button" onClick={onCancel} className="cancel-button">Cancel</button>
      </div>
    </form>
  );
}

// Song Component
function Song({ song }) {
  return (
    <div className="song-item">
      <img src={song.coverArt} alt={song.title} className="song-cover" />
      <div className="song-info">
        <h4>{song.title}</h4>
        <p>{song.artist}</p>
      </div>
    </div>
  );
}

// Song List Component
function SongList({ songs }) {
  return (
    <div className="song-list">
      <h3>Songs in this Playlist</h3>
      {songs.map((song, index) => (
        <Song key={index} song={song} />
      ))}
    </div>
  );
}

// Comment Component
function Comment({ comment }) {
  return (
    <div className="comment-item">
      <p><strong>{comment.user}</strong>: {comment.text}</p>
      <small>{comment.date}</small>
    </div>
  );
}

// Comment List Component
function CommentList({ comments }) {
  return (
    <div className="comment-list">
      <h3>Comments</h3>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}

// Add Comment Component
function AddComment({ onAddComment }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-comment-form">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <button type="submit" className="add-button">Add Comment</button>
    </form>
  );
}

// Main PlaylistPage Component
function PlaylistPage() {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [playlist, setPlaylist] = useState({
    id: id,
    title: 'Chill Vibes',
    creator: 'DJ Chill',
    description: 'A collection of relaxing tracks for unwinding after a long day.',
    coverImage: 'https://images.unsplash.com/photo-1488379497855-c8c2d5a78d1c?fit=crop&w=300&h=300',
  });

  const [songs, setSongs] = useState([
    { title: 'Ocean Eyes', artist: 'Billie Eilish', coverArt: 'https://via.placeholder.com/50?text=Ocean+Eyes' },
    { title: 'Sunflower', artist: 'Post Malone', coverArt: 'https://via.placeholder.com/50?text=Sunflower' },
    { title: 'Levitating', artist: 'Dua Lipa', coverArt: 'https://via.placeholder.com/50?text=Levitating' },
  ]);

  const [comments, setComments] = useState([
    { user: 'MusicFan92', text: 'Amazing playlist! Perfect for studying.', date: '2024-09-12' },
    { user: 'ChillVibesOnly', text: 'I love these tracks. Great for relaxation.', date: '2024-09-13' },
  ]);

  const handleEditPlaylist = () => setIsEditing(true);
  const handleCancelEdit = () => setIsEditing(false);
  const handleSavePlaylist = (editedPlaylist) => {
    setPlaylist(editedPlaylist);
    setIsEditing(false);
  };

  const handleAddComment = (newComment) => {
    const comment = {
      user: 'CurrentUser',
      text: newComment,
      date: new Date().toISOString().split('T')[0],
    };
    setComments([...comments, comment]);
  };

  return (
    <div className="container playlist-page">
      <h1>Playlist Page</h1>
      {isEditing ? (
        <EditPlaylist playlist={playlist} onSave={handleSavePlaylist} onCancel={handleCancelEdit} />
      ) : (
        <Playlist playlist={playlist} onEdit={handleEditPlaylist} />
      )}
      <SongList songs={songs} />
      <CommentList comments={comments} />
      <AddComment onAddComment={handleAddComment} />
    </div>
  );
}

export default PlaylistPage;
