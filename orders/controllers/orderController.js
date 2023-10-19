const Order = require('../models/orders');

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

  module.exports = {
    create,
    getAll
  }