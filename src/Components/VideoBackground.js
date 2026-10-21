import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
    useMovieTrailer(id);
    const trailerVideo = useSelector((store) => store.movie.trailerVideo);

    // Mount iframe only after key exists — changing src later often skips autoplay
    if (!trailerVideo) return null;

    return (
        <div className="w-full">
            <iframe 
                className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&controls=0&rel=0"}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin">
                </iframe>     
        </div>
    );
};

export default VideoBackground;