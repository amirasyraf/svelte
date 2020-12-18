module.exports = (req, res) => {
  let string = 'Hello world';
  res.status(200).send(string);
};
