import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 180vh;
  background-color: #fff;

  .top-part-3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0vw 3vw;
    position: absolute;
    top: -15vh;
    width: 100%;
    height: 15v;

    h4 {
      font-size: 1.5vw;
      opacity: 0.5;
    }

    .cta {
      display: flex;
      gap: 1vw;

      .cta-book {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #000;
        border-radius: 50px;
        padding: 1.5vw 3vw;
        cursor: pointer;

        &:hover h2:nth-child(1) {
          margin-top: -4vh;
        }

        .cta-text {
          height: 4vh;
          color: #fff;
          overflow: hidden;

          h2 {
            transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
          }
        }
      }

      .cta-book-2 {
        background-color: #d1d1d1;

        .cta-text {
          color: #000;
        }
      }
    }
  }

  .btm-part-3 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 180vh;
    background-color: #000;
  }
  
  .wrapper{
  width: 90% ;
  max-width: 1536px;
  padding-top: 20px;
  margin-inline:auto;
  position: relative;
  height: 100px;
  margin-top: 5rem;
  overflow: hidden;
  mask-image: linear-gradient(
  to right,
  rgba(0, 0, 0, 0),
  rgba(0, 0, 0, 1) 20%,
  rgba(0, 0, 0, 1) 80%,
  rgba(0, 0, 0, 0)
    );
  }

  @keyframes scrollLeft{
  to{
  left: -200px;
  }
  }

  .item{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  //background-color: red;
  border-radius: 6px;
  position: absolute;
  left: max( calc(200px * 8), 100%);
  animation-name: scrollLeft;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  font-size: 1vw;
  color: white;
  }

  .item1 {
  animation-delay: calc(30s/8 * (8 - 1) * -1)
  }

  .item2 {
  animation-delay: calc(30s/8 * (8 - 2) * -1)
  }
  .item3 {
  animation-delay: calc(30s/8 * (8 - 3) * -1)
  }
  .item4 {
  animation-delay: calc(30s/8 * (8 - 4) * -1)
  }
  .item5 {
  animation-delay: calc(30s/8 * (8 - 5) * -1)
  }
  .item6 {
  animation-delay: calc(30s/8 * (8 - 6) * -1)
  }
  .item7 {
  animation-delay: calc(30s/8 * (8 - 7) * -1)
  }
  .item8 {
  animation-delay: calc(30s/8 * (8 - 8) * -1)
  }
  


  .brand-part-6 {
    .top-brand-part-6 {
      display: flex;
      padding: 15vw 3vw ;
      align-items: center;
      margin-top: 5vh;
      width: 100%;
      height: 20vh;

      .lft-top-6 {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        

        h1 {
          color: #919191;
          font-size: 5vw;
        }
      }

      }
    }


    .btm-brand-part-6 {
      width: 100%;
      display: flex;

      .lft-btm-6 {
        width: 45%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        color: white;
        font-size: 5em;
        display: block;
        margin-bottom: 100px;
        
          
        }

        }

   @keyframes autoShowAnimation{
    from{
        opacity: 0;
        transform: translateY(200px) scale(0.3);
    }to{
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
.autoBLur{
    animation: autoBLurAnimation linear both;
    animation-timeline: view();
}
@keyframes autoBLurAnimation{
    0%{
        filter: blur(40px);
    }
    45%, 55%{
        filter: blur(0px);
    }
    100%{
        filter: blur(40px);
    }
}

.autoShow{
    animation: autoShowAnimation both;
    animation-timeline: view(70% 5%);
}
        
     

      .rght-btm-6 {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center
        gap: 5vh;
        width: 50%;

        p {
          font-size: 1.5vw;
          color: #919191;
        }
      }
    }
  }
`;
