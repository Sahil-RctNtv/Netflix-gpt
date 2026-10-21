

export const ValidEmailPassword= (email, password, userName= null )=>{

    if(userName){
        if(userName.length < 3) return "User Name is not valid";
        const isUserNameValid = /^[a-zA-Z0-9]+$/.test(userName);
        if(!isUserNameValid) return "User Name is not valid";
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(!isEmailValid) return "Email is not valid";

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isPasswordValid) return "Password is not valid";

    return null;
}