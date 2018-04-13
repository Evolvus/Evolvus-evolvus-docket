const docketSchema = require("./model/docketSchema").schema;
const docket = require("./db/docket");
const validate = require("jsonschema")
  .validate;


module.exports.validate = (docket) => {
  return new Promise((resolve, reject) => {
    try {
      var res = validate(docket, docketSchema);
      resolve(res.valid);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports.save = (docketObject) => {
  return new Promise((resolve, reject) => {
    try {
      docket.save(docketObject).then((result) => {
        resolve(true);
      }).catch((e) => {
        reject(e);
      });
    } catch (e) {
      reject(e);
    }
  });
};