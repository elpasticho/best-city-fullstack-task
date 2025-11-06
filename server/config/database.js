const mongoose = require('mongoose');

const connectDatabase = () => {
    const MONGO_URI = process.env.MONGO_URI;

    if (!MONGO_URI) {
        console.log('⚠️  MongoDB URI not found in environment variables');
        console.log('📝 Please configure MONGO_URI in .env file');
        return;
    }

    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((data) => {
        console.log(`✅ MongoDB Connected: ${data.connection.host}`);
    })
    .catch((err) => {
        console.log('❌ MongoDB Connection Error:', err.message);
    });
}

module.exports = connectDatabase;