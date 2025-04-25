import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TodayPage from './pages/TodayPage';
import MealsPage from './pages/MealsPage';
import MealPage from './pages/MealPage';
import SuggestedMealsPage from './pages/SuggestedMealsPage';
import Header from './components/Header';
import ProfileSwitcher from './components/ProfileSwitcher';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4 space-y-4">
        <div className="flex justify-between items-center">
          <Header />
          <ProfileSwitcher />
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/today" replace />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/meals" element={<MealsPage />} />
          <Route path="/meals/:mealId" element={<MealPage />} />
          <Route path="/suggested" element={<SuggestedMealsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;