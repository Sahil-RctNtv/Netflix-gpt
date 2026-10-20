import { useState } from 'react';
import Header from './Header';
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toogleSignInForm = (e) => {
        e.preventDefault();
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div className="relative">
            <Header />
            <div className="absolute w-full h-screen object-cover bg-center bg-no-repeat">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6e4b7575-5e77-4cbc-b380-6b57b4cb2652/web/IN-en-20261012-TRIFECTA-perspective_df4c506a-8fba-4611-95c0-3190bfc683ca_large.jpg"
                alt="Netflix-background" />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80"
            >
                <h1 className="text-4xl font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input 
                    className="px-4 py-2 my-4 bg-gray-700 rounded-md outline-none " 
                    type="text" 
                    placeholder="UserName" 
                    />)}
                <input 
                    className="px-4 py-2 my-4 bg-gray-700 rounded-md outline-none " 
                    type="email" 
                    placeholder="Email or phone number" 
                    />
                <input 
                    className="px-4 py-2 my-4 bg-gray-700 rounded-md outline-none" 
                    type="password" 
                    placeholder="Password" />
                <button 
                    className="px-4 py-2 my-4 bg-red-700 rounded" 
                    type="submit">
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