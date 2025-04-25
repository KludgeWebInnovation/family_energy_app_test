import React from "react";
import { Link } from "react-router-dom";

const dummyMeals = [
  { id: "curry", name: "Chickpea Curry" },
  { id: "stirfry", name: "Tofu Stir Fry" },
  { id: "pasta", name: "Lentil Pasta" },
];

export default function MealsPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">📖 Meal Options</h1>
      <ul className="space-y-2">
        {dummyMeals.map((meal) => (
          <li key={meal.id}>
            <Link
              to={`/meals/${meal.id}`}
              className="text-blue-600 hover:underline"
            >
              {meal.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/suggested"
        className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        🔮 Ask Claude for Suggestions
      </Link>
    </div>
  );
}
