import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import AddGlass from "./addGlass/AddGlass";
import ManageOrders from "./manageOrders/ManageOrders";
import MyOrders from "./myOrders/MyOrders";

const Dashboard = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center m-5 text-info">Dashboard</h2>
      <Tab.Container id="left-tabs-example" defaultActiveKey="my-orders">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="my-orders">My Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="manage-orders">Manage All Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="add-glass">Add New Glass</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="my-orders">
                <MyOrders></MyOrders>
              </Tab.Pane>
              <Tab.Pane eventKey="manage-orders">
                <ManageOrders></ManageOrders>
              </Tab.Pane>
              <Tab.Pane eventKey="add-glass">
                <AddGlass></AddGlass>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  );
};

export default Dashboard;
