import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const LoginPage: NextPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (loggedIn) {
      router.push('/private');
    }
  }, [loggedIn]);
  return (
    <div>
      <h3>This is a Login Page</h3>
      <button onClick={() => setLoggedIn(true)}>LogIn</button>
    </div>
  )
}

export default LoginPage;