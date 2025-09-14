
'use client';


import { useAuth } from '@/context/useauth';
import authService from '@/services/appwrite';
import React, { useEffect, useState } from 'react'


type User = {
  name: string;
  email: string;
}


const Profile = () => {

  const [profile, setProfile] = useState<User | null>(null);
  const { authStatus } = useAuth();

  useEffect(() => {
    if (authStatus) {
      authService.getCurrentUser().then((user: any) => setProfile(user)).catch(console.error);
    }
  }, []);


  return (
    <div className="flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <p className="text-gray-700 mb-2">
          <strong>Name:</strong> {profile?.name || "Guest"}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> {profile?.email || "Not provided"}
        </p>
        <p className="text-gray-700">
          <strong>Status:</strong>{" "}
          {authStatus ? "Logged In ✅" : "Logged Out ❌"}
        </p>
      </div>
    </div>
  );
};

export default Profile;
