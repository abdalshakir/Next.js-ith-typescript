import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps, GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.params;
  return {
    props: {
      name,
    },
  };
};

interface Props {
  name: String;
}

const NamePage: NextPage<Props> = (props: Props) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
};

export default NamePage;
