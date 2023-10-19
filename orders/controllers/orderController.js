const Order = require('../models/orders');
const axios = require('axios'); // user to handel http/https request for different ports

const create = async (req, res) => {
    try {
      const newOrder = await Order.create(req.body);
      if (newOrder) {
        return res.status(201).send({ message: "Order Created Successfully" });
      } else {
        return res.status(400).send({ message: "Failed to create Order" });
      }
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  };

  const getAll = async (req, res) => {
    try {
      const orders = await Order.find({});
      if (!orders) {
        return res.send("No orders is available");
      } else {
        return res.send(orders);
      }
    } catch (error) {
      return res.send(error);
    }
  };

//   const getById = async (req, res) => {
//     try {
//       const order = await Order.findById(req.params.id);
//       if (!order) {
//         return res.send("No order is available");
//       } else {
//         const book = axios.get(`http://localhost:8000/books/get/${order.BookId}`);
//         const customer = axios.get(`http://localhost:8001/customer/get/${order.CustomerId}`);
//         return res.send({
//             "_id": order.id,
//             "CustomerId": customer.data,
//             "BookId": book.data,
//             "initialDate": order.initialDate,
//             "deliveryDate": order.deliveryDate
//         });
//       }
//     } catch (error) {
//       return res.send(error);
//     }
//   };

const getById = async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
      if (!order) {
        return res.send("No order is available");
      } else {
        const bookResponse = await axios.get(`http://localhost:8000/books/get/${order.BookId}`);
        const customerResponse = await axios.get(`http://localhost:8001/customer/get/${order.CustomerId}`);

        const book = bookResponse.data.author; 
        const customer = customerResponse.data.name;

        return res.send({
            "_id": order.id,
            "CustomerName": customer,
            "BookTitle": book,
            "initialDate": order.initialDate,
            "deliveryDate": order.deliveryDate
        });
      }
    } catch (error) {
      return res.send(error);
    }
  };





  module.exports = {
    create,
    getAll,
    getById
  }