const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
  const newExpense = new Expense({ ...req.body, user: req.user });
  await newExpense.save();
  res.json(newExpense);
};

exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find({ user: req.user });
  res.json(expenses);
};

exports.deleteExpense = async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: 'Expense Deleted' });
};
