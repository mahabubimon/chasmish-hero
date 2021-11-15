import axios from "axios";
import { useEffect, useState } from "react";

const useGlasses = () => {
  const [glasses, setGlasses] = useState([]);
  useEffect(() => {
    axios
      .get("https://chasmish-hero.herokuapp.com/glasses")
      .then((glasses) => {
        setGlasses(glasses.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);
  return { glasses };
};

export default useGlasses;
