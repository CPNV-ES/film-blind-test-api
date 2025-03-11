# API Routes Documentation

## Authentication Routes (`/auth`)

### 1. Register
- **Route:** `POST /auth/register`
- **Expected Input:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Returns:**
  ```json
  {
    "token": "string",
    "user": {
      "id": "string",
      "username": "string",
      "email": "string"
    }
  }
  ```

### 2. Login
- **Route:** `POST /auth/login`
- **Expected Input:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Returns:**
  ```json
  {
    "token": "string",
    "user": {
      "id": "string",
      "username": "string",
      "email": "string"
    }
  }
  ```

### 3. Logout
- **Route:** `POST /auth/logout`
- **Expected Input:** None (uses token from Authorization header)
- **Returns:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### 4. Refresh Token
- **Route:** `POST /auth/refresh`
- **Expected Input:** None (uses refresh token from cookies)
- **Returns:**
  ```json
  {
    "token": "string"
  }
  ```

## Question Routes (`/question`)
*All routes require authentication (Bearer token)*

### 1. Get Random Question
- **Route:** `GET /question`
- **Expected Input:** None
- **Returns:**
  ```json
  {
    "id": "string",
    "answers": [
      {
        "id": "string",
        "text": "string"
      }
    ]
  }
  ```

### 2. Get Question Answer
- **Route:** `GET /question/:id`
- **Expected Input:** Question ID in URL parameter
- **Returns:**
  ```json
  {
    "id": "string",
    "correct_answer": {
      "id": "string",
      "text": "string",
      "tmdb_id": "string",
      "is_correct": true
    },
    "film": {
      "title": "string",
      "description": "string",
      "image_url": "string",
      "rating": "number",
      "director": "string"
    }
  }
  ```

## User Routes (`/user`)
*All routes require authentication (Bearer token)*

### 1. Get User Info
- **Route:** `GET /user`
- **Expected Input:** None (uses token)
- **Returns:**
  ```json
  {
    "id": "string",
    "username": "string",
    "email": "string"
  }
  ```

### 2. Get User Scores
- **Route:** `GET /user/scores`
- **Expected Input:** None (uses token)
- **Returns:**
  ```json
  {
    "scores": [
      {
        "score": "number",
        "date": "string"
      }
    ]
  }
  ```

## Score Routes (`/scores`)
*All routes require authentication (Bearer token)*

### 1. Get Top Scores
- **Route:** `GET /scores`
- **Expected Input:** None
- **Returns:**
  ```json
  {
    "scores": [
      {
        "username": "string",
        "score": "number",
        "date": "string"
      }
    ]
  }
  ```

### 2. Add Score
- **Route:** `POST /scores/score`
- **Expected Input:**
  ```json
  {
    "score": "number"
  }
  ```
- **Returns:**
  ```json
  {
    "message": "Score added successfully",
    "score": {
      "score": "number",
      "date": "string"
    }
  }
  ```

## Error Responses

All routes may return the following error responses:

### 401 Unauthorized
```json
{
  "message": "Authentication required"
}
```

### 404 Not Found
```json
{
  "message": "Route not found"
}
```

### 500 Server Error
```json
{
  "message": "Something went wrong!",
  "error": "error message"
}
```

## Authentication
All authenticated routes require a Bearer token in the Authorization header:
```
Authorization: Bearer <token>
``` 