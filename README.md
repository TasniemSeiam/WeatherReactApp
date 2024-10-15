# Weather App

This is a weather application built with **React**, **CSS**, and **Bootstrap**. It allows users to search for the current weather conditions of any city by entering the city's name. The app fetches data from the **OpenWeatherMap API** and displays information such as temperature, humidity, and weather description. The app is fully responsive and includes error handling for invalid city names.

## Features

- Search for weather information using a city name.
- Displays weather details such as temperature, humidity, wind speed, and description.
- Responsive design using **CSS** and **Bootstrap**.
- Error handling for invalid city names (e.g., "Sorry, City not found, please try again").

## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (LTS version recommended)
- **npm** (comes with Node.js)

## Getting Started

Follow these steps to run the application locally:

### 1. Clone the Repository

Clone the repository to your local machine using Git. Open your terminal and run:

```bash
git clone https://github.com/TasniemSeiam/WeatherReactApp.git
```
### 2.Navigate to the Project Directory
Move into the project directory:

```bash
cd weather-app
```

### 3. Install Dependencies
Once inside the project folder, install the necessary dependencies using npm:

```bash
npm install
```
This will install all the required packages including React and Bootstrap.

### 4.Run the Application
Now that everything is set up, start the development server:

```bash
npm start
```
The app should open automatically in your browser at `http://localhost:3000`.

## Usage

1. Enter the name of a city in the search bar.
2. Click the `search button` or press `Enter`.
3. The app will fetch weather data from OpenWeatherMap and display the current conditions.
4. If an invalid city name is entered, the app will display an error message (e.g., "Sorry, City not found, please try again").


## Technologies Used

- **React**: Front-end JavaScript library
- **CSS**: Custom styles for responsiveness
- **Bootstrap**: For styling and responsiveness
- **Axios**: For fetching weather data from the OpenWeatherMap API

## Error Handling

The application includes error handling for invalid city names. If a city is not found, the app will display an appropriate error message (e.g., "Sorry, City not found, please try again").
