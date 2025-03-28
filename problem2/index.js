const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/userRouter');
const postRoutes = require('./routes/postRouter');

const PORT = 3000;

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
