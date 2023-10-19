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

  module.exports = {
    create
  }