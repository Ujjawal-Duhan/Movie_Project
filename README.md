A responsive React application that allows users to search movies using the OMDb API, view details, and manage a personal watchlist.

🚀 Features:

✅ Search movies using OMDb API (on Enter key or Search button)

✅ Display up to 10 search results with poster, title, and year

✅ Add movies to a personal watchlist with duplicate prevention

✅ Watchlist items can be reordered (⬆️ ⬇️)

✅ Watchlist persists in browser localStorage

✅ View full movie details (plot, actors, ratings) in a modal

✅ Toggle between Dark and Light mode

✅ Responsive layout (mobile-first, two columns on desktop)

✅ Shows an error message if no movies found for a query


🖇️ Tech Stack:

React 18+

Vite


Functional components & Hooks (useState, useEffect)

PropTypes for type safety

CSS with variables for dark mode

OMDb API (https://www.omdbapi.com/)


📐 Folder Structure:

src/

├── App.jsx

├── main.jsx

├── components/

│   ├── SearchBar.jsx

│   ├── MovieList.jsx

│   ├── MovieCard.jsx

│   ├── Watchlist.jsx

│   └── MovieDetailsModal.jsx

├── styles/

│   └── App.css


📥 Setup & Run Locally

1️⃣ Clone the repository:
git clone https://github.com/Ujjawal-Duhan/Movie_Project.git

cd Movie_Project

2️⃣ Install dependencies:
npm install

3️⃣ Run the development server:
npm run dev

4️⃣ Open in your browser:
http://localhost:5173/

🧑‍💻 How I Approached It:

✅ Designed a clean, mobile-first responsive layout with a two-column desktop view.

✅ Used a modular React folder structure for scalability.

✅ Built a controlled SearchBar component, connected to OMDb API, with error handling for invalid or no results.

✅ Created reusable MovieCard components to display search results, with graceful fallbacks for missing posters.

✅ Implemented a Watchlist component, preventing duplicates and persisting using localStorage.

✅ Added user-friendly features:


Reorder watchlist with ⬆️ ⬇️ buttons

Dark mode toggle using CSS variables

Modal to show detailed movie info fetched by imdbID

✅ Ensured prop type safety using PropTypes.

✅ Verified functionality against assignment PDF checklist and added stretch goals.

✅ Dark mode toggle

✅ Modal for movie details

✅ Reorderable watchlist items

✅ Error message for invalid searches

🔷 Notes

📌 You’ll need a free OMDb API key.

Get one here: https://www.omdbapi.com/apikey.aspx

Replace YOUR_REAL_KEY in SearchBar.jsx and MovieDetailsModal.jsx with your API key.


📄 Author:

👤 Ujjawal Duhan

📧 ujjawalduhan01@gmail.com

🌐 https://github.com/Ujjawal-Duhan

