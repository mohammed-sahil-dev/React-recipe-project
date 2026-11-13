import React from 'react';
import { Link } from 'react-router';

function RecipeCard({ recipe }) {

  const { id, prepTimeMinutes, cookTimeMinutes } = recipe
  const totalTime = prepTimeMinutes + cookTimeMinutes;


  return (
    <Link to={`/recipe/${id}`}
      className="group bg-card border border-border rounded-xl overflow-hidden flex flex-col shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent/50"
    >
      <div className="overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif font-bold text-lg leading-snug text-text mb-3 transition-colors group-hover:text-accent">
          {recipe.name}
        </h3>
        <p className="flex flex-wrap items-center gap-2 text-xs mb-4">
          <span className="rounded-full bg-accent/10 text-accent px-2.5 py-1 font-medium">{recipe.cuisine}</span>
          <span className="rounded-full bg-border/60 text-muted px-2.5 py-1 font-medium">{recipe.difficulty}</span>
        </p>
        <div className="mt-auto flex justify-between items-center text-sm border-t border-border pt-3">
          <span className="flex items-center gap-1 font-medium">
            <svg className="w-4 h-4 fill-accent" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {recipe.rating}
          </span>
          <span className="flex items-center gap-1 text-muted">
            <svg className="w-4 h-4 stroke-muted fill-none" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {totalTime} mins
          </span>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;