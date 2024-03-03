import { FC, ReactNode } from "react";
import { Button } from "./ui/button"

interface GoogleSignInButtonProps{
    children: ReactNode;
}

const GoogleSignInButton:FC<GoogleSignInButtonProps> = ({children}) =>{
    const loginWithGoogle = () => console.log('Login with Google');

  return (
      <Button onClick={loginWithGoogle} className="w-full">{children}</Button>

  );
};

export default GoogleSignInButton
