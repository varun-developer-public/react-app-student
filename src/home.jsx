import React, { useReducer, useState } from "react";
import Card from "./components/card/card";
import image1 from './assets/image/image1.jpg'
import image2 from './assets/image/image2.jpg'
import image3 from './assets/image/image3.jpg'
import image4 from './assets/image/image4.jpg'
function Home() {
  return (
    <>
      <div style={{ display: "flex", gap: "50px", justifyContent: "center" }}>
        <Card name="Card 1" linkText="read more" image={image1} />
        <Card name="Card 2" linkText="read more" image={image3}/>
        <Card name="Card 3" linkText="See all deals" image={image2}/>
        <Card name="Card 4" linkText="explore all" image={image4}/>
      </div>
    </>
  );
}

export default Home;
