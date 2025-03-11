# Film Blind Test API 🎬

A RESTful API for a movie blind test game where users can test their film knowledge through interactive quizzes.

## Features ✨

- User authentication (register/login) with JWT
- Random movie questions from predefined categories
- Score tracking and leaderboard system
- Integration with TMDB (The Movie Database) API
- RESTful API endpoints for game interaction

## Tech Stack 🛠️

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **External API**: TMDB (The Movie Database)

## Prerequisites 📋

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- TMDB API key

## Installation 🚀

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/film-blind-test-api.git
   cd film-blind-test-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your configuration:
   - Set your MongoDB URI
   - Add your TMDB API key
   - Configure JWT secret

4. **Seed the database**
   ```bash
   node scripts/seed.js
   ```

5. **Start the server**
   ```bash
   npm start
   ```

## API Endpoints 📡

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and receive JWT token

### Questions
- `GET /question` - Get a random question
- `GET /question/:id` - Get answer for specific question

### Scores
- `POST /scores/score` - Submit a score
- `GET /scores` - Get leaderboard

### User
- `GET /user` - Get user information

## Testing with Postman 🧪

### Submit a Score Example
1. Create a new POST request to `http://localhost:3000/scores/score`
2. Add headers:
   ```
   Authorization: Bearer your_access_token
   Content-Type: application/json
   ```
3. Add body:
   ```json
   {
       "score": 100
   }
   ```

## Environment Variables 🔐

Required environment variables in `.env`:
```
PORT=3000
NODE_ENV=development
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=24h
TMDB_API_KEY=your_tmdb_api_key
TMDB_API_URL=https://api.themoviedb.org/3
```

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
