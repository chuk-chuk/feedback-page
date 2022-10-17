import React, { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="mb-4">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`cursor-pointer ${
              index <= rating ? "text-yellow-500" : "text-gray-400"
            }`}
            onClick={() => setRating(index)}
          >
            <span>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;
