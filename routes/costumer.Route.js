const express = require('express');
const customer = express.Router();
const customerController = require("../Controllers/Customer.Controller")

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: costomer management
 */

/**
 * @swagger
 * /api/createCostomer:
 *   post:
 *     tags: [Customer]
 *     summary: Create a new customers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customer created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
customer.post('/createCostomer', customerController.createCustomer);

/**
 * @swagger
 * /api/getCostomer:
 *   get:
 *     tags: [Customer]
 *     summary: Get all Customer
 *     responses:
 *       200:
 *         description: List of Customers
 *       500:
 *         description: Server error
 */
customer.get('/getCostomer', customerController.getCustomer);

/**
 * @swagger
 * /api/getCostomerBiId/{id}:
 *   get:
 *     tags: [Customer]
 *     summary: Get Customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Customer details
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
customer.get('/getCostomerBiId/:id', customerController.getCustomerBiId);

/**
 * @swagger
 * api/updataCustomer/{id}:
 *   put:
 *     tags: [Customer]
 *     summary: Update Customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Customer updated
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
customer.put('/updataCustomer/:id', customerController.updataCustomer);

/**
 * @swagger
 * /deletCustomer/{id}:
 *   delete:
 *     tags: [Customer]
 *     summary: Delete user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       204:
 *         description: Customer deleted
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
customer.delete('/deletCustomer/:id', customerController.deletCustomer);

module.exports = customer;