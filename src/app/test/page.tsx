"use client";

import React, { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  avatar: string;
  email: string;
  age: number;
  country: string;
  city: string;
  address: string;
};

const UserDirectory = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://6864e42c5b5d8d03397eb631.mockapi.io/api/user")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading users...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">User Directory</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-md p-4 w-full max-w-sm hover:shadow-xl transition"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />
            <h2 className="text-xl font-semibold text-center mt-4">{user.name}</h2>
            <p className="text-sm text-gray-600 text-center">{user.email}</p>
            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <p><strong>Age:</strong> {user.age}</p>
              <p><strong>Location:</strong> {user.city}, {user.country}</p>
              <p><strong>Address:</strong> {user.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDirectory;
