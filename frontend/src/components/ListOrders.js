import React, {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  Button, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listMyOrders } from "../actions/orderActions";
// import { listMyOrders } from '../actions/orderActions'

function ListOrders() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login?redirect=profile");
    }
    dispatch(listMyOrders());
  }, [dispatch, navigate, userInfo]);

  return (
    <div>
      <h2>My Orders</h2>
      {loadingOrders ? (
        <Loader />
      ) : errorOrders ? (
        <Message variant="danger">{errorOrders}</Message>
      ) : (
        <Table striped responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Delivered</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order.id}`}>
                    <Button className="btn-sm">Details</Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default ListOrders;
