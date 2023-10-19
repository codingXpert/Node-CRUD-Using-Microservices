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

  module.exports = {
    create
  }
  