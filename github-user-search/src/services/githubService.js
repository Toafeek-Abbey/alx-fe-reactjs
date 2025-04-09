import axios from 'axios';
let filters = {}
const fetchUserData = () => {
    const { username, location, repos } = filters

    // Start with the main username (required for search)
    let query = username ? `${username}` : '';
  
    // Add advanced filters
    if (location) query += `+location:${location}`;
    if (repos) query += `+repos:>${repos}`; // can adjust operator to >=, =, etc.

    axios.get("https://api.github.com")
    .then(res => {
        return res.data
    }).catch(err => {
        console.log(err)
    })
}

export default fetchUserData