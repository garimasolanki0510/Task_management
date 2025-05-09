import React, { useState } from 'react';

const usersData = [
  {
    id: 'u001',
    username: 'john_doe',
    role: 'user',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 'u002',
    username: 'admin_01',
    role: 'admin',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 'u003',
    username: 'jane_smith',
    role: 'user',
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 'u004',
    username: 'manager_mike',
    role: 'admin',
    image: 'https://i.pravatar.cc/150?img=4',
  },
];

const ManageUsers = () => {
  const [users, setUsers] = useState(usersData);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open

  // Function to delete a user
  const deleteUser = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      setUsers(users.filter((user) => user.id !== id));
      alert('User deleted successfully!');
    }
  };

  // Toggle dropdown menu
  const toggleDropdown = (id) => {
    setDropdownOpen((prev) => (prev === id ? null : id)); // Toggle the dropdown for the clicked user
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-black">Manage Users</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="relative flex items-center p-8 bg-white shadow rounded hover:shadow-md transition"
          >
            <img
              src={user.image}
              alt={user.username}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-semibold text-lg">{user.username}</p>
              <p className="text-sm text-gray-500">ID: {user.id}</p>
              <p className={`text-sm ${user.role === 'admin' ? 'text-red-500' : 'text-blue-500'}`}>
                Role: {user.role}
              </p>
            </div>

            {/* Three-dot menu */}
            <div className="ml-auto relative">
              <button
                onClick={() => toggleDropdown(user.id)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12a.75.75 0 110-1.5.75.75 0 010 1.5zM12 17.25a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              {dropdownOpen === user.id && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Delete User
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;