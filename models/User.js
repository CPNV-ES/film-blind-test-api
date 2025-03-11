const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password_hash: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password_hash')) {
        this.password_hash = await bcrypt.hash(this.password_hash, 10);
    }
    next();
});

module.exports = mongoose.model('User', userSchema);