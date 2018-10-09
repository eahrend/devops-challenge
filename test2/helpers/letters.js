const sid = require('shortid');

exports.reverseIt = string => {
  return string.split('').reverse();
};

exports.randomString = () => {
  return sid.generate();
};
