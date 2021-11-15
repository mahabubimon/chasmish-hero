import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { ImBin } from "react-icons/im";

const ManageGlasses = () => {
  const [allGlasses, setAllGlasses] = useState([]);
  useEffect(() => {
    axios
      .get("https://chasmish-hero.herokuapp.com/glasses")
      .then((res) => {
        setAllGlasses(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteGlass = (id) => {
    const proceed = window.confirm("Are you want to delete?");
    if (proceed) {
      const url = `https://chasmish-hero.herokuapp.com/glasses/${id}`;
      axios
        .delete(url)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const remainingAllGlasses = allGlasses.filter(
              (glass) => glass._id !== id
            );
            setAllGlasses(remainingAllGlasses);
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  };
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allGlasses?.map((glass) => (
            <tr key={glass._id}>
              <td>{glass.title}</td>
              <td>
                <img src={glass.image} className="w-25" alt="" />
              </td>
              <td>${glass.price}</td>
              <td>
                <Button onClick={() => deleteGlass(glass._id)}>
                  <ImBin />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageGlasses;
