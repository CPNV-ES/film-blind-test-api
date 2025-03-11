const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    video_id: { type: String, required: true }, // TMDB video ID for the movie clip
    answers: [{
        id: { type: String, required: true },
        text: { type: String, required: true },
        tmdb_id: { type: String, required: function () { return this.is_correct; } }, // Only required if is_correct is true
        is_correct: { type: Boolean, required: true }
    }]
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Add validation to ensure exactly one correct answer
questionSchema.pre('save', function (next) {
    const correctAnswers = this.answers.filter(answer => answer.is_correct);
    if (correctAnswers.length !== 1) {
        next(new Error('Question must have exactly one correct answer'));
    }
    next();
});

module.exports = mongoose.model('Question', questionSchema);