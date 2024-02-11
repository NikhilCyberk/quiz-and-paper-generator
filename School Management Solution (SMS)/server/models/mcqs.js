const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    totalQuestions: {
        type: Number,
        required: true,
    },
    perQuestionScore: {
        type: Number,
        required: true,
    },
    questions: [{
        question: {
            type: String,
            required: true,
        },
        choices: [{
            type: String,
            required: true,
        }],
        type: {
            type: String,
            enum: ['MCQs'],
            required: true,
        },
        correctAnswer: {
            type: String,
            required: true,
        },
    }],
});

const resultSchema = new mongoose.Schema({
    score: {
        type: Number,
        required: true,
    },
    correctAnswer: {
        type: Number,
        required: true,
    },
    wrongAnswer: {
        type: Number,
        required: true,
    },
});

const Mcqs = mongoose.model('Quiz', quizSchema);
const ResultModel = mongoose.model('Result', resultSchema);

module.exports = Mcqs ;
