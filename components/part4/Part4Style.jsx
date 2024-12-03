import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;

  .lft-part-4 {
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 3vw;
    width: 50%;
    height: 100%;

    h1 {
      font-size: 8vw;
    }

    .cir-part-4 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 7vw;
      height: 7vw;
      background-color: #f4f4f4;
      border-radius: 50%;
    }
  }

  .rght-part-4 {
    display: flex;
    flex-direction: column;
    gap: 40vh;
    width: 50%;
    height: 200%;
    margin-top: 25%;
    padding-left: 8vw;

    .content-rght-part-4 {
      display: flex;
      flex-direction: column;
      gap: 5vh;
      opacity: 0;

      h1 {
        font-size: 2.5vw;
      }

      p {
        font-size: 1.5vw;
        width: 75%;
      }
    }
  }
`;
