import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 356vh;
  background-color: #ebebeb;

  .rounded-div-wrapper-6 {
    /* background-color: saddlebrown; */
    position: relative;
    width: 100%;
    height: 100px;
    overflow: hidden;
    /* margin-top: 100px; */
    z-index: 1;

    .rounded-div-6 {
      /* background-color: darkblue; */
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 150%;
      height: 750%;
      border-radius: 50%;
      background-color: #fff;
      transform: translate(-50%);
    }
  }

  .brand-part-6 {
    .top-brand-part-6 {
      display: flex;
      align-items: center;
      margin-top: 6.5vh;
      width: 100%;
      height: 50vh;
      border-top: 1px solid #d3d3d3;
      border-bottom: 1px solid #d3d3d3;

      
      .lft-top-6 {
        width: 50%;
        padding-left: 5vw;
        
         

          
          }
          

      .rght-top-6 {
        width: 50%;
        
        h1 {
          font-size: 5vw;
          
        }
      }
    }

    .avatares{
          margin:auto;
          width: 300px;
          height: 300px;
          border-radius:50%;

          }

    .btm-brand-part-6 {
      width: 100%;
      display: flex;

      .lft-btm-6 {
        width: 50%;
      }

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

    position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
      .rght-btm-6 {
        height: 60vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 5vh;
        width: 50%;

        h2 {
          font-size: 2vw;
        }

        p {
          font-size: 1.5vw;
          color: #919191;
          line-height: 5vh;
        }
      }
    }
  }
`;
