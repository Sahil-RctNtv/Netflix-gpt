import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constant";
import { addTrailerVideo } from "../Utils/MovieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!movieId) return;
        getMovieVideos();
    }, [movieId]);

    const getMovieVideos = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
        );
        const json = await data.json();
        const filterTrailers = json.results.filter(
            (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        const trailer = filterTrailers.length
            ? filterTrailers[0]
            : json.results.find((video) => video.site === "YouTube");

        if (!trailer?.key) return;
        dispatch(addTrailerVideo(trailer));
    };
}

export default useMovieTrailer;
