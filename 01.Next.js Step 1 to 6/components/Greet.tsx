import { useRouter } from "next/router";
import type { NextComponentType, NextPageContext } from "next";

interface Props { }

const Greet: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  const { query } = useRouter();
  console.log(query);
  return <h1>Hello {query.name}!</h1>;
};

export default Greet;