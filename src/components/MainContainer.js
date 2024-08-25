import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const moviesList = useSelector((store) => store.movies?.nowPlaying);
  if (!moviesList) return;
  const mainMovies = moviesList[0];

  return (
    <div>
      <VideoTitle title={mainMovies.title} overview={mainMovies.overview} />
      <VideoBackground moviesId={mainMovies.id} />
    </div>
  );
};

export default MainContainer;
