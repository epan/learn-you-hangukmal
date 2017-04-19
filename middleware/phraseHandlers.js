const phrases = require('../data/phrases');

const getAll = (req, res) => {
  res.json(phrases);
};

const addOne = (req, res) => {
  let newPhrase = req.body;
  newPhrase.id = phrases.length;
  phrases.push(newPhrase);
  res.json(newPhrase);
};

const getOneById = (req, res) => {
  let phraseId = req.params.id;
  res.json(phrases[phraseId]);
};

module.exports = {
  getAll: getAll,
  addOne: addOne,
  getOneById: getOneById
};
