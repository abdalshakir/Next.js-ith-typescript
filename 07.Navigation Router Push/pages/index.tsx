import type { NextPage } from "next";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1>This is the Home page</h1>
    </div>
  );
};

export default Home;
