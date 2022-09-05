import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PrivateComponent from "../components/PrivateComponent";

const HomePage: NextPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setLoggedIn(false);
    if (!loggedIn) {
      router.push('/login');
    }
  }, [loggedIn]);
  return loggedIn ? <PrivateComponent /> : null;
}

export default HomePage;