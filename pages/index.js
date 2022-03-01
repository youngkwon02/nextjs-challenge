import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "d93891c14273cc26118c7fcfe0f2725b";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      console.log(data);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home"></Seo>
      <h1>Hello</h1>
    </div>
  );
}
