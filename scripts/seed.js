const mongoose = require('mongoose');
const Question = require('../models/Question');
require('dotenv').config();

const sampleQuestions = [
    {
        video_id: "lYGald0tFro",
        answers: [
            {
                id: "1",
                text: "The Shawshank Redemption",
                tmdb_id: "278",
                is_correct: true
            },
            {
                id: "2",
                text: "The Green Mile",
                tmdb_id: "497",
                is_correct: false
            },
            {
                id: "3",
                text: "The Conversation",
                tmdb_id: "592",
                is_correct: false
            },
            {
                id: "4",
                text: "The Great Escape",
                tmdb_id: "5925",
                is_correct: false
            }
        ]
    },
    {
        video_id: "1zyhQjJ5UgY",
        answers: [
            {
                id: "1",
                text: "The Dark Knight",
                tmdb_id: "155",
                is_correct: true
            },
            {
                id: "2",
                text: "Batman Begins",
                tmdb_id: "272",
                is_correct: false
            },
            {
                id: "3",
                text: "Spider-Man",
                tmdb_id: "557",
                is_correct: false
            },
            {
                id: "4",
                text: "Superman (1978)",
                tmdb_id: "1924",
                is_correct: false
            }
        ]
    },
    {
        video_id: "c56t7upa8Bk",
        answers: [
            {
                id: "1",
                text: "Inception",
                tmdb_id: "27205",
                is_correct: true
            },
            {
                id: "2",
                text: "The Matrix",
                tmdb_id: "603",
                is_correct: false
            },
            {
                id: "3",
                text: "Interstellar",
                tmdb_id: "157336",
                is_correct: false
            },
            {
                id: "4",
                text: "Tenet",
                tmdb_id: "577922",
                is_correct: false
            }
        ]
    },
    {
        video_id: "jtkcM7lerFM",
        answers: [
            {
                id: "1",
                text: "Pulp Fiction",
                tmdb_id: "680",
                is_correct: true
            },
            {
                id: "2",
                text: "Reservoir Dogs",
                tmdb_id: "500",
                is_correct: false
            },
            {
                id: "3",
                text: "Kill Bill: Vol. 1",
                tmdb_id: "24",
                is_correct: false
            },
            {
                id: "4",
                text: "Django Unchained",
                tmdb_id: "68718",
                is_correct: false
            }
        ]
    },
    {
        video_id: "AEyCX9ExkFg",
        answers: [
            {
                id: "1",
                text: "The Lord of the Rings: The Fellowship of the Ring",
                tmdb_id: "120",
                is_correct: true
            },
            {
                id: "2",
                text: "The Hobbit: An Unexpected Journey",
                tmdb_id: "49051",
                is_correct: false
            },
            {
                id: "3",
                text: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
                tmdb_id: "411",
                is_correct: false
            },
            {
                id: "4",
                text: "Harry Potter and the Sorcerer's Stone",
                tmdb_id: "671",
                is_correct: false
            }
        ]
    },
    {
        video_id: "K1C7NILSiV4",
        answers: [
            {
                id: "1",
                text: "Fight Club",
                tmdb_id: "550",
                is_correct: true
            },
            {
                id: "2",
                text: "American Psycho",
                tmdb_id: "1359",
                is_correct: false
            },
            {
                id: "3",
                text: "The Machinist",
                tmdb_id: "4553",
                is_correct: false
            },
            {
                id: "4",
                text: "Memento",
                tmdb_id: "77",
                is_correct: false
            }
        ]
    },
    {
        video_id: "lDlU08RU7Tk",
        answers: [
            {
                id: "1",
                text: "Jurassic Park",
                tmdb_id: "329",
                is_correct: true
            },
            {
                id: "2",
                text: "Godzilla",
                tmdb_id: "124905",
                is_correct: false
            },
            {
                id: "3",
                text: "King Kong",
                tmdb_id: "254",
                is_correct: false
            },
            {
                id: "4",
                text: "Pacific Rim",
                tmdb_id: "68726",
                is_correct: false
            }
        ]
    },
    {
        video_id: "PPskYVBqdNw",
        answers: [
            {
                id: "1",
                text: "The Godfather",
                tmdb_id: "238",
                is_correct: true
            },
            {
                id: "2",
                text: "Goodfellas",
                tmdb_id: "769",
                is_correct: false
            },
            {
                id: "3",
                text: "Scarface",
                tmdb_id: "111",
                is_correct: false
            },
            {
                id: "4",
                text: "Casino",
                tmdb_id: "524",
                is_correct: false
            }
        ]
    },
    {
        video_id: "VWoUcB7y4hw",
        answers: [
            {
                id: "1",
                text: "Forrest Gump",
                tmdb_id: "13",
                is_correct: true
            },
            {
                id: "2",
                text: "Big",
                tmdb_id: "2280",
                is_correct: false
            },
            {
                id: "3",
                text: "Cast Away",
                tmdb_id: "8358",
                is_correct: false
            },
            {
                id: "4",
                text: "The Terminal",
                tmdb_id: "594",
                is_correct: false
            }
        ]
    },
    {
        video_id: "pFS4zYWxzNA",
        answers: [
            {
                id: "1",
                text: "The Matrix",
                tmdb_id: "603",
                is_correct: true
            },
            {
                id: "2",
                text: "Blade Runner",
                tmdb_id: "78",
                is_correct: false
            },
            {
                id: "3",
                text: "Total Recall",
                tmdb_id: "861",
                is_correct: false
            },
            {
                id: "4",
                text: "Ex Machina",
                tmdb_id: "264660",
                is_correct: false
            }
        ]
    },
    {
        video_id: "Fs7FIJHLD48",
        answers: [
            {
                id: "1",
                text: "The Dark Knight Rises",
                tmdb_id: "49026",
                is_correct: true
            },
            {
                id: "2",
                text: "Batman Forever",
                is_correct: false
            },
            {
                id: "3",
                text: "Batman Returns",
                is_correct: false
            },
            {
                id: "4",
                text: "The Amazing Spider-Man",
                is_correct: false
            }
        ]
    },
    {
        video_id: "yFGQDdQ2lYc",
        answers: [
            {
                id: "1",
                text: "The Matrix Reloaded",
                tmdb_id: "604",
                is_correct: true
            },
            {
                id: "2",
                text: "Johnny Mnemonic",
                is_correct: false
            },
            {
                id: "3",
                text: "Equilibrium",
                is_correct: false
            },
            {
                id: "4",
                text: "Dark City",
                is_correct: false
            }
        ]
    },
    {
        video_id: "3TIu08u5EKQ",
        answers: [
            {
                id: "1",
                text: "Kill Bill: Vol. 2",
                tmdb_id: "393",
                is_correct: true
            },
            {
                id: "2",
                text: "From Dusk Till Dawn",
                is_correct: false
            },
            {
                id: "3",
                text: "Jackie Brown",
                is_correct: false
            },
            {
                id: "4",
                text: "Death Proof",
                is_correct: false
            }
        ]
    },
    {
        video_id: "2mu6faleFUg",
        answers: [
            {
                id: "1",
                text: "The Lord of the Rings: The Two Towers",
                tmdb_id: "121",
                is_correct: true
            },
            {
                id: "2",
                text: "The Hobbit: The Desolation of Smaug",
                is_correct: false
            },
            {
                id: "3",
                text: "Willow",
                is_correct: false
            },
            {
                id: "4",
                text: "Eragon",
                is_correct: false
            }
        ]
    },
    {
        video_id: "SshzG6rtP6A",
        answers: [
            {
                id: "1",
                text: "The Godfather: Part II",
                tmdb_id: "240",
                is_correct: true
            },
            {
                id: "2",
                text: "The Departed",
                is_correct: false
            },
            {
                id: "3",
                text: "Once Upon a Time in America",
                is_correct: false
            },
            {
                id: "4",
                text: "Miller's Crossing",
                is_correct: false
            }
        ]
    },
    {
        video_id: "FkVfNf8ADec",
        answers: [
            {
                id: "1",
                text: "Jurassic World",
                tmdb_id: "135397",
                is_correct: true
            },
            {
                id: "2",
                text: "Jurassic Park III",
                is_correct: false
            },
            {
                id: "3",
                text: "The Lost World: Jurassic Park",
                is_correct: false
            },
            {
                id: "4",
                text: "Kong: Skull Island",
                is_correct: false
            }
        ]
    },
    {
        video_id: "fvpQMTY8H9Y",
        answers: [
            {
                id: "1",
                text: "Saving Private Ryan",
                tmdb_id: "857",
                is_correct: true
            },
            {
                id: "2",
                text: "Cast Away",
                is_correct: false
            },
            {
                id: "3",
                text: "Apollo 13",
                is_correct: false
            },
            {
                id: "4",
                text: "Bridge of Spies",
                is_correct: false
            }
        ]
    },
    {
        video_id: "Xwd8GTF-Tss",
        answers: [
            {
                id: "1",
                text: "Memento",
                tmdb_id: "77",
                is_correct: true
            },
            {
                id: "2",
                text: "Insomnia",
                is_correct: false
            },
            {
                id: "3",
                text: "Mulholland Drive",
                is_correct: false
            },
            {
                id: "4",
                text: "Identity",
                is_correct: false
            }
        ]
    }
];

async function seed() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        // Clear existing questions
        await Question.deleteMany({});
        console.log('Cleared existing questions');

        // Insert sample questions
        await Question.insertMany(sampleQuestions);
        console.log('Inserted sample questions');

        console.log('Seed completed successfully');
        process.exit(0);
    } catch (error) {
        console.error('Seed failed:', error);
        process.exit(1);
    }
}

seed(); 