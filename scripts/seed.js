const mongoose = require('mongoose');
const Question = require('../models/Question');
require('dotenv').config();


const sampleQuestions = [
    {
        video_id: "lYGald0tFro",
        answers: [
            {
                id: "1",
                text: "The Green Mile",
                tmdb_id: "497",
                is_correct: false
            },
            {
                id: "2",
                text: "The Conversation",
                tmdb_id: "592",
                is_correct: false
            },
            {
                id: "3",
                text: "The Shawshank Redemption",
                tmdb_id: "278",
                is_correct: true
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
                text: "Batman Begins",
                tmdb_id: "272",
                is_correct: false
            },
            {
                id: "2",
                text: "The Dark Knight",
                tmdb_id: "155",
                is_correct: true
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
                text: "The Matrix",
                tmdb_id: "603",
                is_correct: false
            },
            {
                id: "2",
                text: "Interstellar",
                tmdb_id: "157336",
                is_correct: false
            },
            {
                id: "3",
                text: "Tenet",
                tmdb_id: "577922",
                is_correct: false
            },
            {
                id: "4",
                text: "Inception",
                tmdb_id: "27205",
                is_correct: true
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
                text: "The Hobbit: An Unexpected Journey",
                tmdb_id: "49051",
                is_correct: false
            },
            {
                id: "2",
                text: "The Chronicles of Narnia",
                tmdb_id: "411",
                is_correct: false
            },
            {
                id: "3",
                text: "The Lord of the Rings: The Fellowship of the Ring",
                tmdb_id: "120",
                is_correct: true
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
                text: "American Psycho",
                tmdb_id: "1359",
                is_correct: false
            },
            {
                id: "2",
                text: "Fight Club",
                tmdb_id: "550",
                is_correct: true
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
                text: "Godzilla",
                tmdb_id: "124905",
                is_correct: false
            },
            {
                id: "2",
                text: "King Kong",
                tmdb_id: "254",
                is_correct: false
            },
            {
                id: "3",
                text: "Pacific Rim",
                tmdb_id: "68726",
                is_correct: false
            },
            {
                id: "4",
                text: "Jurassic Park",
                tmdb_id: "329",
                is_correct: true
            }
        ]
    },
    {
        video_id: "PPskYVBqdNw",
        answers: [
            {
                id: "1",
                text: "Goodfellas",
                tmdb_id: "769",
                is_correct: false
            },
            {
                id: "2",
                text: "The Godfather",
                tmdb_id: "238",
                is_correct: true
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
                text: "Big",
                tmdb_id: "2280",
                is_correct: false
            },
            {
                id: "2",
                text: "Cast Away",
                tmdb_id: "8358",
                is_correct: false
            },
            {
                id: "3",
                text: "Forrest Gump",
                tmdb_id: "13",
                is_correct: true
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
                text: "Blade Runner",
                tmdb_id: "78",
                is_correct: false
            },
            {
                id: "2",
                text: "Total Recall",
                tmdb_id: "861",
                is_correct: false
            },
            {
                id: "3",
                text: "Ex Machina",
                tmdb_id: "264660",
                is_correct: false
            },
            {
                id: "4",
                text: "The Matrix",
                tmdb_id: "603",
                is_correct: true
            }
        ]
    },
    {
        video_id: "Fs7FIJHLD48",
        answers: [
            {
                id: "1",
                text: "Batman Forever",
                is_correct: false
            },
            {
                id: "2",
                text: "The Dark Knight Rises",
                tmdb_id: "49026",
                is_correct: true
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
                text: "Equilibrium",
                is_correct: false
            },
            {
                id: "3",
                text: "Dark City",
                is_correct: false
            },
            {
                id: "4",
                text: "Johnny Mnemonic",
                is_correct: false
            }
        ]
    },
    {
        video_id: "3TIu08u5EKQ",
        answers: [
            {
                id: "1",
                text: "From Dusk Till Dawn",
                is_correct: false
            },
            {
                id: "2",
                text: "Jackie Brown",
                is_correct: false
            },
            {
                id: "3",
                text: "Death Proof",
                is_correct: false
            },
            {
                id: "4",
                text: "Kill Bill: Vol. 2",
                tmdb_id: "393",
                is_correct: true
            }
        ]
    },
    {
        video_id: "2mu6faleFUg",
        answers: [
            {
                id: "1",
                text: "The Hobbit: The Desolation of Smaug",
                is_correct: false
            },
            {
                id: "2",
                text: "The Lord of the Rings: The Two Towers",
                tmdb_id: "121",
                is_correct: true
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
                text: "The Departed",
                is_correct: false
            },
            {
                id: "2",
                text: "Once Upon a Time in America",
                is_correct: false
            },
            {
                id: "3",
                text: "The Godfather: Part II",
                tmdb_id: "240",
                is_correct: true
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
                text: "The Lost World: Jurassic Park",
                is_correct: false
            },
            {
                id: "3",
                text: "Jurassic Park III",
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
                text: "Cast Away",
                is_correct: false
            },
            {
                id: "2",
                text: "Saving Private Ryan",
                tmdb_id: "857",
                is_correct: true
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
                text: "Insomnia",
                is_correct: false
            },
            {
                id: "2",
                text: "Mulholland Drive",
                is_correct: false
            },
            {
                id: "3",
                text: "Memento",
                tmdb_id: "77",
                is_correct: true
            },
            {
                id: "4",
                text: "Identity",
                is_correct: false
            }
        ]
    },
    {
        video_id: "e8TZbze72Bc",
        answers: [
            {
                id: "1",
                text: "Back to the Future",
                tmdb_id: "105",
                is_correct: true
            },
            {
                id: "2",
                text: "Bill & Ted's Excellent Adventure",
                is_correct: false
            },
            {
                id: "3",
                text: "The Terminator",
                is_correct: false
            },
            {
                id: "4",
                text: "E.T. the Extra-Terrestrial",
                is_correct: false
            }
        ]
    },
    {
        video_id: "F_mhWxOjxp4",
        answers: [
            {
                id: "1",
                text: "Iron Man",
                is_correct: false
            },
            {
                id: "2",
                text: "Avengers: Infinity War",
                is_correct: false
            },
            {
                id: "3",
                text: "Black Panther",
                is_correct: false
            },
            {
                id: "4",
                text: "Avengers: Endgame",
                tmdb_id: "299534",
                is_correct: true
            }
        ]
    },
    {
        video_id: "-yOZEiHLuVU",
        answers: [
            {
                id: "1",
                text: "Gladiator",
                tmdb_id: "98",
                is_correct: true
            },
            {
                id: "2",
                text: "Troy",
                is_correct: false
            },
            {
                id: "3",
                text: "300",
                is_correct: false
            },
            {
                id: "4",
                text: "Braveheart",
                is_correct: false
            }
        ]
    },
    {
        video_id: "3K1c6kcH70o",
        answers: [
            {
                id: "1",
                text: "Toy Story",
                is_correct: false
            },
            {
                id: "2",
                text: "Finding Nemo",
                is_correct: false
            },
            {
                id: "3",
                text: "Up",
                is_correct: false
            },
            {
                id: "4",
                text: "The Incredibles",
                tmdb_id: "9806",
                is_correct: true
            }
        ]
    },
    {
        video_id: "ny2CCMkagZU",
        answers: [
            {
                id: "1",
                text: "Mission: Impossible",
                is_correct: false
            },
            {
                id: "2",
                text: "Jason Bourne",
                is_correct: false
            },
            {
                id: "3",
                text: "The Bourne Identity",
                tmdb_id: "2501",
                is_correct: true
            },
            {
                id: "4",
                text: "Salt",
                is_correct: false
            }
        ]
    },
    {
        video_id: "OoPRfITCS2M",
        answers: [
            {
                id: "1",
                text: "A Quiet Place",
                is_correct: false
            },
            {
                id: "2",
                text: "Get Out",
                is_correct: false
            },
            {
                id: "3",
                text: "The Conjuring",
                is_correct: false
            },
            {
                id: "4",
                text: "Parasite",
                tmdb_id: "496243",
                is_correct: true
            }
        ]
    },
    {
        video_id: "-jAtHf9RA4w",
        answers: [
            {
                id: "1",
                text: "La La Land",
                is_correct: false
            },
            {
                id: "2",
                text: "Whiplash",
                tmdb_id: "244786",
                is_correct: true
            },
            {
                id: "3",
                text: "Black Swan",
                is_correct: false
            },
            {
                id: "4",
                text: "Birdman",
                is_correct: false
            }
        ]
    },
    {
        video_id: "DeumyOzKqgI",
        answers: [
            {
                id: "1",
                text: "Casino Royale",
                is_correct: false
            },
            {
                id: "2",
                text: "Skyfall",
                tmdb_id: "37724",
                is_correct: true
            },
            {
                id: "3",
                text: "Spectre",
                is_correct: false
            },
            {
                id: "4",
                text: "No Time to Die",
                is_correct: false
            }
        ]
    },
    {
        video_id: "4sCXkpZsBRg",
        answers: [
            {
                id: "1",
                text: "Mad Max: Fury Road",
                tmdb_id: "76341",
                is_correct: true
            },
            {
                id: "2",
                text: "Fury",
                is_correct: false
            },
            {
                id: "3",
                text: "The Road Warrior",
                is_correct: false
            },
            {
                id: "4",
                text: "Waterworld",
                is_correct: false
            }
        ]
    },
    {
        video_id: "x5faT66jmG4",
        answers: [
            {
                id: "1",
                text: "The Social Network",
                tmdb_id: "37799",
                is_correct: true
            },
            {
                id: "2",
                text: "Steve Jobs",
                is_correct: false
            },
            {
                id: "3",
                text: "The Internship",
                is_correct: false
            },
            {
                id: "4",
                text: "Moneyball",
                is_correct: false
            }
        ]
    },
    {
        video_id: "_D0ZQPqeJkk",  // Star Wars Main Theme
        answers: [
            {
                id: "1",
                text: "2001: A Space Odyssey",
                is_correct: false
            },
            {
                id: "2",
                text: "Star Wars: A New Hope",
                tmdb_id: "11",
                is_correct: true
            },
            {
                id: "3",
                text: "Star Trek: The Motion Picture",
                is_correct: false
            },
            {
                id: "4",
                text: "Guardians of the Galaxy",
                is_correct: false
            }
        ]
    },
    {
        video_id: "6D1nK7q2i8I",  // James Bond Theme
        answers: [
            {
                id: "1",
                text: "Goldfinger",
                tmdb_id: "658",
                is_correct: true
            },
            {
                id: "2",
                text: "The Man from U.N.C.L.E.",
                is_correct: false
            },
            {
                id: "3",
                text: "Kingsman: The Secret Service",
                is_correct: false
            },
            {
                id: "4",
                text: "Mission: Impossible",
                is_correct: false
            }
        ]
    },
    {
        video_id: "KPhqU--Mq1A",  // Rocky Theme
        answers: [
            {
                id: "1",
                text: "Rocky",
                tmdb_id: "1366",
                is_correct: true
            },
            {
                id: "2",
                text: "Raging Bull",
                is_correct: false
            },
            {
                id: "3",
                text: "The Fighter",
                is_correct: false
            },
            {
                id: "4",
                text: "Creed",
                is_correct: false
            }
        ]
    },
    {
        video_id: "-bTpp8PQSog",  // Indiana Jones Theme
        answers: [
            {
                id: "1",
                text: "Indiana Jones and the Raiders of the Lost Ark",
                tmdb_id: "85",
                is_correct: true
            },
            {
                id: "2",
                text: "The Mummy",
                is_correct: false
            },
            {
                id: "3",
                text: "National Treasure",
                is_correct: false
            },
            {
                id: "4",
                text: "Tomb Raider",
                is_correct: false
            }
        ]
    },
    {
        video_id: "a1rq6NoddX0",  // Jurassic Park Theme
        answers: [
            {
                id: "1",
                text: "Jurassic Park",
                is_correct: false
            },
            {
                id: "2",
                text: "King Kong",
                is_correct: false
            },
            {
                id: "3",
                text: "Godzilla",
                is_correct: false
            },
            {
                id: "4",
                text: "Planet of the Apes",
                tmdb_id: "871",
                is_correct: true
            }
        ]
    },
    {
        video_id: "rdB13lFexNk",  // Pirates of the Caribbean Theme
        answers: [
            {
                id: "1",
                text: "Pirates of the Caribbean: The Curse of the Black Pearl",
                tmdb_id: "22",
                is_correct: true
            },
            {
                id: "2",
                text: "Master and Commander",
                is_correct: false
            },
            {
                id: "3",
                text: "Hook",
                is_correct: false
            },
            {
                id: "4",
                text: "Treasure Planet",
                is_correct: false
            }
        ]
    },
    {
        video_id: "wtHra9tFISY",  // Harry Potter Theme
        answers: [
            {
                id: "1",
                text: "Fantastic Beasts and Where to Find Them",
                is_correct: false
            },
            {
                id: "2",
                text: "The Chronicles of Narnia",
                is_correct: false
            },
            {
                id: "3",
                text: "The Lord of the Rings",
                is_correct: false
            },
            {
                id: "4",
                text: "Harry Potter and the Philosopher's Stone",
                tmdb_id: "671",
                is_correct: true
            }
        ]
    },
    {
        video_id: "XAYhNHhxN0A",  // Mission Impossible Theme
        answers: [
            {
                id: "1",
                text: "The Bourne Identity",
                is_correct: false
            },
            {
                id: "2",
                text: "Mission: Impossible",
                tmdb_id: "954",
                is_correct: true
            },
            {
                id: "3",
                text: "James Bond: GoldenEye",
                is_correct: false
            },
            {
                id: "4",
                text: "Kingsman: The Secret Service",
                is_correct: false
            }
        ]
    },
    {
        video_id: "F2RnxZnubCM",  // Titanic Theme
        answers: [
            {
                id: "1",
                text: "Titanic",
                tmdb_id: "597",
                is_correct: true
            },
            {
                id: "2",
                text: "Pearl Harbor",
                is_correct: false
            },
            {
                id: "3",
                text: "The Notebook",
                is_correct: false
            },
            {
                id: "4",
                text: "A Night to Remember",
                is_correct: false
            }
        ]
    },
    {
        video_id: "9NMr0paWUCQ",  // The Good, the Bad and the Ugly Theme
        answers: [
            {
                id: "1",
                text: "The Good, the Bad and the Ugly",
                tmdb_id: "429",
                is_correct: true
            },
            {
                id: "2",
                text: "Once Upon a Time in the West",
                is_correct: false
            },
            {
                id: "3",
                text: "High Noon",
                is_correct: false
            },
            {
                id: "4",
                text: "True Grit",
                is_correct: false
            }
        ]
    },
    {
        video_id: "TaV1r341wYk",  // Ghostbusters Theme
        answers: [
            {
                id: "1",
                text: "Beetlejuice",
                is_correct: false
            },
            {
                id: "2",
                text: "Men in Black",
                is_correct: false
            },
            {
                id: "3",
                text: "Ghostbusters",
                tmdb_id: "620",
                is_correct: true
            },
            {
                id: "4",
                text: "The Addams Family",
                is_correct: false
            }
        ]
    },
    {
        video_id: "w4OdIOGBW2Q",  // Superman Theme
        answers: [
            {
                id: "1",
                text: "Man of Steal",
                tmdb_id: "49521",
                is_correct: true
            },
            {
                id: "2",
                text: "Batman",
                is_correct: false
            },
            {
                id: "3",
                text: "The Avengers",
                is_correct: false
            },
            {
                id: "4",
                text: "Wonder Woman",
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

        // Insert questions
        await Question.insertMany(sampleQuestions);
        console.log('Inserted questions');

        console.log('Seed completed successfully');
        process.exit(0);
    } catch (error) {
        console.error('Seed failed:', error);
        process.exit(1);
    }
}

seed(); 