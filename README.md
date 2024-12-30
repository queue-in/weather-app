# Weather App

A simple weather app built with React and Vite, using the OpenWeather API. The app allows users to search for weather data by city, view real-time weather details, customize the background color, save multiple locations, and switch between them to view weather updates.

## Features

### Version 2 Upgrades:
- **Search Weather by City**: Users can search for weather data by entering a city name and view real-time data including:
  - Temperature
  - Wind Speed
  - Precipitation
- **Customize Background Color**: Users can select a background color for the app using a color picker.
- **Save Multiple Locations**: Users can save multiple locations and quickly switch between them to view weather information for each.
- **Save Data in Browser Memory**: Locations and background color preferences are saved in the browser's local storage for persistence across sessions.

### Version 1:
- Display weather data such as temperature, wind speed, and precipitation.
- Search for weather by city.

## Technologies Used

- **Frontend**: React, Vite
- **Weather API**: OpenWeather API
- **State Management**: React `useState` and `useEffect` hooks
- **Browser Storage**: Local Storage for saving user preferences (saved locations, background color)

## Setup and Installation

### Prerequisites
Make sure you have the following installed:
- **Node.js** (version 14 or later)
- **npm** (Node package manager)

### Clone the repository
```bash
git clone https://github.com/queue-in/weather-app.git
cd weather-app

