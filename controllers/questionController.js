const Question = require('../models/Question');
const { getMovieDetails } = require('../utils/tmdb');

exports.getRandomQuestion = async (req, res) => {
    try {
        // Get random question from database
        const count = await Question.countDocuments();
        const random = Math.floor(Math.random() * count);
        const question = await Question.findOne().skip(random);

        if (!question) {
            return res.status(404).json({ message: 'No questions available' });
        }

        // Return only video_id and possible answers (no correct answer info)
        const questionData = {
            id: question._id,
            videoId: question.video_id,
            answers: question.answers.map(answer => ({
                id: answer.id,
                text: answer.text
            }))
        };

        res.json(questionData);
    } catch (error) {
        console.error('Error fetching random question:', error);
        res.status(500).json({ message: 'Error fetching random question' });
    }
};

exports.getQuestionAnswer = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        // Get the correct answer
        const correctAnswer = question.answers.find(answer => answer.is_correct);

        if (!correctAnswer || !correctAnswer.tmdb_id) {
            return res.status(400).json({ message: 'Invalid question data' });
        }

        // Only fetch TMDB details when revealing the answer
        const movieDetails = await getMovieDetails(correctAnswer.tmdb_id);

        res.json({
            answer: {
                id: correctAnswer.id,
                text: correctAnswer.text
            },
            movieInfo: movieDetails
        });
    } catch (error) {
        console.error('Error fetching answer:', error);
        res.status(500).json({ message: 'Error fetching answer' });
    }
};

exports.getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        res.json(question);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};