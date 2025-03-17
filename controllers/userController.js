const User = require('../models/User');
const Score = require('../models/Score');
const bcrypt = require('bcryptjs');

exports.getUserInfo = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select('-password_hash');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user info', error: error.message });
    }
};

exports.getUserScores = async (req, res) => {
    try {
        const scores = await Score.find({ user_id: req.user.userId })
            .populate({
                path: 'question_id',
                populate: {
                    path: 'film_id',
                    select: 'title director rating'
                }
            })
            .sort({ createdAt: -1 });

        const formattedScores = scores.map(score => ({
            questionId: score.question_id._id,
            filmTitle: score.question_id.film_id.title,
            director: score.question_id.film_id.director,
            rating: score.question_id.film_id.rating,
            correct: score.correct
        }));

        res.json(formattedScores);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user scores', error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { username, email, currentPassword, newPassword } = req.body;
        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verify current password if provided
        if (currentPassword) {
            const isValid = await bcrypt.compare(currentPassword, user.password_hash);
            if (!isValid) {
                return res.status(401).json({ message: 'Current password is incorrect' });
            }
        }

        // Update user fields
        if (username) user.username = username;
        if (email) user.email = email;
        if (newPassword) user.password_hash = newPassword;

        await user.save();

        const updatedUser = await User.findById(user._id).select('-password_hash');
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Delete user's scores
        await Score.deleteMany({ user_id: req.user.userId });

        // Delete user
        await user.deleteOne();

        res.json({ message: 'User account deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};