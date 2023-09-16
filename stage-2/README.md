# Movie Discovery Web Application

This project is a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. The application consumes data from the TMDB API.

## Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd movie-discovery-app
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the project root and add your TMDB API key:

   ```plaintext
   REACT_APP_TMDB_API_KEY=YOUR_TMDB_API_KEY
   ```

4. Start the development server:

   ```bash
   pnpm run dev
   ```

   The application will be accessible at <http://localhost:3000>.

## Project Structure

- `src/components`: Contains React components for the application.
- `src/api.js`: Configures Axios for making API requests to the TMDB API.
- `src/App.js`: Defines the main application component and routes using React Router.
- `public`: Contains the HTML template and other public assets.

## Features

- **Homepage**: Displays the top 10 movies in a grid layout with movie posters, titles, and release dates.
- **Search**: Allows users to search for movies by title and displays search results in real-time.
- **Movie Details**: Displays detailed information about a selected movie.

## Built With

- ReactJS: A JavaScript library for building user interfaces.
- Tailwind: A CSS library for building UI
- Axios: A promise-based HTTP client for making requests.

## Author

- [Bright Odohofre](https://github.com/Odohofre)
