import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;

  p {
    font-size: 2vw;
    font-weight: 600;
    opacity: 0.5;
    margin-top: 10vh;
  }

  .text-area {
    position: absolute;
    opacity: 0.2;
    width: 100%;
    font-weight: 800;
    left: 15%;
    top: 30%;

    h1 {
      font-size: 7vw;
    }

    h2 {
      margin-left: 10vw;
      font-size: 7vw;
    }
  }

  .text-area-hover {
    position: absolute;
    opacity: 1;
    left: 15%;
    top: 30%;

    h1 {
      font-size: 7vw;
      width: 0%;
      text-wrap: nowrap;
      overflow: hidden;
    }

    h2 {
      margin-left: 10vw;
      font-size: 7vw;
      width: 0%;
      text-wrap: nowrap;
      overflow: hidden;
    }
  }
`;
