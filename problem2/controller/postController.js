const apiSer = require('../services/apiService');
const dp = require('../util/dataProcessor');

const toporlatest = async (req, res) => {
    try {
        const { type } = req.query;
        const postsData = await apiSer.getPosts();

        if (type === 'popular') {
            const topPosts = dp.popularpost(postsData);
            res.status(200).json({ topPosts });
        } else if (type === 'latest') {
            const latestPosts = dp.latestpost(postsData);
            res.status(200).json({ latestPosts });
        } else {
            res.status(400).json({ error: 'Invalid type. Use "latest" or "popular".' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching posts' });
    }
};

module.exports = { toporlatest };
