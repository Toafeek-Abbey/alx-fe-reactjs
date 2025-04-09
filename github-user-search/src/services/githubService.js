import axios from 'axios';
let filters = {}
const fetchUserData = () => {
    const { username, location, minRepos } = filters

    // Start with the main username (required for search)
    let query = username ? `${username}` : '';
  
    // Add advanced filters
    if (location)  {`+location:${location} + ${query}`};
    if (minRepos) { `+repos:>${minRepos}`}; // can adjust operator to >=, =, etc.
    axios.get("https://api.github.com/search/users?q")
    .then(res => {
        return res.data
    }).catch(err => {
        console.log(err)
    })
}

export default fetchUserData