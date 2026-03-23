# moviQ

**moviQ** is a fullstack mobile app for discovering trending movies and TV series  built with React Native, Expo, NativeWind, and TypeScript.

---

## Features

### Loader Screen

- Automatically checks if a user session exists on app launch
- Redirects to the appropriate screen based on auth state

### Welcome Screen

- Entry point for new or unauthenticated users
- Choose to continue as a **Guest** or sign in / register via the auth system

### Movies Screen

- Browse movies with filter tabs: *Popular* · *Now Playing* · *Upcoming* · *Top Rated*

### TV Screen

- Browse TV series with filter tabs: *Popular* · *Airing Today* · *On the Air* · *Top Rated*

### Authentication

- Sign up / Login with secure auth powered by **Appwrite**
- Protected routes for authenticated users

### Home Tab

- **Trending** section with filter options: *Today* and *This Week*
- **Now Playing** (Movies) and **On the Air** (TV Series) sections
- Each section displays 5 items with: Poster · Name · Rating · Genres · Overview
- Tap any title to navigate to its detail page
- Bookmark any movie or series (requires login)

### Search Tab

- Search bar to find any movie or series
- Tap a poster to view full details

### Watchlist Tab *(Protected)*

- View all your bookmarked movies and series
- Requires user authentication to access

### Profile Tab *(Protected)*

- Displays your name and email
- Update your **name**, **email**, or **password** directly from the app

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React Native + Expo |
| Language | TypeScript |
| Styling | NativeWind (Tailwind CSS for RN) |
| Auth & Database | Appwrite |
| Forms | react-hook-form + Yup |
| Video | react-native-youtube-iframe |
| Icons | @expo/vector-icons |
| Fonts | @expo-google-fonts/poppins |
| Notifications | react-native-toast-message |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- An [Appwrite](https://appwrite.io/) project set up with auth and database enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/moviq.git
cd moviq

# Install dependencies
npm install

# Start the development server
npx expo start
```

### Environment Variables

Create a `.env` file in the root directory and add your Appwrite credentials:

```env
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
EXPO_PUBLIC_APPWRITE_PROJECT_NAME=your_project_name
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
EXPO_PUBLIC_API_KEY=your_tmdb_key
```

---

## Project Structure

```
 moviQ/
    ├── app/
    │   └── (auth)/
    │       ├── _layout
    │       ├── login
    │       └── register
    ├── assets/
    │   └── images
    ├── components
    ├── hooks
    ├── services/
    │   └── api
    ├── types
    ├── utils
    ├── .gitignore
    ├── app.json
    └── tailwind.config.json
```
