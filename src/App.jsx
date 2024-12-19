// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import CatalogPage from './pages/CatalogPage';
// import DetailsPage from './pages/DetailsPage';
// import Header from './components/Hero';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/catalog" element={<CatalogPage />} />
//         <Route path="/catalog/:id" element={<DetailsPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loader from "./components/Loader/Loader.jsx";
import Header from "./components/Header/Header.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const DetailsPage = lazy(() =>
  import("./pages/DetailsPage/DetailsPage.jsx")
);

const BookingForm = lazy(() =>
  import("./components/BookingForm/BookingForm.jsx")
);
const ReviewsSection = lazy(() =>
  import("./components/ReviewsSection/ReviewsSection.jsx")
);

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<DetailsPage />}>
              <Route path="features" element={<BookingForm />} />
              <Route path="reviews" element={<ReviewsSection />} />
            </Route>
            
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;