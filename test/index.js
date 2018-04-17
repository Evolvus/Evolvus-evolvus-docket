const debug = require("debug")("evolvus-docket.test.db.docket");
const chai = require("chai");
const mongoose = require("mongoose");
var MONGO_DB_URL = process.env.MONGO_DB_URL || "mongodb://localhost/TestDocket";
/*
 ** chaiAsPromised is needed to test promises
 ** it adds the "eventually" property
 **
 ** chai and others do not support async / await
 */
const chaiAsPromised = require("chai-as-promised");

const expect = chai.expect;
chai.use(chaiAsPromised);

const docket = require("../index");

describe("docket model validation", () => {
  before((done) => {
    mongoose.connect(MONGO_DB_URL);
    let connection = mongoose.connection;
    connection.once("open", () => {
      debug("ok got the connection");
      done();
    });
  });
  let docketObject = {
    name: 'LOGIN_EVENT',
    application: 'FLUX-CDA',
    source: 'APPLICATION',
    ipAddress: "193.168.11.115",
    status: "success",
    level: "info",
    createdBy: "meghad",
    details: "User meghad logged into the application Platform",
    eventDateTime: new Date().toISOString(),
    keyDataAsJSON: "keydata"
  };

  it("valid user should validate successfully", (done) => {
    try {
      var res = docket.validate(docketObject);
      expect(res)
        .to.eventually.equal(true)
        .notify(done);
      // if notify is not done the test will fail
      // with timeout
    } catch (e) {
      expect.fail(e, null, `valid docket object should not throw exception: ${e}`);
    }
  });


  it('should save a docket object to database', (done) => {
    try {
      var result = docket.save(docketObject);
      expect(result)
        .to.eventually.have.property('name')
        .to.eql(docketObject.name)
        .notify(done);
    } catch (e) {
      expect.fail(e, null, `saving docket object should not throw exception: ${e}`);
    }
  });
});