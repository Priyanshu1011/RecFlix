"use client";

import { useState } from "react";
import { movies } from "@/data/movies";
import MovieRecoCard from "@/components/Movies/MovieRecoCard";
import Router from "next/router";

const Movies = () => {
  const [name, setName] = useState("");
  const [moviesList, setMoviesList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/movies", {
        method: "POST",
        body: JSON.stringify({ "movie_name": name }),
      });

      // const response = await fetch("/api/movies", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ name }),
      // });

      if (response.ok) {
        console.log("Name submitted successfully!");
        // Router.push("/"); // goes to Home page

        // Update state variable "movies" with data in array "response"
        setMoviesList([...moviesList, response]);

      } else {
        console.error("Failed to submit name!");
      }
    } catch (error) {
      console.error("Error submitting name: ", error);
    }
  };

  return (
    <section className="flex flex-col justify-around items-center text-center gap-y-10 mt-10 mb-6">
      <h1 className="text-3xl font-bold">Movie Recommendations</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter   a   Movie   Name"
            className="px-10 py-2 border-2 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* <input
            type="submit"
            value={"Search"}
            className="ml-4 rounded-lg backdrop-blur-sm px-4 py-2 border-2 card_bg hover:cursor-pointer"
          /> */}
          <button
            type="submit"
            className="ml-4 rounded-lg backdrop-blur-sm px-4 py-2 border-2 card_bg hover:cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-row justify-center items-center flex-wrap gap-y-8 md:gap-x-8 lg:gap-x-14 lg:gap-y-0">
        {moviesList.map((movie) => (
          <MovieRecoCard
            key={movie.key}
            title={movie.title}
            yearOfRelease={movie.yearOfRelease}
            genre={movie.genre}
          />
        ))}
        {/* {movies.map((movie) => (
          <MovieRecoCard
            key={movie.key}
            title={movie.title}
            yearOfRelease={movie.yearOfRelease}
            genre={movie.genre}
          />
        ))} */}
      </div>
    </section>
  );
};

export default Movies;
