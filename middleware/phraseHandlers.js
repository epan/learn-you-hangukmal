const phrases = require('../data/phrases');

const getAll = (req, res) => {
  res.json(phrases);
};

const addOne = (phrase) => {
  // TODO
};

const getOneById = (id) => {
  // TODO
};

module.exports = {
  getAll: getAll,
  addOne: addOne,
  getOneById: getOneById
};
