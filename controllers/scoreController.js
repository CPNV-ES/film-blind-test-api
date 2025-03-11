const Score = require('../models/Score');
const User = require('../models/User');

exports.getTopScores = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10; // Default to top 10

        const topScores = await Score.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'user_id',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            {
                $unwind: '$user'
            },
            {
                $project: {
                    username: '$user.username',
                    score: 1,
                    createdAt: 1
                }
            },
            {
                $sort: { score: -1 }
            },
            {
                $limit: limit
            }
        ]);

        res.json(topScores);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching top scores', error: error.message });
    }
};

exports.addScore = async (req, res) => {
    try {
        const { score } = req.body;
        const user_id = req.user.userId;

        if (typeof score !== 'number') {
            return res.status(400).json({ message: 'Score must be a number' });
        }

        // Create new score
        const newScore = new Score({
            user_id,
            score
        });

        await newScore.save();

        res.status(201).json({
            message: 'Score added successfully',
            score: {
                score,
                date: newScore.createdAt
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error adding score', error: error.message });
    }
};