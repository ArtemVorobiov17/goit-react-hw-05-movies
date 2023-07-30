import { Route, Routes, Navigate } from "react-router-dom"; 
import { lazy } from "react";
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../../pages/Home.jsx'));
const Movie = lazy(() => import('../../pages/Movies.jsx'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails.jsx'));
const Cast = lazy(() => import('../Cast/Cast.jsx'));
const Review = lazy(() => import('../Review/Review.jsx'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
