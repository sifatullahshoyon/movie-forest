import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Movie from "./Movie";

const Movies = () => {
  const movies = useLoaderData();
  const [sliceData, setSliceData] = useState(false);
  const itemToShowAll = sliceData ? movies : movies.slice(0, 9);
  const handleSeeMoreBtn = () => {
    setSliceData(true);
  };
  const handleSeeLessBtn = () => {
    setSliceData(!true);
  };
  return (
    <div>
      <div className="grid-container">
        {itemToShowAll?.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="text-center mb-5">
        {!sliceData && (
          <button
            id="seeMore-btn"
            onClick={handleSeeMoreBtn}
            className="btn btn-primary visible"
          >
            See More
          </button>
        )}
        {sliceData && (
          <button onClick={handleSeeLessBtn} className="btn btn-primary">
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Movies;
