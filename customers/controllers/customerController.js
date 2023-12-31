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

  const getById = async (req, res) => {
    try {
      const customers = await Customer.findById(req.params.id);
      if (!customers) {
        return res.send("No customers is available");
      } else {
        return res.send(customers);
      }
    } catch (error) {
      return res.send(error);
    }
  };

  const update = async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      if (!customer) {
        return res.send({ message: "No customer Available By This Id" });
      } else {
        await Customer.updateOne(req.body);
        res.send({ message: "Updated Successfully" });
      }
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  };


  const remove = async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      if (customer) {
        await Customer.deleteOne(customer);
        return res.send({ message: "Deleted Successfully" });
      } else {
        return res.send({ message: "No customer Available By This Id" });
      }
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  };


  module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
  }
  