import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../SiteStyles.css';

// Profile Component
function Profile({ user, onEdit }) {
  return (
    <div className="profile-card">
      <img src={user.profilePic} alt={user.username} className="profile-pic" />
      <h2>{user.username}</h2>
      <p>{user.bio}</p>
      <button onClick={onEdit} className="edit-button">Edit Profile</button>
    </div>
  );
}

// Edit Profile Component
function EditProfile({ user, onSave, onCancel }) {
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedUser);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-profile-form">
      <input
        type="text"
        name="username"
        value={editedUser.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <textarea
        name="bio"
        value={editedUser.bio}
        onChange={handleChange}
        placeholder="Bio"
      />
      <div className="button-group">
        <button type="submit" className="save-button">Save</button>
        <button type="button" onClick={onCancel} className="cancel-button">Cancel</button>
      </div>
    </form>
  );
}

// Media List Component
function MediaList({ items, type }) {
  return (
    <div className="media-list">
      <h3>{type === 'playlist' ? 'Playlists' : 'Songs'}</h3>
      <div className="feed">
        {items.map((item, index) => (
          <div key={index} className="feed-item">
            <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
            <h4>{item.title}</h4>
            {type === 'song' && <p>Artist: {item.artist}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

// Follow List Component
function FollowList({ users, type }) {
  return (
    <div className="follow-list">
      <h3>{type === 'followers' ? 'Followers' : 'Following'}</h3>
      <div className="user-grid">
        {users.map((user, index) => (
          <div key={index} className="user-preview">
            <img src={user.profilePic} alt={user.username} />
            <p>{user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Create Playlist Component
function CreatePlaylist({ onCreatePlaylist }) {
  const [playlistName, setPlaylistName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreatePlaylist(playlistName);
    setPlaylistName('');
  };

  return (
    <form onSubmit={handleSubmit} className="create-playlist-form">
      <input
        type="text"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        placeholder="Enter playlist name"
      />
      <button type="submit" className="create-button">Create Playlist</button>
    </form>
  );
}

// Main ProfilePage Component
function ProfilePage() {
  const { id } = useParams(); // Extract ID from URL
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    username: 'Michael Kruger',
    bio: 'Music enthusiast and playlist curator.',
    profilePic: 'https://randomuser.me/api/portraits/men/69.jpg',
  });

  const [playlists, setPlaylists] = useState([
    { title: 'Chill Vibes', image: 'https://picsum.photos/100?random=1' },
    { title: 'Top Hits', image: 'https://picsum.photos/100?random=2' },
  ]);

  const [songs, setSongs] = useState([
    { title: 'Blinding Lights', artist: 'The Weeknd', image: 'https://picsum.photos/100?random=3' },
    { title: 'Watermelon Sugar', artist: 'Harry Styles', image: 'https://picsum.photos/100?random=4' },
  ]);

  const [followers, setFollowers] = useState([
    { username: 'JaneSmith', profilePic: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { username: 'MichaelBrown', profilePic: 'https://randomuser.me/api/portraits/men/5.jpg' },
  ]);

  const [following, setFollowing] = useState([
    { username: 'ArianaGrande', profilePic: 'https://randomuser.me/api/portraits/women/10.jpg' },
    { username: 'Drake', profilePic: 'https://randomuser.me/api/portraits/men/9.jpg' },
  ]);

  useEffect(() => {
    // Fetch user data based on ID here
    // For demonstration, the user data is static, but you could replace this with a real fetch call
    console.log('User ID:', id);
  }, [id]);

  const handleEditProfile = () => setIsEditing(true);
  const handleCancelEdit = () => setIsEditing(false);
  const handleSaveProfile = (editedUser) => {
    setUser(editedUser);
    setIsEditing(false);
  };

  const handleCreatePlaylist = (name) => {
    setPlaylists([...playlists, { title: name, image: 'https://via.placeholder.com/100?text=New+Playlist' }]);
  };

  return (
    <div className="container profile-page">
      <h1>Profile Page</h1>
      {isEditing ? (
        <EditProfile user={user} onSave={handleSaveProfile} onCancel={handleCancelEdit} />
      ) : (
        <Profile user={user} onEdit={handleEditProfile} />
      )}
      <CreatePlaylist onCreatePlaylist={handleCreatePlaylist} />
      <MediaList items={playlists} type="playlist" />
      <MediaList items={songs} type="song" />
      <FollowList users={followers} type="followers" />
      <FollowList users={following} type="following" />
    </div>
  );
}

export default ProfilePage;
