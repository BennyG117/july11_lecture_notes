import React from "react";
import { Link } from "react-router-dom";



const About = () => {
  return (
    <div>
        {/* a tags no longer work due to refresh, etc. */}
        {/* <a href="/">Back to Home</a> */}
      
      <Link to={"/"}>HOME</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        consequuntur quae magnam ullam quos omnis suscipit ratione recusandae
        vero aperiam reiciendis, iste dolore quas saepe sit, odit libero beatae
        sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        consequuntur quae magnam ullam quos omnis suscipit ratione recusandae
        vero aperiam reiciendis, iste dolore quas saepe sit, odit libero beatae
        sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        consequuntur quae magnam ullam quos omnis suscipit ratione recusandae
        vero aperiam reiciendis, iste dolore quas saepe sit, odit libero beatae
        sed.
      </p>
    </div>
  );
};

export default About;
