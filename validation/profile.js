const Validation = require("./Validation");
//! Exports
module.exports = function validateProfileData(input) {
  const validateThisInput = new Validation();
  // returning errors, and isvalid after validating input for
  return validateThisInput.checkProfileInput(input);
};
