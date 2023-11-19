import React from "react";

const Movie = ({ movie }) => {
  const { id, title, image, details, price } = movie;
  return (
    <div>
      <div className="card h-[580px] bg-base-100 shadow-xl">
        <figure>
          <img
            src={image ? image : "Image Not Found"}
            className="object-cover h-96 mt-3"
            alt="Movies Poster"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {title ? title : "Not Found"}</h2>
          <p>
            <span className="font-semibold">Price</span> : $
            {price ? price : "00"}
          </p>
          <p>
            <span className="font-semibold">Details</span> :{" "}
            {details.summary ? details.summary.substring(0, 45) : "Not Found"}
            ....
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </span>{" "}
              Buy Ticket
            </button>
            <button className="btn btn-accent">More Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
