import { ReactComponent as PlayIcon } from "../Svg/Play.svg";
import { ReactComponent as InfoIcon } from "../Svg/Info.svg";
const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[25%] px-20 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/3">{overview}</p>
            <div className="flex gap-2">
                <button className="bg-white text-black py-2 px-4 text-lg rounded-sm flex items-center gap-1 hover:bg-opacity-80 transition-all duration-300">
                    <PlayIcon className="w-6 h-6" />
                    Play
                </button>
                <button className=" bg-gray-400 opacity-80 mx-2 text-white py-2 px-4 text-lg rounded-sm flex items-center gap-1 hover:bg-opacity-80 transition-all duration-300">
                    <InfoIcon className="w-6 h-6" />
                    More Info
                    </button>
            </div>
        </div>
    );
};
export default VideoTitle;