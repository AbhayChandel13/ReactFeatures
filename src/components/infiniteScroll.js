import axios from "axios";
import { useEffect, useState } from "react";

export default function InfiniteScroll() {
  let currentOffset = 0;
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState(10);

  const loadTenPokemon = () => {
    const tenPokemon = [];
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_offset=${currentOffset}`
      )
      .then(({ data }) => {
        data.forEach((p) => tenPokemon.push(p.title));
        setPokemon((pokemon) => [...pokemon, ...tenPokemon]);
      });
    currentOffset += 10;
  };
  console.log(pokemon);
  const handleScroll = (e) => {
    // console.log(e.target.documentElement.scrollTop);
    // console.log(window.innerHeight);
    // console.log(e.target.documentElement.scrollHeight);
    // console.log(
    //   Math.ceil(e.target.documentElement.scrollTop + window.innerHeight)
    // );
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      loadTenPokemon();
    }
  };

  useEffect(() => {
    loadTenPokemon();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="flex
      flex-col items-center
      justify-center min-h-screen py-2
    bg-gray-900 text-gray-200"
    >
      <div className="flex flex-col text-4xl font-bold items-center justify-center w-full px-20 text-center">
        {pokemon.map((p, i) => {
          return (
            <div
              key={i}
              className="border w-80 h-40 flex justify-around place-items-center"
            >
              <div>{i + 1}.</div>
              <div>{p}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
