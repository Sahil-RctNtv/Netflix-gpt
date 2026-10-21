import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/MovieSlice";
import { API_OPTIONS } from "../Utils/Constant";


const useNowPlaying = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getNowPlayingMovies();
    },[])
    
    const getNowPlayingMovies = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?&page=1`,API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addNowPlayingMovies(json.results));
    };
}
export default useNowPlaying;




//some time in console log we can see api call 2 times, it is due to react strict mode, but happens only in local not in build, in build it happens only once
//it happens because react do extra rendering to check for inconsistencies between the calls/ rendering cycle