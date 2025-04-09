import { useState, useEffect } from "react";
import *as React from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => console.log(data)
  const [error, setError] = useState(false);
  
    
  const handleSearch =  useEffect(() => {
    fetch(fetchUserData)
    .then(data => {
        setUserData(data)
        setLoading(true)
        setUsername(data.username)
    })
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!loading ) {
        setError(true)
    }
    
}
  return (
    
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6 max-w-xl mx-auto">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="flex-1 border border-gray-300 rounded px-4 py-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
        {error && <p className="text-red-500">Looks like we can't find the user.</p>}
      </div>

      {loading && <p className="text-yellow-500">Looks like we can't find the user.</p>}


      {userData && !loading && !error && (
        <div className="mt-6 p-4 border border-gray-200 rounded-lg shadow-md text-center">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-1">{userData.name || userData.login}</h2>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
    </form>
  );
}

export default Search;