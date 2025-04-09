import { useState } from "react";
import *as React from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
    
  const onSubmit = (data) => console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(error ) {
        setError("Looks like we cant find the user")
    }
}
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearch = async (reset = true) => {
    if (reset) setPage(1);
    setLoading(true);
    setError(false);

    try {
      const data = await fetchUserData({
        username,
        location,
        repos,
        page: reset ? 1 : page,
      });

      setUsers(prev =>
        reset ? data : [...prev, ...data]
      );
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    await handleSearch(false);
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6 max-w-3xl mx-auto">
      <div className="flex flex-wrap gap-2 mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="number"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          placeholder="Repos >"
          className="border border-gray-300 rounded px-3 py-2"
        />
        <button
          onClick={() => handleSearch(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-yellow-500">Loading...</p>}
      {error && <p className="text-red-500">Looks like we can't find any users.</p>}

      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 border border-gray-200 rounded-lg shadow-md flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-bold">{user.login}</h2>
              <p className="text-sm text-gray-600">User ID: {user.id}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && !loading && (
        <button
          onClick={handleLoadMore}
          className="mt-6 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Load More
        </button>
      )}
    </div>
    </form>
  );
}

export default Search;