// import axios from "axios";
import React, { useEffect, useState } from "react";

const Glasses = () => {
  const [glasses, setGlasses] = useState([]);
  useEffect(() => {
    fetch("glasses.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGlasses(data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <section>
      <h1>This is Glasses section</h1>
      <ol>
        {glasses.map((glass) => (
          <li key={glass.title}>{glass.title}</li>
        ))}
      </ol>
    </section>
  );
};

export default Glasses;
