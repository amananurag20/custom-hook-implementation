import React, { useState } from 'react';

const UserProfile = ({ confirm }) => {
  const [user, setUser] = useState({
    name: 'Aman',
    email: 'amananurag@example.com',
    bio: 'I love coding!',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleUpdateProfile = async () => {
    try {
      await confirm({
        title: 'Update Profile',
        message: 'Are you sure you want to update your profile?',
      });
      setUser(editedUser);
      setIsEditing(false);
      console.log('Profile updated');
    } catch {
      console.log('Update canceled');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">User Profile</h2>
      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="bio"
            value={editedUser.bio}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdateProfile}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="text-gray-800 dark:text-white"><strong>Name:</strong> {user.name}</p>
          <p className="text-gray-800 dark:text-white"><strong>Email:</strong> {user.email}</p>
          <p className="text-gray-800 dark:text-white"><strong>Bio:</strong> {user.bio}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
