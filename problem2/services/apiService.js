const axios = require('axios');
require('dotenv').config();

const API_URL = process.env.API;
const u = `${API_URL}/users`;
const p = `${API_URL}/posts`;

const getUsers = async () => {
    const res = await axios.get(u,{
        headers: {
            'Authorization': `Bearer ${process.env.API_KEY}`,
        },
    });
    return res.data.users;
};

const getPosts = async () => {
    const res = await axios.get(p,{
        headers: {
            'Authorization': `Bearer ${process.env.API_KEY}`,
        },
    });
    return res.data.posts;
};

module.exports = { getUsers, getPosts };
