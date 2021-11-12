import axios from "axios";
import { useEffect, useState } from "react";

const useGlass = (id) => {
  const [glass, setGlass] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/glasses/${id}`;
    axios
      .get(url)
      .then((res) => setGlass(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  return { glass };
};

export default useGlass;
