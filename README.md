# FUTURE_FS_02
# Recipe Sharing App

A full-stack Recipe Sharing app where users can share, browse, and save their favorite recipes. Built with **HTML**, **CSS**, **JavaScript**, **Node.js**, **Express.js**, and **Firebase**.

## Features

- **Recipe Upload**: Users can add recipes with title, description, ingredients, steps, and images.
- **Search & Filter**: Users can search and filter recipes based on cuisine or difficulty level.
- **Favorites**: Logged-in users can mark recipes as favorites for easy access.
- **Firebase Integration**: Recipes and images are stored in **Firebase Firestore** and **Firebase Storage**.

## Technologies Used

- **Frontend**:
  - HTML
  - CSS
  - JavaScript
- **Backend**:
  - Node.js
  - Express.js
- **Database**:
  - Firebase Firestore
  - Firebase Storage

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone this repository**:
   ```bash
   git clone https://github.com/your-username/recipe-sharing-app.git
2. **Navigate Navigate into the project directory**:
   ```bash
     cd recipe-sharing-app
3. **Install dependencies**:
   ```bash
      npm install
4. **Set up Firebase**:
   1) Create a Firebase project on Firebase Console.
   2) Add your Firebase credentials (API keys, project ID, etc.) into the .env file (or directly in firebase.js).
5. **Start the backend server**:
    ```bash
       npm start
6. **Open the app in your browser**:
     Go to http://localhost:3000 to see the app running.
## How It Works
1. **Frontend**: The frontend allows users to view, search, and upload recipes. It's built with HTML, CSS, and JavaScript.
2. **Backend**: The backend is powered by Node.js and Express.js. It handles API requests for adding and retrieving recipes.
3. **Firebase**: Firebase is used for storing recipe data and images. Firestore stores recipe details, while Firebase Storage handles image uploads.

## Conrtibution
Feel free to fork this repository, open issues, or create pull requests to contribute to this project. All contributions are welcome! 

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
1. **Firebase** for providing cloud database and storage solutions.
2. **Multer** for handling file uploads in Node.js.
3. **Express.js** for building the backend API.
