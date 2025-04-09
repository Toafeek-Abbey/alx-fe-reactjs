import axios from 'axios';

const fetchUserData = () => {
    axios.get("https://github.com/Toafeek-Abbey")
    .then(res => {
        return res.data
    }).catch(err => {
        console.log(err)
    })
}

export default fetchUserData