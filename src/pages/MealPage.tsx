import React from "react";
import { useParams } from "react-router-dom";

export default function MealPage() {
  const { mealId } = useParams<{ mealId: string }>();
  const formattedMealName = mealId?.replace(/-/g, " ") || "Meal";

  const ingredients = ["onion", "garlic", "tomatoes", "chickpeas", "spinach"];
  const instructions = [
    "Chop all vegetables.",
    "Sauté onion and garlic until fragrant.",
    "Add tomatoes and chickpeas, cook for 10 minutes.",
    "Add spinach and simmer for 5 more minutes.",
    "Serve hot with rice or bread."
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold capitalize mb-4">{formattedMealName}</h1>

      <h2 className="text-lg font-semibold mt-4 mb-2">🧾 Ingredients</h2>
      <ul className="list-disc list-inside space-y-1">
        {ingredients.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">👨‍🍳 Instructions</h2>
      <ol className="list-decimal list-inside space-y-1">
        {instructions.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
