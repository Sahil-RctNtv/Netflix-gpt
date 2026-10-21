import Header from './Header';
import useNowPlaying from '../hooks/useNowPlaying';
import MainComponent from './MainComponent';
import SecondaryComponent from './SecondaryComponent';

const Browse = () => {
    useNowPlaying();
    return (
        <div>
            <Header />
            <MainComponent />
            <SecondaryComponent />
        </div>
    )
}

export default Browse;