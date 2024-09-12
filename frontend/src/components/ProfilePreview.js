import React from 'react';

function ProfilePreview({ username, avatar }) {
  return (
    <div className="profile-preview">
      <img src={avatar} alt={username} className="profile-pic" />
      <h4>{username}</h4>
    </div>
  );
}

export default ProfilePreview;
