import React from "react";
import Container from "./Appbar";
import ContainerBox from "./ContainerInfo/ContainerBox";

export default function App() {
  return (
    <>
      <div>
        <style jsx global>{`
          body {
            margin: 0px;
            padding: 0px; 
          }
        `}</style>
        <Container />
        <ContainerBox />
      </div>
    </>
  );
}
