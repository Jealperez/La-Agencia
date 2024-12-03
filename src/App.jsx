import React, { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { Wrap } from "./styles";
import { smooth } from "../utils/smooth";
import Nav from "../components/nav/Nav";
import Part1 from "../components/part1/Part1";
import Part2 from "../components/part2/Part2";
import Part3 from "../components/part3/Part3";
import Part4 from "../components/part4/Part4";
import Part5 from "../components/part5/Part5";
import Part6 from "../components/part6/Part6";
import Part7 from "../components/part7/Part7";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    smooth();
  });

  return (
    <>
      <Wrap>
        <Nav />
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <Part5 />
        <Part6 />
        <Part7 />
      </Wrap>
    </>
  );
};

export default App;
