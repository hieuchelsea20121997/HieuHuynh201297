const { default: mongoose } = require('mongoose');

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        if (conn.connection.readyState === 1) {
            console.log('DB connection is successful');
        } else {
            console.log('DB connection is failed');
        }
    } catch (error) {
        console.error('DB connection is failed');
        throw new Error(error);
    }
}

module.exports = dbConnect;