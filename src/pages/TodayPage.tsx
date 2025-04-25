import React from "react";
import { Link } from "react-router-dom";

export default function TodayPage() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">📅 Today: {today}</h1>
      <p className="text-lg text-gray-700">
        Welcome! What would you like to do today?
      </p>
      <div className="space-y-2">
        <Link
          to="/suggested"
          className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          🍽️ Get Meal Suggestions
        </Link>
        <Link
          to="/meals"
          className="block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          📖 View Meals
        </Link>
        <Link
          to="/log"
          className="block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          🔋 Log Energy
        </Link>
        <Link
          to="/history"
          className="block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          📊 View History
        </Link>
      </div>
    </div>
  );
}
