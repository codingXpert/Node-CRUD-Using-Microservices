const Customer = require('../models/customer');

const create = async (req, res) => {
    try {
      const newCustomer = await Customer.create(req.body);
      if (newCustomer) {
        return res.status(201).send({ message: "New Customer Created Successfully" });
      } else {
        return res.status(400).send({ message: "Failed to create new customer" });
      }
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  };

  const getAll = async (req, res) => {
    try {
      const customers = await Customer.find({});
      if (!customers) {
        return res.send("No customers is available");
      } else {
        return res.send(customers);
      }
    } catch (error) {
      return res.send(error);
    }
  };

  module.exports = {
    create,
    getAll
  }
  