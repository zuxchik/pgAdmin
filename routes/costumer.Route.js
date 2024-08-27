const express = require('express');
const costomer = express.Router();
const costomerController = require("../Controllers/Customer.Controller")

/**
 * @swagger
 * tags:
 *   name: costomers
 *   description: costomer management
 */

/**
 * @swagger
 * /api/createCostomer:
 *   post:
 *     tags: [Users]
 *     summary: Create a new user
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
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
costomer.post('/createCostomer', costomerController.createCustomer);

/**
 * @swagger
 * /api/getCostomer:
 *   get:
 *     tags: [Users]
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 *       500:
 *         description: Server error
 */
costomer.get('/getCostomer', costomerController.getCustomer);

/**
 * @swagger
 * /api/getCostomerBiId/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User details
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
costomer.get('/getCostomerBiId/:id', costomerController.getCustomerBiId);

/**
 * @swagger
 * /updataCustomer/{id}:
 *   put:
 *     tags: [Users]
 *     summary: Update user by ID
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
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
costomer.put('/updataCustomer/:id', costomerController.updataCustomer);

/**
 * @swagger
 * /deletCustomer/{id}:
 *   delete:
 *     tags: [Users]
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
 *         description: User deleted
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
costomer.delete('/deletCustomer/:id', costomerController.deletCustomer);

module.exports = costomer;
