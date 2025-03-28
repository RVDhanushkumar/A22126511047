const apiSer = require('../services/apiService');
const dp = require('../util/dataProcessor');

const getTopUsers = async (req, res) => {
    try {
        const usersData = await apiSer.getUsers();
        const postsData = await apiSer.getPosts();

        const topUsers = dp.topuser(usersData, postsData);
        res.status(200).json({ topUsers });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching top users' });
    }
};

module.exports = { getTopUsers };
