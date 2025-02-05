# **Project Name: Lingo Bingo ✨**

## Live Website Link
[**https://lingo-bingo-siam.netlify.app/**](#)

## Requirement Document Link
[**https://docs.google.com/document/d/1uck_6gjiW22ytQMUEdznPxuxX4XB9wDz6fHJroTqCps/edit?tab=t.0**](#)

## Overview
**Lingo Bingo** is an interactive language learning application designed to help users expand their vocabulary and improve their communication skills in multiple languages. This application focuses on making vocabulary learning fun and engaging through an intuitive and easy-to-use interface. Users can learn new words, practice pronunciation, and track their progress with ease.

The app helps users overcome the common challenge of retaining vocabulary by providing personalized learning paths and interactive features. It's a perfect tool for language learners looking to improve their language skills at their own pace.

## React Fundamental Concepts Used
- **Components**: Building reusable components like `VocabularyCard` and `WordList`, which are essential for displaying vocabulary and related details.
- **State Management**: Using `useState` for managing user-specific data such as vocabulary list, favorite words, and progress tracking.
- **Effect Hook**: Utilizing `useEffect` to handle side effects such as data fetching from Firebase and updating the vocabulary list based on user interactions.
- **Routing**: Implementing `react-router-dom` for navigation between various components like the homepage, vocabulary list, and user profile page.
- **Props**: Passing data between components for user actions, such as adding new words to the vocabulary list or marking them as favorites.

## Firebase Integration
- **User Authentication**: Firebase Authentication is used to handle user logins, ensuring a secure experience. Users need to log in to access personalized vocabulary lists and track progress.
- **Firebase Database**: Firebase Firestore is utilized for storing user-specific data like vocabulary, progress, and preferences.
  
## Features of the Website
1. **User Login**: Users must log in to access the language learning dashboard and their personalized vocabulary list. Authentication is managed via Firebase.
2. **Interactive Vocabulary List**: Users can view and explore a list of vocabulary words in multiple languages, complete with pronunciations, meanings, and examples.
3. **Vocabulary Management**: Users can add words to their vocabulary list, mark words as favorites, and track their learning progress.
4. **Pronunciation Assistance**: The application includes a feature for listening to the correct pronunciation of each word, aiding users in improving their speaking skills.
5. **User Progress Tracking**: The app provides users with a way to track their vocabulary learning progress, ensuring they stay motivated.
6. **Responsive Design**: The application is built to be responsive, ensuring a smooth user experience across different devices and screen sizes.
7. **Search & Filter**: Users can search for specific words or filter vocabulary by categories, making it easier to organize their learning process.
8. **Vocabulary Categories**: The vocabulary list is categorized based on topics such as common phrases, business language, and travel, allowing users to learn words relevant to their interests.
9. **Flashcard Quiz**: Users can practice their vocabulary by using interactive flashcards that help reinforce their learning in a fun and engaging way.

## Data Handling and Management
This project utilizes:
- **Firebase Firestore**: For storing user-specific data, including vocabulary lists and progress information.
- **Firebase Authentication**: For user sign-in and registration, ensuring that each user’s data is securely managed and stored.
  
## Technologies Used
- **React**: For building the front-end components and managing the UI.
- **Firebase**: For user authentication and real-time database storage.
- **CSS (Tailwind CSS or Custom Styles)**: For styling and creating a responsive user interface.
- **react-router-dom**: For routing and handling navigation between pages.


