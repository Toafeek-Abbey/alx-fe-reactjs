import axios from 'axios';

const fetchUserData = () => {
    axios.get("https://api.github.com")
    .then(res => {
        return res.data
    }).catch(err => {
        console.log(err)
    })
}

export default fetchUserData