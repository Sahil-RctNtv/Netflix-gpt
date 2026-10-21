import { signOut } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../Utils/UserSlice';
import { useDispatch } from 'react-redux';
import { LOGO_URL, USER_AVATAR } from '../Utils/Constant';
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user.user);


    useEffect(() => {
        // Auth listener must live inside a routed child (Header) so navigate works
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { displayName, email, uid } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                    })
                );
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });
        return () => unsubscribe();
    }, [dispatch, navigate]);


    const handleSignOut = () => {
        signOut(auth).then(()=>{
        }).catch((error)=>{
            navigate('/error');
        });
    }
    return (
        <div className="absolute w-full py-6 px-8 bg-gradient-to-b from-black to-transparent z-10">
            <div className="flex justify-between">
            <img 
            className="w-44 hover:scale-125 transition-all duration-300 "
            src= {LOGO_URL}
            alt="Netflix-logo" />

            {user && (<button className="flex items-center" onClick={handleSignOut}>
                <img src={USER_AVATAR}
                    alt="profile" 
                    className="w-10 h-10 rounded-sm hover:scale-125 transition-all duration-300" />
                </button>)}

            </div>
        </div >
    );
};

export default Header;