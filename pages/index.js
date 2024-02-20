import Link from "next/link";
import { styled, useStyletron } from "styletron-react";

// statically styled component
const Title = styled("h1", {
  color: "red",
  fontSize: "82px",
});

// dynamically styled component
const SubTitle = styled("h2", ({ $size }) => ({
  color: "blue",
  fontSize: `${$size}px`,
}));

const Home = () => {
  const [css] = useStyletron();
  return (
    <div>
      <Title>Shoes by Andrea</Title>
      <SubTitle $size={50}>This site has a lot of different types of shoes</SubTitle>
      <Link href="/shoes">Check out all my shoes</Link>
    </div>
  );
}

export default Home;
