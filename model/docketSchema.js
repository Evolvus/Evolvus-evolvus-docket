/*
 ** JSON Schema representation of the Docket model
 */
module.exports.schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "DocketModel",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "application": {
      "type": "string"
    },
    "source": {
      "type": "string"
    },
    "createdBy": {
      "type": "string"
    },
    "ipAddress": {
      "type": "string"
    },
    "level": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "eventDateTime": {
      "type": "string"
    },
    "keyDataAsJSON": {
      "type": "string"
    },
    "details": {
      "type": "string"
    }
  },
  "required": ["name", "application", "source", "createdBy", "ipAddress", "status", "keyDataAsJSON", "details", "eventDateTime"]

};