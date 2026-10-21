import { useState, useRef } from 'react';
import { ValidEmailPassword } from '../Utils/Validation';
import Header from './Header';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Utils/Firebase';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [error, setError] = useState(null);
    
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const userNameRef = useRef(null);

    const toogleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleSubmit = () => {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        const userName = !isSignInForm ? userNameRef.current?.value : null;
        const message = ValidEmailPassword(email, password, userName);
        setError(message);

        if (message) return;

        // Navigation is handled by onAuthStateChanged in Header
        if (isSignInForm) {
            signInWithEmailAndPassword(auth, email, password)
                .catch((error) => {
                    setError(error.code + ' : ' + error.message);
                });
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .catch((error) => {
                    setError(error.code + ' : ' + error.message);
                });
        }
    };
    return (
        <div className="relative min-h-screen bg-black">
            <Header />
            <div className="absolute inset-0">
                <img
                    className="h-full w-full object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/6e4b7575-5e77-4cbc-b380-6b57b4cb2652/web/IN-en-20261012-TRIFECTA-perspective_df4c506a-8fba-4611-95c0-3190bfc683ca_large.jpg"
                    alt="Netflix-background"
                />
            </div>
            <form 
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-3/12 absolute p-10 bg-black my-52 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80">
                <h1 className="text-4xl font-bold mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input 
                    ref={userNameRef}
                    className="px-4 py-2 my-4 bg-gray-700 rounded-md outline-none " 
                    type="text" 
                    placeholder="UserName" 
                    />)}
                <input 
                    ref={emailRef}
                    className="px-4 py-2 my-4 bg-gray-700 rounded-md outline-none " 
                    type="email" 
                    placeholder="Email or phone number" 
                    />
                <input 
                    ref={passwordRef}
                    className="px-4 py-2 my-4 bg-gray-700 rounded-md outline-none" 
                    type="password" 
                    placeholder="Password" />

                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button 
                    className="px-4 py-2 my-4 bg-red-700 rounded hover:bg-red-800 transition-all duration-300" 
                    type="submit"
                    onClick={handleSubmit}
                    >
                        {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="text-sm text-gray-400">
                    {isSignInForm ? "New to Netflix? " : "Already registered? "}
                    <span
                        className="text-white cursor-pointer hover:underline"
                        onClick={toogleSignInForm}
                    >
                        {isSignInForm ? "Sign up now." : "Sign in now."}
                    </span>
                </p>
            </form>


        </div>
    )
}

export default Login;