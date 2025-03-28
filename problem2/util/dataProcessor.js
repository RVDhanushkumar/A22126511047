const topuser = (users, posts) => {
    const userPostCount = {};

    posts.forEach(post => {
        const userId = post.userId;
        userPostCount[userId] = (userPostCount[userId] || 0) + 1;
    });

    const sortedUsers = Object.keys(userPostCount)
        .map(userId => ({ id: userId, name: users[userId], postCount: userPostCount[userId] }))
        .sort((a, b) => b.postCount - a.postCount)
        .slice(0, 5);

    return sortedUsers;
};

const popularpost = (posts) => {
    return posts
        .sort((a, b) => b.comments.length - a.comments.length)
        .slice(0, 5);
};

const latestpost = (posts) => {
    return posts
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 5);
};

module.exports = { topuser,popularpost, latestpost };
