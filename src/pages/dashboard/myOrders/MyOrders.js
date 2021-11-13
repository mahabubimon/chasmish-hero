import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { ImBin } from "react-icons/im";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { firebaseData } = useAuth();
  const { user } = firebaseData;

  useEffect(() => {
    axios
      .get("http://localhost:5000/orders")
      .then((res) => {
          const allOrders = res.data;

        const order = allOrders.filter(order => order.email === user.email);
        setMyOrders(order);
      })
      .catch((err) => console.log(err));
  }, [user.email]);

  const deleteOrder = (id) => {
    const proceed = window.confirm("Are you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      axios
        .delete(url)
        .then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
          const remainingMyOrders = myOrders.filter(
            (order) => order._id !== id
          );
          setMyOrders(remainingMyOrders);
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
            <th>Ordered Glasses</th>
            <th>Total Cost</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myOrders?.map((order) => (
            <tr key={order._id}>
              <td>{order.title}</td>
              <td>{order.price}</td>
              <td>Processing</td>
              <td>
                <Button onClick={() => deleteOrder(order._id)}>
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

export default MyOrders;
