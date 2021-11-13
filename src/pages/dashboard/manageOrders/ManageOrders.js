import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Dropdown, Table } from "react-bootstrap";
import { ImBin } from "react-icons/im";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/orders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteOrder = (id) => {
    const proceed = window.confirm("Are you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      axios
        .delete(url)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const remainingAllOrders = allOrders.filter(
              (order) => order._id !== id
            );
            setAllOrders(remainingAllOrders);
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
            <th>Name</th>
            <th>Email</th>
            <th>Glass</th>
            <th>Price</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allOrders?.map((order) => (
            <tr key={order._id}>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.title}</td>
              <td>{order.price}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Pending
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Pending</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Approve</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Delivered</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
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

export default ManageOrders;
