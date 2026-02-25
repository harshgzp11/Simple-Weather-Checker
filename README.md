# Simple Weather Checker

## About the Project
This is a simple Weather Checker web application built using React and Vite.  
The goal of this project was to practice core React concepts like state management, hooks, and working with external APIs.

The app allows users to search for live weather data of any city, switch between temperature units, and view their recent search history. All dynamic updates happen instantly without reloading the page.

---

## Problem Statement
Checking live weather and remembering recently searched cities can be tedious.  
This project solves that problem by providing a fast, responsive, and easy-to-use weather dashboard that fetches real-time data using the OpenWeather API.

---

## Features
- Automatically loads default weather data on startup
- Fetch real-time weather data (temperature and current conditions)
- Instantly toggle between Celsius (°C) and Fahrenheit (°F)
- Maintain a history of the last 10 searched cities as clickable buttons
- Prevent duplicate cities from being added to the search history
- Show responsive weather icons and handle invalid city names gracefully

---

## Concepts Used
- React Hooks (useState for state management, useEffect for component lifecycle)
- Preventing infinite loops with dependency arrays
- Fetching and handling asynchronous API data (fetch)
- Dynamic list rendering using JavaScript .map() and unique keys
- Preventing duplicate array entries using the .includes() method
- Centering UI elements perfectly using CSS Flexbox

---

## Technologies Used
- React.js
- Vite (Build Tool)
- Vanilla CSS3
- OpenWeatherMap API

---

## How to Run

1. Download or clone the repository:
   git clone https://github.com/harshgzp11/Simple-Weather-Checker.git

2. Open the project folder in your terminal:
   cd Simple-Weather-Checker

3. Install the required dependencies:
   npm install

4. Start the development server:
   npm run dev

5. Open the provided localhost link in your web browser.

---

## Limitations
- Requires an active internet connection to fetch API data
- Search history is only maintained for the current session (resets on reload)
- Relies on a free-tier API which may have daily request limits

---

## Author
Harsh Srivastava
10182
Batch of 2029
